import React from 'react';
import { Project } from './types';

export const WHATSAPP_NUMBER = "919420633508";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const LINKEDIN_LINK = "https://www.linkedin.com/in/dhavalbalsara/";

export const PROJECTS: Project[] = [
  {
    id: 'chat-with-your-data',
    title: 'Chat with Your Data (RAG)',
    problem: 'Critical knowledge from client and internal team meetings was getting lost in call recordings, making it difficult to recall decisions or project context later.',
    solution: 'Currently in development: A RAG agent designed to securely ingest transcripts and allow instant querying of any context discussed in the last two weeks.',
    metrics: [
      { label: 'Status', value: 'Building' },
      { label: 'Target Workflow', value: 'Team & Client' }
    ],
    fullStory: {
      problemDeep: "After a meeting ends, the resulting video recording and transcript simply sit in a database. Whenever the team needed to confirm what a client requested regarding a specific feature, someone had to manually rewatch a 45-minute call or dig through lengthy transcripts. This caused delays and internal friction.",
      solutionDeep: "I am currently building a dedicated RAG AI Agent that allows teams to 'Chat with their Data'. This agent automatically processes all post-meeting transcripts, segments the knowledge, and indexes it within a vector database. Users can now simply ask natural language questions like 'What did the client say about the Q3 timeline?' and receive precise, sourced answers instantly.",
      flow: [
        { step: "Data Ingestion (In Progress)", description: "Meeting transcripts (client and internal) are automatically fetched upon call completion." },
        { step: "Vector Processing (In Progress)", description: "Transcripts are cleaned, chunked, and securely indexed into a vector database for rapid retrieval." },
        { step: "Intelligent Querying (In Progress)", description: "A conversational interface where team members can ask for specific context, decisions, or summaries based on the stored data." }
      ],
      impactSummary: "Once completed, the team will completely eliminate manual transcription lookup. Any decision or request made in the past two weeks will be surfaced instantly."
    },
    category: 'RAG Systems',
    tags: ['Vector DB', 'LangChain', 'OpenAI', 'Automation']
  },
  {
    id: 'automated-client-reporting',
    title: 'Automated Client Reporting System',
    problem: 'The team was spending countless hours every alternate week manually compiling progress reports for each client.',
    solution: 'An automated workflow connecting directly to the database to generate and distribute comprehensive bi-weekly progress reports.',
    metrics: [
      { label: 'Manual Work', value: '-100%' },
      { label: 'Report Accuracy', value: '100%' }
    ],
    fullStory: {
      problemDeep: "Communicating progress to clients is crucial for retention, but summarizing what work was done, how much time it took, and overall milestones across multiple clients is incredibly time-consuming. The team manually queried databases and compiled these metrics into documents by hand every two weeks.",
      solutionDeep: "I developed a secure automation pipeline that triggers every alternate week. It authenticates with the central database, aggregates time logs, task statuses, and progress metrics on a per-client basis, and formats this raw data into a polished, easily digestible report.",
      flow: [
        { step: "Scheduled Trigger", description: "A cron-job initiates the workflow every alternate week." },
        { step: "Data Aggregation", description: "The system connects securely to the database to pull task completion metrics, time spent, and milestone progress." },
        { step: "Formatting & Dispatch", description: "Raw data is converted into a structured report document and automatically routed to the necessary stakeholders." }
      ],
      impactSummary: "Client communication is now hyper-consistent and transparent, saving the internal team hours of administrative work each reporting cycle."
    },
    category: 'Database Automation',
    tags: ['Cron Jobs', 'SQL/NoSQL', 'Reporting Workflow']
  },
  {
    id: 'ai-omnichannel-solution',
    title: 'AI Omnichannel Content Pipeline',
    problem: 'Marketing teams struggle to repurpose core content, leaving valuable company blogs underutilized across different social channels.',
    solution: 'An intelligent pipeline that automatically converts a single company blog into video scripts, LinkedIn carousels, and Substack newsletters.',
    metrics: [
      { label: 'Content Volume', value: '10x' },
      { label: 'Prep Time', value: '-90%' }
    ],
    fullStory: {
      problemDeep: "Writing a high-quality company blog takes significant effort, but treating that blog as a single deliverable yields poor ROI. To capture attention on LinkedIn, YouTube, or email newsletters, that single long-form piece must be manually rewritten and reformatted for each platform's unique style.",
      solutionDeep: "I built an AI Omnichannel Solution that ingests a published blog post and intelligently spins it off into multiple tailored formats. Instead of just summarizing, it adapts the tone—producing personal-branding focused LinkedIn posts, structured video scripts, and long-form Substack newsletter drafts.",
      flow: [
        { step: "Blog Ingestion", description: "The system reads the newly published company blog post." },
        { step: "Tone Adaptation", description: "Parallel LLM workflows analyze the content to extract core insights while matching specific platform tones." },
        { step: "Asset Generation", description: "The pipeline outputs a complete bundle: video script, LinkedIn carousel copy, and a newsletter draft." }
      ],
      impactSummary: "Founders and marketing teams can now stretch one piece of content across their entire online presence, drastically increasing reach with near-zero extra effort."
    },
    category: 'Marketing Automation',
    tags: ['Content AI', 'LLM Workflow', 'Omnichannel']
  },
  {
    id: 'segmind-gtm',
    title: 'n8n GTM Automation for Segmind',
    problem: 'Segmind, a serverless inference platform (similar to Fal.ai), needed to expand their user base beyond pure coders and capture the growing low-code ops market.',
    solution: 'Led the GTM initiative by building and publishing official Segmind workflows on n8n, driving traction through ready-to-use templates.',
    metrics: [
      { label: 'Workflow Clones', value: '1,500+' },
      { label: 'User Signups', value: '+25%' }
    ],
    fullStory: {
      problemDeep: "While Segmind offered fast, cost-effective inference for models like SDXL and Flux, they were missing out on the massive community of 'AI Operators'—founders and automators using tools like n8n and Zapier. Competitors were gaining ground simply by being easier to integrate into no-code workflows.",
      solutionDeep: "We executed a 'Usage-Led' GTM strategy. Instead of just releasing API docs, we built and published the official Segmind integration on n8n. To drive immediate traction, I designed a suite of viral 'Blueprint' workflows—complex GenAI pipelines (like consistency-preserving character generators) that users could clone and run instantly.",
      flow: [
        { step: "Integration Strategy", description: "Mapped high-demand models (Flux, SDXL) to modular n8n nodes for drag-and-drop usage." },
        { step: "Blueprint Creation", description: "Built plug-and-play workflows (e.g., 'E-com Product Photography Generator') to solve specific business use cases." },
        { step: "Community GTM", description: "Published templates to the n8n ecosystem to funnel low-code builders directly into Segmind's billing dashboard." }
      ],
      impactSummary: "The n8n integration opened a new revenue channel, converting non-technical founders into recurring power users of the Segmind API."
    },
    category: 'GTM Strategy',
    tags: ['n8n', 'Low-Code', 'Growth Engineering']
  },
  {
    id: 'ecom-seo-automation',
    title: 'SEO Blog Automation for E-com',
    problem: 'A D2C brand with 2,000+ SKUs was missing out on organic traffic due to thin content coverage.',
    solution: 'Programmatic SEO agent that analyzes competitor gaps and generates high-ranking articles at scale.',
    metrics: [
      { label: 'Organic Traffic', value: '+240%' },
      { label: 'Cost/Article', value: '< $2' }
    ],
    fullStory: {
      problemDeep: "For large e-commerce catalogs, writing unique, value-add blog posts to capture long-tail search traffic is prohibitively expensive and slow with human writers alone.",
      solutionDeep: "We deployed a 'Programmatic SEO' agent. It doesn't just write; it researches. It scans top-ranking competitor articles for a specific keyword, identifies content gaps, and structures a comprehensive article that satisfies user intent better than existing results.",
      flow: [
        { step: "Keyword Analysis", description: "The agent identifies low-competition, high-intent keywords related to the product catalog." },
        { step: "Research & Structure", description: "It outlines an article based on the top 10 search results to ensure topical authority." },
        { step: "Drafting & Linking", description: "The article is written with internal links automatically inserted to drive product sales." }
      ],
      impactSummary: "The brand now dominates search results for niche product queries, driving consistent revenue without ad spend."
    },
    category: 'Growth Engineering',
    tags: ['Programmatic SEO', 'E-commerce', 'Automation']
  },
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