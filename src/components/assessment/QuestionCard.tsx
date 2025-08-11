import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'aptitude';
  category: string;
  question: string;
  options?: string[];
  likertLabels?: {
    left: string;
    right: string;
  };
  correctAnswer?: number; // for aptitude questions
}

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (answer: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  onAnswer, 
  questionNumber, 
  totalQuestions 
}: QuestionCardProps) => {
  const renderLikertScale = () => (
    <div className="space-y-6">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{question.likertLabels?.left}</span>
        <span>{question.likertLabels?.right}</span>
      </div>
      <div className="flex justify-between gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => onAnswer(value)}
            className={cn(
              "w-12 h-12 rounded-full border-2 transition-all duration-200",
              "hover:scale-110 hover:shadow-md",
              selectedAnswer === value
                ? "bg-primary border-primary text-primary-foreground shadow-glow"
                : "border-border hover:border-primary/50"
            )}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Strongly Disagree</span>
        <span>Neutral</span>
        <span>Strongly Agree</span>
      </div>
    </div>
  );

  const renderMultipleChoice = () => (
    <div className="space-y-3">
      {question.options?.map((option, index) => (
        <Button
          key={index}
          onClick={() => onAnswer(index)}
          variant={selectedAnswer === index ? "default" : "outline"}
          className={cn(
            "w-full justify-start text-left h-auto py-4 px-6",
            selectedAnswer === index && "bg-primary text-primary-foreground"
          )}
        >
          <span className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full border flex items-center justify-center text-sm">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </span>
        </Button>
      ))}
    </div>
  );

  return (
    <Card className="p-8 shadow-card">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {question.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {questionNumber} of {totalQuestions}
          </span>
        </div>
        <h2 className="text-xl font-semibold leading-relaxed">
          {question.question}
        </h2>
      </div>

      {question.type === 'likert' && renderLikertScale()}
      {(question.type === 'multiple-choice' || question.type === 'aptitude') && renderMultipleChoice()}
    </Card>
  );
};

export default QuestionCard;