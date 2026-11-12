// sitemap.js - FIXED VERSION
import { fetchURLs } from '../app/lib/sanity';

const baseURL = 'https://sufianmustafa.com/';

// Define the correct URL mapping for your schema types
const SCHEMA_TYPE_TO_URL_PREFIX = {
    'makemoney': 'ai-learn-earn',
    'aitool': 'ai-tools', 
    'coding': 'ai-code',
    'seo': 'ai-seo',
    'freeResources': 'free-ai-resource' 
};

export default async function sitemap() {
    try {
        // Fetch all posts from Sanity.io
        const posts = await fetchURLs();

        // Map the fetched posts to the sitemap format with correct URL prefixes
        const sitemapEntries = posts.map(post => {
            const urlPrefix = SCHEMA_TYPE_TO_URL_PREFIX[post._type] || post._type;
            
            return {
                url: `${baseURL}/${urlPrefix}/${post.slug}`,
                lastModified: new Date(post._updatedAt || Date.now()),
                changeFrequency: 'weekly',
                priority: 0.7,
            };
        });

        // Add all high-authority static routes
        const staticRoutes = [
            // Homepage
            {
                url: baseURL,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 1.0,
            },
            // High-Ticket Services
            {
                url: `${baseURL}services`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.95,
            },
            {
                url: `${baseURL}services/lionxe-audit`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            {
                url: `${baseURL}services/ai-search-architecture`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            {
                url: `${baseURL}services/fractional-growth-architect`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            // Case Studies & Proof of Execution
            {
                url: `${baseURL}case-studies`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.95,
            },
            {
                url: `${baseURL}case-studies/doitwithai`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            {
                url: `${baseURL}case-studies/enterprise-87-site-audit`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            {
                url: `${baseURL}case-studies/lionxe-framework`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            },
            // Core Identity & Strategy
            {
                url: `${baseURL}about`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: `${baseURL}work`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            },
            {
                url: `${baseURL}skills`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: `${baseURL}gulf-vision`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
            {
                url: `${baseURL}success-journey`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            },
            {
                url: `${baseURL}contact`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.85,
            },
            {
                url: `${baseURL}faq`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
            },
            {
                url: `${baseURL}timeline`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.5,
            },
            {
                url: `${baseURL}insights`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            },
        ];

        // Combine dynamic and static entries
        const allEntries = [...sitemapEntries, ...staticRoutes];
        
        // Remove duplicates and sort by priority
        const uniqueEntries = allEntries.filter((entry, index, self) => 
            index === self.findIndex(e => e.url === entry.url)
        );

        return uniqueEntries.sort((a, b) => b.priority - a.priority);
        
    } catch (error) {
        console.error('Error generating sitemap:', error);
        
        // Return at least static routes if dynamic fetch fails
        return [
            {
                url: baseURL,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 1.0,
            }
        ];
    }
}
