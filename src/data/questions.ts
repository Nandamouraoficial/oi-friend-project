import { Question } from "@/types/questionnaire";

export const questionOptions = [
  { label: "Nunca", value: 0 },
  { label: "Às vezes", value: 1 },
  { label: "Frequentemente", value: 2 },
  { label: "Sempre", value: 3 },
];

export const questions: Question[] = [
  {
    id: 1,
    category: "Planejamento Estratégico",
    question: "Sua empresa possui metas claras e documentadas para o curto, médio e longo prazo?",
    options: questionOptions,
  },
  {
    id: 2,
    category: "Planejamento Estratégico",
    question: "As decisões importantes são tomadas com base em dados e indicadores?",
    options: questionOptions,
  },
  {
    id: 3,
    category: "Gestão Financeira",
    question: "Você acompanha regularmente o fluxo de caixa e os resultados financeiros?",
    options: questionOptions,
  },
  {
    id: 4,
    category: "Gestão Financeira",
    question: "Existe um orçamento anual definido e acompanhado mensalmente?",
    options: questionOptions,
  },
  {
    id: 5,
    category: "Processos e Operações",
    question: "Os processos operacionais da empresa estão mapeados e documentados?",
    options: questionOptions,
  },
  {
    id: 6,
    category: "Processos e Operações",
    question: "A empresa possui indicadores de desempenho (KPIs) para acompanhar os resultados?",
    options: questionOptions,
  },
  {
    id: 7,
    category: "Processos e Operações",
    question: "Existe um sistema ou ferramenta para controle de tarefas e projetos?",
    options: questionOptions,
  },
  {
    id: 8,
    category: "Gestão de Pessoas",
    question: "Os colaboradores têm funções e responsabilidades claramente definidas?",
    options: questionOptions,
  },
  {
    id: 9,
    category: "Gestão de Pessoas",
    question: "A empresa realiza avaliações de desempenho periódicas?",
    options: questionOptions,
  },
  {
    id: 10,
    category: "Gestão de Pessoas",
    question: "Existe um plano de desenvolvimento e treinamento para a equipe?",
    options: questionOptions,
  },
  {
    id: 11,
    category: "Marketing e Vendas",
    question: "A empresa possui uma estratégia de marketing definida e em execução?",
    options: questionOptions,
  },
  {
    id: 12,
    category: "Marketing e Vendas",
    question: "Você conhece o perfil do seu cliente ideal e suas necessidades?",
    options: questionOptions,
  },
  {
    id: 13,
    category: "Marketing e Vendas",
    question: "Existe um processo de vendas estruturado e documentado?",
    options: questionOptions,
  },
  {
    id: 14,
    category: "Marketing e Vendas",
    question: "A empresa acompanha métricas de marketing e vendas (CAC, LTV, taxa de conversão)?",
    options: questionOptions,
  },
  {
    id: 15,
    category: "Tecnologia e Inovação",
    question: "A empresa utiliza ferramentas tecnológicas para otimizar processos?",
    options: questionOptions,
  },
  {
    id: 16,
    category: "Tecnologia e Inovação",
    question: "Existe um processo para identificar e testar melhorias ou inovações?",
    options: questionOptions,
  },
  {
    id: 17,
    category: "Liderança e Cultura",
    question: "A liderança comunica claramente a visão e valores da empresa?",
    options: questionOptions,
  },
  {
    id: 18,
    category: "Liderança e Cultura",
    question: "A empresa possui uma cultura organizacional definida e fortalecida?",
    options: questionOptions,
  },
  {
    id: 19,
    category: "Relacionamento com Cliente",
    question: "Você coleta e analisa feedback dos clientes regularmente?",
    options: questionOptions,
  },
  {
    id: 20,
    category: "Relacionamento com Cliente",
    question: "Existe um processo para garantir a satisfação e fidelização dos clientes?",
    options: questionOptions,
  },
];
