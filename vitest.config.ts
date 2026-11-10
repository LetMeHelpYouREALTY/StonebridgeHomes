import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// Unit tests only exercise plain TypeScript in src/lib, so the Qwik City
// plugins (and their dev-server route evaluation) are left out here.
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
});
