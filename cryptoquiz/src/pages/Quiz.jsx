import React, { useEffect, useState } from "react";
import { fetchCryptoQuestions } from "../api/fetchCryptoQuestions";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCryptoQuestions(5).then((q) => {
            setQuestions(q);
            setLoading(false);
        });
    }, []);

    const handleOptionClick = (option) => {
        setSelected(option);
        if (option === questions[current].answer) {
            setScore(score + 1);
        }

        setTimeout(() => {
            setSelected(null);
            if (current + 1 < questions.length) {
                setCurrent(current + 1);
            } else {
                setShowScore(true);
            }
        }, 1000);
    };

    if (loading) return <div className="text-white p-10">🔄 Loading questions...</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center px-4">
            <div className="max-w-xl w-full bg-white/5 p-8 rounded-xl border border-slate-700 shadow-lg">
                {!showScore ? (
                    <>
                        <h2 className="text-xl text-cyan-300 font-bold mb-4">
                            🔐 Crypto Quiz ({current + 1}/{questions.length})
                        </h2>
                        <p className="text-lg font-semibold mb-6" dangerouslySetInnerHTML={{ __html: questions[current].question }} />
                        <div className="grid gap-3">
                            {questions[current].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleOptionClick(opt)}
                                    className={`px-4 py-3 rounded-lg border ${selected
                                        ? opt === questions[current].answer
                                            ? "bg-green-600 border-green-500"
                                            : opt === selected
                                                ? "bg-red-600 border-red-500"
                                                : "bg-gray-800 border-gray-700"
                                        : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                                        }`}
                                    dangerouslySetInnerHTML={{ __html: opt }}
                                    disabled={!!selected}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-emerald-400 mb-4">🎉 Quiz Finished!</h2>
                        <p className="text-xl">Your Score:</p>
                        <p className="text-4xl font-bold text-yellow-400">
                            {score} / {questions.length}
                        </p>

                    </div>
                )}
                <button
                    className="bg-blue-600 text-white ml-56 my-10 px-4 py-2 rounded"
                    onClick={() => navigate(`/`)}>
                    Home
                </button>
            </div>
        </div>
    );
}
