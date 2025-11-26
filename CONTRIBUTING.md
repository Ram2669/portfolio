# Contributing & Development Guide

Thank you for your interest in contributing! This guide explains how to clone, run, and develop the project, plus our workflow for branches and PRs.

## Prerequisites
- Node.js 18+
- npm (comes with Node)
- GitHub account

## Clone & Setup
1) Clone the repo
```bash
git clone https://github.com/Ram2669/portfolio.git
cd portfolio
```
2) Install dependencies
```bash
npm install
```
3) (Optional) Configure EmailJS for the contact form
- Create `.env.local` and add:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Run Locally
```bash
npm run dev
```
- Open http://localhost:3000
- The app uses Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion

## Useful Scripts
- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — lint the project
- `npm run export` — static export to `out/`

## Branching & PRs
- Use short, descriptive branches:
  - `feat/<name>` for features (e.g., `feat/garage-theme`)
  - `fix/<name>` for fixes (e.g., `fix/mobile-spacing`)
  - `docs/<name>` for documentation
- Use conventional-style commit messages when possible:
  - `feat(about): add Iron-Man garage theme`
  - `fix(experience): correct bullet spacing`
  - `docs: add CONTRIBUTING and update README`
- Open PRs against `main`.
- Vercel will attach a Preview URL to the PR for review.

## Deployment
- Merging to `main` triggers a Vercel production deploy automatically.
- Preview builds are created for every PR.

## Where to Edit Content
- About section (including Skills & Certifications):
  - `src/components/About.tsx`
  - Skills and Certifications are simple arrays you can edit.
- Projects:
  - `src/components/Projects.tsx`
  - Follow your preference (no "Live Demo" buttons).
- Global styles & theme tokens:
  - `src/app/globals.css`
  - The About section currently uses an Iron‑Man "garage" (red/gold) theme via the `.theme-garage` scope.
  - To apply the garage palette globally, move the theme tokens to `:root` or wrap higher in the tree.

## Resume Generation (optional)
- HTML/PDF/Word resume files live in `public/`.
- To regenerate PDF/Word outputs:
```bash
node scripts/generate-resume-pdf.js
```
- The PDF script also triggers Word file generation via `scripts/generate-resume-docx.js`.
- Outputs are written back to `public/`.

## Code Style
- TypeScript + React (App Router)
- Tailwind CSS utility-first styling
- Lint with `npm run lint`
- Keep components small and focused; prefer composition over large monoliths

## Security & Secrets
- Do not commit secrets. Use `.env.local` for local development and configure environment variables in Vercel for production.

## Support
If you have questions, open an issue or start a PR with a draft description of your approach.
