import { vercelEdgeAdapter } from '@builder.io/qwik-city/adapters/vercel-edge/vite';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      vercelEdgeAdapter({
        target: 'node',
        ssg: {
          include: ['/*'],
          origin: 'https://stonebridge-homes.vercel.app',
        },
      }),
      tsconfigPaths(),
    ],
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.vercel-edge.tsx', '@qwik-city-plan'],
      },
      outDir: '.vercel/output/functions/_qwik-city.func',
    },
    ssr: {
      target: 'node',
      noExternal: true,
    },
  };
});
