// src/components/Home.jsx
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1 className="title">🐍 Welcome to <span>Python Buddy!</span> 🎉</h1>
      <p className="intro">
        Learn Python with fun games, challenges, and an AI-powered tutor! 🚀
      </p>
      <div className="features-box">
        <p className="features">🎨 Customize your AI tutor</p>
        <p className="features">🎮 Play interactive coding games</p>
        <p className="features">🏆 Earn rewards & badges</p>
        <p className="features">📝 Solve fun challenges</p>
      </div>
      <Link to={"/tutor"}>
      <button className="start-btn">🚀 Start Learning Now!</button>
      </Link>
      <div className="bubbles">
        <span></span> <span></span> <span></span> <span></span> <span></span>
      </div>
    </div>
  );
};

export default Home;
