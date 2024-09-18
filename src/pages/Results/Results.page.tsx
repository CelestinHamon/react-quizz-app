import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";
import { Question } from "../../components/QuestionComponent/types";
import Score from "../../components/Score/Score";

const Results: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { questions: Question[] } | undefined;
  const questions = state?.questions;

  const navigateToQuizz = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Avoid navigating to the page through the browser url
  // Check if questions exist, if not navigate to quizz
  useEffect(() => {
    if (!questions || questions.length === 0) {
      navigateToQuizz();
    }
  }, [questions, navigateToQuizz]);

  return (
    <>
      <h2>Results</h2>
      {questions && questions.length > 0 ? (
        <>
          {questions.map((question) => (
            <QuestionComponent
              question={question}
              key={question.question}
              selectAnswer={(answer?: string) => console.log(answer)}
              reviewMode
            />
          ))}
          <Score questions={questions} />
        </>
      ) : null}
      <div className="centered-container">
        <button onClick={navigateToQuizz}>Create a new quizz</button>
      </div>
    </>
  );
};

export default Results;
