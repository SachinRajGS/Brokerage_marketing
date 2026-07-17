# Subbaraju Brokerage — Website

A fast, SEO-optimized static website (Astro + Tailwind CSS) for Subbaraju Brokerage,
Challakere, with a "Post your requirement" lead form that saves to your Supabase
project and opens a prefilled WhatsApp message.

This guide assumes **no technical background**. Follow it top to bottom once; after
that, updating the site is just editing text files.

---

## What's in this folder

| Path | What it is |
|---|---|
| `src/config.ts` | **Your phone number, address, Supabase keys — edit here** |
| `src/data/commodities.ts` | All commodity page text — edit to change copy |
| `src/pages/` | The pages (home, commodities, how-it-works, about, contact) |
| `supabase/leads-table.sql` | SQL that creates the `leads` table (run once) |
| `supabase/functions/submit-lead/` | The Edge Function that saves form submissions |
| `netlify.toml` | Netlify deploy settings (no changes needed) |
| `public/robots.txt` | Tells Google it may index the site |

---

## Step 1 — Run the site on your computer

1. Install **Node.js**: go to <https://nodejs.org>, download the **LTS** version,
   run the installer, click Next until finished.
2. Open this folder in a terminal: in Windows Explorer, open the
   `Brokerage_marketing` folder, click the address bar, type `cmd`, press Enter.
3. Type `npm install` and press Enter. Wait for it to finish (1–2 minutes).
4. Type `npm run dev` and press Enter.
5. Open <http://localhost:4321> in your browser. You should see the website.
   Press `Ctrl+C` in the terminal to stop it.

---

## Step 2 — Set up Supabase (the leads database)

You already have a Supabase project (`lkkugjayqsgffntpjwcx`). Two things to do:

### 2a. Create the `leads` table

1. Go to <https://supabase.com/dashboard> and open your project.
2. In the left sidebar click **SQL Editor**.
3. Click **New query**.
4. Open the file `supabase/leads-table.sql` from this folder in Notepad,
   copy **everything**, paste it into the query box.
5. Click **Run** (bottom right). You should see "Success. No rows returned".

Security note: the table has Row Level Security enabled with **no policies**, so the
public anon key (which is visible in the website code — that's normal and safe)
**cannot read or write** the leads table. Only the Edge Function and your internal
dashboard (which use the service role key) can.

### 2b. Deploy the `submit-lead` Edge Function

1. In the same terminal (inside this folder), log in to Supabase:
   ```
   npx supabase login
   ```
   A browser window opens — click **Accept**.
2. Link this folder to your project:
   ```
   npx supabase link --project-ref lkkugjayqsgffntpjwcx
   ```
   (If it asks for a database password, it's the one you set when creating the
   Supabase project. You can reset it in Dashboard → Settings → Database.)
3. Deploy the function — **the `--no-verify-jwt` part is required**:
   ```
   npx supabase functions deploy submit-lead --no-verify-jwt
   ```
4. Test it. Paste this into the terminal and press Enter:
   ```
   curl -X POST https://lkkugjayqsgffntpjwcx.supabase.co/functions/v1/submit-lead -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"phone\":\"9845000000\",\"side\":\"Buy\",\"commodity\":\"Rice\",\"quantity\":10,\"unit\":\"Quintal\"}"
   ```
   You should see `{"ok":true}`. Check Dashboard → **Table Editor** → `leads` —
   a test row should be there. You can delete it.

---

## Step 3 — Put the code on GitHub

Netlify rebuilds and republishes your site automatically every time you change the
code — but only if the code lives on GitHub.

1. Create a free account at <https://github.com> (if you don't have one).
2. Download **GitHub Desktop** from <https://desktop.github.com> and install it.
3. Open GitHub Desktop → **File → Add local repository** → choose this folder.
   If it says "not a git repository", click **create a repository** in that same
   message, then click **Create Repository**.
4. Click **Publish repository** (top bar). Untick "Keep this code private" if you
   don't mind it being public (the site is public anyway), then **Publish**.

Later, whenever you edit any file: open GitHub Desktop, write a short summary in
the box (e.g. "updated rice page"), click **Commit to main**, then **Push origin**.
Netlify redeploys automatically within a minute or two.

---

## Step 4 — Deploy on Netlify (free)

1. Go to <https://app.netlify.com> and sign up — choose **Sign up with GitHub**.
2. Click **Add new site → Import an existing project → GitHub**.
3. Authorize Netlify, then pick your `Brokerage_marketing` repository.
4. Netlify reads `netlify.toml` automatically — the build command and publish
   folder are already filled in. Just click **Deploy**.
5. Wait ~2 minutes. You'll get a temporary address like
   `https://random-name-12345.netlify.app`. Open it — your site is live.

---

## Step 5 — Buy a cheap domain and connect it

**Recommendation: `subbarajubrokerage.in`** (or `.co.in`). Why:

- `.in` domains are among the cheapest — typically **₹300–700 for the first year**
  (GoDaddy has listed .in at ~₹599 first year; Hostinger and Namecheap run frequent
  promos, sometimes as low as ₹99–299 first year).
- Watch the **renewal price** (year 2 onward), not just the first-year offer —
  ₹700–900/yr renewal is normal for .in.
- `.in` also signals "Indian business" to your customers.
- Don't overpay for a keyword domain like `ricebrokerkarnataka.com` — exact-match
  domains give almost no Google ranking boost nowadays. Your page content does the
  ranking; the domain should just be your brand name.

**To buy:** go to Hostinger, Namecheap or GoDaddy, search `subbarajubrokerage.in`,
add to cart for **1 year only** (skip all add-ons — you don't need hosting, email
add-ons or "SEO tools"; privacy protection is usually free), and pay.

**To connect it to Netlify:**

1. In Netlify: your site → **Domain management** → **Add a domain** → type
   `subbarajubrokerage.in` → **Verify** → **Add domain**.
2. Netlify shows you two **nameservers** (like `dns1.p03.nsone.net`).
3. In your domain registrar's control panel, find **Nameservers** (often under
   DNS settings) → choose **Custom nameservers** → paste Netlify's two → Save.
