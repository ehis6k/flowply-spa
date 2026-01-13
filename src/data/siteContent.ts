import { 
  ClipboardCheck, Shield, TrendingUp, Headphones, Users, FileText, 
  Database, MessageSquare, TrendingDown, Zap, BarChart3, Activity, 
  Brain, Workflow, Lock, AlertTriangle, Phone, Eye, UserCheck, 
  GitBranch, FileSearch, Plug, RefreshCcw, CheckCircle, Server,
  type LucideIcon
} from "lucide-react";

// ============================================
// NAVIGATION
// ============================================
export interface NavItem {
  label: string;
  href: string;
  anchor?: string;
}

export const navItems: NavItem[] = [
  { label: "Model", href: "/model" },
  { label: "Scope", href: "/scope" },
  { label: "Controls", href: "/controls" },
  { label: "Vendors", href: "/vendors" },
  { label: "Contact", href: "/contact" },
];

// ============================================
// GLOBAL CTAs
// ============================================
export const globalCTAs = {
  primary: {
    label: "Book an assessment",
    href: "/contact",
  },
  secondary: {
    label: "See how it works",
    href: "/model#how-it-works",
  },
  header: {
    label: "Start Planning",
    href: "/contact",
  },
};

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
  headline: "We run your automations",
  headlineAccent: "in production.",
  subheadline: "FlowPly manages, monitors and improves your deployed AI & workflow systems — with SLAs, human escalation and measurable outcomes.",
  diagram: {
    items: [
      { title: "SaaS Platform", subtitle: "Your AI tools" },
      { title: "Customer Process", subtitle: "Your workflows" },
      { title: "FlowPly Ops Layer", subtitle: "Monitoring • Escalation • Optimization", isHighlighted: true },
    ],
  },
};

// ============================================
// HOW IT WORKS (3 Steps)
// ============================================
export interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  duration: string;
  description: string;
}

export const howItWorksSteps: Step[] = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Assessment",
    duration: "1–2 days",
    description: "We audit your current automation stack and identify operational gaps.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Deployment hardening",
    duration: "1–2 weeks",
    description: "Guardrails, monitoring, and incident response protocols get implemented.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Run & optimize",
    duration: "Ongoing",
    description: "Monthly ops, continuous improvements, and measurable performance gains.",
  },
];

// ============================================
// USE CASES
// ============================================
export interface UseCase {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
}

export const useCases: UseCase[] = [
  { 
    icon: Headphones, 
    title: "Customer support automation",
    slug: "customer-support",
    description: "Automated ticket routing, response generation, and escalation for support teams."
  },
  { 
    icon: Users, 
    title: "Sales & intake automation",
    slug: "sales-intake",
    description: "Lead qualification, CRM sync, and automated follow-up sequences."
  },
  { 
    icon: FileText, 
    title: "Claims / backoffice workflows",
    slug: "claims-backoffice",
    description: "Document processing, approval workflows, and status tracking automation."
  },
  { 
    icon: Database, 
    title: "Data enrichment & routing",
    slug: "data-enrichment",
    description: "Real-time data validation, enrichment from multiple sources, and intelligent routing."
  },
  { 
    icon: MessageSquare, 
    title: "Voice/Chat agent operations",
    slug: "voice-chat-agents",
    description: "Conversational AI monitoring, quality assurance, and continuous improvement."
  },
];

// ============================================
// WHY FLOWPLY (Benefits)
// ============================================
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: TrendingDown,
    title: "Fewer incidents",
    description: "Proactive monitoring catches issues before they impact users.",
  },
  {
    icon: Zap,
    title: "Faster deployments",
    description: "Streamlined change management accelerates your release cycles.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Clear metrics and reporting on automation performance.",
  },
  {
    icon: Shield,
    title: "Compliance-ready ops",
    description: "Audit trails and governance built into every workflow.",
  },
];

// ============================================
// PRODUCT PILLARS (Service Cards)
// ============================================
export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  features: string[];
  destinationLink: string;
  slug: string;
}

export const serviceCards: ServiceCard[] = [
  {
    icon: Activity,
    title: "Managed Operations",
    features: [
      "Monitoring, alerting, incident response",
      "Change management",
      "SLA & uptime guarantees",
    ],
    destinationLink: "/scope#managed-operations",
    slug: "managed-operations",
  },
  {
    icon: Brain,
    title: "AI Orchestration",
    features: [
      "Prompt/version control",
      "HITL (human-in-the-loop)",
      "Guardrails & audit trails",
    ],
    destinationLink: "/controls#ai-orchestration",
    slug: "ai-orchestration",
  },
  {
    icon: Workflow,
    title: "Integrations & Workflows",
    features: [
      "API connections",
      "Data sync & routing",
      "Automation reliability",
    ],
    destinationLink: "/vendors#integrations",
    slug: "integrations-workflows",
  },
];

// ============================================
// TRUST METRICS (Social Proof)
// ============================================
export interface TrustMetric {
  value: string;
  label: string;
}

export const trustMetrics: TrustMetric[] = [
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Operations" },
  { value: "<15min", label: "Response" },
  { value: "SOC2", label: "Compliant" },
];

