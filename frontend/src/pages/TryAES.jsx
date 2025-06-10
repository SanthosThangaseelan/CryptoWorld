import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function TryAES() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [showEncrypted, setShowEncrypted] = useState(false);
  const navigate = useNavigate();

  const textEncoder = new TextEncoder();
  const textDecoder = new TextDecoder();

  const getKey = async (password) => {
    const pwUtf8 = textEncoder.encode(password);
    const pwHash = await crypto.subtle.digest("SHA-256", pwUtf8);
    return crypto.subtle.importKey("raw", pwHash, { name: "AES-GCM" }, false, [
      "encrypt",
      "decrypt",
    ]);
  };

  const encryptMessage = async () => {
    setIsEncrypting(true);
    setShowEncrypted(false);

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await getKey(password);
    const encodedMessage = textEncoder.encode(message);
    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      encodedMessage
    );

    const encryptedArray = new Uint8Array(encryptedBuffer);
    const fullData = new Uint8Array(iv.byteLength + encryptedArray.byteLength);
    fullData.set(iv, 0);
    fullData.set(encryptedArray, iv.byteLength);
    const result = btoa(String.fromCharCode(...fullData));

    setTimeout(() => {
      setEncrypted(result);
      setIsEncrypting(false);
      setShowEncrypted(true);
    }, 1500);
  };

  const decryptMessage = async () => {
    try {
      const fullData = Uint8Array.from(atob(encrypted), (c) => c.charCodeAt(0));
      const iv = fullData.slice(0, 12);
      const data = fullData.slice(12);
      const key = await getKey(password);
      const decryptedBuffer = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        data
      );
      setDecrypted(textDecoder.decode(decryptedBuffer));
    } catch {
      setDecrypted("⚠️ Incorrect password or corrupted data.");
    }
  };

  return (<>


    <div className="min-h-screen bg-gradient-to-tr from-slate-900 via-slate-800 to-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">🧪 AES Encryption Playground</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-700 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg backdrop-blur-md border border-blue-400"
        >
          ⬅️ Back to Home
        </button>
        <p className="text-gray-300 my-5">
          <strong className="text-blue-400">AES</strong> is a symmetric encryption algorithm widely used to secure data. It encrypts and decrypts data using the same secret key and is known for its speed and strong security.
        </p>
        <div className="">

        </div>

        <div className="mb-4">
          <label className="block mb-1 text-slate-300">🔤 Message</label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your secret message..."
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-slate-300">🔑 Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-600"
          />
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={encryptMessage}
            className="bg-cyan-600 hover:bg-cyan-500 px-6 py-2 rounded-full font-semibold shadow hover:shadow-cyan-500/50 transition"
          >
            🔐 Encrypt
          </button>
          <button
            onClick={decryptMessage}
            className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-full font-semibold shadow hover:shadow-emerald-500/50 transition"
          >
            🔓 Decrypt
          </button>
        </div>

        {/* Encrypted output */}
        <div className="mb-4 min-h-[120px]">
          <label className="block mb-1 text-cyan-300 font-semibold">🔒 Encrypted Output</label>
          <div className="bg-transparent p-3 rounded-lg border border-slate-700 min-h-[80px] font-mono text-green-400 text-sm">
            <AnimatePresence>
              {isEncrypting && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-cyan-400"
                >
                  Encrypting your message...
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    ⏳
                  </motion.span>
                </motion.div>
              )}

              {showEncrypted && (
                <motion.div
                  key="output"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="whitespace-pre-wrap break-words"
                >
                  {encrypted}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Decrypted output */}
        <div>
          <label className="block mb-1 text-emerald-300 font-semibold">🔍 Decrypted Output</label>
          <textarea
            value={decrypted}
            readOnly
            rows={2}
            className="w-full p-2 font-mono bg-transparent text-emerald-300 border border-slate-700 rounded-lg"
          />
        </div>
      </div>


    </div>
  </>
  );
}

export default TryAES;
