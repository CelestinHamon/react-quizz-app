import { useState, useEffect, useCallback } from "react";
import { decode } from "html-entities";

import { Question } from "../components/QuestionComponent/types";
import { Difficulty } from "../components/QuizzSelector/types";

export const useTriviaQuestions = (
  category: number,
  difficulty: Difficulty
) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`,
      { signal: controller.signal }
    )
      .then(async (response) => {
        const data = await response.json();
        const formattedQuestions = data.results.map(
          (question: {
            question: string;
            correct_answer: string;
            incorrect_answers: string[];
          }): Question => ({
            question: decode(question.question), // decode html entities
            correctAnswer: decode(question.correct_answer), // decode html entities
            answers: [...question.incorrect_answers, question.correct_answer]
              .sort(() => Math.random() - 0.5) // shuffle answers
              .map((answer) => decode(answer)), // decode html entities
            selectedAnswer: undefined,
          })
        );
        setQuestions(formattedQuestions);
      })
      .catch((error) => {
        // Ignore abort errors
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });
    return () => {
      controller.abort();
    };
  }, [category, difficulty]);

  const selectAnswer = useCallback(
    (currentQuestion: Question, answer?: string) => {
      setQuestions((prevQuestions) =>
        // Update the selected answer for the current question
        prevQuestions.map((question) =>
          question.question === currentQuestion.question
            ? { ...question, selectedAnswer: answer }
            : question
        )
      );
    },
    []
  );

  return { questions, selectAnswer };
};
