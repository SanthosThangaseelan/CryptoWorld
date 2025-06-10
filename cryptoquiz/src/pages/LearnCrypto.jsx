// src/pages/LearnCrypto.jsx
export default function LearnCrypto() {
  return (
    <div className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-cyan-300">📚 Learn Cryptography</h1>
      <ul className="list-disc ml-5 space-y-3 text-lg">
        <li>
          🔐 <a href="https://cryptohack.org/" className="text-blue-400 hover:underline">CryptoHack</a> – Learn RSA, AES, ECC, and more via interactive puzzles.
        </li>
        <li>
          🎓 <a href="https://www.khanacademy.org/computing/computer-science/cryptography" className="text-blue-400 hover:underline">Khan Academy Cryptography</a> – Free course to understand cryptographic concepts.
        </li>
        <li>
          🛡️ <a href="https://cryptopals.com/" className="text-blue-400 hover:underline">CryptoPals Challenges</a> – Advanced hands-on cryptographic challenge sets.
        </li>
      </ul>
    </div>
  );
}
