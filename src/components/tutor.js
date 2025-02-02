// src/components/Tutor.jsx
import React, { useState } from "react";
import { generateResponse } from "../api";
import "./tutor.css";

const Tutor = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return; // Prevent empty or duplicate submissions

    // Add the user's message to the chat
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput(""); // Clear input field

    // Show "Thinking..." message
    setMessages((prev) => [...prev, { text: "Thinking...", sender: "bot" }]);
    setIsLoading(true); // Disable input and button

    try {
      // Get AI response
      const aiResponse = await generateResponse(input);
      // Replace "Thinking..." with the actual response
      setMessages((prev) => [...prev.slice(0, -1), { text: aiResponse, sender: "bot" }]);
    } catch (error) {
      // Replace "Thinking..." with the error message
      setMessages((prev) => [...prev.slice(0, -1), { text: "Error: " + error.message, sender: "bot" }]);
    } finally {
      setIsLoading(false); // Re-enable input and button
    }
  };

  return (
    <div className="tutor-container">
      <h2>Chat with Python Buddy! 🐍🤖</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Python..."
          disabled={isLoading} // Disable input while loading
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send 🚀"}
        </button>
      </form>
    </div>
  );
};

export default Tutor;