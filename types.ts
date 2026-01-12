
export interface VideoIdea {
  id: string;
  title: string;
  description: string;
  hook: string;
  scenes: { time: string; action: string; visual: string }[];
  style: string;
  musicType: string;
  difficulty: 'Gold' | 'Platinum' | 'Diamond';
  estimatedLength: string;
  trends: string[];
}

export interface CreativeIdeaSuggestion {
  theme: string;
  titleSuggestion: string;
  formula: string;
  viralLogic: string;
  style: string;
  viralScore: number;
}

export interface InspirationLabResult {
  keyword: string;
  suggestions: CreativeIdeaSuggestion[];
  expertAdvice: string;
}

export interface Tutorial {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  views: string;
}

export interface TrendData {
  name: string;
  popularity: number;
}
