import { motion } from "framer-motion";
import { Lock, Database, Users, ClipboardCheck } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "Security basics",
    description: "Least privilege access, audit logging, incident runbooks.",
  },
  {
    icon: Database,
    title: "Data handling",
    description: "GDPR compliant data processing and storage.",
  },
  {
    icon: Users,
    title: "Access control",
    description: "Role-based access control (RBAC) for all systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Change approvals",
    description: "Documented change management with approval workflows.",
  },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enterprise-grade trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Built for teams that take security seriously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
