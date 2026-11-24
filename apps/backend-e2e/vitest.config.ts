import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'backend-e2e',
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts'],
    globalSetup: ['src/support/global-setup.ts'],
    fileParallelism: false,
  },
});
