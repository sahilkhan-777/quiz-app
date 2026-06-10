import { useState } from "react";
import quizData from "../questions";

function Quiz(props) {
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const letters = ["A", "B", "C", "D"];

  function checkAnswer(event) {
    event.preventDefault();
    if (selected === null) {
      alert("Please select an option.");
      return;
    }
    setAnswered(true);
    if (selected === quizData[index].answer) {
      props.onCorrectAnswer();
    }
    setSelected(null);
  }

  function nextQuestion() {
    setIndex((prev) => prev + 1);
    setAnswered(false);
    setSelected(null);
  }

  function prevQuestion(event) {
    setIndex((prev) => prev - 1);
    setAnswered(false);
    setSelected(null);
  }

  function completeQuiz() {
    props.onComplete();
  }

  function handleRestart() {
    setIndex(0);
    props.onRestartQuiz();
    setAnswered(false);
    setSelected(null);
  }

  return (
    <div className="quiz">
      <p className="question">{quizData[index].question}</p>
      <form onSubmit={checkAnswer}>
        {quizData[index].options.map((option, i) => (
          <div key={i}>
            <input
              type="radio"
              id={`option${i + 1}`}
              name={`question${index}`}
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              disabled={answered}
            />
            <label
              htmlFor={`option${i + 1}`}
              className={`option-label ${answered && option === quizData[index].answer ? "correct" : ""} ${answered && option !== quizData[index].answer ? "incorrect" : ""}`}
            >
              <span>{letters[i]}</span> {option}
            </label>
          </div>
        ))}
        <div className="btn-group">
          <button
            disabled={index === 0}
            type="button"
            onClick={prevQuestion}
            className="prev-btn"
          >
            <svg
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 18L6.5 12.5L12 7M6.5 12.5H19"
                  stroke-width="1.2"
                ></path>{" "}
              </g>
            </svg>
            Previous
          </button>
          <button type="submit" className="submit-btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z"
                  stroke-width="1.2"
                ></path>
              </g>
            </svg>
            Submit
          </button>
          {index === quizData.length - 1 && answered ? 
          <button type="button" onClick={completeQuiz} className="complete-btn">
            Complete Quiz
          </button> : 
          <button
            disabled={!answered}
            type="button"
            onClick={nextQuestion}
            className="next-btn"
          >
            Next
            <svg
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M13 7L18.5 12.5L13 18M18.5 12.5H6"
                  stroke-width="1.2"
                ></path>{" "}
              </g>
            </svg>
          </button>}
        </div>
      </form>
    </div>
  );
}

export default Quiz;
