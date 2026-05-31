import { useState } from "react";
import quizData from "../questions";

function Quiz(){
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
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizData[index].answer);
        }
        changeQuestion();
    }

    function changeQuestion(){
        setIndex(prev => prev + 1);
        setAnswered(false);
        setSelected(null);
    }

    return(
        <div className="quiz">
            <h2>Quiz</h2>
            <p>{quizData[index].question}</p>
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
            <button type="button" onClick={changeQuestion}>Next</button>
            </form>
        </div>
    );
}

export default Quiz;