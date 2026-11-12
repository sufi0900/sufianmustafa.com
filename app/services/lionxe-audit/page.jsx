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
  FileText,
  BarChart2,
  Layers,
  Sparkles,
  Zap,
  Globe2,
  HelpCircle,
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
  title: "The LIONXE™ Digital Diagnostic & Architecture Audit — Sufian Mustafa",
  description:
    "An elite 15-point technical SEO and digital architecture audit designed to eliminate crawl waste, indexation bottlenecks, and structural cannibalization.",
  keywords: [
    "LIONXE Audit",
    "Enterprise Technical SEO Audit",
    "Digital Architecture Diagnostic",
    "Crawl Budget Optimization",
    "Multi-Site Cannibalization Audit",
    "Schema.org Architecture Audit",
    "Sufian Mustafa Audit",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "The LIONXE™ Digital Diagnostic & Architecture Audit",
    description:
      "A deep multi-layer diagnostic certified against the 4 non-negotiable gates of the LIONXE™ quality standard.",
    url: `${getBaseUrl()}/services/lionxe-audit`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "LIONXE™ Digital Diagnostic",
          subtitle: "Enterprise Technical SEO & Architecture Audit",
          category: "Audit",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "LIONXE Digital Diagnostic",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/services/lionxe-audit`,
  },
};

const AUDIT_GATES = [
  {
    gate: "Gate 1",
    name: "Logic & Longevity (L)",
    focus: "Root Architecture & Sustainability",
    items: [
      "Evaluation of domain structure (single hub vs. fragmented subdomains vs. multi-site)",
      "Lifespan projection: Is the site built to survive algorithm updates over a 5-year horizon?",
      "Crawl budget analysis: Identifying infinite crawl loops, faceted navigation leaks, and wasteful parameter traps",
      "URL taxonomy & breadcrumb hierarchy validation",
    ],
  },
  {
    gate: "Gate 2",
    name: "Internal Optimization (IO)",
    focus: "Completeness of the Underlying Layers",
    items: [
      "Rendering performance & hydration efficiency (Next.js SSR/ISR, React server components)",
      "Deep Core Web Vitals profiling (LCP, INP, CLS under real user conditions)",
      "Multi-domain keyword cannibalization mapping (identifying self-competing pages)",
      "Schema.org entity graph integrity (7+ JSON-LD types with valid bidirectional relational IDs)",
    ],
  },
  {
    gate: "Gate 3",
    name: "Non-Negotiable Integrity (N)",
    focus: "Compliance, Trust & Ethical Hygiene",
    items: [
      "Google Search Essentials compliance & penalty risk mitigation",
      "Verification of claim accuracy and E-E-A-T source attribution",
      "Analysis of internal outbound links, affiliate disclosures, and nofollow/sponsored flags",
      "Detection of manipulative keyword stuffing and low-quality programmatic bloat",
    ],
  },
  {
    gate: "Gate 4",
    name: "Exceptional Distinction (XE)",
    focus: "Competitive Moat & AI Search Citation Eligibility",
    items: [
      "Generative Engine Optimization (GEO) readiness for ChatGPT, Perplexity, and Google AI Overviews",
      "Topical depth & semantic cluster completeness vs. the top 3 market competitors",
      "Information gain scoring: Does the content offer unique data or merely regurgitate competitor copy?",
      "Actionable 90-day structural remediation roadmap prioritized by commercial impact",
    ],
  },
];

export default function LionxeAuditPage() {
  const auditSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "The LIONXE™ Digital Diagnostic & Architecture Audit",
    provider: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
      jobTitle: "Growth Systems Architect",
    },
    description: "An enterprise 15-point technical SEO and digital architecture audit certified against the 4 gates of the LIONXE™ quality framework.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "2500",
      description: "Fixed scope diagnostic engagement ($1,500 - $3,500 depending on URL scale)",
    },
    url: `${getBaseUrl()}/services/lionxe-audit`,
  };

  return (
    <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(77,123,255,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-blue-400">LIONXE™ Audit</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md mb-6">
            <Shield size={14} className="text-blue-400" />
            Proprietary Architecture Diagnostic
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            The LIONXE™ Digital Diagnostic & Architecture Audit
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            A comprehensive, root-cause diagnostic engineered to eliminate crawl waste, indexation bottlenecks, and multi-domain cannibalization. Applied at enterprise scale in our 15-chapter audit of an 87-site network.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-3">
              <span className="text-xs text-slate-400 font-semibold block">Investment</span>
              <span className="text-2xl font-black text-white">$1,500 – $3,500</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-3">
              <span className="text-xs text-slate-400 font-semibold block">Turnaround</span>
              <span className="text-2xl font-black text-amber-400">7–10 Business Days</span>
            </div>
            <Link
              href="/contact?service=lionxe-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              Request Diagnostic Slot <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        {/* What You Receive */}
        <section className="mb-20 rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">What You Receive in the Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white text-base">The 15-Point Written Diagnostic</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Detailed analysis covering codebase rendering, crawl budget waste, orphaned paths, metadata inconsistencies, and server response headers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white text-base">Cannibalization & Overlap Matrix</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  A comprehensive mapping of pages and subdomains competing against each other for identical commercial search intent.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white text-base">Custom JSON-LD Schema Blueprints</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Ready-to-deploy structured data code snippets (Organization, Person, Service, Article, FAQ) with validated entity linking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white text-base">45-Minute Executive Video Walkthrough</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  A high-level video presentation explaining the diagnostic findings and walking your technical and leadership team through the 90-day fix roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Gates Breakdown */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400">Evaluation Logic</span>
            <h2 className="text-3xl font-black text-white mt-1">The Four Sequential Audit Gates</h2>
            <p className="text-slate-400 text-sm mt-2">
              Unlike generic audit checklists that give partial scores, LIONXE™ requires passing each foundational gate before proceeding to the next.
            </p>
          </div>

          <div className="space-y-6">
            {AUDIT_GATES.map((g) => (
              <div
                key={g.gate}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-blue-500/20 px-3 py-1 text-xs font-black text-blue-400">
                      {g.gate}
                    </span>
                    <h3 className="text-xl font-black text-white">{g.name}</h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">{g.focus}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {g.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Proof of Execution Teardown */}
        <section className="mb-20 rounded-3xl border border-amber-400/20 bg-slate-900/80 p-8 sm:p-10">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">Case Study Validation</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Proven at Scale: The 87-Website Enterprise Network Audit
          </h2>
          <p className="mt-4 text-slate-300 text-sm leading-relaxed">
            This diagnostic framework was refined through an exhaustive 15-chapter investigation into a US carpet cleaning company’s 87-site network encompassing 226,200+ indexed URLs. The audit uncovered extreme crawl cannibalization and delivered a complete hub-and-spoke consolidation roadmap.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/case-studies/enterprise-87-site-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-colors"
            >
              Read Full 87-Site Case Study <ChevronRight size={14} />
            </Link>
          </div>
        </section>

        {/* CTA Box */}
        <section className="rounded-3xl border border-blue-500/30 bg-blue-950/20 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-black text-white">Book Your Architecture Audit</h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
            Stop guessing why pages aren't indexing or rankings are fluctuating. Get an engineering-grade diagnosis of your digital ecosystem.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?service=lionxe-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              Inquire About Audit Availability <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      <Script
        id="LionxeAuditSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
      />
    </main>
  );
}
