# Noir Barbershop — Next.js 14

A dark, minimalistic barbershop website built with Next.js 14, TypeScript, and Tailwind CSS. Features modern typography and a clean layout.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next/font (Inter + Space Grotesk)

## Getting Started

1. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

2. Run the development server

```bash
npm run dev
```

3. Open the app

Visit http://localhost:3000

## Project Structure

- `app/` — App Router pages and global layout
- `components/` — Reusable UI components
- `tailwind.config.ts` — Tailwind theme configuration (dark theme)
- `app/globals.css` — Tailwind layers and global styles

## Customization

- Update copy in `app/page.tsx`
- Adjust colors in `tailwind.config.ts` under `theme.extend.colors`
- Replace placeholder links in `components/Footer.tsx` and header nav
- Add real booking link in `components/BookingCTA.tsx`

## Production

```bash
npm run build
npm run start
```

