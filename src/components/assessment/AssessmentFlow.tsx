import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AssessmentIntro from "./AssessmentIntro";
import QuestionCard, { Question } from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import AssessmentResults, { AssessmentScore } from "./AssessmentResults";
import { assessmentQuestions } from "@/data/questions";

type AssessmentStep = 'intro' | 'questions' | 'results';

const AssessmentFlow = () => {
  const [currentStep, setCurrentStep] = useState<AssessmentStep>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const totalQuestions = assessmentQuestions.length;

  const handleStart = useCallback(() => {
    setCurrentStep('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  }, []);

  const handleAnswer = useCallback((answer: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  }, [currentQuestion?.id]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate scores and show results
      setCurrentStep('results');
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const calculateScores = useCallback((): AssessmentScore => {
    // This is a simplified scoring algorithm
    // In a real application, this would be more sophisticated
    
    const psychometricQuestions = assessmentQuestions.filter(q => 
      q.category.includes('Interest') || q.category.includes('Personality') || q.category.includes('Work Style')
    );
    
    const technicalQuestions = assessmentQuestions.filter(q => 
      q.category.includes('Mathematical') || q.category.includes('Statistical') || q.category.includes('Data Analysis') || q.type === 'aptitude'
    );

    // Calculate psychometric fit (average of relevant Likert responses, normalized to 100)
    const psychometricScores = psychometricQuestions
      .filter(q => q.type === 'likert')
      .map(q => answers[q.id] || 0)
      .filter(score => score > 0);
    
    const psychometricFit = psychometricScores.length > 0 
      ? Math.round((psychometricScores.reduce((a, b) => a + b, 0) / psychometricScores.length) * 20)
      : 50;

    // Calculate technical score (percentage of correct answers + consideration of self-assessment)
    const aptitudeQuestions = technicalQuestions.filter(q => q.type === 'aptitude');
    let correctAnswers = 0;
    
    aptitudeQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctAnswers++;
      }
    });

    const technicalScore = aptitudeQuestions.length > 0 
      ? Math.round((correctAnswers / aptitudeQuestions.length) * 100)
      : 50;

    // WISCAR scores (simplified calculation)
    const wiscar = {
      will: Math.round(((answers['wiscar_will'] || 3) + (answers['final_commitment'] || 3)) * 10),
      interest: Math.round(((answers['wiscar_interest'] || 3) + (answers['psych_1'] || 3)) * 10),
      skill: Math.round(((answers['wiscar_skill'] || 1) * 25) + (technicalScore * 0.3)),
      cognitive: Math.round(((answers['wiscar_cognitive'] === 1 ? 5 : 3) + (answers['psych_2'] || 3)) * 10),
      ability: Math.round(((answers['wiscar_learning'] || 3) + (answers['domain_2'] || 3)) * 10),
      realWorld: Math.round(((answers['wiscar_reality'] === 0 ? 5 : 3) + (answers['work_2'] === 3 ? 5 : 3)) * 10)
    };

    // Overall confidence score
    const overallScores = [psychometricFit, technicalScore, ...Object.values(wiscar)];
    const confidenceScore = Math.round(overallScores.reduce((a, b) => a + b, 0) / overallScores.length);

    // Determine recommendation
    let overallRecommendation: AssessmentScore['overallRecommendation'];
    if (confidenceScore >= 80) {
      overallRecommendation = 'strong-fit';
    } else if (confidenceScore >= 65) {
      overallRecommendation = 'good-fit';
    } else if (confidenceScore >= 45) {
      overallRecommendation = 'needs-preparation';
    } else {
      overallRecommendation = 'poor-fit';
    }

    return {
      psychometricFit,
      technicalScore,
      wiscar,
      overallRecommendation,
      confidenceScore
    };
  }, [answers]);

  const handleRestart = useCallback(() => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
  }, []);

  if (currentStep === 'intro') {
    return <AssessmentIntro onStart={handleStart} />;
  }

  if (currentStep === 'results') {
    const scores = calculateScores();
    return <AssessmentResults scores={scores} onRestart={handleRestart} />;
  }

  // Questions step
  const selectedAnswer = answers[currentQuestion.id] || null;
  const canProceed = selectedAnswer !== null;

  return (
    <div className="min-h-screen bg-assessment-bg">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <ProgressBar 
            currentStep={currentQuestionIndex + 1} 
            totalSteps={totalQuestions}
            className="mb-8"
          />

          {/* Question */}
          <div className="mb-8">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={totalQuestions}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex items-center gap-2"
              >
                {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentFlow;