# React Quiz App

A simple, interactive, and strictly validated quiz application built with React. This app presents users with a series of multiple-choice questions, tracks their score, and prevents them from skipping ahead without answering.

## 🚀 Features

* **Step-by-Step Flow:** Renders one question at a time for a clean user experience.
* **Strict Validation:** Navigation button "Next" remains disabled until the user selects and submits an answer.
* **Instant Feedback:** Answers are visually highlighted as green(for correct) or red (for incorrect) upon submission.
* **Score Tracking:** Keeps a running total of correct answers.
* **Summary Screen:** Displays the final score and offers a "Restart" option at the end of the quiz.

## 🛠️ Tech Stack

* **React:** Utilizes Functional Components and React Hooks (`useState`) for local state management.
* **Vanilla CSS:** Custom styling for components, interactive buttons, and validation states.

## 📦 Component Structure

* `App`: The main container managing the application state (`score`, `isCompleted`) and routing between the active quiz and the end screen.
* `Quiz`: Handles the active question state, answer validation, and navigation logic.
* `QuizEnd`: Displays the final score out of the total questions and provides a restart mechanism.
* `Score`: A simple display component for the live score.
* `Header` & `Footer`: Static layout components.

## 💻 Running Locally

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
```bash
   git clone <your-repo-url>
```

2. **Navigate to the project directory:**
```bash
   cd react-quiz-app
```

3. **Install dependencies:**
```bash
   npm install
```

4. **Start the development server:**
```bash
   npm run dev
```

## 📝 Customizing Questions

To add or change the quiz questions, locate the questions.js file in the src directory. The data should follow this structure:

```
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  // Add more questions here...
];

export default questions;
```