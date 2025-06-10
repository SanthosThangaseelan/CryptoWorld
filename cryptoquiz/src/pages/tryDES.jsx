import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

const TryDES = () => {
    const [plainText, setPlainText] = useState('');
    const [key, setKey] = useState('');
    const [cipherText, setCipherText] = useState('');
    const [decrypted, setDecrypted] = useState('');
    const navigate = useNavigate();

    const encrypt = () => {
        const encrypted = CryptoJS.DES.encrypt(plainText, key).toString();
        setCipherText(encrypted);
    };

    const decrypt = () => {
        const bytes = CryptoJS.DES.decrypt(cipherText, key);
        const original = bytes.toString(CryptoJS.enc.Utf8);
        setDecrypted(original);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 p-6">
            <div className="bg-gray-900 w-full max-w-2xl p-8 rounded-2xl shadow-2xl border border-gray-700">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">🔁 Try DES Encryption</h2>
                <p className="text-gray-300 mb-4">
                    <strong className="text-yellow-400">DES</strong> is an older symmetric-key algorithm used for encrypting electronic data. Though largely replaced by AES, it laid the foundation for modern encryption systems.
                </p>


                <div className="space-y-4">
                    <input
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter plain text"
                        value={plainText}
                        onChange={(e) => setPlainText(e.target.value)}
                    />

                    <input
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter secret key"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />

                    <div className="flex gap-4 justify-center mt-4">
                        <button
                            onClick={encrypt}
                            className="bg-blue-600 hover:bg-blue-500 transition px-6 py-2 rounded-lg font-semibold text-white shadow">
                            🔐 Encrypt
                        </button>
                        <button
                            onClick={decrypt}
                            className="bg-green-600 hover:bg-green-500 transition px-6 py-2 rounded-lg font-semibold text-white shadow">
                            🔓 Decrypt
                        </button>
                    </div>
                </div>

                {cipherText && (
                    <div className="mt-6 p-4 bg-gray-800 rounded-md text-blue-200 border border-blue-500 text-sm break-words">
                        <strong className="text-blue-400">Encrypted:</strong><br />
                        <code>{cipherText}</code>
                    </div>
                )}

                {decrypted && (
                    <div className="mt-4 p-4 bg-gray-800 text-emerald-200 rounded-md border border-green-500 text-sm break-words">
                        <strong className="text-green-400">Decrypted:</strong><br />
                        <code>{decrypted}</code>
                    </div>
                )}
            </div>
            <div className="absolute bottom-8">
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-700 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg backdrop-blur-md border border-blue-400"
                >
                    ⬅️ Back to Home
                </button>
            </div>

        </div>
    );
};

export default TryDES;
