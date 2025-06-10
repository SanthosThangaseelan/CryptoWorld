import axios from "axios";
import myCryptoQuestions from "../data/myCryptoQuestions";

export async function fetchCryptoQuestions(limit = 5) {
  try {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${limit}&category=18&type=multiple`
    );
    const external = res.data.results.map((q) => ({
      question: q.question,
      options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
      answer: q.correct_answer,
    }));

    const combined = [...myCryptoQuestions, ...external];
    return combined.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching external quiz questions", error);
    return myCryptoQuestions;
  }
}
