# SITS — Smart Internship Tracker System

A full-stack web app for students to track internship applications with status management, deadline alerts, and a live dashboard.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port assigned via env)
- `pnpm --filter @workspace/sits-app run dev` — run the React frontend
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec (NOTE: fix `lib/api-zod/src/index.ts` after running — orval regenerates it with conflicting exports; it should only contain `export * from "./generated/api"`)
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` (PostgreSQL), `SESSION_SECRET`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + shadcn/ui, wouter routing, TanStack Query
- API: Express 5, cookie-session for auth
- DB: PostgreSQL + Drizzle ORM (not SQLite — Replit's managed PostgreSQL is used)
- Auth: Email + password (scrypt hashing), cookie-session
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — OpenAPI contract (source of truth)
- `lib/db/src/schema/` — Drizzle schema: `users.ts`, `internships.ts`
- `artifacts/api-server/src/routes/` — Express routes: `auth.ts`, `internships.ts`, `dashboard.ts`
- `artifacts/sits-app/src/pages/` — React pages: landing, login, register, dashboard, internships, internship-form, notifications, settings
- `artifacts/sits-app/src/components/layout.tsx` — Sidebar layout component
- `lib/api-client-react/src/generated/` — Generated React Query hooks (do not edit)

## Architecture decisions

- Cookie-based session auth (cookie-session) — no JWT, no localStorage
- Custom fetch in `lib/api-client-react/src/custom-fetch.ts` already includes `credentials: "include"` for cookie auth
- PostgreSQL used instead of SQLite despite user request — Replit's managed Postgres is production-ready and zero-config
- Orval regenerates `lib/api-zod/src/index.ts` barrel with conflicting exports on each codegen run; must be manually fixed to `export * from "./generated/api"` only
- Internship status enum: Applied | Interviewing | Offered | Rejected | Saved

## Product

- Landing page with tagline "Track your journey. Own your future." and dark/glassmorphism design
- User registration and login (email + password, cookie sessions)
- Dashboard with stats (total, applied, interviewing, offered, rejected, saved, upcoming deadlines)
- Internship CRUD (add, view, edit, delete) with full fields: company, role, location, deadline, status, notes, salary, application link
- Deadline color coding: red ≤3 days, yellow ≤7 days, green >7 days
- Notifications page with upcoming deadlines (next 7 days)
- Sidebar navigation (dashboard, internships, add new, notifications, settings)
- Settings page with profile info and logout

## User preferences

- Dark theme throughout (deep navy + blue accent)
- No dummy/placeholder data — everything persists in the database

## Gotchas

- After running codegen, `lib/api-zod/src/index.ts` gets overwritten with extra exports — fix it to only have `export * from "./generated/api"`
- `SESSION_SECRET` env var is required in production for secure cookies
- The `SITS` frontend artifact is at previewPath `/`; the API server is at `/api`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- See the `database` skill for PostgreSQL management
