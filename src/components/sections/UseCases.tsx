import { motion } from "framer-motion";
import { Headphones, Users, FileText, Database, MessageSquare, ArrowRight } from "lucide-react";

const useCases = [
  { icon: Headphones, title: "Customer support automation" },
  { icon: Users, title: "Sales & intake automation" },
  { icon: FileText, title: "Claims / backoffice workflows" },
  { icon: Database, title: "Data enrichment & routing" },
  { icon: MessageSquare, title: "Voice/Chat agent operations" },
];

export function UseCases() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Use cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From prototype to production ops.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary text-foreground flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                <useCase.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground flex-1">
                {useCase.title}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
