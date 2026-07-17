-- ============================================================
-- Subbaraju Brokerage — leads table
-- Run this ONCE in your Supabase project:
--   Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 100),
  phone       text not null check (char_length(phone) between 10 and 16),
  side        text not null check (side in ('Buy', 'Sell')),
  commodity   text not null check (char_length(commodity) between 1 and 100),
  quantity    numeric check (quantity is null or quantity >= 0),
  unit        text check (unit is null or char_length(unit) <= 30),
  price       text check (price is null or char_length(price) <= 50),
  notes       text check (notes is null or char_length(notes) <= 1000),
  status      text not null default 'new',
  created_at  timestamptz not null default now()
);

-- Helpful index for your internal dashboard (newest first, filter by status)
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- ------------------------------------------------------------
-- SECURITY: lock the table down.
-- RLS is enabled and NO policies are created, which means the
-- public anon key can neither read nor write this table.
-- Only the service role (used by the submit-lead Edge Function
-- and by your internal dashboard) can access it.
-- ------------------------------------------------------------
alter table public.leads enable row level security;

-- Belt-and-braces: also revoke direct grants from anon/authenticated.
revoke all on table public.leads from anon;
revoke all on table public.leads from authenticated;
