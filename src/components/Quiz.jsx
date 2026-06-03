import { useState } from "react";
import quizData from "../questions";
import QuizEnd from "./QuizEnd";

function Quiz(){
    const [index, setIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);

    function checkAnswer(event){
        event.preventDefault();
        if(selected === null){
            alert("Please select an option.");
            return;
        }
        setAnswered(true);
        if(selected === quizData[index].answer){
            setScore(prev => prev + 1);
        }
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    }

    function nextQuestion(){
        setIndex(prev => prev + 1);
        setAnswered(false);
        setSelected(null);
    }

    function prevQuestion(event){
        setIndex(prev => prev - 1);
        setAnswered(false);
        setSelected(null);
    }

    function endQuiz(){
        setIndex(0);
        setScore(0);
    }

    return(
        <div className="quiz">
            <p className="score-board">Score: {score}</p>
            <p className="question">{quizData[index].id}. {quizData[index].question}</p>
            <form onSubmit={checkAnswer}>
            {quizData[index].options.map((option, i) => (
                <div key={i} className={`option ${answered && option === quizData[index].answer ? "correct" : ""} ${answered && option === selected && option !== quizData[index].answer ? "incorrect" : ""}`}>
                    <input
                        type="radio"
                        id={`option${i+1}`}
                        name={`question${index}`}
                        value={option}
                        checked={selected === option}
                        onChange={() => setSelected(option)}
                    />
                    <label htmlFor={`option${i+1}`}>{option}</label>
                </div>
            ))}
            <input type="submit" value="Submit" />
            <button disabled={index === quizData.length -1} type="button" onClick={nextQuestion}>Next</button>
            <button disabled={index === 0} type="button" onClick={prevQuestion}>Previous</button>
            </form>
            {index === quizData.length - 1 && answered && <QuizEnd finalScore={score} totalQuestions={quizData.length} onRestart={endQuiz} />}
        </div>
    );
}

export default Quiz;