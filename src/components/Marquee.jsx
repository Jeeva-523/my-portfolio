import React from 'react';
import { motion } from 'framer-motion';

const MarqueeItem = ({ text, direction = 1 }) => {
    return (
        <div className="flex overflow-hidden py-4 bg-cyan-500/10 border-y border-white/10 relative z-10 backdrop-blur-xl">
            <motion.div
                initial={{ x: direction > 0 ? 0 : -1000 }}
                animate={{ x: direction > 0 ? -1000 : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
                className="flex gap-12 whitespace-nowrap"
            >
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="text-4xl md:text-6xl font-syne font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 opacity-80 hover:opacity-100 transition-opacity">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const Marquee = () => {
    return (
        <section className="bg-[#090a0f] py-8 overflow-hidden">
            <div className="-rotate-1 scale-105">
                <MarqueeItem text="GRAPHIC DESIGNER • VIDEO EDITOR • ADOBE PHOTOSHOP • PREMIERE PRO • FIGMA •" direction={1} />
                <MarqueeItem text="VIDEO EDITING & REELS • BRANDING & LOGOS • POSTER DESIGN • SOCIAL MEDIA CREATIVES •" direction={-1} />
            </div>
        </section>
    );
};

export default Marquee;
