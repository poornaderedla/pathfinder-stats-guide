import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Brain, Target, CheckCircle } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-assessment-bg">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Career Assessment Tool
            </div>
            <h1 className="text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6">
              Should I Become a Statistical Modeling Analyst?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive psychometric and technical assessment to evaluate your fit for a career in statistical modeling and data analysis.
            </p>
          </div>

          {/* What You'll Discover */}
          <Card className="p-8 mb-8 shadow-card">
            <h2 className="text-2xl font-semibold mb-6 text-center">What You'll Discover</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Psychological Fit</h3>
                <p className="text-sm text-muted-foreground">
                  Personality traits, work preferences, and cognitive style alignment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Technical Readiness</h3>
                <p className="text-sm text-muted-foreground">
                  Mathematical foundation, statistical knowledge, and programming aptitude
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Career Roadmap</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized learning path and next steps for your journey
                </p>
              </div>
            </div>
          </Card>

          {/* Assessment Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Assessment Components</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Personality & Interest Evaluation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Technical Aptitude Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>WISCAR Framework Analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Career Alignment Scoring</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Time & Format</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Duration: ~30 minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Multiple choice & Likert scales</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Immediate detailed results</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Personalized recommendations</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button 
              onClick={onStart}
              size="lg"
              className="bg-hero-gradient hover:scale-105 transition-transform duration-200 shadow-glow px-12 py-6 text-lg font-semibold"
            >
              Start Assessment
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No registration required • Results provided instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;