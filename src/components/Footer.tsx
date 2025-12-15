import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Siddiqjon Numonjonov. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed with precision, built with purpose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
