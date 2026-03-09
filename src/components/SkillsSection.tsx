import { motion } from 'framer-motion';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {Object.entries(skills).map(([category, items], i) => (
                <motion.div
                    key={i}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    <h3 className="text-xl font-bold font-serif border-b pb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {items.map((skill, j) => (
                            <span
                                key={j}
                                className="px-3 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-md hover:bg-foreground hover:text-background transition-colors cursor-default"
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
