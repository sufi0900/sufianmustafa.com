/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Sparkles,
  BookOpen,
  Scale,
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
  title: "Case Study: The LIONXE™ Quality Standard — Sufian Mustafa",
  description:
    "The philosophy, governing laws, and sequential evaluation logic behind LIONXE™—a proprietary quality standard designed to evaluate whether digital assets are built to survive decades.",
  keywords: [
    "LIONXE Framework Case Study",
    "Digital Quality Standard",
    "Post-Flood Collapse Rule",
    "Weakest Link Axiom",
    "Cost-Indifferent Mandate",
    "Commodity Threshold Law",
    "Sufian Mustafa Framework",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "The LIONXE™ Standard: 4 Gates of Digital Asset Longevity",
    description:
      "A proprietary quality and audit framework with sequential pass/fail logic, governing laws, and a quantitative scoring engine.",
    url: `${getBaseUrl()}/case-studies/lionxe-framework`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "article",
    images: [
      {
        url: generateOGImageURL({
          title: "The LIONXE™ Quality Standard",
          subtitle: "Proprietary Methodology · 4 Sequential Gates · Governing Laws",
          category: "Framework",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "LIONXE Framework Case Study",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/case-studies/lionxe-framework`,
  },
};

const PILLARS = [
  {
    code: "L",
    name: "Logic & Longevity",
    law: "The Post-Flood Collapse Rule",
    lawDesc: "Immediate traffic spikes mean nothing if they lead to future obsolescence. If the lifespan projection trends toward zero after a brief surge, the project is a structural failure.",
    color: "#4D7BFF",
  },
  {
    code: "IO",
    name: "Internal Optimization",
    law: "The Weakest Link Axiom",
    lawDesc: "The overall value of any framework is permanently capped by its worst-executed internal layer. Substandard work cannot be hidden behind a few highly optimized surface features.",
    color: "#5271FF",
  },
  {
    code: "N",
    name: "Non-Negotiable Integrity",
    law: "The Cost-Indifferent Mandate",
    lawDesc: "True integrity only exists when you stick to it even when it costs you. If compliance requires sacrificing immediate short-term revenue, the sacrifice must be made without hesitation.",
    color: "#2FB07A",
  },
  {
    code: "XE",
    name: "Exceptional Distinction",
    law: "The Commodity Threshold Law",
    lawDesc: "If an asset can be easily replaced by a generic competitor or generic AI prompt output, its distinction score is zero. We do not reward basic competence—only exceptional execution.",
    color: "#E3B341",
  },
];

export default function LionxeCaseStudyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "The LIONXE™ Standard: The 4 Non-Negotiable Gates of Compounding Digital Assets",
    description: "The philosophy, governing laws, and sequential evaluation logic behind LIONXE™—a proprietary quality framework for digital assets.",
    author: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
    },
    publisher: {
      "@type": "Person",
      name: "Sufian Mustafa",
    },
    url: `${getBaseUrl()}/case-studies/lionxe-framework`,
    about: {
      "@type": "CreativeWork",
      name: "LIONXE™ Framework",
      url: "https://lionxeframework.com",
    },
  };

  return (
    <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(77,123,255,0.18),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <Link href="/case-studies" className="hover:text-amber-400 transition-colors">Case Studies</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-blue-400">LIONXE™ Framework</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md mb-6">
            <Shield size={14} className="text-blue-400" />
            Proprietary Intellectual Property
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            The LIONXE™ Standard: The 4 Non-Negotiable Gates of Compounding Digital Assets
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Existing audit tools check surface metrics—rankings, backlinks, speed scores. LIONXE™ was created because no industry standard evaluated whether a digital asset is structurally built to survive decades.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="https://lionxeframework.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              Explore Full Framework Doctrine <ArrowUpRight size={16} />
            </a>
            <Link
              href="/services/lionxe-audit"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Book a LIONXE™ Diagnostic Audit →
            </Link>
          </div>
        </header>

        {/* The 4 Gates Cards */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">The Four Governing Pillars & Laws</h2>
          {PILLARS.map((p) => (
            <div
              key={p.code}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 hover:border-blue-500/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-blue-500/20 px-3 py-1 text-xs font-black text-blue-400">
                    Pillar {p.code}
                  </span>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                </div>
                <span className="text-xs font-bold text-amber-400 font-mono">{p.law}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "{p.lawDesc}"
              </p>
            </div>
          ))}
        </div>

        {/* Narrative */}
        <div className="prose prose-invert prose-slate max-w-none space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              1. The Origin Story: Crystallized Through Enterprise Audits
            </h2>
            <p>
              The LIONXE™ Framework was not invented in an academic vacuum. It crystallized during an intense 18-month period of systems research and was stress-tested against real-world enterprise platforms, including an audit of 87 websites comprising 226,200+ indexed URLs.
            </p>
            <p>
              In that enterprise investigation, I observed how brands consistently spend hundreds of thousands of dollars treating symptoms: rewriting title tags, paying for sketchy backlinks, or running minor speed plugins. None of these addressed the core failure: the foundational architecture was mathematically broken.
            </p>
            <p>
              LIONXE™ was created to enforce a <strong>binary sequential gate system</strong>. If an asset fails Gate 1 (Logic & Longevity), evaluating Gate 2, 3, or 4 is completely void.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              2. The Three Operational Modes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">Mode 01</span>
                <h3 className="font-bold text-white text-base mb-2">Audit Mode</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Used on existing platforms to uncover root-cause structural flaws, crawl waste, and technical debt.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">Mode 02</span>
                <h3 className="font-bold text-white text-base mb-2">Architect Mode</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Used when building new platforms (like DoItWithAI.tools) to guarantee zero structural vulnerabilities from day one.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">Mode 03</span>
                <h3 className="font-bold text-white text-base mb-2">Lens Mode</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A high-velocity decision-making heuristic used to evaluate code changes, content investments, and business partnerships.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA for Services */}
        <section className="mt-20 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-900/20 via-slate-900 to-blue-900/20 p-8 sm:p-12 text-center backdrop-blur-xl">
          <span className="text-xs font-black uppercase tracking-widest text-blue-400">Experience the Standard</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Certify Your Platform Against the LIONXE™ Standard
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Commission a LIONXE™ architecture audit to certify your digital properties for multi-year stability and authority compounding.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/services/lionxe-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              Book a LIONXE™ Audit <ChevronRight size={16} />
            </Link>
            <a
              href="https://lionxeframework.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Visit lionxeframework.com <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </div>

      <Script
        id="LionxeCaseStudySchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
