import { vercelEdgeAdapter } from '@builder.io/qwik-city/adapters/vercel-edge/vite';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), vercelEdgeAdapter(), tsconfigPaths()],
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.vercel-edge.tsx', '@qwik-city-plan'],
      },
      outDir: '.vercel/output/functions/_qwik-city.func',
    },
    ssr: {
      target: 'webworker',
      noExternal: true,
    },
  };
});
