# PostPilot — Grow Your Network on Autopilot

> Social media auto-posting SaaS. Schedule, generate, and post to every platform — powered by Claude Sonnet 4.6 AI.

🌐 **Live:** [postpilot.xyz](https://postpilot.xyz)

---

## 📁 Project structure

```
postpilots-xyz/
├── index.html        ← Landing page (marketing site)
├── auth.html         ← Sign in / Sign up + subscription flow
├── app.html          ← Full SaaS dashboard
├── README.md
├── .gitignore
└── package.json      ← For future backend (Node/Express/Supabase)
```

---

## 🚀 Pages

### `index.html` — Landing page
- Hero with animated floating cards
- "How it works" 3-step section
- Features grid + live post queue preview
- Stats section
- Pricing (Free / Pro $9 / Agency $19)
- CTA → links to `auth.html`

### `auth.html` — Auth + subscription flow
- **Google OAuth** sign-in button
- **Apple Sign In** button
- Email / password (sign in + sign up with password strength meter)
- Plan picker with annual/monthly toggle (40% savings)
- Checkout with card, Google Pay, Apple Pay
- Promo codes: `LAUNCH50`, `POSTPILOT`, `SAVE20`
- Confetti success screen → links to `app.html`

### `app.html` — SaaS dashboard
- **Compose** — platform picker, text editor, tone selector, live preview
- **AI Writer** — powered by Claude Sonnet 4.6, generates 3 caption variations
- **Queue** — full post queue with filter, edit, clone, delete
- **Analytics** — Chart.js follower growth, per-platform breakdown
- **Accounts** — connect/disconnect 9 social platforms

---

## 🔑 Platforms supported

| Platform   | Auto-post | Analytics | Status  |
|------------|-----------|-----------|---------|
| LinkedIn   | ✅        | ✅        | Ready   |
| X/Twitter  | ✅        | ✅        | Ready   |
| Instagram  | ✅        | ✅        | Ready   |
| TikTok     | ✅        | —         | Connect |
| Facebook   | ✅        | —         | Connect |
| Reddit     | ✅        | —         | Connect |
| YouTube    | ✅        | —         | Connect |
| Bluesky    | ✅        | —         | Connect |
| Threads    | ✅        | —         | Connect |

---

## 🤖 AI features (Claude Sonnet 4.6)

The AI caption writer calls `claude-sonnet-4-6` directly from the browser:

```js
const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'claude-sonnet-4-6',
    max_tokens: 1000,
    system: '...social media expert prompt...',
    messages: [{ role: 'user', content: `Topic: ${topic}` }]
  })
});
```

> ⚠️ For production: move the API call to a backend to protect your Anthropic API key.

---

## 💰 Pricing

| Plan     | Monthly | Annual (–40%) | Trial  |
|----------|---------|---------------|--------|
| Starter  | $0      | $0            | Free   |
| Pro      | $15/mo  | **$9/mo**     | 7 days |
| Agency   | $39/mo  | **$19/mo**    | 7 days |

---

## 🛠️ Quick start

### Option 1 — Static (no backend needed)

Just open `index.html` in a browser or deploy to any static host:

```bash
git clone https://github.com/infomomtelo-sketch/postpilots-xyz
cd postpilots-xyz

# Open locally
open index.html

# Or serve with npx
npx serve .
```

### Option 2 — Deploy to Vercel (1 command)

```bash
npx vercel --prod
```

### Option 3 — Deploy to Netlify

```bash
npx netlify deploy --prod --dir .
```

---

## 🔒 Production checklist

- [ ] Move Anthropic API key to backend (Supabase Edge Function / Express)
- [ ] Implement real Google OAuth via `@react-oauth/google` or Supabase Auth
- [ ] Implement real Apple Sign In via Supabase Auth
- [ ] Integrate Stripe for real payments (`stripe.com/docs`)
- [ ] Connect social media APIs:
  - LinkedIn: `api.linkedin.com`
  - Twitter/X: `api.twitter.com/2`
  - Instagram: Meta Graph API
  - TikTok: `open-api.tiktok.com`
- [ ] Add cron jobs for scheduled posting (Supabase cron / Upstash QStash)
- [ ] Set up a database (Supabase / PlanetScale) for users, posts, schedules

---

## 🧱 Recommended tech stack (to scale)

```
Frontend:   HTML/CSS/JS (current) → React + Vite
Backend:    Supabase (auth + DB + edge functions)
Payments:   Stripe Billing
AI:         Anthropic Claude Sonnet 4.6
Scheduling: Upstash QStash
Hosting:    Vercel
```

---

## 📦 Environment variables (future backend)

```env
ANTHROPIC_API_KEY=sk-ant-...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
SUPABASE_URL=https://....supabase.co
SUPABASE_ANON_KEY=...
```

---

## 📄 License

MIT — built with ❤️ using Claude Sonnet 4.6
