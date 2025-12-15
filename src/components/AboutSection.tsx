import { motion } from "framer-motion";
import { Shield, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Committed to delivering reliable, bug-free software through rigorous testing methodologies.",
  },
  {
    icon: Target,
    title: "Detail Oriented",
    description: "Meticulous attention to edge cases and user scenarios that others might overlook.",
  },
  {
    icon: Zap,
    title: "Automation Driven",
    description: "Leveraging automation to increase test coverage and accelerate release cycles.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a dedicated QA Engineer with a passion for ensuring software excellence. 
            My approach combines thorough manual testing with strategic automation to 
            deliver products that users can trust. I believe that quality is not just 
            about finding bugs—it's about preventing them and building confidence in 
            every release.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
