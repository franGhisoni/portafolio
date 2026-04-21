import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export const SkillsSection = () => {
    const skills = {
        "Backend & Architecture": [
            "TypeScript", "Node.js", "Express", "Spring", "Python",
            "Microservices", "Async Event Architecture",
            "Distributed Systems", "Design Patterns", "Big O"
        ],
        "Databases & Tools": [
            "MySQL", "MSSQL", "MongoDB", "NoSQL",
            "Redis", "Kafka", "BullMQ", "Supabase", "pgvector"
        ],
        "Frontend & Languages": [
            "TypeScript", "JavaScript", "Java",
            "React", "HTML", "CSS", "Tailwind CSS"
        ],
        "Methodologies & Others": [
            "OOP", "Git", "WebScraping", "Agile", "Scrum", "Project Management"
        ]
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {Object.entries(skills).map(([category, items], i) => (
                <motion.div
                    key={i}
                    className="space-y-5"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                >
                    <h3 className="text-lg font-bold font-serif border-b border-border pb-3 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {items.map((skill, j) => (
                            <span
                                key={j}
                                className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-md hover:bg-accent hover:text-background transition-editorial cursor-default tracking-wide"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
