import { motion } from "framer-motion";
import { 
  Cloud, 
  Zap, 
  Database, 
  MessageSquare, 
  Mail, 
  BarChart3,
  GitBranch,
  Shield,
  Workflow,
  Bot,
  Calendar,
  CreditCard
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface VendorLogo {
  name: string;
  icon: LucideIcon;
}

const vendors: VendorLogo[] = [
  { name: "OpenAI", icon: Bot },
  { name: "Salesforce", icon: Cloud },
  { name: "Zapier", icon: Zap },
  { name: "HubSpot", icon: Database },
  { name: "Slack", icon: MessageSquare },
  { name: "Mailchimp", icon: Mail },
  { name: "Analytics", icon: BarChart3 },
  { name: "GitHub", icon: GitBranch },
  { name: "Auth0", icon: Shield },
  { name: "n8n", icon: Workflow },
  { name: "Calendly", icon: Calendar },
  { name: "Stripe", icon: CreditCard },
];

export function VendorLogos() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground text-center mb-10">
          Seamlessly integrates with your existing tools
        </p>
        
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          {/* Scrolling container */}
          <motion.div 
            className="flex gap-12"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* Double the vendors for seamless loop */}
            {[...vendors, ...vendors].map((vendor, index) => (
              <div
                key={`${vendor.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-md">
                  <vendor.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground whitespace-nowrap">
                    {vendor.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
