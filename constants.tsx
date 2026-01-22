
import React from 'react';
import { Project } from './types';

export const WHATSAPP_NUMBER = "919420633508";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PROJECTS: Project[] = [
  {
    id: 'voice-real-estate',
    title: 'AI Voice Agent for Real Estate',
    problem: 'Property managers were losing 40% of leads due to late-night calls and busy hours.',
    solution: 'A multilingual inbound/outbound voice agent that handles bookings and CRM syncing.',
    metrics: [
      { label: 'Lead Capture', value: '100%' },
      { label: 'Response Speed', value: '< 2s' }
    ],
    fullStory: {
      problemDeep: "Real estate agencies often struggle with a high volume of repetitive inquiries. During peak hours or after-hours, human agents cannot scale to meet demand, leading to missed opportunities and frustrated potential tenants.",
      solutionDeep: "We deployed a custom-tuned LLM integrated with Twilio and a custom CRM bridge. The system understands intent, qualifies leads, and checks availability in real-time to book viewings.",
      flow: [
        { step: "Call Intake", description: "The agent answers within one ring, identifies the caller's language, and acknowledges the inquiry." },
        { step: "Intent Classification", description: "The system determines if the user wants to buy, sell, or schedule a viewing." },
        { step: "Data Synchronization", description: "Call notes and appointment details are instantly pushed to the agency's Salesforce instance." }
      ],
      impactSummary: "The agency saw a 25% increase in viewing conversions within the first month of deployment."
    },
    category: 'Voice Automation',
    tags: ['Twilio', 'GPT-4o', 'Salesforce']
  },
  {
    id: 'invoice-automation',
    title: 'AI Invoice Automation',
    problem: 'Manual invoice entry was taking the finance team 20 hours per week with a 5% error rate.',
    solution: 'OCR-powered matching system with automated fraud detection and ERP integration.',
    metrics: [
      { label: 'Time Saved', value: '18 hrs/wk' },
      { label: 'Accuracy', value: '99.9%' }
    ],
    fullStory: {
      problemDeep: "Processing thousands of varied invoice formats manually is prone to human error and creates massive bottlenecks in the accounts payable department.",
      solutionDeep: "An intelligent pipeline that uses layout-aware OCR to extract key-value pairs (Vendor, Amount, Tax, Date) and cross-references them with purchase orders.",
      flow: [
        { step: "Extraction", description: "Multi-modal vision models extract data even from low-quality scans." },
        { step: "Validation", description: "Calculations are verified and vendor details are checked against whitelist records." },
        { step: "Approval Workflow", description: "Discrepancies are flagged for human review; clean invoices are auto-posted to NetSuite." }
      ],
      impactSummary: "Eliminated the need for weekend processing and reduced late payment penalties to zero."
    },
    category: 'Operations',
    tags: ['Vision AI', 'Python', 'ERP Integration']
  },
  {
    id: 'recruitment-assistant',
    title: 'AI Recruitment Assistant',
    problem: 'HR teams were overwhelmed by 500+ applicants per role, delaying hiring by weeks.',
    solution: 'Automated screening and scoring system that schedules interviews for top talent.',
    metrics: [
      { label: 'Sourcing Speed', value: '10x Faster' },
      { label: 'Time-to-Hire', value: '-35%' }
    ],
    fullStory: {
      problemDeep: "High-volume recruitment often leads to 'resume blindness' where great candidates are missed simply because they were at the bottom of a stack.",
      solutionDeep: "A semantic search-based screening tool that evaluates candidates based on skills and cultural fit parameters rather than just keyword matching.",
      flow: [
        { step: "Screening", description: "LLMs analyze CVs and cover letters against specific job requirements." },
        { step: "Shortlisting", description: "Candidates are scored and ranked with reasoning provided to the hiring manager." },
        { step: "Scheduling", description: "Integration with Calendly ensures interviews are booked instantly for high-scoring applicants." }
      ],
      impactSummary: "Recruiters now spend 100% of their time talking to qualified candidates instead of filtering PDFs."
    },
    category: 'HR Tech',
    tags: ['LangChain', 'Vector DB', 'Automation']
  },
  {
    id: 'linkedin-assistant',
    title: 'AI LinkedIn Content Assistant',
    problem: 'Founders struggled to maintain a consistent presence without spending hours on drafts.',
    solution: 'Intelligent planning and drafting tool that mimics the user\'s unique voice.',
    metrics: [
      { label: 'Content ROI', value: '3x Reach' },
      { label: 'Prep Time', value: '-80%' }
    ],
    fullStory: {
      problemDeep: "Consistency is key on LinkedIn, but authentic storytelling is difficult to outsource and time-consuming to do internally.",
      solutionDeep: "A 'Digital Twin' writing assistant that uses a knowledge base of the founder's previous successful posts to generate high-context drafts.",
      flow: [
        { step: "Idea Extraction", description: "Daily 5-minute voice notes are transcribed and turned into content pillars." },
        { step: "Drafting", description: "Three variations are generated for each post: bold, inquisitive, and narrative." },
        { step: "Approval", description: "A simple dashboard allows for one-click publishing to LinkedIn." }
      ],
      impactSummary: "Clients reported higher engagement rates as the AI preserved their personal 'tone of voice' better than standard copywriters."
    },
    category: 'Marketing',
    tags: ['Personal Branding', 'LLM Fine-tuning']
  }
];

export const Icons = {
  WhatsApp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Chat: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )
};
