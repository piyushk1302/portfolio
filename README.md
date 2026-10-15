# Piyush Kumar — Portfolio

React 19 + TypeScript (strict) + Tailwind CSS 3 + Framer Motion + Lucide, built with Vite.

## Commands
```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
```

## Where to edit
- `src/data/content.ts` — ALL personal content: projects, experience, skills, links, avatar, resume path.
  - Add `links: { repo: "https://…", demo: "https://…" }` to a project and the buttons appear.
  - Put a photo in `public/` and set `ME.avatar = "/avatar.jpg"` to replace the cartoon.
  - Replace `public/Piyush_Kumar_Resume.pdf` to update the Resume button.
- `src/components/` — Hero, Stickers, Avatar, Marquee, Timeline sections, ProjectModal, Dock, LogoPop.
- `src/hooks/` — typing, heading scramble, motion toggle, hash routing, active section, spotlight.
- `src/data/logos.ts` — tech logo paths (from the open-source simple-icons set).

## Deploy (Vercel)
Push to GitHub, import the repo in Vercel (framework: Vite, build `npm run build`, output `dist`). Add your domain in project settings.

## Not included yet
- ESLint/Prettier config, sitemap.xml and canonical URL (need your final domain), social preview image, screenshots.
