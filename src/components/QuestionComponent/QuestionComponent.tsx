import React from "react";

import { Question } from "./types";
import AnswerComponent from "../AnswerComponent/AnswerComponent";

type QuestionComponentProps = {
  question: Question;
  selectAnswer(answer?: string): void;
  reviewMode?: boolean;
};

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  selectAnswer,
  reviewMode,
}) => {
  return (
    <>
      <h3>{question.question}</h3>
      <div>
        {question.answers.map((answer, index) => (
          <AnswerComponent
            key={index}
            answer={answer}
            isSelected={answer === question.selectedAnswer}
            isCorrect={answer === question.correctAnswer}
            setSelectedAnswer={selectAnswer}
            reviewMode={reviewMode}
          />
        ))}
      </div>
    </>
  );
};

export default QuestionComponent;
