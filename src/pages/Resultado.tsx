import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResultHeader } from "@/components/result/ResultHeader";
import { DiagnosisCard } from "@/components/result/DiagnosisCard";
import { ActionsCard } from "@/components/result/ActionsCard";
import { CTASection } from "@/components/result/CTASection";
import { getMaturityLevel } from "@/data/maturityLevels";
import { calculatePillarScores, PillarScore } from "@/data/pillars";
import { DiagnosticResult, Answer } from "@/types/questionnaire";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Resultado() {
  const navigate = useNavigate();
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [pillarScores, setPillarScores] = useState<PillarScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResult = async () => {
      try {
        const scoreStr = localStorage.getItem("nivel360_score");
        const answersStr = localStorage.getItem("nivel360_answers");

        if (!scoreStr || !answersStr) {
          toast.error("Nenhum diagnóstico encontrado. Faça o questionário primeiro.");
          navigate("/diagnostico");
          return;
        }

        const score = parseInt(scoreStr);
        const answers: Answer[] = JSON.parse(answersStr);
        const pillarData = calculatePillarScores(answers);
        setPillarScores(pillarData);
        const levelInfo = getMaturityLevel(score);

        // Chamada para edge function de IA
        const { data, error } = await supabase.functions.invoke("generate-diagnosis", {
          body: { score, answers, level: levelInfo.level },
        });

        if (error) {
          console.error("Erro ao gerar diagnóstico:", error);
          toast.error("Erro ao gerar diagnóstico personalizado.");
          
          setResult({
            score,
            level: levelInfo.level,
            levelInfo,
          });
        } else {
          setResult({
            score,
            level: levelInfo.level,
            levelInfo,
            aiDiagnosis: data.diagnosis,
            actions: data.actions,
            recommendation: data.recommendation,
          });
        }
      } catch (error) {
        console.error("Erro ao carregar resultado:", error);
        toast.error("Erro ao processar resultado.");
        navigate("/diagnostico");
      } finally {
        setLoading(false);
      }
    };

    loadResult();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="text-lg text-muted-foreground">
              Gerando seu diagnóstico personalizado...
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <ResultHeader result={result} />
          {pillarScores.length > 0 && <PillarScores pillarScores={pillarScores} />}
          {result.aiDiagnosis && <DiagnosisCard diagnosis={result.aiDiagnosis} />}
          {result.actions && result.actions.length > 0 && <ActionsCard actions={result.actions} />}
          <CTASection recommendation={result.recommendation} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
