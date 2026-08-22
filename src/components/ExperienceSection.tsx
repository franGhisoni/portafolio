
interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    reference?: string;
}

export const ExperienceSection = () => {
    const experiences: Experience[] = [
        {
            company: "Sodium Software (Freelance)",
            role: "Software Engineer",
            period: "06/2023 — Present",
            location: "Adrogué, GBA, Argentina",
            description: [
                "Peitho — Conversational AI Agent & CRM: Multichannel AI sales agent (WhatsApp, Instagram & Web) that qualifies leads, schedules meetings, and offers inventory 24/7. Direct CRM pipeline integration with sub-minute triage, sales rep metrics, and human escalation alerts.",
                "Medical Imaging & Diagnostic PACS (Proyecto Diagnósticos): Engineered a high-performance backend monorepo with Node.js/TypeScript and PostgreSQL (Supabase), integrating DICOMweb (Orthanc) for medical imaging with scoped OHIF viewers, automated clinical PDF/XLSX reporting, and async job queues for high-volume diagnostic workflows.",
                "MedOffice — Clinical EHR & Digital Prescription Platform: Architected a full-stack clinical management monorepo featuring automated medical prescription generation, laboratory study catalogs with determinations, appointment agendas, and validation against national health APIs (RCTA).",
                "Industrial ERP / MRP & Traceability (Refrigeración Lucciarini): Built an industrial operations platform using a thick-database PostgreSQL/Supabase architecture with Next.js Server Actions, managing Bill of Materials (BOM), QR bidirectional traceability for machines and batches, and automated supply replenishment triggers.",
                "AI Family Mediation Platform (Mediación): Developed a multiplatform solution (React Native & Web) for conflict resolution using AI (OpenRouter) with strict private position isolation (RN-01), multi-round settlement proposals, legal digital signatures (Ley 25.506), and human mediator escalation.",
                "Async News AI Pipeline (Hermes): Built an asynchronous backend (Node/Express, Redis, PostgreSQL + pgvector) that scrapes multiple sources, deduplicates via semantic similarity, and rewrites articles for multichannel publishing with a human-in-the-loop workflow.",
                "AI WhatsApp & Instagram CRM Assistant (Othala): Conversational analytics system integrating WhatsApp, n8n, Google Sheets, and Redis. Interprets natural-language queries and returns real-time business KPIs from multiple data sources."
            ],
            reference: "Bruno Bonafine (main client), +54 9 11 3419-9854"
        },
        {
            company: "Taller de Inversiones",
            role: "Senior Software Engineer",
            period: "03/2025 — 07/2025",
            location: "Remote, Argentina (Fixed-term contract)",
            description: [
                "Re-architected backend for a 200k+ user platform, migrating to an async queue system (Redis + BullMQ) handling 10,000+ req/s, cutting infrastructure costs by ~70%.",
                "Reduced core endpoint response times by 800% through deep query optimization and database access refactoring.",
                "Built a full-stack marketing analytics tool (scraping + REST APIs + React dashboard) automating daily reports — saved 100+ hours/month.",
                "Built an internal web-based load testing tool enabling data-driven server resource optimization.",
                "Developed automated scraping tools saving 20+ hours/week of manual social media data collection."
            ],
            reference: "Federico Glanz (CTO), +54 11 6283-9297"
        },
        {
            company: "Syntex",
            role: "IT Analyst",
            period: "01/2025 — 03/2025",
            location: "Luis Guillón, GBA, Argentina",
            description: [
                "Designed and optimized ERP system solutions using MSSQL, enhancing reporting efficiency through advanced query design and stored procedures.",
                "Spearheaded the integration of AI tools and agile methodologies across departments, automating workflows and improving cross-functional collaboration.",
                "Developed BI dashboards and advanced data analysis frameworks leveraging MSSQL, enabling real-time reporting and strategic decision-making for stakeholders."
            ],
            reference: "Nehuen Gonzalez (CTO), +54 11 6652-3767"
        },
        {
            company: "ZellGo",
            role: "Co-Founder / Tech Lead",
            period: "07/2024 — 10/2025",
            location: "Ciudadela, GBA, Argentina",
            description: [
                "Led full technology build-out of a telecom reseller startup (Movistar Fiber): sales tooling, team management systems, and administrative automation.",
                "Designed and implemented internal tools to automate operational tasks, significantly reducing the administrative workload.",
                "Defined company KPIs and performance metrics; coordinated business strategy across the team."
            ]
        },
        {
            company: "Asset Real Estate",
            role: "Software Engineer",
            period: "11/2022 — 05/2024",
            location: "La Plata, GBA, Argentina",
            description: [
                "Designed and built full-stack REST API applications using Node.js/Express, React, and MySQL, integrating Google Maps, Monday.com, Holded ERP, PayPal, and MercadoPago.",
                "Developed web scraping tools for automated land opportunity discovery and target market analysis.",
                "Implemented CI/CD pipelines with Railway and Git Flow for efficient, reliable releases."
            ],
            reference: "Ramiro Fernandez (Founder), +54 9 2215 72-6769"
        }
    ];

    return (
        <div className="space-y-14">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row gap-4 md:gap-10 group pl-5 border-l-2 border-transparent hover:border-accent transition-editorial"
                >
                    <div className="md:w-1/4 shrink-0 mt-1 space-y-1">
                        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                            {exp.period}
                        </p>
                        <p className="text-xs text-muted-foreground/70">{exp.location}</p>
                    </div>
                    <div className="md:w-3/4 space-y-3">
                        <h3 className="text-xl font-bold font-serif">
                            {exp.role}
                            <span className="text-muted-foreground font-normal"> · {exp.company}</span>
                        </h3>
                        <ul className="space-y-2 pt-1 text-foreground/75 leading-relaxed text-sm">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                                    <span className="text-pretty">{item}</span>
                                </li>
                            ))}
                        </ul>
                        {exp.reference && (
                            <p className="text-xs text-muted-foreground/85 pt-2 border-t border-border/40">
                                <span className="font-semibold text-foreground/90 uppercase tracking-wider text-[11px]">Reference:</span> {exp.reference}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

