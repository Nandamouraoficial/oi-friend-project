import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Sobre o Nível360</h1>
            <p className="text-xl text-muted-foreground">
              A ferramenta que transforma a forma como você entende e evolui sua gestão empresarial
            </p>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Nível360 foi criado para empreendedores, gestores e líderes que desejam levar seus
              negócios ao próximo nível, mas não sabem exatamente por onde começar. Utilizando
              inteligência artificial e metodologias comprovadas de gestão, oferecemos um diagnóstico
              preciso e ações práticas para impulsionar sua empresa.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diagnóstico Preciso</h3>
              <p className="text-muted-foreground">
                20 perguntas estratégicas que avaliam todos os pilares da sua gestão empresarial.
              </p>
            </Card>

            <Card className="p-6">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">IA Personalizada</h3>
              <p className="text-muted-foreground">
                Plano de ação gerado por inteligência artificial, adaptado ao contexto único do seu
                negócio.
              </p>
            </Card>

            <Card className="p-6">
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ações Práticas</h3>
              <p className="text-muted-foreground">
                Recomendações claras e acionáveis para você implementar imediatamente.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Para Todos os Portes</h3>
              <p className="text-muted-foreground">
                Desde startups até empresas consolidadas, nossa metodologia se adapta ao seu
                estágio.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-semibold mb-4">Metodologia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso diagnóstico é baseado em 5 níveis de maturidade empresarial, avaliando áreas
              críticas como planejamento estratégico, gestão financeira, processos, pessoas,
              marketing, tecnologia e cultura organizacional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada resposta contribui para uma pontuação total que determina seu nível atual e
              direciona as recomendações mais efetivas para sua evolução.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
