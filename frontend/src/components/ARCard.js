import React from 'react';

const ARCard = () => {
    return (
        <div className="w-full max-w-4xl mx-auto my-4 p-6">
            <div className="bg-white/10 rounded-lg bg-opacity-50 p-8 md:p-12 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#22d3ee]">🕶 Experience the AR Surprise!</h2>
                <p className="text-white mb-8 max-w-2xl">
                    🔮 Scan the code and unlock an exclusive AR experience! Discover hidden surprises and bring the event to life in a whole new way.
                </p>
                <a
                    href="https://ecell-ar.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#22d3ee] to-purple-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg"
                >
                    🚀 Unlock AR Experience
                </a>
            </div>
        </div>
    )
}

export default ARCard;