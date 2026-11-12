/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  ChevronRight,
  Shield,
  Layers,
  BarChart2,
  Sparkles,
  Search,
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
  title: "Case Study: 87-Site Enterprise Audit (226,200 URLs) — Sufian Mustafa",
  description:
    "An exhaustive 15-chapter strategic audit of a US enterprise carpet cleaning network, deconstructing 87 duplicated domains, crawl budget waste, and designing a hub-and-spoke consolidation.",
  keywords: [
    "Enterprise SEO Audit Case Study",
    "87 Site Network Audit",
    "226,200 URLs Audit",
    "Crawl Budget Wastage Case Study",
    "Keyword Cannibalization Teardown",
    "LIONXE Enterprise Audit",
    "Sufian Mustafa Audit Case Study",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "Deconstructing an 87-Website Enterprise Network: 226,200 URLs Diagnostic",
    description:
      "A 15-chapter strategic audit uncovering how automated multi-site expansion turns into algorithmic self-cannibalization.",
    url: `${getBaseUrl()}/case-studies/enterprise-87-site-audit`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "article",
    images: [
      {
        url: generateOGImageURL({
          title: "87-Site Enterprise Audit Teardown",
          subtitle: "226,200 URLs · 15 Chapters · 261 Social Accounts · LIONXE™ Lens",
          category: "Case Study",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "87 Site Enterprise Audit Case Study",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/case-studies/enterprise-87-site-audit`,
  },
};

export default function EnterpriseAuditCaseStudyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Deconstructing an 87-Website Enterprise Network: 226,200 URLs Diagnostic",
    description: "A 15-chapter strategic audit uncovering how automated multi-site expansion creates massive crawl waste and designing a consolidated hub-and-spoke architecture.",
    author: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
    },
    publisher: {
      "@type": "Person",
      name: "Sufian Mustafa",
    },
    url: `${getBaseUrl()}/case-studies/enterprise-87-site-audit`,
  };

  return (
    <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(227,179,65,0.18),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <Link href="/case-studies" className="hover:text-amber-400 transition-colors">Case Studies</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-amber-400">87-Site Enterprise Audit</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md mb-6">
            <FileText size={14} className="text-amber-400" />
            Enterprise Forensic Diagnostic
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Deconstructing an 87-Website Enterprise Network: 226,200 URLs Diagnostic
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            A comprehensive 15-chapter investigation into a US carpet cleaning company's duplicated multi-site network, exposing massive crawl waste, automated content swapping, and delivering an actionable hub-and-spoke consolidation roadmap.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              href="/services/lionxe-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              Book an Enterprise Diagnostic <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/case-studies/lionxe-framework"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Explore LIONXE™ Methodology →
            </Link>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Domains Analyzed</span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400 mt-1 block">87</span>
            <span className="text-[11px] text-slate-500">Duplicated multi-site web</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Indexed URLs</span>
            <span className="text-2xl sm:text-3xl font-black text-blue-400 mt-1 block">226,200+</span>
            <span className="text-[11px] text-slate-500">Programmatic crawl bloat</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Social Accounts</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 block">261</span>
            <span className="text-[11px] text-slate-500">Fragmented channels</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Report Scope</span>
            <span className="text-2xl sm:text-3xl font-black text-purple-400 mt-1 block">15 Chapters</span>
            <span className="text-[11px] text-slate-500">Full forensic diagnosis</span>
          </div>
        </div>

        {/* Teardown Narrative */}
        <div className="prose prose-invert prose-slate max-w-none space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              1. The Background: How Multi-Site Expansion Becomes Algorithmic Suicide
            </h2>
            <p>
              In local enterprise SEO, many companies fall into a dangerous trap: rather than building a single authoritative domain with localized service areas, they spin up dozens of independent websites—one for every city, metro area, or zip code.
            </p>
            <p>
              In this engagement, a premier US-based carpet cleaning and restoration enterprise had scaled into an <strong>87-website network</strong>. Each website used nearly identical design themes, near-identical copy with programmatic city-name swapping, and shared the same back-office phone systems.
            </p>
            <p>
              What seemed like a clever expansion strategy in 2018 had turned into a catastrophic vulnerability by 2024: Google had indexed over <strong>226,200 URLs</strong> of near-duplicate content, causing severe algorithmic cannibalization, wasted crawl budgets, and stagnant search visibility.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              2. Core Diagnostic Findings (The 15 Chapters Condensed)
            </h2>

            <div className="space-y-4 my-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base mb-2">
                  <AlertTriangle size={18} /> Finding 1: Extreme Internal Crawl Waste & Index Cannibalization
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Googlebot was expending 92% of its crawl budget on automated tag archives, duplicate city permutations, and non-canonical category pages. The 87 websites were literally outranking and demoting each other across adjacent metropolitan markets.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base mb-2">
                  <AlertTriangle size={18} /> Finding 2: Severe Social Fragmentation (261 Unmanaged Profiles)
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Across 87 websites, the company had established 261 distinct social media profiles (Facebook, Instagram, X). With no centralized social media management pipeline, 80% of these profiles had been abandoned for over 18 months, emitting negative trust and brand decay signals to search engine knowledge graphs.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base mb-2">
                  <AlertTriangle size={18} /> Finding 3: Vulnerability to Google's Site Reputation & Spam Policies
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Automated content-swapping pipelines left dozens of pages with unresolved template placeholders and identical schema graphs, putting the entire network at risk of algorithmic demotion or manual spam action.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              3. The LIONXE™ Framework as the Diagnostic Standard
            </h2>
            <p>
              Chapter 13 of the report applied the <strong>LIONXE™ Framework</strong> to evaluate the network across its four non-negotiable gates:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Logic & Longevity (FAIL):</strong> The multi-site strategy was structurally fragile; each new Google update resulted in volatile rank drops.</li>
              <li><strong>Internal Optimization (FAIL):</strong> Crawl budget efficiency was near zero, with hundreds of thousands of thin URLs diluting domain authority.</li>
              <li><strong>Non-Negotiable Integrity (FAIL):</strong> Automated content swapping created thin, deceptive localization signals.</li>
              <li><strong>Exceptional Distinction (FAIL):</strong> The content could be easily reproduced by competitors using generic scraping scripts.</li>
            </ul>
            <p>
              Because the network failed Gate 1 and Gate 2, tactical optimizations (such as buying backlinks or rewriting titles) were ruled out as dangerous wastes of capital. Only a fundamental architectural restructuring could save the asset.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              4. The Hub-and-Spoke Consolidation Architecture
            </h2>
            <p>
              The audit delivered an exhaustive 5-phase transition plan to consolidate the 87 fragmented sites into a single high-authority national brand domain:
            </p>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 my-6 space-y-3 text-xs sm:text-sm text-slate-300">
              <p><strong>Phase 1 (Discovery & Triage):</strong> Identifying the top 5% revenue-driving URLs across all 87 domains to protect organic traffic during migration.</p>
              <p><strong>Phase 2 (Hub-and-Spoke Architecture):</strong> Architecting a single authority domain with clean hierarchical URL paths (<code>/locations/state/city</code>) powered by Next.js and structured GeoCoordinates Schema.</p>
              <p><strong>Phase 3 (301 Redirect Mapping):</strong> Mapping over 226,000 legacy URLs to consolidated, high-depth destination pages to transfer 100% of historical backlink equity.</p>
              <p><strong>Phase 4 (Social & Entity Consolidation):</strong> Merging 261 fragmented social profiles into verified corporate brand channels linked via Schema.org <code>sameAs</code> arrays.</p>
              <p><strong>Phase 5 (Post-Migration Monitoring):</strong> Deploying automated crawl log monitors to detect and resolve indexing bottlenecks.</p>
            </div>
          </section>
        </div>

        {/* Bottom CTA for Services */}
        <section className="mt-20 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 p-8 sm:p-12 text-center backdrop-blur-xl">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">Enterprise Diagnostics</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            Is Your Multi-Domain Network Suffering from Crawl Waste?
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Get an engineering-grade 15-point diagnostic certified against the LIONXE™ standard before restructuring or migrating your digital assets.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/services/lionxe-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              Learn More About the LIONXE™ Audit <ChevronRight size={16} />
            </Link>
            <Link
              href="/contact?service=lionxe-audit"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Inquire for Diagnostic Slot <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      <Script
        id="EnterpriseAuditCaseStudySchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
