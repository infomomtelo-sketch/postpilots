// ============================================================
//  PostPilots — Configuration
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
      proAnnual:     'price_1TYAyOPyqn30Gz28CQMcQyyh',   // $108/yr ($9/mo)
      agencyMonthly: 'price_1TYAzjPyqn30Gz28vstdma9o',   // $39/mo
      agencyAnnual:  'price_1TZP4XPyqn30Gz286KFLrBkW',   // $228/yr ($19/mo) ← UPDATED
    },
    portalUrl: 'https://billing.stripe.com/p/login/YOUR_PORTAL_ID',
  },
  // ── App ──────────────────────────────────────────────────
  app: {
    name:    'PostPilots',
    url:     'https://postpilots.xyz',
    appUrl:  'https://postpilots.xyz/app.html',
    authUrl: 'https://postpilots.xyz/auth.html',
  },
};
// DO NOT put your Anthropic API key here — it lives in
// your Cloudflare Worker environment variable only.
