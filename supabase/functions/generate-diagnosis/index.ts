// Edge function for generating AI-powered diagnosis

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Answer {
  questionId: number;
  value: number;
}

interface RequestBody {
  score: number;
  answers: Answer[];
  level: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { score, answers, level }: RequestBody = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY não configurado");
    }

    const levelDescriptions: Record<string, string> = {
      none: "sem maturidade de gestão",
      basic: "gestão básica",
      medium: "gestão média",
      high: "gestão alta",
      excellent: "gestão excelente",
    };

    const tone = score < 30 ? "encorajador e prático" : score < 50 ? "motivador e direcionado" : "validador e estratégico";

    const prompt = `Você é um consultor empresarial especializado em gestão e maturidade organizacional.

CONTEXTO:
- Pontuação total: ${score}/60
- Nível identificado: ${levelDescriptions[level] || level}
- O empreendedor completou um diagnóstico de 20 perguntas sobre gestão empresarial

TAREFA:
1. Analise o perfil de maturidade empresarial com base na pontuação
2. Identifique as principais lacunas e oportunidades de melhoria
3. Gere exatamente 4 ações prioritárias específicas e acionáveis (não genéricas)
4. Use tom ${tone} - seja inspirador mas realista
5. Sugira o próximo passo ideal (curso, mentoria ou consultoria)

IMPORTANTE:
- Seja específico e prático, não use jargões complexos
- Cada ação deve ser algo implementável no curto prazo
- Personalize com base no nível de maturidade atual

FORMATO DE SAÍDA (JSON):
{
  "diagnosis": "Análise do nível atual em 2-3 parágrafos curtos",
  "actions": ["Ação 1 específica", "Ação 2 específica", "Ação 3 específica", "Ação 4 específica"],
  "recommendation": "Sugestão do próximo passo ideal (1 frase)"
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: "Você é um consultor empresarial. Responda sempre em JSON válido." },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns instantes." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Serviço temporariamente indisponível. Entre em contato com o suporte." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("Erro da API AI:", response.status, errorText);
      throw new Error("Erro ao processar com IA");
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      throw new Error("Resposta inválida da IA");
    }

    const result = JSON.parse(aiResponse);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro em generate-diagnosis:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
