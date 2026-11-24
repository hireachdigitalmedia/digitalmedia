// Written as CommonJS because the backend package is CommonJS (webpack/Nest build).
type ViteUserConfig = import('vitest/config').ViteUserConfig;

const config: ViteUserConfig = {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/backend',
  test: {
    name: 'backend',
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.ts'],
    passWithNoTests: true,
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8',
    },
  },
};

module.exports = config;
