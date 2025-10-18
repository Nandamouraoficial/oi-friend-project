import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface DiagnosisCardProps {
  diagnosis: string;
}

export const DiagnosisCard = ({ diagnosis }: DiagnosisCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Diagnóstico Personalizado</h2>
        <Badge variant="secondary" className="ml-auto">
          Gerado por IA
        </Badge>
      </div>
      <div className="prose prose-sm max-w-none">
        <p className="whitespace-pre-line text-foreground">{diagnosis}</p>
      </div>
    </Card>
  );
};
