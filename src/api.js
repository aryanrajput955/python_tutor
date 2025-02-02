// src/api.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = localStorage.getItem("gemini-api-key") || "AIzaSyCGICVHIM1DHHWAFgXiiPZQNHBF9PtLLdY"; // Get API key from local storage
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateResponse = async (prompt) => {
  if (!API_KEY) throw new Error("API key not configured. Please set it in the settings.");

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};