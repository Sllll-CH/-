
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

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
