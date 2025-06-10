// src/api/fetchTrivia.js
import axios from 'axios';

export async function fetchTrivia(limit = 10) {
  try {
    const res = await axios.get(
      `https://the-trivia-api.com/v2/questions?limit=${limit}&categories=science,education`
    );

    return res.data.map((q) => ({
      question: q.question.text,
      options: [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5),
      answer: q.correctAnswer,
    }));
  } catch (err) {
    console.error("Error fetching quiz:", err);
    return [];
  }
}
