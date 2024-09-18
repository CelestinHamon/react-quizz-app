import React from "react";

import { Question } from "../QuestionComponent/types";
import "./Score.css";

type ScoreProps = {
  questions: Question[];
};

const Score: React.FC<ScoreProps> = ({ questions }) => {
  const score = questions.reduce((acc, question) => {
    return acc + (question.selectedAnswer === question.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div className="centered-container">
      <h2 className={`score-${score}`}>
        You scored {score} out of {questions.length}
      </h2>
    </div>
  );
};

export default Score;
