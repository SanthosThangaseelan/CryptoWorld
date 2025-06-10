import React, { useState, useEffect } from 'react';
import forge from 'node-forge';
import { useNavigate } from 'react-router-dom';

const TrySignature = () => {
    const [message, setMessage] = useState('');
    const [signature, setSignature] = useState('');
    const [valid, setValid] = useState(null);
    const [keyPair, setKeyPair] = useState(null);
      const navigate = useNavigate();

    // Generate RSA key pair once when the component mounts
    useEffect(() => {
        const pair = forge.pki.rsa.generateKeyPair({ bits: 512, e: 0x10001 });
        setKeyPair(pair);
    }, []);

    const signMessage = () => {
        if (!keyPair) return;
        const md = forge.md.sha256.create();
        md.update(message, 'utf8');
        const sig = forge.util.encode64(keyPair.privateKey.sign(md));
        setSignature(sig);
        setValid(null); // Reset validation result
    };

    const verifySignature = () => {
        if (!keyPair || !signature) return;
        const md = forge.md.sha256.create();
        md.update(message, 'utf8');
        const isValid = keyPair.publicKey.verify(md.digest().bytes(), forge.util.decode64(signature));
        setValid(isValid);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
            <div className="bg-gray-900 w-full max-w-2xl p-8 rounded-2xl shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-purple-400 mb-4 text-center">✍️ Try Digital Signature</h2>
                <p className="text-gray-300 mb-6 text-center">
                    <strong className="text-purple-300">Digital Signatures</strong> are used to prove message authenticity using private and public keys.
                </p>

                <textarea
                    className="w-full h-28 px-4 py-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="flex gap-4 justify-center mt-2">
                    <button
                        onClick={signMessage}
                        className="bg-purple-600 hover:bg-purple-500 transition px-6 py-2 rounded-lg font-semibold text-white shadow">
                        ✒️ Sign
                    </button>
                    <button
                        onClick={verifySignature}
                        className="bg-green-600 hover:bg-green-500 transition px-6 py-2 rounded-lg font-semibold text-white shadow">
                        ✅ Verify
                    </button>
                </div>

                {signature && (
                    <div className="mt-6 p-4 bg-gray-800 text-purple-200 rounded-md border border-purple-500 text-sm break-words">
                        <strong className="text-purple-300">Signature:</strong><br />
                        <code>{signature}</code>
                    </div>
                )}

                {valid !== null && (
                    <div className="mt-4 text-center text-lg font-semibold">
                        {valid ? (
                            <span className="text-green-400">✅ Signature is valid</span>
                        ) : (
                            <span className="text-red-400">❌ Signature is invalid</span>
                        )}
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

export default TrySignature;
