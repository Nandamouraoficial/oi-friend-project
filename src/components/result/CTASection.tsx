import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface CTASectionProps {
  recommendation?: string;
}

export const CTASection = ({ recommendation }: CTASectionProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Por favor, insira seu e-mail.");
      return;
    }
    toast.success("Em breve você receberá seu plano completo por e-mail!");
    setEmail("");
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-primary/5">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Receba seu Plano Completo</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Digite seu e-mail para receber o diagnóstico detalhado e próximos passos personalizados.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            Enviar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Card>

      {recommendation && (
        <Card className="p-6 bg-success/5">
          <h3 className="text-lg font-semibold mb-3">Próximo Passo Recomendado</h3>
          <p className="text-sm mb-4">{recommendation}</p>
          <Button className="w-full">
            Explorar Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      )}
    </div>
  );
};
