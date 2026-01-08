import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    category: "What We Do",
    items: [
      { text: "Manage AI tool operations daily", included: true },
      { text: "Engineer and optimize prompts", included: true },
      { text: "Monitor quality and performance", included: true },
      { text: "Handle escalations 24/7", included: true },
      { text: "Provide HITL oversight", included: true },
      { text: "Maintain audit trails", included: true },
    ],
  },
  {
    category: "What We Don't Do",
    items: [
      { text: "Build custom AI software", included: false },
      { text: "Sell AI licenses or seats", included: false },
      { text: "Replace your existing tools", included: false },
      { text: "Provide strategy consulting", included: false },
      { text: "Develop proprietary models", included: false },
      { text: "Compete with your vendor", included: false },
    ],
  },
];

export function AntiPitchGrid() {
  return (
    <section id="scope" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clear Scope. No Confusion.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're laser-focused on operations. We don't build software, 
            and we don't sell licenses. Here's exactly what that means.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {comparisons.map((column, colIndex) => (
            <motion.div
              key={column.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: colIndex * 0.15 }}
              className={`
                rounded-2xl p-6 md:p-8
                ${colIndex === 0 
                  ? "bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20" 
                  : "bg-muted/50 border border-border"
                }
              `}
            >
              <h3 className={`
                text-xl font-bold mb-6 flex items-center gap-3
                ${colIndex === 0 ? "text-accent" : "text-muted-foreground"}
              `}>
                {colIndex === 0 ? (
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <X className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
                {column.category}
              </h3>

              <ul className="space-y-4">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + itemIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`
                      flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center
                      ${item.included 
                        ? "bg-accent/20 text-accent" 
                        : "bg-muted text-muted-foreground"
                      }
                    `}>
                      {item.included ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <X className="h-3 w-3" />
                      )}
                    </div>
                    <span className={`
                      text-sm md:text-base
                      ${item.included ? "text-foreground" : "text-muted-foreground"}
                    `}>
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
