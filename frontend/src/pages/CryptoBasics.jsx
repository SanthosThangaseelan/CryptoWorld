import React from 'react';
import { useNavigate } from 'react-router-dom';

const CryptoBasics = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gray-800 p-6 my-5 rounded-xl border border-cyan-700 shadow">
                    <h1 className="text-4xl font-bold text-center text-cyan-400 mb-6">🔐 Cryptography Overview</h1>

                    <p className="text-lg text-gray-300 mb-6">
                        Cryptography is the science of securing data through encoding. It ensures confidentiality, integrity,
                        authentication, and non-repudiation. It powers secure communications on the internet, protects passwords,
                        and enables digital signatures and cryptocurrencies.
                    </p>

                    <iframe className="w-full h-96 rounded-lg"
                        src="https://www.youtube.com/embed/EJGW1yP_yL0?si=DHZ6nZ-zepjIfBO7"
                        title="Cryptography"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* AES Section */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-cyan-700 shadow">
                        <h2 className="text-2xl font-semibold text-cyan-300 mb-2">🔒 AES (Advanced Encryption Standard)</h2>
                        <p className="text-gray-300 mb-2">
                            AES is a symmetric encryption algorithm used globally for secure data transmission. It supports 128, 192,
                            and 256-bit keys and encrypts data in fixed 128-bit blocks.
                        </p>
                        <iframe className="w-full h-64 rounded-lg"
                            src="https://www.youtube.com/embed/C4ATDMIz5wc?si=PhYxcBXR8n1EXU5v"
                            title="AES Explained"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* RSA Section */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-purple-700 shadow">
                        <h2 className="text-2xl font-semibold text-purple-300 mb-2">🔑 RSA (Public Key Encryption)</h2>
                        <p className="text-gray-300 mb-2">
                            RSA is an asymmetric encryption algorithm that uses two keys — one for encryption and one for decryption.
                            It’s used in secure communications and digital signatures.
                        </p>
                        <iframe className="w-full h-64 rounded-lg"
                            src="https://www.youtube.com/embed/Wh86-IZ5Mx4?si=Jo85ipGBjR6qgwOx"
                            title="RSA Encryption Explained"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Hashing Section */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-yellow-600 shadow">
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">🧮 Hashing Algorithms</h2>
                        <p className="text-gray-300 mb-2">
                            Hash functions like MD5, SHA-1, and SHA-256 convert data into fixed-size hash values. They are
                            one-way functions and widely used in password storage, integrity checking, and blockchain.
                        </p>
                       <iframe className="w-full h-64 rounded-lg"
                            src="https://www.youtube.com/embed/gTfNtop9vzM?si=ou53LcCe1Q8U6hVr"
                            title="RSA Encryption Explained"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Digital Signature Section */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-green-600 shadow">
                        <h2 className="text-2xl font-semibold text-green-400 mb-2">✍️ Digital Signatures</h2>
                        <p className="text-gray-300 mb-2">
                            A digital signature proves a message was sent by a specific party and wasn’t altered. It’s created using
                            private keys and verified using public keys.
                        </p>
                        <iframe className="w-full h-64 rounded-lg"
                            src="https://www.youtube.com/embed/JR4_RBb8A9Q?si=I2KZY2OyLr6JKpsV"
                            title="Digital Signatures Explained"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition">
                        ⬅️ Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CryptoBasics;
