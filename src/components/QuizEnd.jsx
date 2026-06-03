function QuizEnd(props){
    return(
        <div className="quiz-end">
            <h2>Quiz Completed!</h2>
            <p>Your final score is: {props.finalScore} out of {props.totalQuestions}</p>
            <button onClick={props.onRestart}>Restart Quiz</button>
        </div>
    )
}

export default QuizEnd;