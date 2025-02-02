// src/components/Config.jsx
import React,{ useState } from "react";
import "./App.css";

const Config = () => {
  const [apiKey, setApiKey] = useState("");

  const saveApiKey = () => {
    localStorage.setItem("gemini-api-key", apiKey);
    alert("API key saved successfully!");
  };

  return (
    <div className="config">
      <h2>Configure API Key</h2>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter your Gemini API key"
      />
      <button onClick={saveApiKey}>Save</button>
    </div>
  );
};

export default Config;