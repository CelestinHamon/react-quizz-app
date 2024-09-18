import React from "react";
import { useNavigate } from "react-router-dom";

import { useTriviaQuestions } from "../../hooks/useTriviaQuestions";
import { Difficulty } from "../QuizzSelector/types";
import QuestionComponent from "../QuestionComponent/QuestionComponent";
import "./QuizzContent.css";

interface QuizzProps {
  category: number;
  difficulty: Difficulty;
}

const QuizzContent: React.FC<QuizzProps> = ({ category, difficulty }) => {
  const navigate = useNavigate();
  const { questions, selectAnswer } = useTriviaQuestions(category, difficulty);

  const isSubmitButtonVisible =
    questions.length > 0 &&
    questions.every((question) => question.selectedAnswer !== undefined);
  const navigateToResults = () => {
    navigate("/results", { state: { questions } });
  };

  return (
    <div className="quizz-container">
      {questions.map((question, index) => (
        <QuestionComponent
          question={question}
          key={question.question + index}
          selectAnswer={(answer?: string) => selectAnswer(question, answer)}
        />
      ))}
      {isSubmitButtonVisible && (
        <div className="centered-container">
          <button onClick={navigateToResults}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default QuizzContent;
