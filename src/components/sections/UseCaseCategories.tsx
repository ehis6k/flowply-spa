import { motion } from "framer-motion";
import { Phone, MessageSquare, FileInput, Workflow, Bot, Zap } from "lucide-react";

const useCases = [
  {
    icon: Phone,
    title: "Voice AI",
    description: "Manage voice assistants, call center AI, and speech-to-text workflows.",
    examples: ["Call routing", "Voice transcription", "IVR optimization"],
  },
  {
    icon: MessageSquare,
    title: "Chat & Conversational",
    description: "Run chatbots, customer support AI, and conversational interfaces.",
    examples: ["Support bots", "Sales assistants", "FAQ automation"],
  },
  {
    icon: FileInput,
    title: "Document Intake",
    description: "Handle document processing, OCR, and intelligent data extraction.",
    examples: ["Invoice processing", "Contract review", "Form digitization"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Orchestrate AI-powered business process automation.",
    examples: ["Approval flows", "Data routing", "Task automation"],
  },
  {
    icon: Bot,
    title: "Agent Operations",
    description: "Manage autonomous AI agents and multi-step reasoning systems.",
    examples: ["Research agents", "Analysis bots", "Action automation"],
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Run time-sensitive AI operations with low-latency requirements.",
    examples: ["Live translation", "Stream analysis", "Instant responses"],
  },
];

export function UseCaseCategories() {
  return (
    <section className="py-24 bg-muted/30">
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
            Use Cases We Operate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From voice to documents to autonomous agents—we run the operations 
            layer for any AI tool your organization deploys.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <useCase.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {useCase.description}
              </p>

              {/* Examples */}
              <div className="flex flex-wrap gap-2">
                {useCase.examples.map((example) => (
                  <span
                    key={example}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
