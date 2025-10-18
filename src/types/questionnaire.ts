export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: number;
  question: string;
  category: string;
  options: QuestionOption[];
}

export type MaturityLevel = "none" | "basic" | "medium" | "high" | "excellent";

export interface MaturityLevelInfo {
  level: MaturityLevel;
  label: string;
  description: string;
  scoreRange: [number, number];
  color: string;
}

export interface DiagnosticResult {
  score: number;
  level: MaturityLevel;
  levelInfo: MaturityLevelInfo;
  aiDiagnosis?: string;
  actions?: string[];
  recommendation?: string;
}

export interface Answer {
  questionId: number;
  value: number;
}
