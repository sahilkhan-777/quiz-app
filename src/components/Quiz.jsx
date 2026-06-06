import { useState } from "react";
import quizData from "../questions";
import QuizEnd from "./QuizEnd";

function Quiz(props){
    const [index, setIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selected, setSelected] = useState(null);

    function checkAnswer(event){
        event.preventDefault();
        if(selected === null){
            alert("Please select an option.");
            return;
        }
        setAnswered(true);
        if(selected === quizData[index].answer){
            props.onCorrectAnswer();
        }
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
        props.onRestartQuiz();
        setAnswered(false);
        setSelected(null);
    }

    return(
        <div className="quiz">
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
            <div className="btn-group">
                <button disabled={index === 0} type="button" onClick={prevQuestion}>
                    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18L6.5 12.5L12 7M6.5 12.5H19" stroke="#121923" stroke-width="1.2"></path> </g></svg>
                    Previous
                </button>
                <button type="submit">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M5 19.6693V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V19.6693C19 20.131 18.4277 20.346 18.1237 19.9985L12 13L5.87629 19.9985C5.57227 20.346 5 20.131 5 19.6693Z" stroke="#000000" stroke-linejoin="round"></path> </g></svg>
                    Submit
                </button>
                <button disabled={index === quizData.length -1} type="button" onClick={nextQuestion}>
                    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" stroke="#121923" stroke-width="1.2"></path> </g></svg>
                    Next
                </button>
            </div>
            </form>
            {index === quizData.length - 1 && answered && <QuizEnd finalScore={props.currentScore} totalQuestions={quizData.length} onRestart={endQuiz} />}
        </div>
    );
}

export default Quiz;