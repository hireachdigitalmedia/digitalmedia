import { defineConfig } from 'vitest/config';

/**
 * Root Vitest config that runs every project's tests in one process.
 * Usage: yarn vitest run --config vitest.workspace.ts
 * (Per-project tests are normally run through Nx: `yarn test`.)
 */
export default defineConfig({
  test: {
    projects: ['apps/backend/vitest.config.ts', 'apps/frontend/vite.config.ts'],
  },
});
