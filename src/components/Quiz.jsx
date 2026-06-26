import { useState } from "react";
import quizData from "../questions";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

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

  function prevQuestion() {
    setIndex((prev) => prev - 1);
    setAnswered(false);
    setSelected(null);
  }

  function completeQuiz() {
    props.onComplete();
  }

  return (
    <div className="quiz shadow w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] lg:w-1/2 my-5 mx-auto bg-white rounded-xl py-4 px-5">
      <p className="mb-3 text-2xl font-bold text-blue-950">{quizData[index].question}</p>
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
              className={`quiz-options ${answered && option === quizData[index].answer ? "correct" : ""} ${answered && option !== quizData[index].answer ? "incorrect" : ""}`}
            >
              <span className="text-xl text-blue-950 bg-yellow-400 py-1.5 px-3 rounded-full">{letters[i]}</span> {option}
            </label>
          </div>
        ))}
        <div className="flex flex-col sm:flex-row justify-between my-20 mx-0 gap-5">
          <button
            disabled={index === 0}
            type="button"
            onClick={prevQuestion}
            className="quiz-btns bg-neutral-300 hover:bg-neutral-400"
          >
            <KeyboardBackspaceIcon />
            Previous
          </button>
          <button type="submit" className="quiz-btns submit-button bg-white hover:bg-green-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="1.6"
              className="group-hover: text-white"
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
          <button type="button" onClick={completeQuiz} className="quiz-btns bg-yellow-500 hover:bg-yellow-600">
            Complete Quiz
          </button> : 
          <button
            disabled={!answered}
            type="button"
            onClick={nextQuestion}
            className="quiz-btns bg-yellow-400 hover:bg-yellow-500"
          >
            Next
            <EastOutlinedIcon />
          </button>}
        </div>
      </form>
    </div>
  );
}

export default Quiz;