4. Wait up to a few hours. Netlify's Domain management page will show green ticks
   and issue a free **HTTPS certificate** automatically.

**Then update two files** (find-and-replace `subbarajubrokerage.in` if you bought a
different name):

- `astro.config.mjs` — the `SITE_URL` line at the top
- `public/robots.txt` — the Sitemap line

Commit and push (Step 3) so Netlify redeploys with correct sitemap/canonical URLs.

---

## Step 6 — Get on Google (Search Console)

1. Go to <https://search.google.com/search-console> and sign in with your Google
   account.
2. Click **Add property** → choose the **Domain** option → type
   `subbarajubrokerage.in` → **Continue**.
3. Google shows a **TXT record** to prove you own the domain. Copy it.
4. In Netlify: **Domain management → DNS records (or Netlify DNS) → Add a record** →
   Type `TXT`, Name `@`, Value = the string Google gave you → Save.
5. Back in Search Console click **Verify** (if it fails, wait 30 minutes and retry).
6. Once verified: left sidebar → **Sitemaps** → enter `sitemap-index.xml` →
   **Submit**.
7. Also use **URL Inspection** (top bar): paste your homepage URL → **Request
   indexing**. Do the same for `/commodities/` and one or two commodity pages.

Google typically starts showing the site within a few days to a few weeks. Ranking
for terms like "rice broker Challakere" improves over weeks as Google trusts the
site.

**Strongly recommended bonus:** create a free **Google Business Profile**
(<https://business.google.com>) for "Subbaraju Brokerage, Challakere" with your
phone number and category "Commodity broker" / "Agricultural service". For local
searches like "groundnut broker Challakere", the Business Profile often appears
*above* normal results and drives phone calls directly.

---

## Where do the leads go?

Every form submission:

1. Is saved to your Supabase `leads` table (status `new`) — review them in your
   internal dashboard, and
2. Opens WhatsApp on the visitor's phone with the requirement pre-filled, addressed
   to +91 98452 22718 — so even if they don't press send, you have the database
   copy; if Supabase is ever unreachable, you still get the WhatsApp message.

---

## Everyday edits

| To change… | Edit… |
|---|---|
| Phone, WhatsApp, email, address | `src/config.ts` |
| Commodity descriptions / add a commodity | `src/data/commodities.ts` (copy an existing block; a new page + sitemap entry is generated automatically) |
| Home page sections | `src/pages/index.astro` |
| About / How it works text | `src/pages/about.astro`, `src/pages/how-it-works.astro` |

After editing: commit + push in GitHub Desktop (Step 3). Netlify redeploys
automatically.

Personalize `src/pages/about.astro` — add your actual years in the trade, family
history, GST/APMC license details if you have them. Real specifics build trust and
help SEO.
