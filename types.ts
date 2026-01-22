
export interface ImpactMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  metrics: ImpactMetric[];
  fullStory: {
    problemDeep: string;
    solutionDeep: string;
    flow: {
      step: string;
      description: string;
    }[];
    impactSummary: string;
  };
  category: string;
  tags: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
