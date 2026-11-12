/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  Shield,
  Zap,
  Globe2,
  Cpu,
  Search,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Layers,
  FileText,
  BarChart3,
  HelpCircle,
  Building2,
  Sparkles,
  ChevronRight,
  Target,
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
  title: "High-Ticket Services & Advisory — Sufian Mustafa | Growth Systems Architect",
  description:
    "Productized architecture audits, AI Search (GEO/AEO) engineering sprints, and fractional growth systems advisory by Sufian Mustafa, creator of the LIONXE™ Framework.",
  keywords: [
    "Technical SEO Services",
    "AI SEO Consultant",
    "GEO Generative Engine Optimization",
    "AEO Answer Engine Optimization",
    "LIONXE Audit",
    "Next.js SEO Architecture",
    "Dubai SEO Consultant",
    "GCC Growth Architect",
    "Enterprise SEO Diagnostic",
    "Sufian Mustafa Services",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    title: "High-Ticket Services & Advisory — Sufian Mustafa",
    description:
      "Enterprise technical SEO diagnostics, AI search optimization (GEO/AEO), and high-performance Next.js systems architecture.",
    url: `${getBaseUrl()}/services`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "Services & Strategic Advisory",
          subtitle: "LIONXE™ Audit · AI Search Systems · Fractional Architect",
          category: "Advisory",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Services & Strategic Advisory — Sufian Mustafa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Strategic Advisory — Sufian Mustafa",
    description:
      "High-ticket technical SEO audits, AI search architecture, and fractional advisory for GCC & global enterprises.",
    creator: "@sufianmustafa",
  },
  alternates: {
    canonical: `${getBaseUrl()}/services`,
  },
};

const SERVICES = [
  {
    id: "lionxe-audit",
    badge: "Most Requested Diagnostic",
    title: "The LIONXE™ Digital Diagnostic & Architecture Audit",
    subtitle: "Full-system audit across crawl budget, indexation, entity graph, and structural cannibalization.",
    price: "$1,500 – $3,500",
    cadence: "One-Time Engagement · 7–10 Business Days",
    tagline: "Fix the root cause behind algorithmic volatility and crawl collapse.",
    color: "#4D7BFF",
    href: "/services/lionxe-audit",
    deliverables: [
      "15-point multi-layer diagnostic covering codebase, CMS, and crawl logs",
      "Duplication and cannibalization mapping across multi-domain/subdomain networks",
      "Crawl budget efficiency breakdown and orphaned URL isolation",
      "7+ JSON-LD Schema.org architecture blueprints tailored to your entity type",
      "Executive tear-down video + prioritized 90-day structural action roadmap",
    ],
    idealFor: "SaaS founders, multi-location networks, and content publishers with 500+ URLs experiencing stalled growth or volatility.",
    roi: "Unblocks indexing bottlenecks, restores algorithmic authority, and eliminates wasted crawl budget before costly redesigns.",
  },
  {
    id: "ai-search-architecture",
    badge: "Flagship Implementation Sprint",
    title: "Next.js AI-Search (GEO / AEO) & Systems Architecture",
    subtitle: "Complete platform rebuild or retrofit to get cited in ChatGPT Search, Perplexity, and Google AI Overviews.",
    price: "$5,000 – $12,000",
    cadence: "3–6 Week Implementation Sprint",
    tagline: "Move beyond traditional keyword rankings: Become the cited source in AI answer engines.",
    color: "#E3B341",
    href: "/services/ai-search-architecture",
    deliverables: [
      "Next.js 14 App Router headless architecture configured for instant edge rendering",
      "Sanity CMS structured content modeling engineered for dynamic schema mapping",
      "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) content cluster design",
      "8,000+ word pillar-cluster content templates with zero-AI-detection editorial protocols",
      "Entity citation optimization targeting ChatGPT, Perplexity AI, Claude, and Google SGE",
      "Core Web Vitals 95+ performance optimization (SSR + ISR caching layer)",
    ],
    idealFor: "VC-backed tech startups, modern media platforms, and high-growth brands who demand an unfair advantage in the AI-search era.",
    roi: "Proven in production on DoItWithAI.tools — captures authoritative citations in LLM responses and dominates zero-click searches.",
  },
  {
    id: "fractional-growth-architect",
    badge: "Executive Advisory Retainer",
    title: "Fractional Growth Systems Architect",
    subtitle: "Strategic leadership bridging full-stack engineering, technical search visibility, and GCC regional expansion.",
    price: "$3,000 – $7,000 / month",
    cadence: "Quarterly Advisory Retainer · Limited to 2 Clients",
    tagline: "Executive technical oversight for brands scaling in Dubai, UAE, Saudi Arabia, and globally.",
    color: "#2FB07A",
    href: "/services/fractional-growth-architect",
    deliverables: [
      "Bi-weekly strategic architecture sessions with executive founders or engineering leads",
      "Technical code review for search-critical features before production deployment",
      "GCC & Dubai localized search architecture (Arabic/English hreflang, local entity mapping)",
      "Vetting and oversight of external agencies, contractors, and internal content pipelines",
      "Continuous LIONXE™ quality gate reviews on all published digital assets",
      "Direct asynchronous access via private Slack or WhatsApp channel",
    ],
    idealFor: "Gulf-based enterprise leaders, Dubai scale-ups, and international companies establishing their Middle East digital authority.",
    roi: "Saves hundreds of thousands in agency bloat and botched migrations by ensuring systems are engineered correctly the first time.",
  },
];

