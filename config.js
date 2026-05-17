// ============================================================
//  PostPilot — Configuration
//  Paste your keys here, then push to GitHub.
//  This file is loaded by auth.html and app.html.
// ============================================================

const POSTPILOT_CONFIG = {

  // ── Supabase ─────────────────────────────────────────────
  // From: supabase.com → your project → Settings → API
  supabase: {
    url:     'https://dmemzljerldzeiwqfxzp.supabase.co',   // Project URL
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZW16bGplcmxkemVpd3FmeHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NDMxNzgsImV4cCI6MjA5NDIxOTE3OH0.u4FL1mk555dUesVNjF58pXwkQlvvQYQgR5JpcxRtB40',                // anon / public key
  },

  // ── Stripe ───────────────────────────────────────────────
  // From: stripe.com → Developers → API keys (use live key for prod)
  stripe: {
    publishableKey: 'pk_test_51TO7PTPyqn30Gz28vfXOYYRPbEZON255MfZSFkvM6lmRIiVpjR9z969w73RyXdeufmYNj955m65V9WBpSwIP8zTo00QWHH7YpM',

    // Price IDs — from stripe.com → Products → your plan → Price ID
    prices: {
      proMonthly:     'prod_UXFJBCqsFbzC57',    // $15/mo
      proAnnual:      'prod_UXFTXfL4gXQYDU',     // $9/mo billed annually
      agencyMonthly:  'prod_UXFULbDtwvXGbl', // $39/mo
      agencyAnnual:   'prod_UXFVk9KK1GhQ5h',  // $19/mo billed annually
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
