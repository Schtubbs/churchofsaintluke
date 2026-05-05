# churchofsaintluke

> Parish website for the Church of Saint Luke — Mass times, sacraments, faith formation, news, ministries, gallery, giving, and bilingual support.

## What this is

The public website for the parish. The home page composes a hero, the next-Mass band, parish life cards, sponsor logos, and a newsletter prompt. Sub-pages cover the rest of parish operations — sacraments, ministries, faith formation, news, team, contact, and online giving. Content is hardcoded (no CMS); a language toggle is wired in for future bilingual content.

This is one of the few public PoradaLLC repos and the only one that's a parish-facing site rather than a Forteca / Porada business surface.

## Tech stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5.6
- **Linter:** ESLint via `next lint`
- **Deploy:** Vercel — `vercel.json` is just `{ "framework": "nextjs" }`

There's no UI library, no CMS, and no database — it's an intentionally minimal static site.

## Quick start

```sh
npm install
npm run dev   # http://localhost:3000
```

No environment variables are required.

## Repo layout

```
app/
  layout.tsx
  page.tsx              # home: Hero / NextMassBar / TodayCard / MassSection /
                        #       ParishLife / GivingBand / Sponsors / Newsletter
  globals.css
  contact/
  faith-formation/
  gallery/
  giving/
  ministries/
  news/
  our-team/
  sacraments/
  components/
    Hero.tsx
    MassSection.tsx
    NextMassBar.tsx
    TodayCard.tsx
    ParishLife.tsx
    GivingBand.tsx
    Sponsors.tsx
    Newsletter.tsx
    SiteHeader.tsx
    SiteFooter.tsx
    PageHead.tsx
    LangProvider.tsx    # i18n context provider
    LangToggle.tsx      # language switcher
  lib/
public/                 # logo, photography, sponsor logos
```

## Common commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Next dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | `next lint` |

## Updating content

Because there's no CMS, content lives in the components themselves:

| Want to change… | Edit |
| --- | --- |
| Mass schedule | `app/components/MassSection.tsx` (and `NextMassBar.tsx` if the upcoming-Mass logic needs updating) |
| Today's announcement | `app/components/TodayCard.tsx` |
| Parish-life cards on the home page | `app/components/ParishLife.tsx` |
| Sponsor logos | `app/components/Sponsors.tsx` + assets in `public/` |
| Newsletter copy | `app/components/Newsletter.tsx` |
| Sacraments / ministries / news pages | The corresponding `app/<route>/page.tsx` |
| Site header / footer | `app/components/SiteHeader.tsx` / `SiteFooter.tsx` |

For bilingual copy, wrap strings with the `LangProvider` context and switch via `LangToggle`. Translations live alongside their consuming component for now (no central locale file yet).

## Deployment

Vercel auto-builds on push to `main`. There are no env vars to configure.

## Related

- [`docs`](https://github.com/PoradaLLC/docs) — the engineering documentation portal that pulls this README in.

## Operational notes

- Every Mass-time / sacrament / news edit ships through a code change → PR → merge → Vercel auto-deploy. Worth flagging when a non-engineer needs an urgent update.
- The newsletter form is currently a UI-only prompt — there's no backend wired up. If the parish wants to actually capture signups, copy the Resend pattern from `forteca-cleaning` (`src/app/api/contact/route.ts` + `src/lib/email.ts`).
