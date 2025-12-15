import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  GitBranch, 
  Layers, 
  TestTube2, 
  FileSearch,
  Bug,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Automation",
    skills: [
      { name: "Java", icon: Code2 },
      { name: "Selenium", icon: Layers },
    ],
  },
  {
    title: "API Testing",
    skills: [
      { name: "Rest Assured", icon: FileSearch },
    ],
  },
  {
    title: "Testing Types",
    skills: [
      { name: "End-to-End", icon: Workflow },
      { name: "Integration", icon: Layers },
      { name: "Regression", icon: TestTube2 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "SQL", icon: Database },
      { name: "Git", icon: GitBranch },
    ],
  },
  {
    title: "QA Practices",
    skills: [
      { name: "Test Design", icon: TestTube2 },
      { name: "Bug Reporting", icon: Bug },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <skill.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
