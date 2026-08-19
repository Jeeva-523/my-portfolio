import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: "AUG 2022 - PRESENT",
        role: "Junior Graphic Designer / Video Editor / Telecaller",
        company: "Nithra Apps India Pvt Ltd.",
        location: "Tiruchengodu, Namakkal",
        description: "Designed posters, banners, promotional video edits, and social media creatives using Photoshop, Premiere Pro, Canva, and Illustrator. Handled video editing, image retouching, typography, and marketing content."
    },
    {
        year: "2022 - 2026",
        role: "B.Tech in Artificial Intelligence & Data Science",
        company: "Sri Shanmugha College of Engineering and Technology",
        location: "Tamil Nadu",
        description: "Pursuing Bachelor of Technology degree, combining AI & Data Science foundations with visual media and design systems."
    },
    {
        year: "2019 - 2021",
        role: "Diploma in Computer Science",
        company: "K.S.Rangasamy Institute Of Technology",
        location: "Tiruchengodu, Namakkal",
        description: "Completed Diploma in Computer Science with a strong grounding in computing, digital design, and software fundamentals."
    }
];

const Experience = () => {
    return (
        <section className="bg-[#090a0f] text-white py-28 px-6 relative z-10 border-t border-white/5">
            <div className="container mx-auto max-w-5xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase inline-block mb-4">
                        MY JOURNEY
                    </span>
                    <h3 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tight">
                        EXPERIENCE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">EDUCATION.</span>
                    </h3>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Glowing Timeline Node Dot */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.8)] border-2 border-[#090a0f]" />

                            {/* Floating Year Pill for Desktop */}
                            <div className="hidden md:block absolute -left-36 top-1 text-xs font-mono font-bold text-cyan-400 tracking-wider">
                                {exp.year}
                            </div>

                            {/* Content Glass Card */}
                            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl group-hover:border-cyan-400/40 group-hover:bg-white/10 transition-all duration-400 shadow-xl">
                                <div className="md:hidden text-xs font-mono font-bold text-cyan-400 tracking-wider mb-2">
                                    {exp.year}
                                </div>
                                <h4 className="text-2xl font-syne font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                                    {exp.role}
                                </h4>
                                <h5 className="text-sm font-mono text-purple-300 mb-4">
                                    {exp.company} • <span className="text-gray-400">{exp.location}</span>
                                </h5>
                                <p className="text-gray-300 leading-relaxed text-sm font-space">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
