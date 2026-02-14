
export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  tags: string[];
  category: 'professional' | 'internship' | 'campus';
}

export interface Achievement {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface PlanItem {
  id: string;
  category: string;
  title: string;
  timeframe: string;
  goals: string[];
  status: 'in-progress' | 'upcoming' | 'long-term';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
