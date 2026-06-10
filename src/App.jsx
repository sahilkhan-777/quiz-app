import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizEnd from "./components/QuizEnd";
import Footer from "./components/Footer";
import questions from "./questions";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCorrectAnswer() {
    setScore((prev) => prev + 1);
  }

  function handleCompleteQuiz() {
    setIsCompleted(true);
  }

  function handleRestart() {
    setScore(0);
    setIsCompleted(false);
  }

  return (
    <>
      <Header />
      <Score currentScore={score} />
      {isCompleted && <QuizEnd score={score} onRestart={handleRestart} totalQuestions={questions.length} />}
      {!isCompleted && (
        <Quiz
          onCorrectAnswer={handleCorrectAnswer}
          onComplete={handleCompleteQuiz}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
