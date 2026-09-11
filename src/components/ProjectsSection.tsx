import { useState } from 'react';
import { Github, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden group/carousel bg-muted">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Project screenshot ${currentIndex + 1}`}
                />
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/85 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-editorial hover:bg-background shadow-sm"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/85 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-editorial hover:bg-background shadow-sm"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-editorial ${idx === currentIndex ? 'bg-foreground' : 'bg-foreground/25'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
            title: "Peitho",
            subtitle: "Autonomous AI Sales Agent & CRM Integrator",
            description: "24/7 AI commercial agent that engages, qualifies, and converts leads across WhatsApp, Instagram, and web in real time, seamlessly syncing with CRM pipelines.",
            extended: (
                <div className="space-y-4">
                    <p>Peitho is an autonomous AI commercial agent engineered to eliminate response latency in sales funnels. Operating 24/7, it handles inbound inquiries with sub-minute response times, dynamically qualifies lead intent and budget, triggers instant alerts or human handoffs for high-priority prospects, and orchestrates appointments directly into calendar systems.</p>

                    <h4 className="font-bold text-foreground mt-4">Core Capabilities & Verticals</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Multi-Channel Inbound Triage:</strong> Seamlessly captures leads from WhatsApp, Instagram DMs, and Web chats with sub-60s response times.</li>
                        <li><strong>Conversational Lead Scoring:</strong> Evaluates buyer intent, readiness, and budget through natural qualification flows.</li>
                        <li><strong>Tailored Vertical Solutions:</strong> Ready-to-deploy operational pipelines for Real Estate, High-ticket Luxury Items (Watches/Jewelry), Events, and Auto Dealerships.</li>
                        <li><strong>CRM & Calendar Synchronization:</strong> Bi-directional sync with internal CRM systems and automated scheduling for qualified sales meetings.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>
                    <p className="text-sm">
                        <strong>Frontend:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion<br />
                        <strong>AI & Orchestration:</strong> LLM Agent Pipelines, WhatsApp Cloud API, Webhooks<br />
                        <strong>Architecture:</strong> Event-driven async pipelines, CRM bi-directional sync
                    </p>
                </div>
            ),
            tags: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "AI Agents", "WhatsApp API", "CRM Integration", "Framer Motion"],
            link: "https://peitho.ghisoni.com.ar",
            images: [
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Rosaura · Escorihuela Gascón",
            subtitle: "Luxury Winery Experience & Parallax Showcase",
            description: "Interactive brand experience and landing page for Escorihuela Gascón's centenary Rosaura Malbec, featuring fluid parallax physics and refined editorial typography.",
            extended: (
                <div className="space-y-4">
                    <p>Interactive, high-end digital showcase developed for Escorihuela Gascón's iconic Rosaura Malbec wine. Built with modern web standards to convey the heritage, terroir, and prestige of one of Mendoza's most historic wineries.</p>

                    <h4 className="font-bold text-foreground mt-4">Key Features & Engineering</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Editorial & Fluid Motion:</strong> Custom Framer Motion scroll-linked animations and parallax vineyard layers with spring physics.</li>
                        <li><strong>High-Resolution Media Optimization:</strong> WebP asset compression and responsive picture sets tailored for all screen sizes.</li>
                        <li><strong>High-Conversion Funnel:</strong> Direct, seamless CTA integration with the official Escorihuela Gascón e-commerce store.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>
                    <p className="text-sm">
                        <strong>Framework:</strong> Next.js, React, TypeScript<br />
                        <strong>Styling & Motion:</strong> Tailwind CSS, Framer Motion (useScroll, useSpring)<br />
                        <strong>Optimization:</strong> Next.js Image optimization, WebP assets
                    </p>
                </div>
            ),
            tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Parallax UI"],
            link: "https://escorihuela.com/rosaura/",
            images: [
                "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Eterna",
            subtitle: "Medical Aesthetics & Wellness Clinic",
            description: "Modern, high-conversion web platform and booking showcase for an aesthetic medicine clinic, featuring interactive availability calendars and mobile-first WhatsApp scheduling.",
            extended: (
                <div className="space-y-4">
                    <p>Comprehensive digital presence designed for Eterna aesthetic clinic, focusing on trust, clinical elegance, and friction-free appointment scheduling.</p>

                    <h4 className="font-bold text-foreground mt-4">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Interactive Availability Calendar:</strong> Dynamic monthly calendar showcasing real-time available consultation dates.</li>
                        <li><strong>Direct WhatsApp Booking:</strong> Streamlined scheduling workflow connecting prospective patients directly with clinic coordinators.</li>
                        <li><strong>Refined Aesthetic UI:</strong> Parallax cards, smooth section navigation, and responsive typography.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>
                    <p className="text-sm">
                        <strong>Framework:</strong> Next.js, React, TypeScript<br />
                        <strong>Styling & UI:</strong> Tailwind CSS, Radix UI, Lucide Icons, Framer Motion
                    </p>
                </div>
            ),
            tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX", "WhatsApp API"],
            link: "https://eterna.ghisoni.com.ar",
            images: [
                "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Hermes",
            subtitle: "Automated News Aggregation & AI Processing Engine",
            description: "Advanced full-stack intelligence platform designed to aggregate, process, and distribute news content using AI and asynchronous job queues.",
            extended: (
                <div className="space-y-4">
                    <p>Hermes is an advanced, full-stack intelligence and automation platform designed to aggregate, process, and distribute news content. It leverages automated web scraping, artificial intelligence, and asynchronous job queues to build a comprehensive end-to-end pipeline from news discovery to curated publication.</p>

                    <h4 className="font-bold text-foreground mt-4">Architecture & Core Components</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Frontend SPA:</strong> A modern, responsive dashboard built with React 19, styled with Tailwind CSS, and optimized by Vite. It provides a control center for managing sources, configuring AI prompts, and scheduling workflows.</li>
                        <li><strong>Backend API & Workers:</strong> A robust Node.js/Express server built with TypeScript. It orchestrates the entire intelligence pipeline, from HTTP endpoints for the dashboard to heavy background processing tasks.</li>
                        <li><strong>Asynchronous Processing Engine:</strong> Utilizing Redis and BullMQ, the system handles scraping, AI analysis, and publishing via distributed, resilient background job queues.</li>
                        <li><strong>Vector Database:</strong> Postgres enhanced with pgvector and managed via Prisma ORM. It stores both relational application state and high-dimensional vector embeddings of articles to enable advanced semantic search and clustering capabilities.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Decoupled Scraping System:</strong> Implementations of headless browser scraping (Puppeteer with stealth plugins) and lightweight HTTP scraping (Cheerio, Got) to efficiently extract content while bypassing bot protection mechanisms.</li>
                        <li><strong>AI-Powered Content Processing Pipeline:</strong> Integrated with the OpenAI SDK to automatically analyze, score, and categorize incoming articles. AI-driven content transformation, including intelligent rewriting.</li>
                        <li><strong>Dynamic Rule & Workflow Engine:</strong> Highly configurable routing rules that map scraped sources to specific AI prompt templates, and finally to designated publication targets.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>
                    <p className="text-sm">
                        <strong>Frontend:</strong> React 19, TypeScript, Vite, Tailwind CSS, Framer Motion<br />
                        <strong>Backend:</strong> Node.js, Express, TypeScript, BullMQ, node-cron<br />
                        <strong>Scraping:</strong> Puppeteer, Cheerio<br />
                        <strong>Database:</strong> PostgreSQL (pgvector), Redis, Prisma ORM<br />
                        <strong>AI:</strong> OpenAI API
                    </p>
                </div>
            ),
            tags: ["React 19", "Node.js", "Express", "TypeScript", "BullMQ", "Puppeteer", "PostgreSQL", "pgvector", "Redis", "OpenAI"],
            github: "https://github.com/franGhisoni",
            link: "https://hermes.ghisoni.com.ar/",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Proyecto Diagnósticos",
            subtitle: "Medical Imaging PACS & Automated Clinical Reporting",
            description: "High-performance medical diagnostic monorepo integrating Orthanc DICOMweb with scoped OHIF viewers, async job queues, and automated clinical reporting.",
            extended: (
                <div className="space-y-4">
                    <p>High-performance medical diagnostics monorepo engineered to streamline clinical imaging workflows, automated reporting, and secure patient data delivery. Built to handle intensive medical imaging datasets under strict role-based access controls.</p>

                    <h4 className="font-bold text-foreground mt-4">Architecture & Core Systems</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>DICOMweb &amp; Orthanc PACS Integration:</strong> Direct streaming and indexing of diagnostic imaging studies (CT, MRI, X-Ray) with scoped OHIF medical viewer integration.</li>
                        <li><strong>Async Diagnostic Queues:</strong> Scalable worker pipelines that process high-volume study metadata and asynchronously generate clinical diagnostic reports in PDF and XLSX formats.</li>
                        <li><strong>Enterprise Monorepo:</strong> Modular architecture separating API gateways, background workers, shared contracts, and clinical web portals.</li>
                        <li><strong>HIPAA-Aligned Security:</strong> Thick-database isolation with Supabase/PostgreSQL row-level security ensuring strict patient record confidentiality across clinical teams.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>
                    <p className="text-sm">
                        <strong>Backend &amp; Core:</strong> Node.js, TypeScript, Express, Supabase, PostgreSQL<br />
                        <strong>Medical Imaging:</strong> DICOMweb, Orthanc PACS, OHIF Viewer<br />
                        <strong>Processing &amp; Automation:</strong> Asynchronous Job Queues, PDFKit, ExcelJS
                    </p>
                </div>
            ),
            tags: ["TypeScript", "Node.js", "PostgreSQL", "Supabase", "DICOMweb", "Orthanc PACS", "OHIF Viewer", "Async Workers"],
            images: [
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Proyecto Mediación",
            subtitle: "AI-Powered Family Dispute Resolution Platform",
            description: "Multiplatform conflict resolution system using conversational AI to negotiate legal family disputes with strict private position isolation and legal validity.",
            extended: (
                <div className="space-y-4">
                    <p>Developed under Magne Studios, Proyecto Mediación is an innovative legal-tech platform engineered to assist in out-of-court family conflict resolution through AI-guided autocompositive negotiation. Each party enters their demands, priorities, and flexible settlement thresholds in complete privacy.</p>

                    <h4 className="font-bold text-foreground mt-4">Key Capabilities &amp; Legal Framework</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Strict Position Isolation (RN-01):</strong> A proprietary backend rule ensuring neither party ever accesses the other's private positions; the AI mediator evaluates both sets of constraints in an isolated context to propose equitable points of agreement.</li>
                        <li><strong>Multi-Round Negotiation Engine:</strong> Pluggable AI engine (via OpenRouter) that iterates through rounds of settlement proposals and automatically escalates complex deadlocks to accredited human mediators from round 3.</li>
                        <li><strong>Legally Binding Digital Signatures:</strong> Complete cryptographic audit trail and digital signature integration compliant with Argentine Digital Signature Law (Ley 25.506) and DocuSign.</li>
                        <li><strong>Law Firm Web Console:</strong> Comprehensive management SPA for legal practices, casefile organization, and deadline SLA tracking.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>
                    <p className="text-sm">
                        <strong>Mobile &amp; Web:</strong> React Native, React, TypeScript, Tailwind CSS<br />
                        <strong>AI &amp; Orchestration:</strong> OpenRouter API (Pluggable LLMs), Custom Negotiation Engine<br />
                        <strong>Backend &amp; Security:</strong> Node.js, PostgreSQL, Supabase, DocuSign API, Mercado Pago
                    </p>
                </div>
            ),
            tags: ["React Native", "TypeScript", "AI Negotiation", "OpenRouter", "PostgreSQL", "Supabase", "DocuSign", "LegalTech"],
            images: [
                "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "MedOffice",
            subtitle: "Clinical Practice EHR & Certified Digital Prescription Monorepo (RCTA/QBI2)",
            description: "Production medical EHR monorepo featuring certified Argentine RCTA/QBI2 digital prescriptions, multi-page clinical PDF engine, atomic Supabase RPCs, and psychiatric outpatient workflows.",
            extended: (
                <div className="space-y-4">
                    <p>Full-stack clinical management monorepo engineered for specialized outpatient practices and medical teams (developed under Magne Studios for pediatric psychiatry). MedOffice automates patient electronic health records (EHR), longitudinal consultation timelines, official multi-page digital prescriptions, and multi-tenant organization isolation.</p>

                    <h4 className="font-bold text-foreground mt-4">Clinical Engineering &amp; Regulatory Certification</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Certified RCTA / QBI2 Argentina Integration:</strong> Fully certified and homologated integration with official Argentine electronic prescription standards across major national healthcare providers (OSDE, Luis Pasteur, Accord Salud, and Particular).</li>
                        <li><strong>Multi-Page Clinical Document Engine:</strong> Automated dynamic assembly and continuous pagination of multi-page legal clinical PDFs with <code>pdf-lib</code>: official prescription slips, detailed posology sheets, laboratory requests with a 23-study catalog and determinations, and clinical reports with embedded digital signatures.</li>
                        <li><strong>Atomic Database Operations &amp; RPCs:</strong> PostgreSQL/Supabase RPC transactions (<code>medoffice_create_prescription</code>, <code>medoffice_regenerate_prescription</code>) ensuring atomic creation and historical preservation across drug packaging, indications, and clinical studies without ghost records or cross-tenant leakage.</li>
                        <li><strong>Psychiatric &amp; Outpatient EHR:</strong> Longitudinal clinical timeline, dual diagnostic categorization (behavioral vs. organic), appointment agenda, and role-based access control (Clinician vs. Assistant).</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>
                    <p className="text-sm">
                        <strong>Frontend:</strong> Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Radix UI primitives, Lucide Icons<br />
                        <strong>Backend:</strong> Fastify, TypeScript, tsx, pdf-lib, Zod, Nodemailer, WebSocket<br />
                        <strong>Database &amp; Security:</strong> Supabase, PostgreSQL (PL/pgSQL RPCs &amp; RLS), Multi-tenant RBAC<br />
                        <strong>Regulatory:</strong> RCTA / QBI2 API Integration (Argentina Digital Prescription Certification)
                    </p>
                </div>
            ),
            tags: ["Next.js 16", "React 19", "Fastify", "TypeScript", "PostgreSQL", "Supabase", "pdf-lib", "RCTA / QBI2", "HealthTech", "EHR"],
            images: [
                "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Sodium Software",
            subtitle: "Software Factory · AI Agents, Web & Dashboards",
            description: "Software factory focused on AI agents, websites, scraping pipelines, and dashboards. Designs, builds, and operates the systems your team doesn't want to maintain.",
            extended: "Sodium Software is the studio brand — a software factory focused on shipping production-grade systems: AI agents, custom web platforms, scraping pipelines, and operational dashboards. The site itself is a showcase of the design language used across client work, built around a custom liquid-glass component system, animated typographic hierarchy, and a refraction-driven visual identity.",
            tags: ["React", "TypeScript", "Vite", "Liquid Glass", "Framer Motion"],
            link: "https://sodium.ghisoni.com.ar",
            images: [
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Estia",
            subtitle: "Conversational Platform for Real Estate",
            description: "Conversational platform tailored for real estate agencies — handles property inquiries, lead qualification, and follow-ups end to end through AI-driven conversations.",
            extended: "Estia is a conversational AI platform built specifically for real estate agencies. It centralizes inbound leads from multiple channels, qualifies prospects through natural-language conversations, and automates follow-ups — keeping agents focused on the deals that matter while the assistant handles routine triage.",
            tags: ["React", "TypeScript", "Node.js", "AI", "Conversational"],
            link: "https://estia-website-production.up.railway.app/",
            images: [
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Zell Go CRM",
            subtitle: "PWA + Headless CMS REST API",
            description: "Sistema integral de gestión de clientes y administración interna. Arquitectura PWA mobile-first apoyada por un backend headless CMS.",
            extended: (
                <div className="space-y-4">
                    <p>ZG-CRM is a comprehensive Customer Relationship Management (CRM) and internal business administration system built from end to end. It centralizes sales operations, technical support (ticketing), employee management, inventory control, and process automation.</p>

                    <h4 className="font-bold text-foreground mt-4">Technology Stack</h4>

                    <h5 className="font-semibold text-sm mt-3 text-muted-foreground">Frontend (ZG-Web)</h5>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>Framework & Build Tool:</strong> React 18 with TypeScript and Vite.</li>
                        <li><strong>Styling & UI:</strong> Tailwind CSS for a 100% responsive design.</li>
                        <li><strong>Routing & Networking:</strong> React Router v6 and Axios.</li>
                        <li><strong>Data Visualization:</strong> Recharts for analytical dashboards and sales statistics.</li>
                        <li><strong>PWA Cloud:</strong> Service Workers (vite-plugin-pwa) ensuring installation capabilities, offline cache, and native push notifications.</li>
                    </ul>

                    <h5 className="font-semibold text-sm mt-3 text-muted-foreground">Backend (ZG-Core)</h5>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>Framework:</strong> Strapi (Node.js/TypeScript) acting as a highly configurable and secure Headless CMS REST API.</li>
                        <li><strong>Database:</strong> PostgreSQL handling data integrity, credentials, and auditing.</li>
                        <li><strong>Automation & Scraping:</strong> Asynchronous processes in Node.js using Puppeteer for automated data extraction (CRON jobs).</li>
                        <li><strong>Notifications:</strong> web-push library integration for real-time notifications to clients (PWA).</li>
                    </ul>

                    <h5 className="font-semibold text-sm mt-3 text-muted-foreground">Infrastructure & DevOps</h5>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>Containers:</strong> Full dockerization of environments for functional consistency.</li>
                        <li><strong>Deployment (PaaS):</strong> Automated CI/CD pipelines on Railway and Render.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">Key Features & Achievements</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>End-to-End Management:</strong> Complete flows for sales registration, inventory and asset management, and administrative approvals.</li>
                        <li><strong>Ticketing & Support:</strong> Robust customer service and tracking system, allowing traceability and escalation of technical or user issues.</li>
                        <li><strong>Event-Driven Architecture:</strong> Notification subsystem (web-push) to keep employees informed instantly of critical state changes.</li>
                        <li><strong>Scraping Automation:</strong> Internal Strapi module to periodically scrape external sources and dynamically incorporate data, significantly reducing manual data-entry.</li>
                        <li><strong>Analytics Dashboards:</strong> Comprehensive administrative dashboard built with Recharts, giving management real-time visibility into KPIs and metrics.</li>
                    </ul>
                </div>
            ),
            tags: ["React 18", "TypeScript", "Tailwind CSS", "Strapi", "PostgreSQL", "PWA", "Puppeteer", "Docker"],
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "TDI Async High Traffic Core",
            subtitle: "10k RPS Backend Architecture",
            description: "High-performance backend transformation utilizing Redis queues and BullMQ to scale request handling asynchronously.",
            extended: "Transformed a traditional synchronous API into an asynchronous event-driven system to handle traffic spikes. Achieved sustained processing of over 10,000 requests per second. The architectural shift included rigorous query optimizations, caching strategies, and load balancing.",
            tags: ["Redis", "BullMQ", "Node.js", "Architecture", "Scaling"],
            github: "https://github.com/franGhisoni",
            images: [
                "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "TDI EP Tester",
            subtitle: "Robust Artillery Stress Tester",
            description: "Endpoint stress tester designed for developers. Built to assess and optimize server resource utilization under high load scenarios.",
            extended: "Created a scalable traffic generation tool simulating thousands of concurrent users to identify request bottlenecks in backend microservices. Resulted in actionable insights that helped optimize database queries and cut endpoint latency by a massive margin.",
            tags: ["Node.js", "Express", "Artillery", "Performance Testing"],
            github: "https://github.com/franGhisoni",
            images: [
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            ]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
    };

    return (
        <>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
            >
                {projects.map((project, i) => (
                    <motion.div
                        variants={item}
                        key={i}
                        onClick={() => {
                            if (project.link) {
                                window.open(project.link, '_blank', 'noopener,noreferrer');
                            } else {
                                setSelectedProject(project);
                            }
                        }}
                        className="group relative border border-border rounded-lg p-6 bg-background hover:shadow-[0_4px_24px_rgba(26,26,26,0.07)] hover:border-foreground/20 transition-editorial flex flex-col h-full cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold font-serif group-hover:text-accent transition-editorial">
                                {project.title}
                            </h3>
                            <div className="flex gap-3 text-muted-foreground" onClick={e => e.stopPropagation()}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer"
                                        className="hover:text-accent transition-editorial">
                                        <Github className="w-4 h-4" />
                                        <span className="sr-only">GitHub</span>
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer"
                                        className="hover:text-accent transition-editorial">
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="sr-only">Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground font-medium mb-4">
                            {project.subtitle}
                        </p>

                        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.tags.map((tag, j) => (
                                <span key={j} className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: 24 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            className="relative w-full max-w-3xl bg-background border border-border shadow-[0_24px_80px_rgba(26,26,26,0.12)] rounded-xl p-6 md:p-10 z-10 overflow-y-auto max-h-[90vh] custom-scrollbar"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-5 top-5 p-2 rounded-md hover:bg-muted hover:text-accent transition-editorial text-muted-foreground"
                            >
                                <X className="w-4 h-4" />
                                <span className="sr-only">Close</span>
                            </button>

                            <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3">
                                {selectedProject.subtitle}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-10 leading-tight">
                                {selectedProject.title}
                            </h2>

                            {selectedProject.images && selectedProject.images.length > 0 && (
                                <ImageCarousel images={selectedProject.images} />
                            )}

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-accent mb-3">Overview</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="text-muted-foreground leading-relaxed">
                                    {selectedProject.extended}
                                </div>

                                <div className="pt-6 border-t border-border">
                                    <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-accent mb-4">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag: string, j: number) => (
                                            <span key={j} className="text-xs font-medium px-3 py-1.5 bg-muted text-foreground rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {selectedProject.github && (
                                    <div>
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium hover:bg-accent transition-editorial"
                                        >
                                            <Github className="w-4 h-4" />
                                            View on GitHub
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
