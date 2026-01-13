import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageMeta } from "@/components/shared/PageMeta";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta 
        title="Terms of Service | FlowPly" 
        description="FlowPly's terms of service outline the rules and regulations for using our managed operations platform." 
      />
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: January 2026</p>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using FlowPly's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground">
                FlowPly provides managed operations services for AI SaaS platforms, including monitoring, 
                incident response, human-in-the-loop workflows, and automation management. The specific 
                services provided will be outlined in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Service Level Agreements</h2>
              <p className="text-muted-foreground mb-4">
                FlowPly commits to the following service levels:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>99.9% uptime guarantee for managed services</li>
                <li>15-minute response time for critical incidents (24/7)</li>
                <li>4-hour response time for non-critical issues during business hours</li>
                <li>Monthly reporting and quarterly business reviews</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Customer Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a customer, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us promptly of any security concerns</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Respond to escalations within agreed timeframes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All intellectual property rights in the FlowPly platform and services remain with FlowPly. 
                Customer data and configurations remain the property of the customer. FlowPly provides a 
                limited, non-exclusive license to use our services during the term of your agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                FlowPly's liability is limited to the amount paid for services in the 12 months preceding 
                the claim. We are not liable for indirect, incidental, special, consequential, or punitive 
                damages, or loss of profits or revenues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate this agreement with 30 days written notice. Upon termination, 
                FlowPly will provide a transition period and data export assistance as outlined in your 
                service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@flowply.com" className="text-accent hover:underline">
                  legal@flowply.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
