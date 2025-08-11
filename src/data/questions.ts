import { Question } from "@/components/assessment/QuestionCard";

export const assessmentQuestions: Question[] = [
  // Psychometric Section - Interest Scale
  {
    id: "psych_1",
    type: "likert",
    category: "Interest Assessment",
    question: "I enjoy working with numbers and mathematical patterns.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "psych_2",
    type: "likert",
    category: "Interest Assessment",
    question: "I like solving puzzles with logic and precision.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "psych_3",
    type: "likert",
    category: "Interest Assessment",
    question: "I prefer structure and clarity in my work environment.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "psych_4",
    type: "likert",
    category: "Personality",
    question: "I can stick with a complex problem even if it takes weeks to solve.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "psych_5",
    type: "likert",
    category: "Personality",
    question: "I am comfortable working independently for long periods.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },

  // Work Preferences
  {
    id: "work_1",
    type: "multiple-choice",
    category: "Work Style",
    question: "Which type of work environment do you prefer?",
    options: [
      "Structured with clear procedures and deadlines",
      "Flexible with creative freedom and autonomy",
      "Collaborative with frequent team interactions",
      "Mixed environment with both structure and flexibility"
    ]
  },
  {
    id: "work_2",
    type: "multiple-choice",
    category: "Work Style",
    question: "When solving problems, you typically prefer to:",
    options: [
      "Follow established methods and best practices",
      "Experiment with new approaches and techniques",
      "Combine multiple perspectives from team members",
      "Use data and evidence to guide decisions"
    ]
  },

  // Technical Aptitude Section
  {
    id: "tech_1",
    type: "aptitude",
    category: "Mathematical Foundation",
    question: "If the correlation coefficient between two variables is 0.8, what does this indicate?",
    options: [
      "The variables are independent",
      "There is a strong positive linear relationship",
      "There is a strong negative linear relationship",
      "One variable causes the other"
    ],
    correctAnswer: 1
  },
  {
    id: "tech_2",
    type: "aptitude",
    category: "Statistical Concepts",
    question: "What is the primary purpose of a p-value in hypothesis testing?",
    options: [
      "To measure the effect size",
      "To determine the sample size needed",
      "To assess the probability of observing the data given the null hypothesis",
      "To calculate the confidence interval"
    ],
    correctAnswer: 2
  },
  {
    id: "tech_3",
    type: "aptitude",
    category: "Data Analysis",
    question: "Which model would be most appropriate for predicting a binary outcome (yes/no)?",
    options: [
      "Linear regression",
      "Logistic regression",
      "Time series analysis",
      "Principal component analysis"
    ],
    correctAnswer: 1
  },

  // WISCAR Framework
  {
    id: "wiscar_will",
    type: "likert",
    category: "Will & Motivation",
    question: "I am willing to invest years in developing statistical modeling expertise.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "wiscar_interest",
    type: "likert",
    category: "Interest",
    question: "I am genuinely excited about discovering patterns in large datasets.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "wiscar_skill",
    type: "multiple-choice",
    category: "Current Skills",
    question: "Which best describes your current statistical knowledge?",
    options: [
      "No formal statistics background",
      "Basic understanding of mean, median, standard deviation",
      "Familiar with hypothesis testing and regression",
      "Advanced knowledge including multivariate analysis"
    ]
  },
  {
    id: "wiscar_cognitive",
    type: "aptitude",
    category: "Cognitive Ability",
    question: "Look at this pattern: 2, 6, 12, 20, 30, ?. What comes next?",
    options: [
      "40",
      "42",
      "45",
      "48"
    ],
    correctAnswer: 1
  },
  {
    id: "wiscar_learning",
    type: "likert",
    category: "Learning Ability",
    question: "I actively seek feedback and adjust my approach when something doesn't work.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "wiscar_reality",
    type: "multiple-choice",
    category: "Career Alignment",
    question: "Which work scenario sounds most fulfilling to you?",
    options: [
      "Building predictive models to optimize business processes",
      "Leading creative projects and managing teams",
      "Directly helping people solve their problems",
      "Developing innovative products and technologies"
    ]
  },

  // Additional domain-specific questions
  {
    id: "domain_1",
    type: "multiple-choice",
    category: "Industry Application",
    question: "Which industry application of statistical modeling interests you most?",
    options: [
      "Healthcare and medical research",
      "Financial risk and investment analysis",
      "Marketing and customer behavior",
      "Operations and supply chain optimization"
    ]
  },
  {
    id: "domain_2",
    type: "likert",
    category: "Technical Tools",
    question: "I am comfortable learning programming languages like Python or R.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  },
  {
    id: "final_commitment",
    type: "likert",
    category: "Career Commitment",
    question: "I can see myself building a long-term career in statistical modeling and data analysis.",
    likertLabels: {
      left: "Strongly Disagree",
      right: "Strongly Agree"
    }
  }
];