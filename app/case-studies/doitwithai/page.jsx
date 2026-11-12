/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  Globe2,
  CheckCircle2,
  Code2,
  Layers,
  ArrowUpRight,
  ChevronRight,
  Database,
  Search,
  Sparkles,
  Zap,
  BarChart3,
  Cpu,
  FileText,
} from "lucide-react";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://sufianmustafa.com";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

function generateOGImageURL(params) {
  const baseURL = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

export const metadata = {
  title: "Case Study: Engineering DoItWithAI.tools for AI Search — Sufian Mustafa",
  description:
    "How Sufian Mustafa architected DoItWithAI.tools on Next.js 14 and Sanity CMS with 8,000+ word pillar-clusters, 7+ schema types, and Generative Engine Optimization (GEO).",
  keywords: [
    "DoItWithAI Tools Case Study",
    "Generative Engine Optimization GEO",
    "Next.js 14 SEO Architecture",
    "Sanity CMS Architecture",
    "AI Search Visibility Case Study",
    "AEO Strategy",
    "Sufian Mustafa Case Study",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "Engineering DoItWithAI.tools for the AI Search Era",
    description:
      "Deep architectural teardown of a live AI SEO platform built to compound in search value over years.",
    url: `${getBaseUrl()}/case-studies/doitwithai`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "article",
    images: [
      {
        url: generateOGImageURL({
          title: "Engineering DoItWithAI.tools",
          subtitle: "Next.js 14 · Sanity CMS · 8K Word Clusters · GEO/AEO",
          category: "Case Study",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "DoItWithAI Case Study",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/case-studies/doitwithai`,
  },
};

export default function DoItWithAiCaseStudyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Engineering DoItWithAI.tools: The 8,000-Word Pillar-Cluster & GEO Engine",
    description: "Deep dive into building a live Next.js 14 AI SEO platform engineered for long-term compounding authority in AI answer engines.",
    author: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
    },
    publisher: {
      "@type": "Person",
      name: "Sufian Mustafa",
    },
    url: `${getBaseUrl()}/case-studies/doitwithai`,
    about: {
      "@type": "SoftwareApplication",
      name: "Do It With AI Tools",
      url: "https://doitwithai.tools",
      applicationCategory: "BusinessApplication",
    },
  };

  return (
    <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(82,113,255,0.18),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <Link href="/case-studies" className="hover:text-amber-400 transition-colors">Case Studies</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-blue-400">DoItWithAI.tools</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md mb-6">
            <Globe2 size={14} className="text-blue-400" />
            Live Platform Architecture Teardown
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Engineering DoItWithAI.tools: The 8,000-Word Pillar-Cluster & GEO Engine
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Writing about SEO is one thing. Building a live platform that practices it in production—with 8,000+ word articles, 7+ schema types, and pillar-cluster topology—is empirical evidence that cannot be faked.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="https://doitwithai.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              Explore DoItWithAI.tools Live <ArrowUpRight size={16} />
            </a>
            <Link
              href="/services/ai-search-architecture"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Get This Architecture Built For You →
            </Link>
          </div>
        </header>

        {/* Executive Summary Metrics Card */}
        <div className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Average Article Depth</span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400 mt-1 block">8,000+</span>
            <span className="text-[11px] text-slate-500">Words per core pillar</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Schema Deployments</span>
            <span className="text-2xl sm:text-3xl font-black text-blue-400 mt-1 block">7+ Types</span>
            <span className="text-[11px] text-slate-500">Relational JSON-LD</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Core Rendering</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 block">SSR + ISR</span>
            <span className="text-[11px] text-slate-500">Next.js 14 App Router</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Content Backend</span>
            <span className="text-2xl sm:text-3xl font-black text-purple-400 mt-1 block">Sanity CMS</span>
            <span className="text-[11px] text-slate-500">Structured GROQ models</span>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert prose-slate max-w-none space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              1. The Strategic Hypothesis: Building for the Post-Keyword Search Era
            </h2>
            <p>
              In 2024, traditional search engine optimization underwent its most violent inflection since Google's Panda update: the rapid rollout of Google AI Overviews (SGE), Perplexity AI, and ChatGPT Search.
            </p>
            <p>
              Traditional SEO relied on surface tactics: match a 3-word keyword, write a 1,200-word skim-friendly listicle, and acquire rented backlinks. In the AI answer engine paradigm, these tactics are worthless. LLMs do not rank links; they synthesize answers. To be cited by an answer engine, your content must possess three non-negotiable qualities:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>High Information Gain:</strong> Data, frameworks, and benchmarks that do not exist elsewhere on the web.</li>
              <li><strong>Unambiguous Entity Graphs:</strong> Machine-readable JSON-LD schemas mapping exactly who wrote the content, what organization verified it, and what software tools are evaluated.</li>
              <li><strong>Topical Completeness (Pillar-Cluster Topology):</strong> Covering every adjacent subtopic comprehensively so the site is recognized as the ultimate semantic authority.</li>
            </ul>
            <p>
              Instead of merely advising clients on this theory, I spent 18 months in dedicated execution building <strong>DoItWithAI.tools</strong> from scratch to prove this system works.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              2. Technical Stack & Rendering Architecture
            </h2>
            <p>
              Many publishers attempt to build heavy content ecosystems on WordPress or slow monolithic CMS platforms. WordPress sites suffer from plugin bloat, sluggish Server Response Times (TTFB), and inconsistent schema injections that break under search engine scrapers.
            </p>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 my-6 space-y-4">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Code2 size={18} className="text-blue-400" /> The DoItWithAI Architecture Breakdown:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Framework:</strong> Next.js 14 App Router, utilizing Server Components for zero-bundle JavaScript overhead on article reading routes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Rendering Model:</strong> Incremental Static Regeneration (ISR). Critical pillars are pre-rendered at the edge for sub-100ms TTFB, with background revalidation on demand via webhook triggers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>CMS Layer:</strong> Sanity Studio v3. Structured GROQ queries ensure content is modeled as relational data blocks rather than raw unstructured HTML.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Design System:</strong> Tailwind CSS tokens ensuring minimal stylesheet payloads and zero runtime CSS-in-JS performance bottlenecks.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Live Feature Promotion Box */}
          <div className="my-10 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-slate-900 to-blue-950/40 p-8 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Featured Resource Platform</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Explore the Production Assets on DoItWithAI.tools
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Experience the live speed, schema validation, and deep-dive editorial architecture firsthand:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <a
                href="https://doitwithai.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-blue-400/50 transition-colors group"
              >
                <span className="font-bold text-white text-sm block group-hover:text-blue-300">AI Tools Directory →</span>
                <span className="text-xs text-slate-400 mt-1 block">Curated reviews, benchmarks, and comparison breakdowns.</span>
              </a>
              <a
                href="https://doitwithai.tools/author/sufian-mustafa"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-blue-400/50 transition-colors group"
              >
                <span className="font-bold text-white text-sm block group-hover:text-blue-300">Author Entity Profile →</span>
                <span className="text-xs text-slate-400 mt-1 block">Inspect the bidirectional Schema.org sameAs linkage.</span>
              </a>
              <a
                href="https://doitwithai.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-blue-400/50 transition-colors group"
              >
                <span className="font-bold text-white text-sm block group-hover:text-blue-300">Pillar Content Hub →</span>
                <span className="text-xs text-slate-400 mt-1 block">Exhaustive 8,000+ word guides engineered for zero AI detection.</span>
              </a>
            </div>
          </div>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              3. The 7+ Schema.org Deployment Graph
            </h2>
            <p>
              Google’s algorithms and LLM bots rely on Schema.org structured data to contextualize who is speaking and what entities are being referenced. On DoItWithAI.tools, we engineered a modular JSON-LD generation engine that automatically injects 7 interconnected schemas on every major page:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 text-xs">
                <span className="font-bold text-blue-400 block mb-1">1. Organization Schema</span>
                <span className="text-slate-400">Declares legal entity, logos, social profiles, and founder relationship.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 text-xs">
                <span className="font-bold text-blue-400 block mb-1">2. Person (Author) Schema</span>
                <span className="text-slate-400">Links Sufian Mustafa’s MSc degree, HEC credentials, and sufianmustafa.com entity.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 text-xs">
                <span className="font-bold text-blue-400 block mb-1">3. TechArticle & BlogPosting</span>
                <span className="text-slate-400">Specifies word count, speakable sections, reading time, and exact topic entities.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 text-xs">
                <span className="font-bold text-blue-400 block mb-1">4. BreadcrumbList Schema</span>
                <span className="text-slate-400">Maps structural parent-child hierarchy to prevent crawl loops.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 text-xs">
                <span className="font-bold text-blue-400 block mb-1">5. FAQPage Schema</span>
                <span className="text-slate-400">Structured Question-Answer pairs optimized for featured snippets and AI overviews.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 text-xs">
                <span className="font-bold text-blue-400 block mb-1">6. HowTo & VideoObject Schema</span>
                <span className="text-slate-400">Step-by-step technical guides with verified rich snippet eligibility.</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 text-xs sm:col-span-2">
                <span className="font-bold text-blue-400 block mb-1">7. SoftwareApplication Schema</span>
                <span className="text-slate-400">Evaluates reviewed AI tools with structured ratings, operating system compatibility, and pricing models.</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              4. The LIONXE™ Quality Gate Applied to Content Production
            </h2>
            <p>
              Every article published on DoItWithAI.tools must pass the four non-negotiable gates of the LIONXE™ framework before publication:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-300">
              <li><strong>Logic & Longevity (L):</strong> Is this topic evergreen, or will it decay in 6 months? If it lacks multi-year longevity, it is rejected.</li>
              <li><strong>Internal Optimization (IO):</strong> Are all internal links bidirectional? Is the schema complete? Does it load in under 1.2 seconds?</li>
              <li><strong>Non-Negotiable Integrity (N):</strong> Are claims fact-checked? Are tool affiliate relationships disclosed with full transparency?</li>
              <li><strong>Exceptional Distinction (XE):</strong> Is this piece 5x deeper than the top 3 ranking competitors? Does it pass AI detection tests through genuine human domain expertise?</li>
            </ol>
          </section>
        </div>

        {/* Bottom CTA for Services */}
        <section className="mt-20 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-900/20 via-slate-900 to-blue-900/20 p-8 sm:p-12 text-center backdrop-blur-xl">
          <span className="text-xs font-black uppercase tracking-widest text-blue-400">Implement This Architecture</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Want This System Engineered for Your Platform?
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            We help ambitious SaaS companies, media brands, and high-growth founders implement this exact Next.js 14 + Sanity + GEO search architecture.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/services/ai-search-architecture"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              Explore the Architecture Sprint <ChevronRight size={16} />
            </Link>
            <a
              href="https://doitwithai.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Browse DoItWithAI.tools Live <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </div>

      <Script
        id="DoItWithAiCaseStudySchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
