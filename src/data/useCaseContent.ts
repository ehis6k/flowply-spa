import { 
  Headphones, Users, FileText, Database, MessageSquare,
  AlertTriangle, Eye, Clock, TrendingUp, Shield, CheckCircle,
  Phone, Zap, BarChart3, RefreshCcw
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ============================================
// USE CASE DEEP-DIVE PAGE CONTENT
// ============================================

export interface UseCaseSection {
  title: string;
  items: string[];
}

export interface UseCaseKPI {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface UseCasePageContent {
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
  whatBreaks: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: LucideIcon;
    }[];
  };
  risks: {
    title: string;
    description: string;
    items: string[];
  };
  howWeRun: {
    title: string;
    description: string;
    points: string[];
  };
  monitoring: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  kpis: {
    title: string;
    items: UseCaseKPI[];
  };
  ctaTitle: string;
  ctaDescription: string;
}

export const useCasePages: UseCasePageContent[] = [
  {
    slug: "customer-support-automation",
    title: "Customer Support Automation",
    subtitle: "Reliable operations for AI-powered support systems",
    icon: Headphones,
    meta: {
      title: "Customer Support Automation Operations | FlowPly",
      description: "Managed operations for AI-powered customer support. We ensure your support automation runs reliably with proper escalation, monitoring, and incident response.",
    },
    context: {
      title: "The operational challenge",
      description: "AI-powered support automation promises faster resolution times and cost savings. But in production, these systems face real challenges that require operational oversight.",
      points: [
        "Support volume spikes unpredictably, stressing automation capacity",
        "Customer expectations for response quality keep rising",
        "Regulatory requirements for data handling add complexity",
        "Integration with ticketing systems creates fragile dependencies",
        "Edge cases and unusual requests can derail automated responses",
      ],
    },
    whatBreaks: {
      title: "What typically breaks in production",
      description: "Common failures we see in customer support automation deployments:",
      items: [
        {
          title: "Response quality drift",
          description: "AI models produce increasingly off-topic or low-quality responses over time as customer queries evolve.",
          icon: AlertTriangle,
        },
        {
          title: "Escalation failures",
          description: "Complex cases get stuck in automation loops instead of reaching human agents when needed.",
          icon: Phone,
        },
        {
          title: "Integration breakdowns",
          description: "CRM and ticketing system sync issues cause duplicate tickets, lost context, or stale data.",
          icon: RefreshCcw,
        },
        {
          title: "Performance degradation",
          description: "Response times slow during peak hours, or automation stops responding entirely.",
          icon: Clock,
        },
      ],
    },
    risks: {
      title: "Risks & ownership gaps",
      description: "Without proper operational oversight, these issues compound:",
      items: [
        "Customer complaints escalate before anyone notices the automation is failing",
        "No clear ownership when automation produces incorrect responses",
        "Changes deployed without testing break existing workflows",
        "No audit trail for compliance when support interactions are automated",
        "Vendor updates break integrations without warning",
      ],
    },
    howWeRun: {
      title: "How FlowPly runs this in production",
      description: "Our operational approach for customer support automation:",
      points: [
        "24/7 monitoring of response quality metrics and escalation rates",
        "Automated alerts when response patterns deviate from baseline",
        "Clear escalation paths from automation to human agents to operations team",
        "Change management with staging validation before production deployment",
        "Weekly review of edge cases and automation improvement opportunities",
      ],
    },
    monitoring: {
      title: "Monitoring, controls & escalation",
      description: "Specific operational controls for support automation:",
      items: [
        {
          title: "Response quality scoring",
          description: "Continuous sampling and scoring of automated responses against quality benchmarks.",
        },
        {
          title: "Escalation rate tracking",
          description: "Monitoring escalation patterns to detect automation gaps before they impact customers.",
        },
        {
          title: "Integration health checks",
          description: "Real-time monitoring of CRM, ticketing, and knowledge base connections.",
        },
        {
          title: "Customer satisfaction correlation",
          description: "Linking automation performance to actual customer satisfaction metrics.",
        },
      ],
    },
    kpis: {
      title: "KPIs and outcomes",
      items: [
        { label: "Incident response time", value: "<15 min", icon: Clock },
        { label: "Automation uptime", value: "99.9%", icon: TrendingUp },
        { label: "Escalation accuracy", value: "95%+", icon: CheckCircle },
        { label: "Audit coverage", value: "100%", icon: Shield },
      ],
    },
    ctaTitle: "Get an assessment for support automation",
    ctaDescription: "We'll review your current support automation stack and identify operational gaps.",
  },
  {
    slug: "ai-intake-operations",
    title: "AI Intake Operations",
    subtitle: "Reliable operations for sales and lead intake automation",
    icon: Users,
    meta: {
      title: "AI Intake & Sales Automation Operations | FlowPly",
      description: "Managed operations for AI-powered sales intake and lead qualification. Ensure your intake automation runs reliably with proper data sync and escalation.",
    },
    context: {
      title: "The operational challenge",
      description: "Sales intake automation accelerates lead processing and qualification. But production systems need operational oversight to maintain data quality and conversion rates.",
      points: [
        "Lead volume varies dramatically, requiring adaptive scaling",
        "CRM data quality issues compound over time",
        "Multiple lead sources create conflicting duplicate records",
        "Qualification rules need constant tuning as markets shift",
        "Sales team expectations for lead quality keep increasing",
      ],
    },
    whatBreaks: {
      title: "What typically breaks in production",
      description: "Common failures we see in intake automation deployments:",
      items: [
        {
          title: "CRM sync failures",
          description: "Leads get lost, duplicated, or assigned incorrectly due to sync timing issues.",
          icon: RefreshCcw,
        },
        {
          title: "Qualification drift",
          description: "Scoring models become stale as market conditions change, passing unqualified leads to sales.",
          icon: AlertTriangle,
        },
        {
          title: "Enrichment failures",
          description: "Third-party data enrichment services fail silently, leaving leads incomplete.",
          icon: Database,
        },
        {
          title: "Routing breakdowns",
          description: "Leads get stuck in queues or routed to the wrong territories or reps.",
          icon: Zap,
        },
      ],
    },
    risks: {
      title: "Risks & ownership gaps",
      description: "Without proper operational oversight, these issues compound:",
      items: [
        "Lost leads mean lost revenue that's impossible to recover",
        "Dirty CRM data poisons downstream reporting and forecasting",
        "No visibility into why conversion rates are declining",
        "Sales team loses trust in automation and builds workarounds",
        "Compliance issues when lead consent isn't properly tracked",
      ],
    },
    howWeRun: {
      title: "How FlowPly runs this in production",
      description: "Our operational approach for intake automation:",
      points: [
        "Real-time monitoring of lead flow from capture through CRM sync",
        "Duplicate detection and resolution workflows",
        "Qualification score validation against actual conversion outcomes",
        "Change management for routing rules and scoring models",
        "Weekly review of lead quality metrics with actionable insights",
      ],
    },
    monitoring: {
      title: "Monitoring, controls & escalation",
      description: "Specific operational controls for intake automation:",
      items: [
        {
          title: "Lead flow monitoring",
          description: "Track leads from capture through each processing stage to CRM assignment.",
        },
        {
          title: "Sync health tracking",
          description: "Real-time alerts when CRM sync latency or error rates exceed thresholds.",
        },
        {
          title: "Enrichment service health",
          description: "Monitor third-party enrichment API availability and data quality.",
        },
        {
          title: "Conversion correlation",
          description: "Link qualification scores to actual conversion outcomes for model validation.",
        },
      ],
    },
    kpis: {
      title: "KPIs and outcomes",
      items: [
        { label: "Lead processing time", value: "<5 min", icon: Clock },
        { label: "Sync success rate", value: "99.5%+", icon: TrendingUp },
        { label: "Duplicate prevention", value: "98%+", icon: CheckCircle },
        { label: "Data completeness", value: "95%+", icon: BarChart3 },
      ],
    },
    ctaTitle: "Get an assessment for intake automation",
    ctaDescription: "We'll review your current intake and qualification stack and identify operational gaps.",
  },
  {
    slug: "claims-backoffice",
    title: "Claims & Backoffice Workflows",
    subtitle: "Reliable operations for document processing and approval automation",
    icon: FileText,
    meta: {
      title: "Claims & Backoffice Automation Operations | FlowPly",
      description: "Managed operations for document processing and backoffice automation. Ensure your workflows run reliably with proper audit trails and escalation.",
    },
    context: {
      title: "The operational challenge",
      description: "Backoffice and claims automation handles high-stakes document processing. Production systems require strict operational controls for accuracy and compliance.",
      points: [
        "Document quality varies wildly, challenging extraction accuracy",
        "Processing deadlines create pressure for speed over accuracy",
        "Regulatory requirements demand complete audit trails",
        "Exception handling requires human judgment at scale",
        "Multiple stakeholders have different approval authorities",
      ],
    },
    whatBreaks: {
      title: "What typically breaks in production",
      description: "Common failures we see in backoffice automation deployments:",
      items: [
        {
          title: "Extraction errors",
          description: "OCR and document processing produce incorrect data that propagates through workflows.",
          icon: AlertTriangle,
        },
        {
          title: "Approval bottlenecks",
          description: "Workflows stall when approvers are unavailable or routing rules fail.",
          icon: Clock,
        },
        {
          title: "Audit gaps",
          description: "Missing or incomplete audit trails create compliance exposure.",
          icon: Eye,
        },
        {
          title: "Exception overflow",
          description: "Edge cases accumulate faster than humans can process them.",
          icon: RefreshCcw,
        },
      ],
    },
    risks: {
      title: "Risks & ownership gaps",
      description: "Without proper operational oversight, these issues compound:",
      items: [
        "Processing errors lead to financial losses or customer harm",
        "Compliance violations result in regulatory penalties",
        "No clear accountability when automation makes incorrect decisions",
        "SLA breaches damage customer relationships and contracts",
        "Technical debt accumulates as workarounds become permanent",
      ],
    },
    howWeRun: {
      title: "How FlowPly runs this in production",
      description: "Our operational approach for backoffice automation:",
      points: [
        "Continuous monitoring of extraction accuracy and confidence scores",
        "SLA tracking with proactive escalation before deadlines",
        "Complete audit trail maintenance for all automated decisions",
        "Exception queue management with prioritization logic",
        "Change management with impact assessment for workflow modifications",
      ],
    },
    monitoring: {
      title: "Monitoring, controls & escalation",
      description: "Specific operational controls for backoffice automation:",
      items: [
        {
          title: "Extraction quality scoring",
          description: "Continuous validation of document extraction accuracy against ground truth.",
        },
        {
          title: "SLA countdown tracking",
          description: "Real-time monitoring of processing time against commitment deadlines.",
        },
        {
          title: "Approval workflow health",
          description: "Track approval stages and identify bottlenecks before they cause SLA breaches.",
        },
        {
          title: "Exception queue monitoring",
          description: "Proactive management of exception volumes and aging.",
        },
      ],
    },
    kpis: {
      title: "KPIs and outcomes",
      items: [
        { label: "SLA achievement", value: "99%+", icon: CheckCircle },
        { label: "Extraction accuracy", value: "95%+", icon: TrendingUp },
        { label: "Audit completeness", value: "100%", icon: Shield },
        { label: "Exception resolution", value: "<4 hrs", icon: Clock },
      ],
    },
    ctaTitle: "Get an assessment for backoffice automation",
    ctaDescription: "We'll review your current document processing and workflow stack and identify operational gaps.",
  },
  {
    slug: "data-enrichment",
    title: "Data Enrichment & Routing",
    subtitle: "Reliable operations for real-time data validation and routing automation",
    icon: Database,
    meta: {
      title: "Data Enrichment & Routing Operations | FlowPly",
      description: "Managed operations for data enrichment and intelligent routing. Ensure your data pipelines run reliably with proper monitoring and quality controls.",
    },
    context: {
      title: "The operational challenge",
      description: "Data enrichment and routing automation keeps business systems synchronized and enhanced. Production systems require operational oversight to maintain data quality.",
      points: [
        "Third-party data sources have varying reliability and freshness",
        "Routing rules grow complex as business logic evolves",
        "Data quality issues compound as they flow through systems",
        "Rate limits and API quotas create hidden dependencies",
        "Schema changes in upstream systems break downstream processes",
      ],
    },
    whatBreaks: {
      title: "What typically breaks in production",
      description: "Common failures we see in data enrichment deployments:",
      items: [
        {
          title: "Source degradation",
          description: "Third-party APIs slow down, return stale data, or fail without clear error signals.",
          icon: AlertTriangle,
        },
        {
          title: "Schema drift",
          description: "Upstream data format changes break parsing and routing logic.",
          icon: RefreshCcw,
        },
        {
          title: "Rate limit violations",
          description: "Burst traffic exceeds API quotas, causing data loss or delays.",
          icon: Zap,
        },
        {
          title: "Routing misconfigurations",
          description: "Data flows to wrong destinations after rule changes or source updates.",
          icon: Database,
        },
      ],
    },
    risks: {
      title: "Risks & ownership gaps",
      description: "Without proper operational oversight, these issues compound:",
      items: [
        "Data quality degradation goes unnoticed until business decisions suffer",
        "No visibility into which enrichment sources are actually being used",
        "Routing changes create cascading failures across dependent systems",
        "Cost overruns from inefficient API usage or failed retries",
        "Compliance exposure when data lineage is unclear",
      ],
    },
    howWeRun: {
      title: "How FlowPly runs this in production",
      description: "Our operational approach for data enrichment and routing:",
      points: [
        "Continuous monitoring of enrichment source health and data quality",
        "Proactive rate limit management with burst protection",
        "Schema validation at integration boundaries",
        "Change management for routing rules with rollback capability",
        "Data lineage tracking for compliance and debugging",
      ],
    },
    monitoring: {
      title: "Monitoring, controls & escalation",
      description: "Specific operational controls for data enrichment:",
      items: [
        {
          title: "Source health monitoring",
          description: "Track response times, error rates, and data quality for all enrichment sources.",
        },
        {
          title: "Quota management",
          description: "Real-time tracking of API usage against limits with proactive throttling.",
        },
        {
          title: "Data quality validation",
          description: "Continuous sampling and validation of enriched data against quality benchmarks.",
        },
        {
          title: "Routing verification",
          description: "Automated validation that data reaches intended destinations correctly.",
        },
      ],
    },
    kpis: {
      title: "KPIs and outcomes",
      items: [
        { label: "Enrichment success rate", value: "99%+", icon: TrendingUp },
        { label: "Data freshness", value: "<1 hr", icon: Clock },
        { label: "Routing accuracy", value: "99.9%", icon: CheckCircle },
        { label: "API cost optimization", value: "20%+", icon: BarChart3 },
      ],
    },
    ctaTitle: "Get an assessment for data operations",
    ctaDescription: "We'll review your current data enrichment and routing stack and identify operational gaps.",
  },
  {
    slug: "voice-agent-operations",
    title: "Voice Agent Operations",
    subtitle: "Reliable operations for conversational AI voice systems",
    icon: MessageSquare,
    meta: {
      title: "Voice Agent Operations | FlowPly",
      description: "Managed operations for AI voice agents. Ensure your voice automation runs reliably with proper quality monitoring, escalation, and incident response.",
    },
    context: {
      title: "The operational challenge",
      description: "Voice agents handle real-time customer conversations at scale. Production systems require exceptional operational oversight due to the immediate customer impact.",
      points: [
        "Real-time conversations have zero tolerance for latency or errors",
        "Voice quality issues create immediate customer frustration",
        "Regulatory requirements for call recording and consent",
        "Integration with telephony systems adds complexity",
        "Escalation to human agents must be seamless",
      ],
    },
    whatBreaks: {
      title: "What typically breaks in production",
      description: "Common failures we see in voice agent deployments:",
      items: [
        {
          title: "Latency spikes",
          description: "Processing delays create awkward pauses that frustrate callers.",
          icon: Clock,
        },
        {
          title: "Recognition failures",
          description: "Speech-to-text struggles with accents, background noise, or domain vocabulary.",
          icon: AlertTriangle,
        },
        {
          title: "Escalation failures",
          description: "Handoffs to human agents fail, leaving callers stuck or disconnected.",
          icon: Phone,
        },
        {
          title: "Context loss",
          description: "Conversation history doesn't transfer correctly during escalation.",
          icon: RefreshCcw,
        },
      ],
    },
    risks: {
      title: "Risks & ownership gaps",
      description: "Without proper operational oversight, these issues compound:",
      items: [
        "Customer experience degrades with no visibility until complaints arrive",
        "Call abandonment rates increase without clear cause attribution",
        "Compliance violations from missing recordings or consent failures",
        "Agent workload spikes when automation fails silently",
        "No ability to replay and debug problematic conversations",
      ],
    },
    howWeRun: {
      title: "How FlowPly runs this in production",
      description: "Our operational approach for voice agent operations:",
      points: [
        "Real-time latency monitoring with sub-second alerting",
        "Continuous voice quality scoring and recognition accuracy tracking",
        "Seamless escalation monitoring with context preservation verification",
        "Call recording integrity checks for compliance",
        "Post-call analysis for continuous improvement insights",
      ],
    },
    monitoring: {
      title: "Monitoring, controls & escalation",
      description: "Specific operational controls for voice agents:",
      items: [
        {
          title: "Real-time latency monitoring",
          description: "Track response times in-call with immediate alerting for degradation.",
        },
        {
          title: "Recognition quality scoring",
          description: "Continuous accuracy measurement for speech-to-text across caller segments.",
        },
        {
          title: "Escalation success tracking",
          description: "Monitor handoff completion rates and context transfer accuracy.",
        },
        {
          title: "Compliance verification",
          description: "Automated checks for recording availability, consent capture, and retention.",
        },
      ],
    },
    kpis: {
      title: "KPIs and outcomes",
      items: [
        { label: "Response latency", value: "<500ms", icon: Clock },
        { label: "Recognition accuracy", value: "95%+", icon: TrendingUp },
        { label: "Escalation success", value: "99%+", icon: CheckCircle },
        { label: "Recording compliance", value: "100%", icon: Shield },
      ],
    },
    ctaTitle: "Get an assessment for voice operations",
    ctaDescription: "We'll review your current voice agent stack and identify operational gaps.",
  },
];

// Helper function to get a use case by slug
export function getUseCaseBySlug(slug: string): UseCasePageContent | undefined {
  return useCasePages.find((uc) => uc.slug === slug);
}
