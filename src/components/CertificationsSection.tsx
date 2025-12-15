import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "ISTQB Certified Tester",
    level: "Foundation Level",
    issuer: "ISTQB",
    year: "2024",
    status: "Active",
  },
  {
    title: "Java Programming",
    level: "Professional Certificate",
    issuer: "Oracle",
    year: "2024",
    status: "Active",
  },
  {
    title: "API Testing with Rest Assured",
    level: "Completion Certificate",
    issuer: "Udemy",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Selenium WebDriver with Java",
    level: "Advanced Certificate",
    issuer: "Udemy",
    year: "2024",
    status: "Completed",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating expertise in testing methodologies and tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={14} className="text-primary" />
                  <span className="text-xs font-medium text-primary">{cert.status}</span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-1 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  {cert.level}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
