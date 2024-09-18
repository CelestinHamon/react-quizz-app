import { Route, Routes } from "react-router-dom";

import Quizz from "./pages/Quizz/Quizz.page.tsx";
import Results from "./pages/Results/Results.page.tsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Trivia Quizz</h1>
      <Routes>
        <Route path="/" element={<Quizz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
