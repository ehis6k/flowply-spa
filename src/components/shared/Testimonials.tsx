import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "FlowPly reduced our incident response time by 80%. Their ops team handles everything while we focus on our product.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechScale",
    avatar: "SC",
  },
  {
    quote: "We went from chaos to calm. Our automations run reliably, and FlowPly catches issues before they impact customers.",
    author: "Marcus Johnson",
    role: "Head of Operations",
    company: "DataFlow Inc",
    avatar: "MJ",
  },
  {
    quote: "The human-in-the-loop controls give us confidence that critical decisions always have proper oversight.",
    author: "Emily Rodriguez",
    role: "VP Engineering",
    company: "Automata Labs",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Loved by ops teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            See what teams are saying about FlowPly
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Quote className="h-4 w-4 text-accent-foreground" />
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 mt-2 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-amber-dark flex items-center justify-center text-accent-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
