import { motion } from "framer-motion";
import { ArrowRight, Handshake, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Handshake,
    title: "White-Label Operations",
    description: "We operate under your brand. Your customers see seamless support, you retain the relationship.",
  },
  {
    icon: TrendingUp,
    title: "Reduce Churn",
    description: "Customers who struggle with AI operations churn. We eliminate that friction point.",
  },
  {
    icon: Users,
    title: "Scale Without Headcount",
    description: "Deploy to more enterprise clients without scaling your own support and CSM teams.",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Value",
    description: "Get customers from signed contract to production outcomes in weeks, not months.",
  },
];

export function VendorPartnerSection() {
  return (
    <section id="vendors" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                For AI Vendors
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Partner Track: Extend Your Enterprise Reach
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Your product is great. But enterprise customers need more than a product—they 
                need someone to run it. Partner with FlowPly to offer managed operations as 
                part of your enterprise offering.
              </p>
              <Button 
                variant="accent" 
                size="lg"
                className="group"
              >
                Explore Partnership
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-foreground/5 backdrop-blur rounded-xl p-5 border border-primary-foreground/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-3">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
