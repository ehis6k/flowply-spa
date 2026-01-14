import { 
  Brain, Workflow, Server,
  AlertTriangle, RefreshCcw, Shield, Clock, Eye, Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ============================================
// INTEGRATION PAGE CONTENT
// ============================================

export interface IntegrationPageContent {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  meta: {
    title: string;
    description: string;
  };
  context: {
    title: string;
    description: string;
    points: string[];
  };
  failures: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: LucideIcon;
    }[];
  };
  ownership: {
    title: string;
    description: string;
    flowply: string[];
    customer: string[];
  };
  monitoring: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  howWeFit: {
    title: string;
    description: string;
    points: string[];
  };
  ctaTitle: string;
  ctaDescription: string;
}

export const integrationPages: IntegrationPageContent[] = [
  {
    slug: "openai-operations",
    title: "OpenAI Operations",
    subtitle: "Production operations for OpenAI-powered systems",
    icon: Brain,
    meta: {
      title: "OpenAI Operations | FlowPly",
      description: "Managed operations for OpenAI-powered applications. We monitor, maintain, and operate your GPT integrations in production.",
    },
    context: {
      title: "Production challenges with OpenAI",
      description: "OpenAI APIs power many production AI applications. But operating them reliably requires more than just API integration.",
      points: [
        "Model behavior can change with API updates without warning",
        "Rate limits and quota management require proactive monitoring",
        "Cost tracking across multiple use cases is complex",
        "Response quality varies with prompt engineering changes",
        "Latency spikes impact user experience during peak usage",
      ],
    },
    failures: {
      title: "Common production failures",
      description: "What we see in OpenAI-powered systems without proper operations:",
      items: [
        {
          title: "Silent model degradation",
          description: "Model updates change behavior in ways that affect output quality without clear signals.",
          icon: AlertTriangle,
        },
        {
          title: "Rate limit exhaustion",
          description: "Burst traffic exceeds quotas, causing request failures and degraded service.",
          icon: Zap,
        },
        {
          title: "Cost overruns",
          description: "Token usage grows unexpectedly due to prompt drift or increased volume.",
          icon: RefreshCcw,
        },
        {
          title: "Latency violations",
          description: "API response times exceed acceptable thresholds during peak periods.",
          icon: Clock,
        },
      ],
    },
    ownership: {
      title: "Ownership boundaries",
      description: "Clear responsibilities for OpenAI operations:",
      flowply: [
        "API health monitoring and alerting",
        "Rate limit management and quota tracking",
        "Cost monitoring and anomaly detection",
        "Response quality sampling and scoring",
        "Incident response for API issues",
        "Change management for prompt updates",
      ],
      customer: [
        "Prompt engineering and design",
        "Business logic and use case definition",
        "OpenAI account and billing relationship",
        "Feature roadmap and priorities",
        "End-user communication",
      ],
    },
    monitoring: {
      title: "Monitoring & change management",
      description: "How we operate your OpenAI integrations:",
      items: [
        {
          title: "API health monitoring",
          description: "Real-time tracking of response times, error rates, and availability.",
        },
        {
          title: "Cost tracking",
          description: "Token usage monitoring with alerts for unusual consumption patterns.",
        },
        {
          title: "Quality sampling",
          description: "Continuous sampling of responses to detect quality drift.",
        },
        {
          title: "Version management",
          description: "Controlled rollout of model version changes with rollback capability.",
        },
      ],
    },
    howWeFit: {
      title: "How FlowPly fits",
      description: "We operate your OpenAI integrations without custom development:",
      points: [
        "We monitor your existing OpenAI implementations",
        "We alert on issues before they impact users",
        "We manage prompt changes with proper staging and validation",
        "We track costs and optimize token usage",
        "We provide operational reports for business review",
      ],
    },
    ctaTitle: "Get an assessment for OpenAI operations",
    ctaDescription: "We'll review your OpenAI implementation and identify operational gaps.",
  },
  {
    slug: "salesforce-automation",
    title: "Salesforce Automation",
    subtitle: "Production operations for Salesforce-connected workflows",
    icon: Server,
    meta: {
      title: "Salesforce Automation Operations | FlowPly",
      description: "Managed operations for Salesforce automation and integrations. We ensure your Salesforce workflows run reliably in production.",
    },
    context: {
      title: "Production challenges with Salesforce",
      description: "Salesforce automations power critical business processes. Operating them reliably requires dedicated operational oversight.",
      points: [
        "Apex governor limits create hard boundaries for automation scale",
        "Sandbox and production sync issues cause deployment problems",
        "Integration users and connected apps require credential management",
        "Bulk operations can timeout or hit DML limits unexpectedly",
        "Platform updates introduce breaking changes regularly",
      ],
    },
    failures: {
      title: "Common production failures",
      description: "What we see in Salesforce automation without proper operations:",
      items: [
        {
          title: "Governor limit violations",
          description: "Automations hit Apex limits and fail during high-volume periods.",
          icon: AlertTriangle,
        },
        {
          title: "Sync breakdowns",
          description: "External system integrations fail silently, creating data gaps.",
          icon: RefreshCcw,
        },
        {
          title: "Permission issues",
          description: "User permission changes break automation access unexpectedly.",
          icon: Shield,
        },
        {
          title: "Flow failures",
          description: "Process Builder and Flow errors accumulate without visibility.",
          icon: Eye,
        },
      ],
    },
    ownership: {
      title: "Ownership boundaries",
      description: "Clear responsibilities for Salesforce operations:",
      flowply: [
        "Automation health monitoring and alerting",
        "Error log analysis and incident response",
        "Integration connection monitoring",
        "Limit usage tracking and proactive warnings",
        "Change management for Flow and Process updates",
        "Credential rotation and access auditing",
      ],
      customer: [
        "Salesforce admin and business logic",
        "Object and field configuration",
        "Salesforce licensing and account relationship",
        "User management and permissions",
        "Feature roadmap and priorities",
      ],
    },
    monitoring: {
      title: "Monitoring & change management",
      description: "How we operate your Salesforce automations:",
      items: [
        {
          title: "Error log monitoring",
          description: "Continuous tracking of Apex errors, Flow failures, and integration issues.",
        },
        {
          title: "Limit tracking",
          description: "Proactive monitoring of governor limit usage with early warnings.",
        },
        {
          title: "Integration health",
          description: "Real-time status of connected apps and external system connections.",
        },
        {
          title: "Deployment validation",
          description: "Staging validation and controlled rollout for automation changes.",
        },
      ],
    },
    howWeFit: {
      title: "How FlowPly fits",
      description: "We operate your Salesforce automations without custom development:",
      points: [
        "We monitor your existing Flows, Apex, and integrations",
        "We alert on errors and limit issues before they impact users",
        "We manage changes with proper sandbox testing",
        "We track integration health across connected systems",
        "We provide operational reports for admin review",
      ],
    },
    ctaTitle: "Get an assessment for Salesforce operations",
    ctaDescription: "We'll review your Salesforce automation and identify operational gaps.",
  },
  {
    slug: "zapier-production-ops",
    title: "Zapier Production Ops",
    subtitle: "Production operations for Zapier-powered automation",
    icon: Workflow,
    meta: {
      title: "Zapier Production Operations | FlowPly",
      description: "Managed operations for Zapier automation at scale. We ensure your Zaps run reliably in production with proper monitoring and incident response.",
    },
    context: {
      title: "Production challenges with Zapier",
      description: "Zapier enables rapid automation deployment. But scaling Zaps in production requires operational oversight that the platform doesn't provide.",
      points: [
        "Task limits and billing thresholds need proactive management",
        "Zap errors can go unnoticed for days without monitoring",
        "Connected app credentials expire and cause silent failures",
        "Complex multi-step Zaps have hidden failure points",
        "No built-in staging or change management capabilities",
      ],
    },
    failures: {
      title: "Common production failures",
      description: "What we see in Zapier automation without proper operations:",
      items: [
        {
          title: "Silent Zap failures",
          description: "Zaps error out repeatedly with no notification to business stakeholders.",
          icon: AlertTriangle,
        },
        {
          title: "Credential expiration",
          description: "OAuth tokens expire and break Zaps without warning.",
          icon: Shield,
        },
        {
          title: "Task exhaustion",
          description: "Monthly task limits hit unexpectedly, stopping all automation.",
          icon: Zap,
        },
        {
          title: "Data quality issues",
          description: "Malformed data from source apps causes downstream failures.",
          icon: RefreshCcw,
        },
      ],
    },
    ownership: {
      title: "Ownership boundaries",
      description: "Clear responsibilities for Zapier operations:",
      flowply: [
        "Zap health monitoring and error alerting",
        "Task usage tracking and limit management",
        "Credential health monitoring",
        "Error pattern analysis and recommendations",
        "Change management for Zap modifications",
        "Incident response for automation failures",
      ],
      customer: [
        "Zap design and business logic",
        "Zapier account and billing",
        "Connected app relationships",
        "Priority and feature decisions",
        "End-user communication",
      ],
    },
    monitoring: {
      title: "Monitoring & change management",
      description: "How we operate your Zapier automation:",
      items: [
        {
          title: "Zap health dashboard",
          description: "Real-time status of all Zaps with error rates and success metrics.",
        },
        {
          title: "Task usage tracking",
          description: "Proactive monitoring of task consumption against plan limits.",
        },
        {
          title: "Credential monitoring",
          description: "Tracking of connected app auth status with expiration warnings.",
        },
        {
          title: "Change validation",
          description: "Testing and validation process before Zap modifications go live.",
        },
      ],
    },
    howWeFit: {
      title: "How FlowPly fits",
      description: "We operate your Zapier automation without custom development:",
      points: [
        "We monitor all your Zaps from a single operations view",
        "We alert on errors before they accumulate",
        "We track task usage and prevent limit surprises",
        "We manage credential health across connected apps",
        "We provide operational reports for business review",
      ],
    },
    ctaTitle: "Get an assessment for Zapier operations",
    ctaDescription: "We'll review your Zapier automation and identify operational gaps.",
  },
];

// Helper function to get an integration by slug
export function getIntegrationBySlug(slug: string): IntegrationPageContent | undefined {
  return integrationPages.find((i) => i.slug === slug);
}
