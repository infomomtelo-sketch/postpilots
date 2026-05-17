// ============================================================
//  PostPilot — Configuration
//  This file is loaded by auth.html and app.html.
// ============================================================

const POSTPILOT_CONFIG = {

  // ── Supabase ─────────────────────────────────────────────
  supabase: {
    url:     'https://dmemzljerldzeiwqfxzp.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZW16bGplcmxkemVpd3FmeHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NDMxNzgsImV4cCI6MjA5NDIxOTE3OH0.u4FL1mk555dUesVNjF58pXwkQlvvQYQgR5JpcxRtB40',
  },

  // ── Stripe ───────────────────────────────────────────────
  stripe: {
    publishableKey: 'pk_test_51TO7PTPyqn30Gz28vfXOYYRPbEZON255MfZSFkvM6lmRIiVpjR9z969w73RyXdeufmYNj955m65V9WBpSwIP8zTo00QWHH7YpM',
    prices: {
      proMonthly:    'price_1TYApGPyqn30Gz282zlYCEkR',   // $15/mo
      proAnnual:     'price_1TYAyOPyqn30Gz28CQMcQyyh',   // $9/mo billed annually
      agencyMonthly: 'price_1TYAzjPyqn30Gz28vstdma9o',   // $39/mo
      agencyAnnual:  'price_1TYB0vPyqn30Gz28dncDVVx3',   // $19/mo billed annually
    },
    // TODO: replace once found in stripe.com → Settings → Billing → Customer portal → Links
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
