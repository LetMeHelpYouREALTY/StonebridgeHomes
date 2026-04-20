const fs = require('fs-extra');
const path = require('node:path');

module.exports = [
  {
    hook: 'buildComplete',
    name: 'generateSitemap',
    description: 'Generate XML sitemap',
    run: async ({ routes, settings }) => {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>https://heritagestonebridge.com${route.route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.route === '/' ? '1.0' : '0.8'}</priority>
  </url>
`).join('')}
</urlset>`;
      
      await fs.writeFile(path.join(settings.distDir, 'sitemap.xml'), sitemap);
      
      const robots = `User-agent: *
Allow: /
Sitemap: https://heritagestonebridge.com/sitemap.xml`;
      
      await fs.writeFile(path.join(settings.distDir, 'robots.txt'), robots);
    }
  }
];
