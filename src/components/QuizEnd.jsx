function QuizEnd(props) {
  const messages = [
    "Well done! You are a quiz master!",
    "Great job! You have a good grasp of the material.",
    "Not bad, keep practicing!",
    "Better luck next time!",
  ];

  return (
    <div className="quiz-end">
      <h2>Quiz Completed!</h2>
      <p>
        Your answered {props.score} out of {props.totalQuestions} correctly.
      </p>
      <p>
        {props.score === 10
          ? messages[0]
          : props.score >= 7
            ? messages[1]
            : props.score >= 5
              ? messages[2]
              : messages[3]}
      </p>
      <button onClick={props.onRestart}>Restart Quiz</button>
    </div>
  );
}

export default QuizEnd;
