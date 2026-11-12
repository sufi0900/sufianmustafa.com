/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sufianmustafa.com',
  generateRobotsTxt: false, // We maintain dedicated custom robots.txt in app/robots.txt and public/robots.txt
  sitemapSize: 5000,
  outDir: './public',
  exclude: ['/admin', '/admin/*', '/api/*', '/studio', '/studio/*'],
  transform: async (config, path) => {
    // Custom priority mapping
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/case-studies')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/contact') {
      priority = 0.85;
      changefreq = 'monthly';
    } else if (path === '/about' || path === '/work' || path === '/skills' || path === '/gulf-vision') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
