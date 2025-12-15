import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Davrbank",
    role: "Middle Full Stack QA Engineer",
    period: "September 2025 – Present",
    current: true,
    responsibilities: [
      "Responsible for quality assurance of banking systems with high reliability requirements",
      "Designed and maintained end-to-end test scenarios for critical business flows",
      "Automated UI testing using Java and Selenium",
      "Performed advanced API testing using Rest Assured",
      "Conducted performance testing to evaluate system stability under load",
      "Ensured secure and consistent system behavior through thorough validation",
      "Actively participated in release validation and post-deployment checks",
    ],
  },
  {
    company: "Innasoft",
    role: "QA Engineer",
    period: "April 2025 – September 2025",
    current: false,
    responsibilities: [
      "Took ownership of functional and regression testing for multiple features",
      "Designed test scenarios for backend and API layers",
      "Executed API testing to validate integrations and data consistency",
      "Verified fixes and ensured high-quality delivery in fast-paced development cycles",
      "Improved test coverage by identifying edge cases and risk areas",
      "Worked closely with cross-functional teams to maintain product quality",
    ],
  },
  {
    company: "DanAds",
    role: "Full Stack QA Engineer",
    period: "November 2024 – April 2025",
    current: false,
    responsibilities: [
      "Performed end-to-end testing across web applications to ensure stable business flows",
      "Designed and executed manual and automated test cases based on requirements",
      "Automated UI test scenarios using Java and Selenium",
      "Conducted API testing using Rest Assured, validating response codes, schemas, and business logic",
      "Actively collaborated with developers to identify, report, and verify defects",
      "Participated in regression testing before releases to ensure system stability",
    ],
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
            Delivering quality across banking, advertising, and software industries with measurable impact.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                      <p className="text-sm font-medium text-primary">{exp.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      Current
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
