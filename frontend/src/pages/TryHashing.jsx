import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

const TryHashing = () => {
    const [input, setInput] = useState('');
    const [md5, setMd5] = useState('');
    const [sha1, setSha1] = useState('');
    const [sha256, setSha256] = useState('');
    const navigate = useNavigate();

    const hashInput = () => {
        setMd5(CryptoJS.MD5(input).toString());
        setSha1(CryptoJS.SHA1(input).toString());
        setSha256(CryptoJS.SHA256(input).toString());
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 p-6">
            <div className="bg-gray-900 w-full max-w-2xl p-8 rounded-2xl shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">🔎 Try Hashing</h2>
                <p className="text-gray-300 mb-4">
                    <strong className="text-cyan-300">Hashing</strong> is a one-way transformation that converts data into a fixed-size hash value. It's used for data integrity, password storage, and digital signatures. Common algorithms include <strong>MD5</strong>, <strong>SHA-1</strong>, and <strong>SHA-256</strong>.
                </p>


                <input
                    className="w-full px-4 py-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter text to hash"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <div className="text-center">
                    <button
                        onClick={hashInput}
                        className="bg-yellow-500 hover:bg-yellow-400 transition px-6 py-2 rounded-lg font-semibold text-black shadow">
                        ⚙️ Generate Hashes
                    </button>
                </div>

                {md5 && (
                    <div className="mt-6 p-4 bg-gray-800 text-pink-200 rounded-md border border-pink-500 text-sm break-words">
                        <strong className="text-pink-400">MD5:</strong><br />
                        <code>{md5}</code>
                    </div>
                )}

                {sha1 && (
                    <div className="mt-4 p-4 bg-gray-800 text-orange-200 rounded-md border border-orange-500 text-sm break-words">
                        <strong className="text-orange-400">SHA-1:</strong><br />
                        <code>{sha1}</code>
                    </div>
                )}

                {sha256 && (
                    <div className="mt-4 p-4 bg-gray-800 text-cyan-200 rounded-md border border-cyan-500 text-sm break-words">
                        <strong className="text-cyan-400">SHA-256:</strong><br />
                        <code>{sha256}</code>
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

export default TryHashing;
