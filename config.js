// ============================================================
//  PostPilot — Configuration
//  Paste your keys here, then push to GitHub.
//  This file is loaded by auth.html and app.html.
// ============================================================

const POSTPILOT_CONFIG = {

  // ── Supabase ─────────────────────────────────────────────
  // From: supabase.com → your project → Settings → API
  supabase: {
    url:     'https://YOUR_PROJECT_ID.supabase.co',   // Project URL
    anonKey: 'YOUR_SUPABASE_ANON_KEY',                // anon / public key
  },

  // ── Stripe ───────────────────────────────────────────────
  // From: stripe.com → Developers → API keys (use live key for prod)
  stripe: {
    publishableKey: 'pk_live_YOUR_STRIPE_PUBLISHABLE_KEY',

    // Price IDs — from stripe.com → Products → your plan → Price ID
    prices: {
      proMonthly:     '// ============================================================
//  PostPilot — Configuration
//  Paste your keys here, then push to GitHub.
//  This file is loaded by auth.html and app.html.
// ============================================================

const POSTPILOT_CONFIG = {

  // ── Supabase ─────────────────────────────────────────────
  // From: supabase.com → your project → Settings → API
  supabase: {
    url:     'https://YOUR_PROJECT_ID.supabase.co',   // Project URL
    anonKey: 'YOUR_SUPABASE_ANON_KEY',                // anon / public key
  },

  // ── Stripe ───────────────────────────────────────────────
  // From: stripe.com → Developers → API keys (use live key for prod)
  stripe: {
    publishableKey: 'pk_live_YOUR_STRIPE_PUBLISHABLE_KEY',

    // Price IDs — from stripe.com → Products → your plan → Price ID
    prices: {
      proMonthly:     'price_YOUR_PRO_MONTHLY_ID',    // $15/mo
      proAnnual:      'price_YOUR_PRO_ANNUAL_ID',     // $9/mo billed annually
      agencyMonthly:  'price_YOUR_AGENCY_MONTHLY_ID', // $39/mo
      agencyAnnual:   'price_YOUR_AGENCY_ANNUAL_ID',  // $19/mo billed annually
    },

    // Your Stripe Customer Portal link (stripe.com → Settings → Billing → Customer portal)
    portalUrl: 'https://billing.stripe.com/p/login/YOUR_PORTAL_ID',
  },

  // ── App ──────────────────────────────────────────────────
  app: {
    name:    'PostPilot',
    url:     'https://postpilot.xyz',
    appUrl:  'https://postpilot.xyz/app.html',
    authUrl: 'https://postpilot.xyz/auth.html',
  },

};

// DO NOT put your Anthropic API key here — it lives in
// your Supabase Edge Function environment variable only.',    // $15/mo
      proAnnual:      'price_YOUR_PRO_ANNUAL_ID',     // $9/mo billed annually
      agencyMonthly:  'price_YOUR_AGENCY_MONTHLY_ID', // $39/mo
      agencyAnnual:   'price_YOUR_AGENCY_ANNUAL_ID',  // $19/mo billed annually
    },

    // Your Stripe Customer Portal link (stripe.com → Settings → Billing → Customer portal)
    portalUrl: 'https://billing.stripe.com/p/login/YOUR_PORTAL_ID',
  },

  // ── App ──────────────────────────────────────────────────
  app: {
    name:    'PostPilot',
    url:     'https://postpilot.xyz',
    appUrl:  'https://postpilot.xyz/app.html',
    authUrl: 'https://postpilot.xyz/auth.html',
  },

};

// DO NOT put your Anthropic API key here — it lives in
// your Supabase Edge Function environment variable only.
