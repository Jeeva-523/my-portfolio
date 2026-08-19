import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MESSAGES = [
    "INITIALIZING GRAPHIC STUDIO",
    "LOADING ADOBE CREATIVE SUITE",
    "OPTIMIZING VISUAL ASSETS",
    "PREPARING UI/UX ENGINE",
    "FINALIZING RESUME CANVAS"
];

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return 100;
            });
        }, 12);

        const msgInterval = setInterval(() => {
            setMessageIndex(prev => (prev + 1) % MESSAGES.length);
        }, 280);

        return () => {
            clearInterval(interval);
            clearInterval(msgInterval);
        };
    }, []);

    useEffect(() => {
        if (count === 100) {
            const timer = setTimeout(() => {
                onComplete();
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [count, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ 
                y: "-100%",
                transition: { duration: 1, ease: [0.87, 0, 0.13, 1] }
            }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#090a0f] text-white overflow-hidden"
        >
            {/* Ambient Background Glow Orbs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-4xl px-8 relative z-10">
                <div className="flex flex-col items-start gap-6">
                    
                    {/* Status Pill */}
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span className="text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase">
                            {MESSAGES[messageIndex]}
                        </span>
                    </div>
                    
                    {/* Glow Progress Bar Container */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full relative overflow-hidden backdrop-blur-sm">
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${count}%` }}
                        />
                    </div>

                    {/* Big Typography Header & Percentage */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-end w-full pt-4 gap-4">
                        <div>
                            <motion.h1
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                JEEVANANTH
                            </motion.h1>
                            <p className="text-xs font-mono text-gray-400 uppercase tracking-[0.3em] mt-2">
                                Graphic Designer, Video Editor & UI/UX Specialist
                            </p>
                        </div>
                        
                        <motion.span 
                            className="text-3xl sm:text-5xl md:text-6xl font-space font-light italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 shrink-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {count}%
                        </motion.span>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
