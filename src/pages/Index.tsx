import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, Zap, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">
              <BarChart3 className="h-4 w-4" />
              Diagnóstico Empresarial Inteligente
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Descubra o Nível de Maturidade do Seu Negócio
            </h1>
            <p className="text-xl text-muted-foreground">
              Em apenas 5 minutos, receba um diagnóstico personalizado com IA e um plano de ação
              prático para evoluir sua gestão empresarial.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/diagnostico">
                  Fazer Diagnóstico Gratuito
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/sobre">Saber Mais</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="bg-accent/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Responda 20 Perguntas</h3>
                <p className="text-muted-foreground">
                  Questões estratégicas sobre gestão, processos, finanças e muito mais.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receba seu Diagnóstico</h3>
                <p className="text-muted-foreground">
                  Nossa IA analisa suas respostas e gera um relatório personalizado.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implemente o Plano</h3>
                <p className="text-muted-foreground">
                  Ações práticas e prioritárias para o próximo nível de maturidade.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Por que Usar o Nível360?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <Target className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Clareza Estratégica</h3>
                <p className="text-muted-foreground">
                  Entenda exatamente onde sua empresa está e onde precisa chegar.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Diagnóstico em Minutos</h3>
                <p className="text-muted-foreground">
                  Processo rápido e intuitivo que respeita seu tempo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BarChart3 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Baseado em IA</h3>
                <p className="text-muted-foreground">
                  Análise inteligente e personalizada para seu contexto único.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">100% Gratuito</h3>
                <p className="text-muted-foreground">
                  Acesso completo ao diagnóstico sem custo algum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Transformar Sua Gestão?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Descubra seu nível de maturidade e receba um plano de ação personalizado agora mesmo.
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/diagnostico">
                Começar Diagnóstico Gratuito
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
