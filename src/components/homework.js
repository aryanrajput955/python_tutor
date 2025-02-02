// src/components/Homework.jsx
import React, { useState, useEffect } from "react";
import "./homework.css";

const Homework = () => {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");

  // List of random Python questions
  const questions = [
    "Write a Python program to print 'Hello, World!'",
    "Create a variable called 'name' and assign your name to it.",
    "Write a Python program to add two numbers.",
    "Write a Python program to check if a number is even or odd.",
    "Write a Python program to find the largest number in a list.",
    "Write a Python program to reverse a string.",
    "Write a Python program to calculate the factorial of a number.",
    "Write a Python program to check if a string is a palindrome.",
    "Write a Python program to generate the Fibonacci sequence.",
    "Write a Python program to count the number of vowels in a string.",
  ];

  // Generate a random question when the component loads or when the user navigates to Homework
  useEffect(() => {
    generateRandomQuestion();
  }, []);

  const generateRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setAnswer(""); // Clear the previous answer
    setResult(""); // Clear the previous result
  };

  const checkAnswer = () => {
    if (!answer.trim()) {
      setResult("Please write your answer before submitting!");
      return;
    }

    // Simple validation for demonstration purposes
    if (currentQuestion.includes("print('Hello, World!')") && answer.includes("print('Hello, World!')")) {
      setResult("Correct! Great job! 🎉");
    } else if (currentQuestion.includes("add two numbers") && answer.includes("+")) {
      setResult("Correct! Great job! 🎉");
    } else if (currentQuestion.includes("even or odd") && (answer.includes("%") || answer.includes("if"))) {
      setResult("Correct! Great job! 🎉");
    } else {
      setResult("Try again! You can do it! 💪");
    }
  };

  return (
    <div className="homework-container">
      <h2>Interactive Homework 🏫</h2>
      <p className="question">{currentQuestion}</p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your code here..."
      />
      <div className="buttons">
        <button onClick={checkAnswer}>Submit</button>
        <button onClick={generateRandomQuestion}>New Question 🔄</button>
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default Homework;