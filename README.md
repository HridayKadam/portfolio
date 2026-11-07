# HridayOS

Device-adaptive portfolio shell inspired by macOS, iOS, and iPadOS. **Design phase only** — all copy and projects are placeholders from `src/config/placeholders.ts`.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Device modes

The shell picks an experience from viewport + user agent. Override for testing:

- `?device=macos` — desktop
- `?device=ios` — iPhone-style
- `?device=ipados` — iPad-style

## Content later

Edit **`src/config/placeholders.ts`** only. App UIs read from that file.

## Legacy static site

The previous HTML notebook build lives in `legacy/`.