const FAQS = [
  {
    q: "How does a Growth Systems Architect differ from an SEO agency?",
    a: "Agencies sell retainers focused on shallow surface deliverables (backlinks, basic blog posts, keyword trackers). A Growth Systems Architect diagnoses and builds the entire underlying infrastructure: codebase rendering models (Next.js SSR/ISR), Schema.org entity graphs, crawl efficiency, and long-term content systems. You receive engineering-grade assets that compound over years, not rented tactics that evaporate when retainers stop.",
  },
  {
    q: "Why is the LIONXE™ Framework critical for modern audits?",
    a: "Standard SEO tools produce generic 50-page PDFs flagging trivial issues like missing meta descriptions. LIONXE™ evaluates assets vertically through four non-negotiable gates: Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, and Exceptional Distinction. If an asset fails foundational logic or has structural duplication, higher-level optimization is void. It guarantees you fix root causes instead of treating symptoms.",
  },
  {
    q: "Can you work with our existing engineering and marketing teams?",
    a: "Yes. Engagements are designed to empower your internal developers and content leaders. All deliverables come with concrete architecture blueprints, Pull Request specifications, and actionable editorial standards that your existing team can immediately execute.",
  },
  {
    q: "Do you offer remote advisory for companies in Dubai, UAE, and the GCC?",
    a: "Yes. Sufian specializes in Gulf tech ecosystems (Dubai, UAE, Saudi Arabia, and GCC), with verified academic credentials (HEC verified & MOFA attested Computer Science MSc) and structured frameworks tailored for regional localization and multi-market search domination.",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "High-Ticket Services & Advisory — Sufian Mustafa",
    url: `${getBaseUrl()}/services`,
    description: "Productized architecture audits, AI Search (GEO/AEO) engineering sprints, and fractional growth systems advisory.",
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Growth Systems Architecture Services",
      itemListElement: SERVICES.map((service, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.subtitle,
          provider: {
            "@type": "Person",
            name: "Sufian Mustafa",
            url: "https://sufianmustafa.com",
            jobTitle: "Growth Systems Architect",
          },
        },
        position: idx + 1,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: getBaseUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${getBaseUrl()}/services`,
      },
    ],
  };

  return (
    <>
      <main className="relative min-h-screen bg-[#040c1e] text-slate-100 overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Background glow and subtle grid */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(227,179,65,0.15),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(227,179,65,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(227,179,65,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-amber-400">Services & Advisory</span>
          </nav>

          {/* Hero Header */}
          <header className="mb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md mb-6">
              <Sparkles size={14} className="text-amber-400" />
              Strategic Growth & Architecture Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Digital systems engineered to{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                compound authority
              </span>{" "}
              and withstand algorithm shifts.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              We do not sell vanity traffic or shallow SEO retainers. We architect the underlying technical infrastructure—Next.js rendering, AI search visibility (GEO/AEO), structured data graphs, and multi-site consolidation—proven through live platforms and enterprise audits.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#offerings"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
              >
                Explore Service Tiers <ChevronRight size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Inquire for Advisory <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/case-studies/doitwithai"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-amber-300 transition-colors ml-2"
              >
                <Globe2 size={16} className="text-amber-400" /> See Proof of Work (DoItWithAI.tools) →
              </Link>
            </div>
          </header>

          {/* The 4 Gates of LIONXE Banner */}
          <section className="mb-24 rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">Our Governing Doctrine</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  The LIONXE™ Four-Gate Quality Standard
                </h2>
              </div>
              <p className="max-w-xl text-sm text-slate-400">
                Every service and system deliverable is certified against our proprietary four-gate quality framework. Failure at any gate voids the entire assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/20 text-blue-400 font-black text-sm">L</span>
                  <h3 className="font-bold text-white text-base">Logic & Longevity</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Structural integrity designed for 5+ year lifespans, immune to superficial algorithmic shifts.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-500/20 text-indigo-400 font-black text-sm">IO</span>
                  <h3 className="font-bold text-white text-base">Internal Optimization</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  100% completion across underlying crawl budget, clean rendering, and relational entity schemas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-sm">N</span>
                  <h3 className="font-bold text-white text-base">Non-Negotiable Integrity</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Zero black-hat shortcuts, zero spam manipulation, and absolute compliance with search engine guidelines.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500/20 text-amber-400 font-black text-sm">XE</span>
                  <h3 className="font-bold text-white text-base">Exceptional Distinction</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Work so deeply engineered that competitors cannot replicate it with generic AI generation.
                </p>
              </div>
            </div>
          </section>

          {/* Service Offerings */}
          <section id="offerings" className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">Three Tailored Engagement Models</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Choose the Right System Architecture
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base">
                Whether you need a full enterprise diagnostic, a Next.js AI-search modernization sprint, or continuous executive advisory, each offering delivers permanent compounding assets.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {SERVICES.map((s) => (
                <article
                  key={s.id}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-8 hover:border-amber-400/40 transition-all duration-300 relative shadow-2xl group"
                >
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-amber-300 mb-6">
                      <Sparkles size={12} className="text-amber-400" />
                      {s.badge}
                    </div>

                    <h3 className="text-2xl font-black text-white leading-tight group-hover:text-amber-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {s.subtitle}
                    </p>

                    {/* Pricing */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="text-3xl font-black text-white tracking-tight">{s.price}</div>
                      <div className="text-xs font-semibold text-slate-400 mt-1">{s.cadence}</div>
                    </div>

                    {/* Deliverables List */}
                    <div className="mt-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-3">
                        {s.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ROI / Value */}
                    <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/5 p-4 text-xs">
                      <span className="font-bold text-amber-300">Expected Impact:</span>
                      <p className="text-slate-400 mt-1 leading-relaxed">{s.roi}</p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                    <Link
                      href={s.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300 transition-all"
                    >
                      View Service Details <ChevronRight size={16} />
                    </Link>
                    <Link
                      href={`/contact?service=${s.id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                    >
                      Request Immediate Proposal <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Proof of Execution Highlight: DoItWithAI & Enterprise 87-Site Audit */}
          <section className="mb-24 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-900 via-[#0a1532] to-slate-900 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">Living Proof of Execution</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 leading-tight">
                  We don't theorize. We test on live production platforms.
                </h2>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Before consulting for any client, our methodologies are proven in the wild. We founded <strong>DoItWithAI.tools</strong>—a live AI SEO platform with 8,000+ word deep-dive content clusters and 7+ schema types—and performed the 15-chapter diagnostic of an 87-website network spanning 226,200+ URLs.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://doitwithai.tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-200 transition-all"
                  >
                    <Globe2 size={16} className="text-blue-600" /> Visit DoItWithAI.tools Live <ArrowUpRight size={15} />
                  </a>
                  <Link
                    href="/case-studies/enterprise-87-site-audit"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    <FileText size={16} className="text-amber-400" /> Read 87-Site Teardown
                  </Link>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400">226K+</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">Enterprise URLs Audited</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-blue-400">8,000+</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">Avg Word Depth per Pillar</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400">7+</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">JSON-LD Schemas Deployed</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400">4 Gates</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">LIONXE™ Quality Doctrine</div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Scope & Qualification Tool */}
          <section className="mb-24 rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">Client Qualification</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Is Your Organization a Match?
              </h2>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                We only accept 2 active architecture sprint clients and 2 advisory retainers per quarter to guarantee uncompromised depth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6">
                <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm mb-4">
                  <CheckCircle2 size={18} /> Ideal Fit
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Founders & teams building on Next.js, Headless CMS (Sanity), or modern decoupled web architectures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Brands seeking to dominate AI-generated search overviews (ChatGPT, Perplexity, Google AI Overviews).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Enterprises with complex multi-site networks suffering from keyword cannibalization and wasted crawl budgets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Gulf-based enterprises in Dubai, UAE, or Saudi Arabia expanding their regional authority.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-6">
                <div className="flex items-center gap-2 font-bold text-rose-400 text-sm mb-4">
                  <HelpCircle size={18} /> Poor Fit
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Businesses seeking low-budget, generic link packages or outsourced cookie-cutter blog spam.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Organizations that refuse to touch their codebase or improve technical rendering fundamentals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Clients expecting 24-hour miraculous traffic spikes through shady black-hat manipulation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Teams unwilling to build long-term E-E-A-T topical authority.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">Frequently Asked Questions</span>
              <h2 className="text-3xl font-black text-white mt-1">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 rounded-full border border-white/10 p-1 text-slate-400 group-open:rotate-180 transition-transform">
                      <ChevronRight size={16} />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 p-8 sm:p-14 text-center backdrop-blur-xl">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300">Ready for Structural Compounding?</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 max-w-2xl mx-auto leading-tight">
              Let's diagnose your system before you waste another quarter.
            </h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Inquire about current diagnostic availability or book an initial architecture discovery consultation with Sufian Mustafa.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-amber-400/20 hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
              >
                Inquire About Engagement <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
              >
                Learn More About Sufian
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="ServicesBreadcrumbSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
