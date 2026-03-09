import { useState } from 'react';
import { Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden group/carousel bg-muted/30">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Project screenshot ${currentIndex + 1}`}
                />
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background shadow-sm"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background shadow-sm"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-foreground' : 'bg-foreground/30'
                                    }`}
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
            title: "Hermes",
            subtitle: "Automated News Aggregation & AI Processing Engine",
            description: "Advanced full-stack intelligence platform designed to aggregate, process, and distribute news content using AI and asynchronous job queues.",
            extended: (
                <div className="space-y-4">
                    <p>Hermes is an advanced, full-stack intelligence and automation platform designed to aggregate, process, and distribute news content. It leverages automated web scraping, artificial intelligence, and asynchronous job queues to build a comprehensive end-to-end pipeline from news discovery to curated publication.</p>

                    <h4 className="font-bold text-foreground mt-4">🏗️ Architecture & Core Components</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Frontend SPA:</strong> A modern, responsive dashboard built with React 19, styled with Tailwind CSS, and optimized by Vite. It provides a control center for managing sources, configuring AI prompts, and scheduling workflows.</li>
                        <li><strong>Backend API & Workers:</strong> A robust Node.js/Express server built with TypeScript. It orchestrates the entire intelligence pipeline, from HTTP endpoints for the dashboard to heavy background processing tasks.</li>
                        <li><strong>Asynchronous Processing Engine:</strong> Utilizing Redis and BullMQ, the system handles scraping, AI analysis, and publishing via distributed, resilient background job queues.</li>
                        <li><strong>Vector Database:</strong> Postgres enhanced with pgvector and managed via Prisma ORM. It stores both relational application state and high-dimensional vector embeddings of articles to enable advanced semantic search and clustering capabilities.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">⚡ Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Decoupled Scraping System:</strong> Implementations of headless browser scraping (Puppeteer with stealth plugins) and lightweight HTTP scraping (Cheerio, Got) to efficiently extract content while bypassing bot protection mechanisms.</li>
                        <li><strong>AI-Powered Content Processing Pipeline:</strong> Integrated with the OpenAI SDK to automatically analyze, score, and categorize incoming articles. AI-driven content transformation, including intelligent rewriting.</li>
                        <li><strong>Dynamic Rule & Workflow Engine:</strong> Highly configurable routing rules that map scraped sources to specific AI prompt templates, and finally to designated publication targets.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">🛠️ Technology Stack</h4>
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
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
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
            title: "Zell Go CRM",
            subtitle: "Cliente-Servidor (PWA + Headless CMS REST API)",
            description: "Sistema integral de gestión de clientes y administración interna. Arquitectura PWA mobile-first apoyada por un backend headless CMS.",
            extended: (
                <div className="space-y-4">
                    <p>ZG-CRM is a comprehensive Customer Relationship Management (CRM) and internal business administration system built from end to end. It centralizes sales operations, technical support (ticketing), employee management, inventory control, and process automation.</p>

                    <h4 className="font-bold text-foreground mt-4">🛠️ Technology Stack</h4>

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
                        <li><strong>Deployment (PaaS):</strong> Automated CI/CD pipelines on Railway and Render. Advanced handling of environment variables.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">🚀 Key Features & Achievements</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>End-to-End Management:</strong> Complete flows for sales registration, inventory and asset management, and administrative approvals.</li>
                        <li><strong>Ticketing & Support:</strong> Robust customer service and tracking system, allowing traceability and escalation of technical or user issues.</li>
                        <li><strong>Event-Driven Architecture:</strong> Notification subsystem (web-push) to keep employees informed instantly of critical state changes.</li>
                        <li><strong>Scraping Automation:</strong> Internal Strapi module to periodically scrape external sources and dynamically incorporate data, significantly reducing manual data-entry.</li>
                        <li><strong>Analytics Dashboards:</strong> Comprehensive administrative dashboard built with Recharts, giving management real-time visibility into KPIs and metrics.</li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-4">💡 Impact</h4>
                    <p>The development of ZG-CRM replaced scattered manual processes with a scalable software solution. The decision to use a React PWA architecture substantially improved the user experience (UX) for field workers, while Strapi + PostgreSQL allowed for high iteration speed and flexibility in modeling complex relational databases.</p>
                </div>
            ),
            tags: ["React 18", "TypeScript", "Tailwind CSS", "Strapi", "PostgreSQL", "PWA", "Puppeteer", "Docker"],
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Frontend Projects",
            subtitle: "Interactive UI & Applications",
            description: "Various frontend-focused applications utilizing modern frameworks to build responsive, rich, and performant web properties.",
            extended: "A collection of web applications demonstrating expertise in HTML, CSS, JavaScript, React, and Tailwind. Focused heavily on high-contrast aesthetics, elegant typographic hierarchies, interactive micro-animations (Framer Motion), and responsive design principles.",
            tags: ["React", "CSS", "HTML", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/franGhisoni",
            images: [
                "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80"
            ]
        }
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
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project, i) => (
                    <motion.div
                        variants={item}
                        key={i}
                        onClick={() => setSelectedProject(project)}
                        className="group relative border rounded-lg p-6 bg-background hover:bg-muted/50 hover:border-foreground/30 transition-all flex flex-col h-full cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold font-serif group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-3 text-muted-foreground" onClick={e => e.stopPropagation()}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                                        <Github className="w-5 h-5" />
                                        <span className="sr-only">GitHub</span>
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-muted-foreground mb-4">
                            {project.subtitle}
                        </p>

                        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, j) => (
                                <span key={j} className="text-xs font-medium px-2 py-1 bg-muted/80 text-muted-foreground rounded-md">
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
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-3xl bg-background border shadow-2xl rounded-xl p-6 md:p-8 z-10 overflow-y-auto max-h-[90vh] custom-scrollbar mr-2"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 p-2 rounded-md hover:bg-muted transition-colors"
                            >
                                <X className="w-5 h-5" />
                                <span className="sr-only">Close</span>
                            </button>

                            <h2 className="text-3xl font-bold font-serif mb-2">{selectedProject.title}</h2>
                            <p className="text-lg text-muted-foreground mb-8 pb-4">{selectedProject.subtitle}</p>

                            {selectedProject.images && selectedProject.images.length > 0 && (
                                <ImageCarousel images={selectedProject.images} />
                            )}

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-foreground mb-2 whitespace-nowrap hidden">Overview</h4>
                                    <div className="text-muted-foreground leading-relaxed">
                                        {selectedProject.extended}
                                    </div>
                                </div>

                                <div className="pt-4 border-t">
                                    <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag: string, j: number) => (
                                            <span key={j} className="text-sm font-medium px-3 py-1.5 bg-muted text-foreground rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {selectedProject.github && (
                                    <div className="pt-6">
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
                                        >
                                            <Github className="w-5 h-5" />
                                            View Source / Repo
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
