import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Footer from './components/Footer';
import questions from "./questions";
import Score from './components/Score';

function App() {
  const [score, setScore] = useState(0);

  function handleCorrectAnswer(){
    setScore(prev => prev + 1);
  }

  function handleRestart(){
    setScore(0);
  }

  return (
    <>
      <Header />
      <Score currentScore={score}/>
      <Quiz onCorrectAnswer={handleCorrectAnswer} onRestartQuiz={handleRestart} />
      <Result />
      <Footer />
    </>
  )
}

export default App
