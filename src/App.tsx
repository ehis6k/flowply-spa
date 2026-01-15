import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ScrollToHash } from "@/components/shared/ScrollToHash";
import Index from "./pages/Index";
import Model from "./pages/Model";
import Scope from "./pages/Scope";
import Controls from "./pages/Controls";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Use Case Pages
import CustomerSupportAutomation from "./pages/use-cases/CustomerSupportAutomation";
import AIIntakeOperations from "./pages/use-cases/AIIntakeOperations";
import ClaimsBackoffice from "./pages/use-cases/ClaimsBackoffice";
import DataEnrichment from "./pages/use-cases/DataEnrichment";
import VoiceAgentOperations from "./pages/use-cases/VoiceAgentOperations";

// Integration Pages
import OpenAIOperations from "./pages/integrations/OpenAIOperations";
import SalesforceAutomation from "./pages/integrations/SalesforceAutomation";
import ZapierProductionOps from "./pages/integrations/ZapierProductionOps";

// Insights Pages
import Insights from "./pages/Insights";
import WhatBreaksAfterPilot from "./pages/insights/WhatBreaksAfterPilot";
import WhyAutomationsFailWithoutOwnership from "./pages/insights/WhyAutomationsFailWithoutOwnership";
import IncidentsInVoiceAgents from "./pages/insights/IncidentsInVoiceAgents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash offset={96} />
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/model" element={<Model />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/vendors" element={<Navigate to="/stack" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Use Case Routes */}
          <Route path="/use-cases" element={<Navigate to="/scope#use-cases" replace />} />
          <Route path="/use-cases/customer-support-automation" element={<CustomerSupportAutomation />} />
          <Route path="/use-cases/ai-intake-operations" element={<AIIntakeOperations />} />
          <Route path="/use-cases/claims-backoffice" element={<ClaimsBackoffice />} />
          <Route path="/use-cases/data-enrichment" element={<DataEnrichment />} />
          <Route path="/use-cases/voice-agent-operations" element={<VoiceAgentOperations />} />
          
          {/* Integration Routes */}
          <Route path="/integrations" element={<Navigate to="/stack" replace />} />
          <Route path="/integrations/openai-operations" element={<OpenAIOperations />} />
          <Route path="/integrations/salesforce-automation" element={<SalesforceAutomation />} />
          <Route path="/integrations/zapier-production-ops" element={<ZapierProductionOps />} />
          
          {/* Insights Routes */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/what-breaks-after-ai-pilot" element={<WhatBreaksAfterPilot />} />
          <Route path="/insights/why-ai-automations-fail-without-ownership" element={<WhyAutomationsFailWithoutOwnership />} />
          <Route path="/insights/incidents-in-voice-agents" element={<IncidentsInVoiceAgents />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
