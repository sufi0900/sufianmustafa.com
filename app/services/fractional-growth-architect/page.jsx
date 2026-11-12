/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  Building2,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  Globe2,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
  Award,
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
  title: "Fractional Growth Systems Architect (GCC & Global Advisory) — Sufian Mustafa",
  description:
    "Executive advisory for Dubai, UAE, Saudi Arabia, and global technology enterprises. Bridging full-stack web engineering, technical SEO, and long-term digital authority.",
  keywords: [
    "Fractional Growth Architect",
    "Dubai SEO Consultant",
    "UAE Tech Advisory",
    "Saudi Arabia Digital Growth",
    "GCC Technical SEO",
    "Growth Systems Architecture",
    "Sufian Mustafa Advisory",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "Fractional Growth Systems Architect — Sufian Mustafa",
    description:
      "Strategic technical oversight for brands scaling in Dubai, the UAE, and the broader Gulf region.",
    url: `${getBaseUrl()}/services/fractional-growth-architect`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "Fractional Growth Systems Architect",
          subtitle: "GCC & Global Advisory Retainer · Dubai & UAE Focus",
          category: "Advisory",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Fractional Growth Systems Architect",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/services/fractional-growth-architect`,
  },
};

export default function FractionalGrowthArchitectPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fractional Growth Systems Architect",
    provider: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
      jobTitle: "Growth Systems Architect",
    },
    description: "Executive technical oversight and growth architecture advisory for tech founders and enterprise leaders in Dubai, the UAE, Saudi Arabia, and globally.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "5000",
      description: "Quarterly advisory retainer ($3,000 - $7,000 / month)",
    },
    url: `${getBaseUrl()}/services/fractional-growth-architect`,
  };

  return (
    <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(47,176,122,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-emerald-400">Fractional Architect</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-md mb-6">
            <Building2 size={14} className="text-emerald-400" />
            Executive Advisory Retainer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Fractional Growth Systems Architect
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Strategic technical leadership connecting software engineering, technical search visibility, and regional digital authority. Positioned for executive teams scaling in Dubai, the UAE, Saudi Arabia, and globally.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-3">
              <span className="text-xs text-slate-400 font-semibold block">Investment</span>
              <span className="text-2xl font-black text-emerald-400">$3,000 – $7,000 / mo</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-3">
              <span className="text-xs text-slate-400 font-semibold block">Availability</span>
              <span className="text-2xl font-black text-white">Strictly 2 Clients</span>
            </div>
            <Link
              href="/contact?service=fractional-growth-architect"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5"
            >
              Inquire for Retainer <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        {/* GCC & Regional Alignment */}
        <section className="mb-20 rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Regional Specialization</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Engineered for Dubai, UAE & GCC Expansion
              </h2>
            </div>
            <Link
              href="/gulf-vision"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Read Gulf Vision Strategy →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <Award size={20} className="text-emerald-400 mb-3" />
              <h3 className="font-bold text-white text-sm mb-1">Academic & Institutional Proof</h3>
              <p className="text-slate-400 leading-relaxed">
                MSc in Computer Science with HEC verification and MOFA attestation complete for Gulf employment and enterprise contracts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <Globe2 size={20} className="text-emerald-400 mb-3" />
              <h3 className="font-bold text-white text-sm mb-1">Bilingual Search Architecture</h3>
              <p className="text-slate-400 leading-relaxed">
                Structuring Arabic and English multi-regional entity graphs, hreflang mapping, and GCC local search dominance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <Shield size={20} className="text-emerald-400 mb-3" />
              <h3 className="font-bold text-white text-sm mb-1">Vendor & Agency Oversight</h3>
              <p className="text-slate-400 leading-relaxed">
                Auditing external agency deliverables against the LIONXE™ standard so you never pay for low-quality or penalty-inducing tactics.
              </p>
            </div>
          </div>
        </section>

        {/* Retainer Scope */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-white mb-8">What Is Included in the Advisory Retainer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">1. Bi-Weekly Strategic Architecture Calls</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct 60-minute calls with executive leadership, product managers, or engineering leads to prioritize high-impact growth initiatives and debug technical roadblocks.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">2. Continuous Code Review for Search Impact</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Before your developers merge major pull requests, we review schema output, dynamic routing, metadata integrity, and server response headers to prevent regression.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">3. AI Search (GEO) Monitoring & Response</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ongoing benchmarking of how your brand is cited inside ChatGPT, Perplexity, and Google AI Overviews, with proactive optimizations to preserve and expand citations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">4. Asynchronous Executive Access</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct access via private Slack or WhatsApp channel with guaranteed 24-hour response times on strategic questions, pitch evaluations, and technical vetting.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-black text-white">Secure Strategic Technical Oversight</h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
            Ensure your digital platforms compound value rather than accumulating technical debt. Inquire for current advisory availability.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?service=fractional-growth-architect"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5"
            >
              Inquire About Retainer Availability <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      <Script
        id="FractionalArchitectSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </main>
  );
}
