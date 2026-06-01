import { useState } from "react";
import quizData from "../questions";

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
        nextQuestion();
    }

    function nextQuestion(){
        setIndex(prev => prev + 1);
        setAnswered(false);
        setSelected(null);
    }

    function prevQuestion(event){
        setIndex(prev => prev - 1);
        // if(index > 0){
        //     setIndex(prev => prev - 1);
        // }
        // else{
        //     event.target.disabled = true;
        // }
        setAnswered(false);
        setSelected(null);
    }

    return(
        <div className="quiz">
            <h2>Quiz</h2>
            <p>Score: {score}</p>
            <p>{quizData[index].id}. {quizData[index].question}</p>
            <form onSubmit={checkAnswer}>
            {quizData[index].options.map((option, i) => (
                <div key={i}>
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
        </div>
    );
}

export default Quiz;