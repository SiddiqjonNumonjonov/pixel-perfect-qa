import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  GitBranch, 
  Layers, 
  TestTube2, 
  FileSearch,
  Bug,
  Workflow,
  Settings,
  Gauge,
  ClipboardCheck,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Automation Testing",
    icon: Zap,
    skills: [
      "Java",
      "Selenium WebDriver",
      "Test automation framework design",
      "End-to-End test automation",
      "UI regression automation",
    ],
  },
  {
    title: "API Testing",
    icon: FileSearch,
    skills: [
      "REST API testing",
      "Rest Assured",
      "HTTP methods & status codes",
      "Request/response validation",
      "Integration testing",
    ],
  },
  {
    title: "Manual Testing",
    icon: ClipboardCheck,
    skills: [
      "Functional testing",
      "Regression testing",
      "Smoke & sanity testing",
      "Test case design & execution",
      "Bug reporting & verification",
    ],
  },
  {
    title: "Performance Testing",
    icon: Gauge,
    skills: [
      "Load and performance testing",
      "Identifying bottlenecks",
      "Stability testing",
      "Stress testing basics",
    ],
  },
  {
    title: "QA Practices",
    icon: TestTube2,
    skills: [
      "Requirement analysis",
      "Test planning & design",
      "Risk-based testing",
      "Defect lifecycle management",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Settings,
    skills: [
      "Git",
      "SQL",
      "Postman",
      "CI/CD awareness",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for ensuring software quality across the entire development lifecycle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-secondary-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{skill}</span>
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
