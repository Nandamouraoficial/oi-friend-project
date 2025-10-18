import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuestionCard } from "@/components/questionnaire/QuestionCard";
import { ProgressBar } from "@/components/questionnaire/ProgressBar";
import { Button } from "@/components/ui/button";
import { questions } from "@/data/questions";
import { Answer } from "@/types/questionnaire";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "nivel360_answers";

export default function Diagnostico() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch (e) {
        console.error("Erro ao carregar respostas salvas", e);
      }
    }
  }, []);

  useEffect(() => {
    if (answers.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    }
  }, [answers]);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { questionId, value };
        return updated;
      }
      return [...prev, { questionId, value }];
    });
  };

  const getCurrentAnswer = () => {
    return answers.find((a) => a.questionId === questions[currentQuestion].id);
  };

  const handleNext = () => {
    const currentAnswer = getCurrentAnswer();
    if (!currentAnswer) {
      toast.error("Por favor, selecione uma resposta antes de continuar.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    if (answers.length !== questions.length) {
      toast.error("Por favor, responda todas as perguntas.");
      return;
    }

    const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
    localStorage.setItem("nivel360_score", totalScore.toString());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    navigate("/resultado");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Diagnóstico de Maturidade</h1>
            <p className="text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
          </div>

          <ProgressBar progress={progress} className="mb-8" />

          <QuestionCard
            question={questions[currentQuestion]}
            selectedValue={getCurrentAnswer()?.value}
            onAnswer={handleAnswer}
          />

          <div className="flex gap-4 mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>
            <Button onClick={handleNext} className="flex-1">
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
              {currentQuestion < questions.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
