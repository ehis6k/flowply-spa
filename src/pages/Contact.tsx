import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Calendar, Shield } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageMeta } from "@/components/shared/PageMeta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactContent, pageMeta, trustMetrics } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company name must be less than 100 characters"),
  systemsCount: z.string().min(1, "Please select number of systems"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const { trackContactSubmit } = useAnalytics();
  
  const planParam = searchParams.get("plan");
  
  const getInitialSystemsCount = () => {
    switch (planParam) {
      case "starter": return "1";
      case "scale": return "3-5";
      case "enterprise": return "enterprise";
      default: return "";
    }
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      systemsCount: getInitialSystemsCount(),
      message: "",
    },
  });

  useEffect(() => {
    if (planParam) {
      form.setValue("systemsCount", getInitialSystemsCount());
    }
  }, [planParam]);

  const onSubmit = (data: ContactFormData) => {
    // Spam protection: honeypot check
    if (honeypot) {
      console.log("Spam detected");
      return;
    }
    
    // Track the submission
    trackContactSubmit(data.systemsCount);
    
    // For now, just show confirmation (no backend)
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={pageMeta.contact.title} description={pageMeta.contact.description} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {contactContent.heading}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {contactContent.subheading}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card rounded-2xl p-8 border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {contactContent.confirmation.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {contactContent.confirmation.message}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Honeypot - hidden from users */}
                      <div className="hidden" aria-hidden="true">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          name="website"
                          type="text"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{contactContent.formFields.name.label}</FormLabel>
                            <FormControl>
                              <Input placeholder={contactContent.formFields.name.placeholder} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{contactContent.formFields.email.label}</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={contactContent.formFields.email.placeholder} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{contactContent.formFields.company.label}</FormLabel>
                            <FormControl>
                              <Input placeholder={contactContent.formFields.company.placeholder} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="systemsCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{contactContent.formFields.systemsCount.label}</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select number of systems" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {contactContent.formFields.systemsCount.options.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{contactContent.formFields.message.label}</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder={contactContent.formFields.message.placeholder} 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" variant="hero-accent" size="lg" className="w-full group">
                        <Calendar className="h-5 w-5 mr-2" />
                        Request assessment
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>

                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Shield className="h-3 w-3" />
                        Your information is secure and will never be shared.
                      </p>
                    </form>
                  </Form>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="py-12 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-8">
                Trusted by teams running mission-critical automations
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                {trustMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
