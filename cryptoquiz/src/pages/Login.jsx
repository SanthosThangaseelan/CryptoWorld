import { useState } from "react";
import { auth } from "../firebase/firebasseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async () => {
    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/"); // go to home/dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4">{isNewUser ? "Sign Up" : "Login"}</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-slate-700 border border-slate-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-slate-700 border border-slate-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <button
          onClick={handleAuth}
          className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded text-lg mb-3"
        >
          {isNewUser ? "Create Account" : "Login"}
        </button>

        <p className="text-center text-sm text-gray-400">
          {isNewUser ? "Already have an account?" : "New here?"}{" "}
          <button
            onClick={() => setIsNewUser(!isNewUser)}
            className="text-blue-400 underline"
          >
            {isNewUser ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