// ============================================
// TRUST SECTION (Security Items)
// ============================================
export interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const trustItems: TrustItem[] = [
  {
    icon: Lock,
    title: "Security basics",
    description: "Least privilege access, audit logging, incident runbooks.",
  },
  {
    icon: Database,
    title: "Data handling",
    description: "GDPR compliant data processing and storage.",
  },
  {
    icon: Users,
    title: "Access control",
    description: "Role-based access control (RBAC) for all systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Change approvals",
    description: "Documented change management with approval workflows.",
  },
];

// ============================================
// PRICING PLANS
// ============================================
export interface PricingPlan {
  name: string;
  slug: string;
  audience: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Ops",
    slug: "starter",
    audience: "1 system",
    features: ["Single automation stack", "Business hours support", "Monthly reporting"],
    ctaLabel: "Get started",
    highlighted: false,
  },
  {
    name: "Scale Ops",
    slug: "scale",
    audience: "3–5 systems",
    features: ["Multiple automation stacks", "24/7 monitoring", "Weekly optimization", "Dedicated ops lead"],
    ctaLabel: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise Ops",
    slug: "enterprise",
    audience: "Custom + SLA",
    features: ["Unlimited systems", "Custom SLAs", "On-call escalation", "Quarterly reviews"],
    ctaLabel: "Contact us",
    highlighted: false,
  },
];

// ============================================
// CONTROLS PAGE CONTENT
// ============================================
export interface ControlItem {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export const controlsContent = {
  monitoring: {
    title: "Monitoring & Alerting",
    description: "Real-time visibility into your automation stack",
    items: [
      {
        icon: Eye,
        title: "Real-time monitoring",
        description: "24/7 monitoring of all automation endpoints and workflows.",
        details: ["Health checks every 30 seconds", "Performance metrics tracking", "Resource utilization alerts"],
      },
      {
        icon: AlertTriangle,
        title: "Smart alerting",
        description: "Intelligent alert routing based on severity and context.",
        details: ["Priority-based escalation", "Alert deduplication", "Custom notification channels"],
      },
      {
        icon: Phone,
        title: "Incident response",
        description: "Structured incident management with clear escalation paths.",
        details: ["On-call rotation support", "Runbook automation", "Post-incident reviews"],
      },
    ] as ControlItem[],
  },
  humanInTheLoop: {
    title: "Human-in-the-Loop",
    description: "Strategic human intervention points for critical decisions",
    items: [
      {
        icon: UserCheck,
        title: "Approval gates",
        description: "Manual approval required for high-risk operations.",
        details: ["Configurable thresholds", "Multi-level approvals", "Time-bound decisions"],
      },
      {
        icon: Eye,
        title: "Review queues",
        description: "Human review for edge cases and low-confidence outputs.",
        details: ["Priority-based queuing", "SLA tracking", "Quality metrics"],
      },
      {
        icon: GitBranch,
        title: "Escalation paths",
        description: "Clear escalation from automation to human operators.",
        details: ["Tiered escalation levels", "Context preservation", "Handoff protocols"],
      },
    ] as ControlItem[],
  },
  auditTrails: {
    title: "Audit & Compliance",
    description: "Complete visibility and traceability for governance",
    items: [
      {
        icon: FileSearch,
        title: "Audit trails",
        description: "Complete log of all actions, decisions, and changes.",
        details: ["Immutable logs", "Searchable history", "Export capabilities"],
      },
      {
        icon: ClipboardCheck,
        title: "Change management",
        description: "Documented change process with approval workflows.",
        details: ["Change requests", "Impact assessment", "Rollback procedures"],
      },
      {
        icon: Shield,
        title: "Compliance reporting",
        description: "Automated compliance reporting and evidence collection.",
        details: ["SOC2 evidence", "GDPR documentation", "Custom frameworks"],
      },
    ] as ControlItem[],
  },
};

// ============================================
// VENDORS PAGE CONTENT
// ============================================
export interface IntegrationCategory {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  items: string[];
}

export const vendorsContent = {
  integrationCategories: [
    {
      icon: Plug,
      title: "API Connections",
      slug: "api-connections",
      description: "Secure, managed connections to your existing tools and platforms.",
      items: ["REST API integration", "GraphQL support", "OAuth2 authentication", "API key management"],
    },
    {
      icon: RefreshCcw,
      title: "Data Sync & Routing",
      slug: "data-sync",
      description: "Real-time data synchronization across your automation stack.",
      items: ["Bi-directional sync", "Conflict resolution", "Field mapping", "Transformation rules"],
    },
    {
      icon: CheckCircle,
      title: "Automation Reliability",
      slug: "automation-reliability",
      description: "Ensuring your automations run reliably at scale.",
      items: ["Retry logic", "Circuit breakers", "Rate limiting", "Queue management"],
    },
  ] as IntegrationCategory[],
  
  supportedTooling: {
    title: "Supported Tooling",
    description: "We configure and manage your existing tools — not build custom integrations.",
    categories: [
      {
        name: "AI Platforms",
        tools: ["OpenAI", "Anthropic", "Azure OpenAI", "Google AI", "Cohere"],
      },
      {
        name: "Automation",
        tools: ["Make", "Zapier", "n8n", "Tray.io", "Workato"],
      },
      {
        name: "CRM & Sales",
        tools: ["Salesforce", "HubSpot", "Pipedrive", "Close", "Zoho"],
      },
      {
        name: "Support",
        tools: ["Zendesk", "Intercom", "Freshdesk", "Front", "Help Scout"],
      },
      {
        name: "Communication",
        tools: ["Slack", "Microsoft Teams", "Twilio", "SendGrid", "Vonage"],
      },
      {
        name: "Data & Analytics",
        tools: ["Snowflake", "BigQuery", "Segment", "Amplitude", "Mixpanel"],
      },
    ],
  },

  onboardingChecklist: {
    title: "How we onboard a vendor",
    description: "Our standard integration onboarding process",
    steps: [
      { step: "1", title: "Access provisioning", description: "Secure API credentials and access setup" },
      { step: "2", title: "Logging configuration", description: "Set up monitoring and audit logging" },
      { step: "3", title: "Test environment", description: "Validate integration in staging" },
      { step: "4", title: "Rollback preparation", description: "Document and test rollback procedures" },
    ],
  },
};

// ============================================
// SCOPE PAGE CONTENT
// ============================================
export const scopeContent = {
  inScope: {
    title: "In scope",
    description: "What FlowPly manages for you",
    items: [
      "Monitoring and alerting for all configured automations",
      "Incident response and escalation",
      "Change management and deployment",
      "Performance optimization and tuning",
      "Integration maintenance and updates",
      "SLA tracking and reporting",
      "Human-in-the-loop workflows",
      "Audit trail maintenance",
    ],
  },
  outOfScope: {
    title: "Out of scope",
    description: "What remains your responsibility",
    items: [
      "Business logic and workflow design",
      "Custom code development",
      "Data migration projects",
      "Hardware infrastructure",
      "End-user training",
      "Third-party vendor contracts",
      "Legal compliance interpretation",
      "Budget and procurement decisions",
    ],
  },
};

// ============================================
// MODEL PAGE CONTENT
// ============================================
export const modelContent = {
  ownership: {
    title: "Ownership clarity",
    description: "Clear responsibilities between you and FlowPly",
    flowply: {
      title: "FlowPly owns",
      items: [
        "Operational monitoring 24/7",
        "Incident detection and response",
        "Change deployment and rollback",
        "Performance optimization",
        "Integration health checks",
        "Escalation management",
        "Audit trail maintenance",
        "SLA adherence",
      ],
    },
    customer: {
      title: "You own",
      items: [
        "Business requirements and priorities",
        "Workflow logic and rules",
        "Data governance policies",
        "Budget and vendor relationships",
        "Strategic decision making",
        "End-user communication",
        "Compliance interpretations",
        "Feature roadmap",
      ],
    },
  },
};

// ============================================
// CONTACT PAGE CONTENT
// ============================================
export const contactContent = {
  heading: "Book your assessment",
  subheading: "Let's scope your operational needs. 1–2 days to understand your stack, no commitment required.",
  confirmation: {
    title: "Assessment requested",
    message: "We typically respond within 24 hours. Check your email for next steps.",
  },
  formFields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@company.com" },
    company: { label: "Company", placeholder: "Your company name" },
    systemsCount: {
      label: "Number of systems",
      options: [
        { value: "1", label: "1 system" },
        { value: "3-5", label: "3–5 systems" },
        { value: "enterprise", label: "Enterprise (5+)" },
      ],
    },
    message: { label: "Message", placeholder: "Tell us about your automation stack and operational needs..." },
  },
};

