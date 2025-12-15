import { motion } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Davrbank",
    role: "QA Engineer",
    period: "September 2025 – Present",
    current: true,
    description: "Leading quality assurance efforts for banking applications, implementing comprehensive test strategies for financial software systems.",
  },
  {
    company: "Innasoft",
    role: "QA Engineer",
    period: "April 2025 – September 2025",
    current: false,
    description: "Developed and maintained automated test suites, collaborated with development teams to ensure product quality and reliability.",
  },
  {
    company: "DanAds",
    role: "QA Engineer",
    period: "November 2024 – April 2025",
    current: false,
    description: "Conducted end-to-end testing for advertising platform features, created detailed test documentation and bug reports.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering quality across diverse industries and technologies.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-0 md:left-1/2 w-3 h-3 rounded-full border-2 md:-translate-x-1/2 ${
                    exp.current 
                      ? "bg-primary border-primary shadow-lg shadow-primary/50" 
                      : "bg-background border-muted-foreground"
                  }`}
                />

                <div 
                  className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        Current
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Building2 size={18} className="text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                  </div>

                  <p className="text-sm font-medium text-secondary-foreground mb-3">
                    {exp.role}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
