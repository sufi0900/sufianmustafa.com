/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  Sparkles,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  ChevronRight,
  Globe2,
  Code2,
  Layers,
  Database,
  Search,
  Zap,
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
  title: "Next.js AI-Search (GEO / AEO) & Systems Architecture — Sufian Mustafa",
  description:
    "A 3–6 week engineering sprint building high-performance Next.js 14 platforms optimized for citations inside ChatGPT Search, Perplexity, and Google AI Overviews.",
  keywords: [
    "GEO Generative Engine Optimization",
    "AEO Answer Engine Optimization",
    "Next.js SEO Architecture",
    "AI Search Systems",
    "Sanity CMS Architecture",
    "DoItWithAI Architecture",
    "Sufian Mustafa AI Search",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "Next.js AI-Search (GEO / AEO) & Systems Architecture",
    description:
      "Modernize your web infrastructure for the AI-search era. Next.js 14, Sanity CMS, 7+ JSON-LD schemas, and pillar-cluster topology.",
    url: `${getBaseUrl()}/services/ai-search-architecture`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "AI-Search & Systems Architecture",
          subtitle: "Next.js 14 · GEO / AEO · Sanity CMS · Entity Schemas",
          category: "Engineering",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "AI Search & Next.js Architecture",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/services/ai-search-architecture`,
  },
};

const SPRINT_MODULES = [
  {
    step: "Phase 1",
    title: "Next.js 14 App Router & Rendering Engine",
    desc: "Architecting server components, edge caching, and incremental static regeneration (ISR) to achieve sub-second TTFB and near-perfect Core Web Vitals.",
    deliverables: [
      "SSR + ISR dynamic route structure eliminating client-side rendering waterfalls",
      "Core Web Vitals tuning (LCP < 1.2s, CLS < 0.05, INP < 150ms)",
      "Automated edge image optimization and lightweight font preloading",
    ],
  },
  {
    step: "Phase 2",
    title: "Sanity CMS Structured Content Modeling",
    desc: "Decoupling content authoring from presentation logic with a custom Sanity Studio tailored for semantic entity clustering.",
    deliverables: [
      "Custom GROQ schemas engineered for relational cross-referencing",
      "Dynamic schema generator embedding valid JSON-LD straight into server headers",
      "Real-time visual content previews for editorial teams",
    ],
  },
  {
    step: "Phase 3",
    title: "GEO & AEO Citation Engineering",
    desc: "Structuring content specifically for extraction by Large Language Models (ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews).",
    deliverables: [
      "Information Gain analysis ensuring content has unique proprietary data points",
      "Semantic Q&A answer-engine formatting and speakable block specs",
      "Citation-ready structured tables, benchmarks, and entity definitions",
    ],
  },
  {
    step: "Phase 4",
    title: "Pillar-Cluster Topology & 8,000+ Word Depth Protocols",
    desc: "Implementing the exact editorial and topological frameworks that power our live platform, DoItWithAI.tools.",
    deliverables: [
      "Semantic hub-and-spoke internal linking matrix with zero dead ends",
      "Zero-AI-detection human-AI hybrid editorial workflows",
      "Automated XML sitemap splitting and indexation verification",
    ],
  },
];

export default function AiSearchArchitecturePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js AI-Search (GEO / AEO) & Systems Architecture",
    provider: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
      jobTitle: "Growth Systems Architect",
    },
    description: "A 3-6 week engineering sprint building high-performance Next.js 14 platforms optimized for citations inside ChatGPT Search, Perplexity, and Google AI Overviews.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "8500",
      description: "Fixed scope implementation sprint ($5,000 - $12,000)",
    },
    url: `${getBaseUrl()}/services/ai-search-architecture`,
  };

  return (
    <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(227,179,65,0.18),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-amber-400">AI-Search Architecture</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md mb-6">
            <Cpu size={14} className="text-amber-400" />
            Full-Stack Modernization Sprint
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Next.js AI-Search (GEO / AEO) & Systems Architecture
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Google search is evolving into answer engines. In this 3–6 week sprint, we rebuild or retrofit your platform so that LLMs (ChatGPT, Perplexity, Google SGE) consistently cite your brand as the primary source of truth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-3">
              <span className="text-xs text-slate-400 font-semibold block">Investment</span>
              <span className="text-2xl font-black text-amber-400">$5,000 – $12,000</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-3">
              <span className="text-xs text-slate-400 font-semibold block">Cadence</span>
              <span className="text-2xl font-black text-white">3–6 Week Sprint</span>
            </div>
            <Link
              href="/contact?service=ai-search-architecture"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              Book Architecture Discovery <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        {/* Living Proof Card */}
        <section className="mb-20 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">Proof in Production</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                The Living Blueprint: DoItWithAI.tools
              </h2>
              <p className="mt-3 text-slate-300 text-sm max-w-2xl leading-relaxed">
                This exact engineering architecture was designed, deployed, and scaled on our platform <strong>DoItWithAI.tools</strong>. It runs on Next.js 14 App Router, Sanity CMS, 7+ relational Schema types, and 8,000+ word pillar clusters designed to dominate zero-click AI searches.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <a
                href="https://doitwithai.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300 transition-colors shadow-lg"
              >
                Inspect Live Platform <Globe2 size={16} />
              </a>
              <Link
                href="/case-studies/doitwithai"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Read Architectural Teardown →
              </Link>
            </div>
          </div>
        </section>

        {/* 4 Phases Breakdown */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">Sprint Architecture</span>
            <h2 className="text-3xl font-black text-white mt-1">The 4 Implementation Phases</h2>
            <p className="text-slate-400 text-sm mt-2">
              From low-level server-rendering performance to high-level AI citation schemas, we build an interconnected growth system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPRINT_MODULES.map((m) => (
              <div
                key={m.step}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-lg bg-amber-400/10 px-3 py-1 text-xs font-black text-amber-300 border border-amber-400/20">
                    {m.step}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white leading-snug">{m.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{m.desc}</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">Key Outputs:</span>
                  <ul className="space-y-2.5">
                    {m.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-3xl border border-amber-400/30 bg-amber-950/20 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-black text-white">Ready to Future-Proof Your Web Architecture?</h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
            Don't get left behind as AI Overviews and answer engines capture traditional organic clicks. Let's engineer your platform to become the definitive source.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?service=ai-search-architecture"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/30 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              Inquire About Next Available Sprint <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      <Script
        id="AiSearchArchitectureSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </main>
  );
}
