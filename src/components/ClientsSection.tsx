import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Client {
    id: string;
    name: string;
    category: string;
    sector: string;
    role: string;
    description: string;
    deliverables: string[];
    logo: string;
    logoStyle?: string;
    link?: string;
}

export const ClientsSection = () => {
    const clients: Client[] = [
        {
            id: 'rutini',
            name: 'Rutini Wines',
            category: 'Luxury Winery · Global Export',
            sector: 'Vitivinicultura de Alta Gama',
            role: 'B2B Tradesite & Brand Asset Portal',
            description: 'Centralized digital platform providing international distributors, wholesalers, and specialized wine shops with direct access to official brand assets, marketing materials, technical data sheets, and vintage catalogs.',
            deliverables: ['B2B Asset Portal', 'Role-based Access', 'Multi-region Assets', 'Digital Catalog'],
            logo: '/clients/rutini.png',
            logoStyle: 'h-8 max-w-[150px]',
            link: 'https://rutiniwines.com',
        },
        {
            id: 'escorihuela',
            name: 'Escorihuela Gascón',
            category: 'Centenary Winery · Hospitality',
            sector: 'Bodega Centenaria (Est. 1884)',
            role: 'Rosaura Parallax Showcase & Direct Sales',
            description: 'Editorial digital experience engineered for Escorihuela Gascón’s iconic Rosaura Malbec, featuring spring-physics scroll parallax, responsive WebP asset pipelines, and high-conversion e-commerce funnels.',
            deliverables: ['Parallax Physics', 'Fluid Motion', 'Responsive Media', 'E-Commerce CTA'],
            logo: '/clients/escorihuela.png',
            logoStyle: 'h-11 max-w-[170px]',
            link: 'https://escorihuela.com/rosaura/',
        },
        {
            id: 'flux-one',
            name: 'Flux One',
            category: 'Growth Agency · Commercial AI',
            sector: 'Consumer-First Agency',
            role: 'Ad Analytics Dashboard & Conversational Leads',
            description: 'Full-stack multi-brand marketing intelligence dashboard with brush time-series tracking ($29.4M USD analyzed) and an autonomous conversational AI commercial infrastructure for real-time lead qualification.',
            deliverables: ['Analytics Dashboard', 'Brush Time-Series', 'Commercial AI Agent', 'CRM Bi-directional Sync'],
            logo: '/clients/fluxone-dark-ink.png',
            logoStyle: 'h-8 max-w-[150px] opacity-85 group-hover:opacity-100',
        },
        {
            id: 'appterix',
            name: 'Appterix',
            category: 'Software Factory · AI Integrations',
            sector: 'Soluciones Tecnológicas & Medios',
            role: 'Automated Ingestion Pipelines & Conversational AI',
            description: 'Engineering asynchronous data transformation pipelines, automated content analysis, and enterprise conversational layers connecting CRM and backend databases.',
            deliverables: ['Async Job Queues', 'Content Automation', 'AI Integrations', 'Custom Backends'],
            logo: '/clients/appterix.png',
            logoStyle: 'h-7 max-w-[140px] opacity-80 group-hover:opacity-100',
            link: 'https://appterix.info',
        },
        {
            id: 'concrete-charleston',
            name: 'Concrete Charleston',
            category: 'Construction Tech · Charleston, SC',
            sector: 'Architectural Concrete Contractor (USA)',
            role: 'Digital Platform & Commercial Quoting Funnel',
            description: 'High-conversion digital presence and automated inbound quoting pipeline for the Lowcountry’s leading architectural concrete contractor, covering residential driveways and commercial developments.',
            deliverables: ['Commercial Inbound Funnel', 'Portfolio Showcase', 'Local SEO & Speed Optimization'],
            logo: '/clients/concrete-charleston.svg',
            logoStyle: 'h-9 max-w-[180px]',
            link: 'https://concretecharleston.com',
        },
        {
            id: 'politica-del-sur',
            name: 'Política del Sur',
            category: 'Digital Journalism & Publishing',
            sector: 'Medio de Comunicación Líder (GBA Sur)',
            role: 'Hermes Automated News Intelligence Pipeline',
            description: 'End-to-end news intelligence engine running distributed web scraping (Puppeteer/Cheerio), semantic deduplication via pgvector embeddings, and assisted editorial curation.',
            deliverables: ['540+ Daily Articles', 'Vector Embeddings (pgvector)', 'Deduplication Pipeline', 'Multi-source Scraping'],
            logo: '/clients/politica-del-sur.svg',
            logoStyle: 'h-8 max-w-[170px]',
            link: 'https://politicadelsur.com',
        },
        {
            id: 'pellegrinet',
            name: 'Pellegrinet Seguros',
            category: 'Insurtech · AI CRM Integration',
            sector: 'Productores Asesores de Seguros',
            role: 'WhatsApp AI Agent & AdminSE Core Sync',
            description: 'Intelligent conversational insurance assistant operating over WhatsApp Cloud API, providing instantaneous quotes, policy triage, and bi-directional synchronization with AdminSE insurance broker software.',
            deliverables: ['WhatsApp AI Agent', 'AdminSE Integration', 'Real-time Quotation', 'Sub-minute Lead Triage'],
            logo: '/clients/pellegrinet.svg',
            logoStyle: 'h-9 max-w-[180px]',
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
    };

    return (
        <div className="space-y-12">
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed font-serif italic">
                Selected companies, enterprise brands, and specialized agencies I've partnered with to design, architect, and ship production-grade AI systems, commercial workflows, and web platforms.
            </p>

            {/* Seamless Logo Ticker / Showcase Banner */}
            <div className="relative w-full overflow-hidden py-8 border-y border-border/70 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-around flex-wrap gap-8 md:gap-12 px-6">
                    {clients.map((c) => (
                        <div
                            key={c.id}
                            className="flex items-center justify-center opacity-70 hover:opacity-100 transition-editorial grayscale hover:grayscale-0 hover:scale-105"
                            title={c.name}
                        >
                            <img
                                src={c.logo}
                                alt={`${c.name} logo`}
                                className={`object-contain ${c.logoStyle || 'h-8 max-w-[140px]'}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Interactive Grid with Details */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
            >
                {clients.map((client, idx) => (
                    <motion.div
                        variants={item}
                        key={client.id}
                        className={`group border border-border rounded-lg p-6 md:p-7 bg-background hover:bg-muted/30 hover:border-foreground/20 hover:shadow-[0_4px_24px_rgba(26,26,26,0.06)] transition-editorial flex flex-col justify-between ${idx === 6 ? 'md:col-span-2' : ''}`}
                    >
                        <div>
                            {/* Card Top: Logo & Link */}
                            <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-border/50">
                                <div className="h-12 flex items-center">
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className={`object-contain transition-editorial ${client.logoStyle || 'h-8 max-w-[150px]'}`}
                                    />
                                </div>
                                {client.link && (
                                    <a
                                        href={client.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-accent-muted transition-editorial"
                                        title={`Visit ${client.name}`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="sr-only">Visit {client.name}</span>
                                    </a>
                                )}
                            </div>

                            {/* Category & Title */}
                            <p className="text-xs uppercase tracking-[0.16em] text-accent font-medium mb-1">
                                {client.category}
                            </p>
                            <h3 className="text-xl font-bold font-serif group-hover:text-accent transition-editorial mb-1">
                                {client.name}
                            </h3>
                            <p className="text-xs font-mono text-muted-foreground/80 mb-4">
                                {client.role}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-foreground/75 leading-relaxed mb-6">
                                {client.description}
                            </p>
                        </div>

                        {/* Deliverables / Tags */}
                        <div className="pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
                            {client.deliverables.map((deliv, idx) => (
                                <span
                                    key={idx}
                                    className="text-[11px] font-medium px-2 py-0.5 bg-muted text-muted-foreground rounded"
                                >
                                    {deliv}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
