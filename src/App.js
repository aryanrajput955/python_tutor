// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Tutor from "./components/tutor";
import Homework from "./components/homework";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tutor">Tutor</Link>
          <Link to="/homework">Homework</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/homework" element={<Homework />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
