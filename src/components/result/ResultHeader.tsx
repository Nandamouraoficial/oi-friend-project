import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DiagnosticResult } from "@/types/questionnaire";
import { Trophy } from "lucide-react";

interface ResultHeaderProps {
  result: DiagnosticResult;
}

export const ResultHeader = ({ result }: ResultHeaderProps) => {
  const percentage = (result.score / 60) * 100;

  return (
    <Card className="p-8 text-center">
      <div className="flex justify-center mb-4">
        <Trophy className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Seu Nível de Maturidade</h1>
      <Badge
        variant="outline"
        className={`text-lg px-4 py-2 mb-4 bg-${result.levelInfo.color}/10 border-${result.levelInfo.color}`}
      >
        {result.levelInfo.label}
      </Badge>
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Pontuação</span>
          <span className="font-semibold text-foreground">
            {result.score} / 60 pontos
          </span>
        </div>
        <Progress value={percentage} className="h-4" />
      </div>
      <p className="mt-4 text-muted-foreground">{result.levelInfo.description}</p>
    </Card>
  );
};
