
export const ExperienceSection = () => {
    const experiences = [
        {
            company: "Taller de Inversiones",
            role: "Senior Software Engineer",
            period: "03/2025 — 07/2025",
            location: "Remote, Argentina",
            description: [
                "Optimized backend architecture to handle over 10,000 requests per second, using Redis queues with BullMQ.",
                "Transformed frontend and backend into an asynchronous system, enabling scalable request handling.",
                "Reduced core endpoints API response time by 800% through query and DB access optimizations.",
                "Developed web scraping tools that saved the team 20+ hours per week by automating social media data collection workflows.",
                "Designed and optimized a microservices architecture to improve system maintainability and scalability.",
                "Designed and developed a web-based endpoint stress test tool allowing optimization of server resources."
            ]
        },
        {
            company: "Syntex",
            role: "Analista IT",
            period: "01/2025 — 03/2025",
            location: "Luis Guillon, GBA, Argentina",
            description: [
                "Designed and optimized ERP system solutions using MSSQL, enhancing reporting efficiency through advanced query design and stored procedures.",
                "Spearheaded the integration of AI tools and agile methodologies across departments, automating workflows and improving cross-functional collaboration.",
                "Developed BI dashboards and advanced data analysis frameworks leveraging MSSQL, enabling real-time reporting and strategic decision-making for stakeholders."
            ]
        },
        {
            company: "Freelance",
            role: "Software Engineer",
            period: "06/2023 — Present",
            location: "Adrogue, GBA, Argentina",
            description: [
                "AI WhatsApp CRM/Marketing Assistant (Othala): Built a conversational analytics system combining WhatsApp, n8n, Google Sheets, and Redis. The agent dynamically returns KPIs interpreting natural-language queries.",
                "Asynchronous backend pipeline: Leveraged Redis queues to scrape multiple sources, normalize content, detect duplicates via semantic similarity (pgvector), and rewrite articles for multichannel publishing.",
                "Online Lottery: Developed a responsive web app with secure Mercadopago integration, utilizing a lightweight Supabase backend for real-time data handling and authentication."
            ]
        },
        {
            company: "ZellGo",
            role: "Co-Founder / Tech Lead",
            period: "07/2024 — 10/2025",
            location: "Ciudadela, GBA, Argentina",
            description: [
                "Led the technological transformation of a startup focused on commercializing telecommunication services (Movistar Fiber).",
                "Designed and implemented internal tools to automate operational tasks, significantly reducing the administrative workload.",
                "Coordinated and developed the company's business strategy, defining KPIs and tailored performance metrics."
            ]
        },
        {
            company: "Asset Real State",
            role: "Software Engineer",
            period: "11/2022 — 05/2024",
            location: "La plata, GBA, Argentina",
            description: [
                "Designed and developed full-stack REST API commercial real estate applications.",
                "Utilized technologies such as Express, React, and MySQL.",
                "Connected systems across APIs including Google Maps, Monday.com, Holded ERP, Paypal, and MercadoPago.",
                "Designed and implemented scalable APIs."
            ]
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
                    </div>
                </div>
            ))}
        </div>
    );
};
