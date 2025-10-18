import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ActionsCardProps {
  actions: string[];
}

export const ActionsCard = ({ actions }: ActionsCardProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Ações Prioritárias</h2>
      <div className="space-y-4">
        {actions.map((action, index) => (
          <div key={index} className="flex gap-3 items-start p-4 rounded-lg bg-accent/30">
            <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium mb-1">Ação {index + 1}</div>
              <p className="text-sm text-muted-foreground">{action}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
