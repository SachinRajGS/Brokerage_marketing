// ============================================================
// submit-lead — public Edge Function for the website lead form.
//
// Deploy (from the project root, after `supabase login` and
// `supabase link --project-ref lkkugjayqsgffntpjwcx`):
//
//   supabase functions deploy submit-lead --no-verify-jwt
//
// --no-verify-jwt makes it callable from the public website.
// It validates input strictly and inserts with the SERVICE ROLE
// key (available automatically inside Edge Functions), so the
// anon key never touches the leads table.
// ============================================================

import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function asTrimmedString(v: unknown, max: number): string | null {
  if (typeof v !== 'string') return null;
  const s = v.trim();
  if (s.length === 0 || s.length > max) return null;
  return s;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  // ---- Validation ------------------------------------------
  const name = asTrimmedString(body.name, 100);
  if (!name) return json({ error: 'Name is required (max 100 chars).' }, 400);

  const phoneRaw = asTrimmedString(body.phone, 16);
  const phoneDigits = phoneRaw?.replace(/[^0-9]/g, '') ?? '';
  if (!phoneRaw || phoneDigits.length < 10 || phoneDigits.length > 12) {
    return json({ error: 'A valid 10–12 digit phone number is required.' }, 400);
  }

  const side = body.side === 'Buy' || body.side === 'Sell' ? body.side : null;
  if (!side) return json({ error: "Side must be 'Buy' or 'Sell'." }, 400);

  const commodity = asTrimmedString(body.commodity, 100);
  if (!commodity) return json({ error: 'Commodity is required.' }, 400);

  let quantity: number | null = null;
  if (body.quantity !== null && body.quantity !== undefined && body.quantity !== '') {
    const q = Number(body.quantity);
    if (!Number.isFinite(q) || q < 0 || q > 1_000_000_000) {
      return json({ error: 'Quantity must be a positive number.' }, 400);
    }
    quantity = q;
  }

  const unit = asTrimmedString(body.unit, 30);
  const price = asTrimmedString(body.price, 50);
  const notes = asTrimmedString(body.notes, 1000);

  // ---- Insert with service role ----------------------------
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const { error } = await supabase.from('leads').insert({
    name,
    phone: phoneRaw,
    side,
    commodity,
    quantity,
    unit,
    price,
    notes,
    status: 'new',
  });

  if (error) {
    console.error('Insert failed:', error.message);
    return json({ error: 'Could not save your requirement. Please try again.' }, 500);
  }

  return json({ ok: true });
});
