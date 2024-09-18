import React, { useState } from "react";

import QuizzContent from "../../components/QuizzContent/QuizzContent";
import QuizzSelector from "../../components/QuizzSelector/QuizzSelector";
import { Difficulty } from "../../components/QuizzSelector/types";
import "./Quizz.css";

const Quizz: React.FC = () => {
  const [category, setCategory] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  return (
    <>
      <QuizzSelector setCategory={setCategory} setDifficulty={setDifficulty} />
      <div className="separator" />
      {category && difficulty ? (
        <QuizzContent category={category} difficulty={difficulty} />
      ) : null}
    </>
  );
};

export default Quizz;
