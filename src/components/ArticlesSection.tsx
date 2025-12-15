import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Robust E2E Test Suites with Selenium",
    excerpt: "A comprehensive guide to structuring end-to-end tests that are maintainable, reliable, and scalable for enterprise applications.",
    readTime: "8 min read",
    category: "Automation",
  },
  {
    title: "API Testing Best Practices with Rest Assured",
    excerpt: "Learn how to create efficient API test frameworks using Rest Assured, covering authentication, request validation, and response assertions.",
    readTime: "12 min read",
    category: "API Testing",
  },
  {
    title: "The Art of Writing Bug Reports That Get Fixed",
    excerpt: "Effective bug reports are crucial for quick resolution. Discover the elements that make bug reports actionable and valuable.",
    readTime: "5 min read",
    category: "QA Practices",
  },
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights on QA engineering, test automation, and software quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {article.category}
                  </span>
                  <ArrowUpRight 
                    size={18} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" 
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="relative flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={12} />
                  <span>Article</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowUpRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
