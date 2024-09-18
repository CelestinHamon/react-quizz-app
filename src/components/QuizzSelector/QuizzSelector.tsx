import React, { useCallback } from "react";

import GenericSelector from "../GenericSelector/GenericSelector";
import { DIFFICULTIES } from "./constants";
import { useTriviaCategories } from "../../hooks/useTriviaCategories";
import { Difficulty } from "./types";
import "./QuizzSelector.css";

type QuizzSelectorProps = {
  setCategory: (category: number) => void;
  setDifficulty: (difficulty: Difficulty) => void;
};

const QuizzSelector: React.FC<QuizzSelectorProps> = ({
  setCategory,
  setDifficulty,
}) => {
  const triviaCategories = useTriviaCategories();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const difficulty = formData.get("difficultySelect");
      const category = formData.get("categorySelect");
      setDifficulty(difficulty as Difficulty);
      setCategory(Number(category));
    },
    [setDifficulty, setCategory]
  );

  return (
    <form method="post" onSubmit={handleSubmit}>
      <GenericSelector
        id="categorySelect"
        placeholder="Select a category"
        options={triviaCategories}
      />
      <GenericSelector
        id="difficultySelect"
        placeholder="Select difficulty"
        options={DIFFICULTIES}
      />
      <button id="createBtn" type="submit">
        Create
      </button>
    </form>
  );
};

export default QuizzSelector;
