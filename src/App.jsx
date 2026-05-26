import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Footer from './components/Footer';
import questions from "./questions"

function App() {

  return (
    <>
      <Header />
      <Quiz />
      <Result />
      <Footer />
    </>
  )
}

export default App
