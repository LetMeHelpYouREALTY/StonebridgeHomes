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
          // Canonical production origin for SSG sitemap.xml + absolute URLs
          origin: 'https://heritagestonebridge.com',
          // Endpoint routes own GSC sitemaps (sitemap.xml index + sitemap-pages.xml)
          sitemapOutFile: null,
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
