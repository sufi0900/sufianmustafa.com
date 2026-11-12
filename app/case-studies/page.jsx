/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  Globe2,
  Shield,
  FileText,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  BarChart2,
  CheckCircle2,
  Code2,
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
  title: "Case Studies & Proof of Execution — Sufian Mustafa | Growth Systems Architect",
  description:
    "Three empirical proof-of-execution case studies: DoItWithAI.tools (live AI SEO platform), a 15-chapter enterprise audit of an 87-website network, and the proprietary LIONXE™ quality framework.",
  keywords: [
    "Sufian Mustafa Case Studies",
    "DoItWithAI Tools Case Study",
    "Enterprise SEO Audit Case Study",
    "LIONXE Framework",
    "87 Site Network Audit",
    "Technical SEO Proof of Work",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "Case Studies & Proof of Execution — Sufian Mustafa",
    description:
      "Empirical proof: a live AI SEO platform, an 87-site enterprise audit covering 226,200+ URLs, and a proprietary 4-gate quality framework.",
    url: `${getBaseUrl()}/case-studies`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "Case Studies & Proof of Work",
          subtitle: "DoItWithAI · 87-Site Enterprise Audit · LIONXE™",
          category: "Case Studies",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Case Studies — Sufian Mustafa",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/case-studies`,
  },
};

const CASE_STUDIES = [
  {
    slug: "doitwithai",
    badge: "Live Platform & Active Sandbox",
    title: "Engineering DoItWithAI.tools: The 8,000-Word Pillar-Cluster & GEO Engine",
    subtitle: "Solo-building a live AI SEO and tools platform engineered from the ground up for citation dominance in ChatGPT Search, Perplexity, and Google AI Overviews.",
    tagline: "Theory is cheap. We built, operate, and scale a live platform to prove our architecture.",
    color: "#5271FF",
    metrics: [
      { label: "Pillar Depth", value: "8,000+ words" },
      { label: "Schema Types", value: "7+ JSON-LD" },
      { label: "Rendering", value: "Next.js SSR + ISR" },
      { label: "Status", value: "Live & Compounding" },
    ],
    stack: ["Next.js 14", "React", "Sanity CMS", "Tailwind CSS", "JSON-LD", "GROQ"],
    externalUrl: "https://doitwithai.tools",
    internalHref: "/case-studies/doitwithai",
  },
  {
    slug: "enterprise-87-site-audit",
    badge: "Enterprise Diagnostic Teardown",
    title: "Deconstructing an 87-Website Enterprise Network: 226,200 URLs Diagnostic",
    subtitle: "A 15-chapter strategic audit of a US carpet cleaning company's duplicated multi-site network, exposing massive crawl waste and designing a consolidated hub-and-spoke migration.",
    tagline: "How automated multi-site expansion turns into algorithmic self-cannibalization.",
    color: "#E3B341",
    metrics: [
      { label: "Sites Audited", value: "87 Domains" },
      { label: "Indexed URLs", value: "226,200+" },
      { label: "Chapters", value: "15 Chapters" },
      { label: "Social Accounts", value: "261 Audited" },
    ],
    stack: ["Multi-Site Diagnostics", "Crawl Budget Modeling", "Cannibalization Matrix", "Hub-and-Spoke Architecture"],
    internalHref: "/case-studies/enterprise-87-site-audit",
  },
  {
    slug: "lionxe-framework",
    badge: "Proprietary Quality Standard",
    title: "The LIONXE™ Standard: The 4 Non-Negotiable Gates of Compounding Digital Assets",
    subtitle: "A proprietary four-gate quality evaluation framework with sequential pass/fail logic, governing laws, and a quantitative scoring engine.",
    tagline: "Evaluating whether a digital asset is built to survive decades—not just rank today.",
    color: "#4D7BFF",
    metrics: [
      { label: "Sequential Gates", value: "4 Gates" },
      { label: "Governing Laws", value: "4 Defined Laws" },
      { label: "Applied On", value: "87 Enterprise Sites" },
      { label: "Documentation", value: "lionxeframework.com" },
    ],
    stack: ["Sequential Gate Logic", "Audit Scoring Engine", "Quality Architecture", "Original Methodology"],
    externalUrl: "https://lionxeframework.com",
    internalHref: "/case-studies/lionxe-framework",
  },
];

export default function CaseStudiesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies & Proof of Execution — Sufian Mustafa",
    url: `${getBaseUrl()}/case-studies`,
    description: "Three empirical proof-of-execution case studies by Sufian Mustafa.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: CASE_STUDIES.map((cs, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${getBaseUrl()}${cs.internalHref}`,
        name: cs.title,
        description: cs.subtitle,
      })),
    },
  };

  return (
    <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(227,179,65,0.12),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-amber-400">Case Studies</span>
        </nav>

        {/* Header */}
        <header className="mb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md mb-6">
            <Sparkles size={14} className="text-amber-400" />
            Empirical Evidence & Architecture Teardowns
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Proof of execution that{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              cannot be faked.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Anyone can pitch high-ticket SEO or write thought leadership on LinkedIn. Very few can point to a live, solo-built Next.js 14 authority platform, a proprietary auditing standard, and an exhaustive 15-chapter enterprise diagnostic.
          </p>
        </header>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {CASE_STUDIES.map((cs, idx) => (
            <article
              key={cs.slug}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 sm:p-12 hover:border-amber-400/40 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-amber-300 mb-4">
                    <span className="text-slate-400 font-mono">0{idx + 1}</span>
                    <span>·</span>
                    <span>{cs.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight group-hover:text-amber-300 transition-colors">
                    {cs.title}
                  </h2>
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {cs.subtitle}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cs.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4 items-center">
                    <Link
                      href={cs.internalHref}
                      className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
                    >
                      Read Full Case Study <ChevronRight size={16} />
                    </Link>
                    {cs.externalUrl && (
                      <a
                        href={cs.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                      >
                        Visit Platform <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Metrics Box */}
                <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-black/40 p-6 grid grid-cols-2 gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-3">
                      <div className="text-xl sm:text-2xl font-black text-amber-400">{m.value}</div>
                      <div className="text-xs font-medium text-slate-400 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to Services */}
        <section className="mt-24 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-black text-white">Need This Level of Architecture for Your Brand?</h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether diagnosing existing structural flaws or building a new AI search platform from scratch, explore our productized services and advisory retainers.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all"
            >
              Explore Services & Pricing <ChevronRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Inquire Directly
            </Link>
          </div>
        </section>
      </div>

      <Script
        id="CaseStudiesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </main>
  );
}
