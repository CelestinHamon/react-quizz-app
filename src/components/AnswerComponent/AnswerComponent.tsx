import React from "react";

import "./AnswerComponent.css";

type AnswerComponentProps = {
  answer: string;
  isSelected: boolean;
  isCorrect: boolean;
  setSelectedAnswer: (answer?: string) => void;
  reviewMode?: boolean;
};

const AnswerComponent: React.FC<AnswerComponentProps> = ({
  answer,
  isSelected,
  isCorrect,
  setSelectedAnswer,
  reviewMode,
}) => {
  const onClick = () => {
    if (!isSelected) {
      setSelectedAnswer(answer);
    } else {
      setSelectedAnswer(undefined);
    }
  };

  const getAnswerSatusClass = () => {
    if (reviewMode) {
      if (isCorrect) {
        return "correct-answer";
      } else if (isSelected) {
        return "incorrect-answer";
      } else {
        return "";
      }
    } else if (isSelected) {
      return "selected-answer";
    } else {
      return "";
    }
  };

  return (
    <button
      className={`answer-button ${getAnswerSatusClass()}`}
      onClick={onClick}
      disabled={reviewMode}
    >
      {answer}
    </button>
  );
};

export default AnswerComponent;
