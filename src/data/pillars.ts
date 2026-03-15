import { Answer } from "@/types/questionnaire";

export interface Pillar {
  id: string;
  label: string;
  questionIds: number[];
}

export interface PillarScore {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export const pillars: Pillar[] = [
  { id: "estrategia", label: "Estratégia", questionIds: [1, 2] },
  { id: "financeiro", label: "Financeiro", questionIds: [3, 4] },
  { id: "processos", label: "Processos", questionIds: [5, 6, 7] },
  { id: "pessoas", label: "Pessoas", questionIds: [8, 9, 10] },
  { id: "marketing", label: "Marketing", questionIds: [11, 12, 13, 14, 19, 20] },
  { id: "tecnologia", label: "Tecnologia", questionIds: [15, 16] },
  { id: "lideranca", label: "Liderança", questionIds: [17, 18] },
];

export function calculatePillarScores(answers: Answer[]): PillarScore[] {
  return pillars.map((pillar) => {
    const pillarAnswers = answers.filter((a) => pillar.questionIds.includes(a.questionId));
    const score = pillarAnswers.reduce((sum, a) => sum + a.value, 0);
    const maxScore = pillar.questionIds.length * 3;
    const percentage = Math.round((score / maxScore) * 100);

    return {
      id: pillar.id,
      label: pillar.label,
      score,
      maxScore,
      percentage,
    };
  });
}
