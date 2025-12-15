import { motion } from "framer-motion";
import { Linkedin, Phone, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "siddiqjon-numonjonov",
    href: "https://www.linkedin.com/in/siddiqjon-numonjonov/",
    icon: Linkedin,
  },
  {
    label: "Phone",
    value: "+998 88 712 28 29",
    href: "tel:+998887122829",
    icon: Phone,
  },
  {
    label: "Telegram",
    value: "@Siddiqjon_Nomonjonov",
    href: "https://t.me/Siddiqjon_Nomonjonov",
    icon: Send,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Interested in discussing QA strategies, collaboration opportunities, 
            or just want to connect? I'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {contact.label}
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:siddiqjon@example.com">
                <Mail size={18} />
                Send a Message
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
