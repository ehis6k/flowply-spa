// ============================================
// ASSESSMENT FAQ CONTENT
// ============================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const assessmentFAQ: FAQItem[] = [
  {
    question: "What do we need to prepare?",
    answer: "Minimal preparation is required. Have a general understanding of your current automation stack and access to someone who knows the technical details. We'll guide the conversation from there. No documentation or presentations needed upfront.",
  },
  {
    question: "Is this technical or operational?",
    answer: "Both, but weighted toward operational. We review your technical architecture to understand the systems involved, but the focus is on how those systems are monitored, maintained, and operated in production. We're looking at operational maturity, not code quality.",
  },
  {
    question: "Who should attend?",
    answer: "Ideally, someone who understands the business context (why the automation exists) and someone who knows the technical implementation (how it works). This could be the same person. Product owners, technical leads, and operations managers are typical attendees.",
  },
  {
    question: "What happens after the assessment?",
    answer: "You receive a written summary within 48 hours covering: current state observations, identified operational gaps, risk areas, and recommended next steps. If there's a fit for managed operations, we'll outline what that would look like. If not, you still get actionable insights.",
  },
  {
    question: "Is there any obligation?",
    answer: "None. The assessment is designed to be valuable regardless of whether we work together. Many organizations use the insights to improve their internal operations. There's no sales pressure and no follow-up sequence—just the assessment summary.",
  },
];

// ============================================
// ASSESSMENT PROCESS STEPS
// ============================================

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const assessmentProcess: ProcessStep[] = [
  {
    number: "1",
    title: "Scope and system context",
    description: "We understand your current stack, automation goals, and operational needs.",
  },
  {
    number: "2",
    title: "AI-ops maturity snapshot",
    description: "Quick assessment of your monitoring, escalation, and change management capabilities.",
  },
  {
    number: "3",
    title: "Recommended next steps",
    description: "Tailored guidance based on your situation, whether or not we work together.",
  },
];

// ============================================
// RESOURCE DOWNLOAD
// ============================================

export const microConversion = {
  title: "AI Operations Checklist",
  description: "A practical checklist for assessing your AI automation's production readiness. Covers monitoring, escalation, change management, and compliance.",
  buttonLabel: "View checklist",
  // This would link to a PDF or ungated page
  href: "/resources/ai-operations-checklist",
};
