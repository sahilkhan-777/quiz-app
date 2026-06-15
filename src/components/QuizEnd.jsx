function QuizEnd(props) {
  const messages = [
    "Well done! You are a quiz master!",
    "Great job! You have a good grasp of the material.",
    "Not bad, keep practicing!",
    "Better luck next time!",
  ];

  return (
    <div className="quiz-end flex flex-col items-center justify-center gap-4 text-center text-blue-950">
      <h2 className="text-2xl">Quiz Completed!</h2>
      <p className="text-xl">
        Your answered {props.score} out of {props.totalQuestions} correctly.
      </p>
      <p className="text-2xl">
        {props.score === 10
          ? messages[0]
          : props.score >= 7
            ? messages[1]
            : props.score >= 5
              ? messages[2]
              : messages[3]}
      </p>
      <button
        onClick={props.onRestart}
        className="bg-yellow-400 text-blue-950 border-none rounded-sm text-xl cursor-pointer uppercase"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizEnd;
