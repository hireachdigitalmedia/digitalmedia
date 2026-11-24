# Reach Digital Media

Monorepo for the **hireachdigitalmedia** website — an [Nx](https://nx.dev) workspace using Yarn 4 workspaces.

| App                | Stack                                             | Dev URL                   | Command            |
| ------------------ | ------------------------------------------------- | ------------------------- | ------------------ |
| `apps/frontend`    | React 19, Vite, MUI, TanStack Query, React Router | http://localhost:3000     | `yarn ui:dev`      |
| `apps/backend`     | NestJS 11 (webpack build)                         | http://localhost:8080/api | `yarn backend:dev` |
| `apps/backend-e2e` | Vitest + axios API tests                          | —                         | `yarn e2e`         |

## Getting started

Requirements: Node.js 22 or 24 (LTS recommended) and Corepack/Yarn.

```bash
yarn install
cp apps/backend/.env.example apps/backend/.env     # already present locally
cp apps/frontend/.env.example apps/frontend/.env

yarn backend:dev   # terminal 1 → http://localhost:8080/api
yarn ui:dev        # terminal 2 → http://localhost:3000
# or both at once:
yarn dev
```

In development the Vite server proxies `/api/*` to the backend, so the frontend always calls relative `/api` URLs.

## Scripts

| Script                                       | What it does                                   |
| -------------------------------------------- | ---------------------------------------------- |
| `yarn ui:dev` / `yarn backend:dev`           | Run one app in watch mode                      |
| `yarn dev`                                   | Run both apps                                  |
| `yarn build`                                 | Production build of both apps (`apps/*/dist`)  |
| `yarn lint` / `yarn typecheck` / `yarn test` | Quality checks across all projects             |
| `yarn e2e`                                   | Start the backend and run API tests against it |
| `yarn format`                                | Prettier                                       |

## Structure

```
.github/workflows/   PR-check, deploy-development, deploy-production
apps/
  backend/src/app/
    common/          config, filters, constants
    features/        one folder per Nest feature module (health, contact, …)
    mail/            MailService (SMTP via nodemailer; logs when SMTP_HOST is empty)
    middlewares/     request logging
  backend-e2e/       API tests
  frontend/src/
    api/             axios client + endpoint functions
    api-hooks/       React Query hooks wrapping api/
    app/             App root + pages
    components/ context/ hooks/ layouts/ providers/ router/ theme/ utils/
docs/                project documentation
packages/            shared libraries (add with `yarn nx g @nx/js:lib packages/<name>`)
terraformfiles/      infrastructure as code
Dockerfile-Backend, Dockerfile-Frontend, nginx.conf
```

## Docker

```bash
docker build -f Dockerfile-Backend -t reach-backend .
docker build -f Dockerfile-Frontend -t reach-frontend .
```

The frontend image serves the SPA with nginx and proxies `/api/` to a host named `backend` on port 8080.
