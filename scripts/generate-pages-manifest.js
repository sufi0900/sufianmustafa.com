// 1. Create: scripts/generate-pages-manifest.js
const fs = require('fs');
const path = require('path');

function generatePagesManifest() {
  const pagesDir = path.join(process.cwd(), 'app');
  const staticPages = [];
  
  // Define your static pages
  const knownStaticPages = [
    { url: '/', title: 'Home — Sufian Mustafa | Growth Systems Architect', priority: 'high' },
    { url: '/services', title: 'Services & Advisory — High-Ticket SEO & Systems Architecture', priority: 'high' },
    { url: '/services/lionxe-audit', title: 'The LIONXE™ Digital Diagnostic & Architecture Audit', priority: 'high' },
    { url: '/services/ai-search-architecture', title: 'Next.js AI-Search (GEO / AEO) & Systems Architecture', priority: 'high' },
    { url: '/services/fractional-growth-architect', title: 'Fractional Growth Systems Architect (GCC & Global)', priority: 'high' },
    { url: '/case-studies', title: 'Case Studies & Proof of Execution', priority: 'high' },
    { url: '/case-studies/doitwithai', title: 'Case Study: Engineering DoItWithAI.tools for AI Search', priority: 'high' },
    { url: '/case-studies/enterprise-87-site-audit', title: 'Case Study: 87-Site Enterprise Audit (226,200 URLs)', priority: 'high' },
    { url: '/case-studies/lionxe-framework', title: 'Case Study: The LIONXE™ Quality Standard', priority: 'high' },
    { url: '/about', title: 'About Sufian Mustafa', priority: 'medium' },
    { url: '/work', title: 'Work & Proof of Execution', priority: 'medium' },
    { url: '/skills', title: 'Skills & Technical Architecture', priority: 'medium' },
    { url: '/gulf-vision', title: 'Gulf Vision — Dubai, UAE & GCC Strategic Direction', priority: 'medium' },
    { url: '/success-journey', title: 'Success Journey & Philosophy', priority: 'medium' },
    { url: '/timeline', title: 'Professional Journey Timeline', priority: 'low' },
    { url: '/insights', title: 'Insights & Systems Architecture', priority: 'medium' },
    { url: '/faq', title: 'Frequently Asked Questions', priority: 'medium' },
    { url: '/contact', title: 'Contact & Select Engagements', priority: 'high' },
    { url: '/privacy', title: 'Privacy Policy', priority: 'low' },
    { url: '/terms', title: 'Terms of Service', priority: 'low' }
  ];

  // Add all static pages to the manifest
  knownStaticPages.forEach(page => {
    staticPages.push({
      url: page.url,
      title: page.title,
      priority: page.priority,
      type: 'static',
      lastModified: new Date().toISOString()
    });
  });

  const manifest = {
    version: '1.0.0',
    generated: new Date().toISOString(),
    static_pages: staticPages,
    total_pages: staticPages.length
  };

  // Write manifest to public directory
  const manifestPath = path.join(process.cwd(), 'public', 'pages-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`✅ Generated pages manifest with ${staticPages.length} static pages`);
}

// Run if called directly
if (require.main === module) {
  generatePagesManifest();
}

module.exports = generatePagesManifest;