// ============================================
// FOOTER CONTENT
// ============================================
export const footerContent = {
  tagline: "Managed Operations for AI SaaS. We run the operational layer so you don't have to.",
  links: {
    company: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Partner Portal", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
};

// ============================================
// PAGE META DATA
// ============================================
export const pageMeta = {
  home: {
    title: "FlowPly | Managed Operations for AI SaaS",
    description: "FlowPly manages, monitors and improves your deployed AI & workflow systems with SLAs, human escalation and measurable outcomes.",
  },
  model: {
    title: "The FlowPly Model | How Our Ops Layer Works",
    description: "Understand the operational model: who owns what, how we work together, and the 3-step process from assessment to ongoing optimization.",
  },
  scope: {
    title: "Scope of Services | What FlowPly Manages",
    description: "Clearly defined scope of managed operations: what's included, what's not, and our three core service areas.",
  },
  controls: {
    title: "Controls & Reliability | Enterprise-Grade Trust",
    description: "Monitoring, human-in-the-loop, audit trails, and security controls that keep your automations reliable and compliant.",
  },
  vendors: {
    title: "Vendor Integrations | Connect Your Stack",
    description: "We configure and manage your existing tools. See supported platforms and our vendor onboarding process.",
  },
  contact: {
    title: "Contact FlowPly | Book Your Assessment",
    description: "Schedule a 1–2 day assessment of your automation stack. No commitment required. Typically respond within 24 hours.",
  },
};
