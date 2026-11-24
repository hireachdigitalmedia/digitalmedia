import { killPort, waitForPortOpen } from '@nx/node/utils';

const host = process.env.HOST ?? 'localhost';
const port = Number(process.env.PORT ?? 8080);

export async function setup() {
  // Nx starts `backend:serve` before this suite (see package.json dependsOn).
  await waitForPortOpen(port, { host });
}

export async function teardown() {
  await killPort(port);
}
