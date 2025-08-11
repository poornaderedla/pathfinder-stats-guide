import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, TrendingUp, BookOpen, Target, Lightbulb } from "lucide-react";

export interface AssessmentScore {
  psychometricFit: number;
  technicalScore: number;
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  overallRecommendation: 'strong-fit' | 'good-fit' | 'needs-preparation' | 'poor-fit';
  confidenceScore: number;
}

interface AssessmentResultsProps {
  scores: AssessmentScore;
  onRestart: () => void;
}

const AssessmentResults = ({ scores, onRestart }: AssessmentResultsProps) => {
  const getRecommendationDetails = () => {
    switch (scores.overallRecommendation) {
      case 'strong-fit':
        return {
          title: "Strong Fit - Excellent Match!",
          description: "You have strong alignment across personality, technical skills, and career interests.",
          color: "success",
          icon: CheckCircle,
          action: "Start your journey today"
        };
      case 'good-fit':
        return {
          title: "Good Fit - Great Potential",
          description: "You show strong potential with some areas for development.",
          color: "primary",
          icon: TrendingUp,
          action: "Focus on skill development"
        };
      case 'needs-preparation':
        return {
          title: "Needs Preparation",
          description: "Build foundational skills before pursuing this career path.",
          color: "warning",
          icon: AlertCircle,
          action: "Start with prerequisites"
        };
      default:
        return {
          title: "Consider Alternatives",
          description: "This career path may not align well with your current profile.",
          color: "destructive",
          icon: AlertCircle,
          action: "Explore related fields"
        };
    }
  };

  const recommendation = getRecommendationDetails();
  const RecommendationIcon = recommendation.icon;

  const careerPaths = [
    { title: "Statistical Modeling Analyst", match: scores.confidenceScore },
    { title: "Data Scientist (Modeling Focus)", match: Math.max(0, scores.confidenceScore - 10) },
    { title: "Quantitative Analyst", match: Math.max(0, scores.confidenceScore - 15) },
    { title: "Biostatistician", match: Math.max(0, scores.confidenceScore - 20) },
    { title: "Business Analyst", match: Math.max(0, scores.confidenceScore - 25) },
  ];

  const learningPath = [
    { title: "Foundation: Statistics & Probability", completed: scores.technicalScore > 70 },
    { title: "Programming: Python/R Basics", completed: scores.technicalScore > 50 },
    { title: "Intermediate: Regression Analysis", completed: scores.technicalScore > 80 },
    { title: "Advanced: Machine Learning Models", completed: scores.technicalScore > 90 },
    { title: "Professional: Industry Applications", completed: false },
  ];

  return (
    <div className="min-h-screen bg-assessment-bg">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Assessment Complete
            </div>
            <h1 className="text-4xl font-bold mb-4">Your Results</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive analysis of your fit for Statistical Modeling
            </p>
          </div>

          {/* Overall Recommendation */}
          <Card className="p-8 mb-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                recommendation.color === 'success' ? 'bg-success/10' :
                recommendation.color === 'primary' ? 'bg-primary/10' :
                recommendation.color === 'warning' ? 'bg-warning/10' :
                'bg-destructive/10'
              }`}>
                <RecommendationIcon className={`w-8 h-8 ${
                  recommendation.color === 'success' ? 'text-success' :
                  recommendation.color === 'primary' ? 'text-primary' :
                  recommendation.color === 'warning' ? 'text-warning' :
                  'text-destructive'
                }`} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{recommendation.title}</h2>
                <p className="text-muted-foreground">{recommendation.description}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{scores.confidenceScore}%</div>
                <div className="text-sm text-muted-foreground">Confidence</div>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Score Breakdown */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Score Breakdown
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Psychometric Fit</span>
                    <span className="text-sm font-medium">{scores.psychometricFit}%</span>
                  </div>
                  <Progress value={scores.psychometricFit} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Technical Readiness</span>
                    <span className="text-sm font-medium">{scores.technicalScore}%</span>
                  </div>
                  <Progress value={scores.technicalScore} className="h-3" />
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">WISCAR Analysis</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Will</span>
                      <span className="text-sm font-medium">{scores.wiscar.will}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Interest</span>
                      <span className="text-sm font-medium">{scores.wiscar.interest}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Skill</span>
                      <span className="text-sm font-medium">{scores.wiscar.skill}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Cognitive</span>
                      <span className="text-sm font-medium">{scores.wiscar.cognitive}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Ability</span>
                      <span className="text-sm font-medium">{scores.wiscar.ability}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Real-World Fit</span>
                      <span className="text-sm font-medium">{scores.wiscar.realWorld}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Career Paths */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Recommended Career Paths
              </h3>
              
              <div className="space-y-4">
                {careerPaths.map((career, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="font-medium">{career.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{career.match}%</span>
                      <Badge variant={career.match > 70 ? "default" : career.match > 50 ? "secondary" : "outline"}>
                        {career.match > 70 ? "Strong" : career.match > 50 ? "Good" : "Fair"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Learning Path */}
          <Card className="p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Recommended Learning Path
            </h3>
            
            <div className="space-y-4">
              {learningPath.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.completed ? <CheckCircle className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className={`flex-1 ${step.completed ? 'text-success' : ''}`}>
                    {step.title}
                  </span>
                  {step.completed && (
                    <Badge variant="outline" className="text-success border-success">
                      Completed
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Next Steps
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Button className="w-full mb-3" variant="default">
                  Start Learning Path
                </Button>
                <p className="text-sm text-muted-foreground">
                  Begin with foundational courses
                </p>
              </div>
              <div className="text-center">
                <Button className="w-full mb-3" variant="outline">
                  Explore Resources
                </Button>
                <p className="text-sm text-muted-foreground">
                  Find books, courses, and tools
                </p>
              </div>
              <div className="text-center">
                <Button 
                  onClick={onRestart}
                  className="w-full mb-3" 
                  variant="outline"
                >
                  Retake Assessment
                </Button>
                <p className="text-sm text-muted-foreground">
                  Start over with a fresh perspective
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;