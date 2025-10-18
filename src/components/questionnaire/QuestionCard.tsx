import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Question } from "@/types/questionnaire";

interface QuestionCardProps {
  question: Question;
  selectedValue?: number;
  onAnswer: (questionId: number, value: number) => void;
}

export const QuestionCard = ({ question, selectedValue, onAnswer }: QuestionCardProps) => {
  return (
    <Card className="p-6 shadow-lg">
      <Badge variant="secondary" className="mb-4">
        {question.category}
      </Badge>
      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
      <RadioGroup
        value={selectedValue?.toString()}
        onValueChange={(value) => onAnswer(question.id, parseInt(value))}
        className="space-y-3"
      >
        {question.options.map((option) => (
          <div
            key={option.value}
            className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
          >
            <RadioGroupItem value={option.value.toString()} id={`q${question.id}-${option.value}`} />
            <Label
              htmlFor={`q${question.id}-${option.value}`}
              className="flex-1 cursor-pointer font-normal"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </Card>
  );
};
