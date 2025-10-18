import { MaturityLevelInfo } from "@/types/questionnaire";

export const maturityLevels: MaturityLevelInfo[] = [
  {
    level: "none",
    label: "Sem Maturidade",
    description: "Gestão inexistente ou muito incipiente. É necessário estruturar os fundamentos básicos.",
    scoreRange: [0, 19],
    color: "level-none",
  },
  {
    level: "basic",
    label: "Gestão Básica",
    description: "Gestão inicial e pouco organizada. Processos começam a ser definidos.",
    scoreRange: [20, 35],
    color: "level-basic",
  },
  {
    level: "medium",
    label: "Gestão Média",
    description: "Estrutura razoável, mas com gargalos. Necessário melhorar eficiência e liderança.",
    scoreRange: [36, 60],
    color: "level-medium",
  },
  {
    level: "high",
    label: "Gestão Alta",
    description: "Gestão eficiente e consolidada. Foco em sustentabilidade e cultura organizacional.",
    scoreRange: [61, 80],
    color: "level-high",
  },
  {
    level: "excellent",
    label: "Gestão Excelente",
    description: "Gestão madura e autônoma. Manter resultados e focar em inovação contínua.",
    scoreRange: [81, 100],
    color: "level-excellent",
  },
];

export function getMaturityLevel(score: number): MaturityLevelInfo {
  return maturityLevels.find(
    (level) => score >= level.scoreRange[0] && score <= level.scoreRange[1]
  ) || maturityLevels[0];
}
