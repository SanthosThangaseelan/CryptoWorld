import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-4 py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
                🗝️ CryptoPlayground
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-10 text-center max-w-2xl">
                Learn Cryptography the fun way — one interactive concept at a time.
                Practice AES, DES, Hashing, Digital Signatures and more.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10 max-w-4xl w-full px-4">
                <button
                    onClick={() => navigate("/lesson/aes")}
                    className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-sm sm:text-base shadow w-full sm:w-auto">
                    📖 Some Quiz
                </button>

                <button
                    onClick={() => navigate("/crypto-basics")}
                    className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-sm sm:text-base shadow w-full sm:w-auto">
                    📘 Cryptography Explained
                </button>

                <button
                    onClick={() => navigate("/try-aes")}
                    className="bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-xl text-sm sm:text-base shadow w-full sm:w-auto">
                    🧪 Try AES
                </button>

                <button
                    onClick={() => navigate("/try/des")}
                    className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl text-sm sm:text-base shadow w-full sm:w-auto">
                    🔁 Try DES
                </button>

                <button
                    onClick={() => navigate("/try/hashing")}
                    className="bg-green-600 hover:bg-green-500 px-5 py-3 rounded-xl text-sm sm:text-base shadow w-full sm:w-auto">
                    🧾 Try Hashing
                </button>

                <button
                    onClick={() => navigate("/try/signature")}
                    className="bg-yellow-600 hover:bg-yellow-500 px-5 py-3 rounded-xl text-sm sm:text-base shadow w-full sm:w-auto">
                    ✍️ Try Digital Signature
                </button>
            </div>

            <div className="mt-6 bg-gray-800/60 backdrop-blur-md p-6 rounded-xl border border-gray-600 shadow-inner w-full max-w-xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3">📚 Learn More</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-lg text-gray-200">
                    <li>
                        <a href="https://cryptohack.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            🔐 CryptoHack – Real-world crypto puzzles
                        </a>
                    </li>
                    <li>
                        <a href="https://cryptopals.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            💻 CryptoPals – Hands-on cryptanalysis challenges
                        </a>
                    </li>
                </ul>
            </div>

            <footer className="mt-16 text-gray-400 text-xs sm:text-sm text-center">
                Built with 🛡️ love by <strong>Santhosh</strong>
            </footer>
        </div>
    );
}

export default Home;
