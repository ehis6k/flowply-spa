import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Layers, Building2, ArrowDown, ArrowUp } from "lucide-react";

type LayerType = "vendor" | "flowply" | "customer" | null;

const layers = [
  {
    id: "vendor" as const,
    title: "AI Vendor",
    subtitle: "The Product",
    icon: Package,
    description: "Builds and maintains the AI product. Provides licensing, updates, and core functionality.",
    items: ["Product Development", "Feature Updates", "Core AI Models", "API Infrastructure"],
    position: "top",
  },
  {
    id: "flowply" as const,
    title: "FlowPly",
    subtitle: "The Operations",
    icon: Layers,
    description: "Manages the day-to-day operations. Handles prompts, monitoring, escalations, and optimization.",
    items: ["Prompt Engineering", "Quality Monitoring", "Escalation Handling", "Performance Optimization"],
    position: "middle",
  },
  {
    id: "customer" as const,
    title: "Enterprise Customer",
    subtitle: "The Process",
    icon: Building2,
    description: "Defines business requirements. Owns the process outcomes and strategic decisions.",
    items: ["Business Requirements", "Strategic Decisions", "Outcome Ownership", "Process Integration"],
    position: "bottom",
  },
];

export function OwnershipDiagram() {
  const [activeLayer, setActiveLayer] = useState<LayerType>(null);

  const getLayerOpacity = (layerId: LayerType) => {
    if (activeLayer === null) return 1;
    if (activeLayer === layerId) return 1;
    return 0.3;
  };

  const getLayerScale = (layerId: LayerType) => {
    if (activeLayer === layerId) return 1.02;
    return 1;
  };

  return (
    <section id="ownership" className="py-24 bg-muted/30">
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
            The Ownership Split
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            FlowPly operates in the middle layer—between AI vendors and enterprise customers. 
            Hover to see what each layer owns.
          </p>
        </motion.div>

        {/* Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="relative flex flex-col gap-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ 
                  opacity: getLayerOpacity(layer.id),
                  scale: getLayerScale(layer.id),
                }}
                className={`
                  relative rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer
                  ${layer.id === "flowply" 
                    ? "bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent shadow-lg" 
                    : "bg-card border border-border shadow-sm"
                  }
                  ${activeLayer === layer.id && layer.id === "flowply" ? "glow-amber" : ""}
                  ${activeLayer === layer.id && layer.id !== "flowply" ? "glow-primary" : ""}
                `}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
              >
                {/* Flow arrows */}
                {index < layers.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex flex-col items-center">
                      <ArrowDown className={`h-5 w-5 ${layer.id === "flowply" ? "text-accent" : "text-muted-foreground"}`} />
                    </div>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`
                    flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
                    ${layer.id === "flowply" 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-primary/10 text-primary"
                    }
                  `}>
                    <layer.icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <h3 className={`text-xl font-bold ${layer.id === "flowply" ? "text-accent" : "text-foreground"}`}>
                        {layer.title}
                      </h3>
                      <span className={`
                        text-sm font-medium px-3 py-1 rounded-full w-fit
                        ${layer.id === "flowply" 
                          ? "bg-accent/20 text-accent" 
                          : "bg-secondary text-muted-foreground"
                        }
                      `}>
                        {layer.subtitle}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {layer.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className={`
                            text-sm px-3 py-1.5 rounded-lg
                            ${layer.id === "flowply"
                              ? "bg-accent/10 text-accent border border-accent/20"
                              : "bg-secondary text-secondary-foreground"
                            }
                          `}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <span>External Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span>FlowPly Manages</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
