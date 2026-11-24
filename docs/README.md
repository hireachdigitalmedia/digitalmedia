# Documentation

Project documentation lives here: architecture notes, API contracts, runbooks and decisions.

## API (backend, prefix `/api`)

| Method | Path           | Description                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------- |
| GET    | `/api`         | API name and version                                                              |
| GET    | `/api/health`  | Liveness check                                                                    |
| POST   | `/api/contact` | Contact form submission (`name`, `email`, `message`, optional `phone`, `company`) |

## Adding a backend feature

1. Create `apps/backend/src/app/features/<name>/` with `<name>.module.ts`, controller, service and `dto/`.
2. Add the module to `featureModules` in `apps/backend/src/app/features/index.ts`.

## Adding a frontend page

1. Create the page in `apps/frontend/src/app/pages/` and export it from `index.ts`.
2. Add the path to `router/routes.ts` and the route to `router/index.tsx`.
3. Put HTTP calls in `src/api/` and wrap them with React Query hooks in `src/api-hooks/`.
