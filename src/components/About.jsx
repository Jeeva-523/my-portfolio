import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/IMG_0232.JPG';
import { FaDownload, FaFilePdf, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const About = () => {
    return (
        <section className="bg-[#090a0f] text-white py-32 relative overflow-hidden border-t border-white/5">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left 5 Cols: Profile Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative group mx-auto max-w-md">
                            {/* Glowing Neon Frame */}
                            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-[#12141d] p-3 shadow-2xl">
                                <img
                                    src={profilePic}
                                    alt="Jeevananth"
                                    className="w-full h-[420px] sm:h-[480px] object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700"
                                />
                                
                                {/* Overlay Floating Tag */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-base font-syne font-bold text-white">JEEVANANTH</h4>
                                        <p className="text-xs font-mono text-cyan-400">Graphic Designer & Video Editor</p>
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right 7 Cols: Content & Resume Hub */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase inline-block mb-4">
                                ABOUT ME
                            </span>
                            <h3 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight mb-6">
                                PASSIONATE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                                    GRAPHIC CREATIVE.
                                </span>
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-space font-light">
                                Creative and detail-oriented <span className="text-white font-semibold">Junior Graphic Designer & Video Editor</span> with 3+ years of professional experience in designing posters, social media creatives, promotional videos, reels, and marketing content at Nithra Apps India Pvt Ltd.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed font-space font-light mt-4">
                                Proficient in <span className="text-cyan-400 font-medium">Adobe Photoshop, Premiere Pro, Illustrator, Canva, and Figma</span>. Combining visual design aesthetics and motion editing with strong user empathy gained over 3 years in customer relations, delivering designs and videos that connect and convert.
                            </p>
                        </motion.div>

                        {/* Highlights Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4"
                        >
                            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                <FaBriefcase className="text-cyan-400 text-xl mb-2" />
                                <h4 className="text-2xl font-syne font-bold text-white">3+ Yrs</h4>
                                <p className="text-xs font-mono text-gray-400 uppercase mt-1">Design Exp</p>
                            </div>
                            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                <FaGraduationCap className="text-purple-400 text-xl mb-2" />
                                <h4 className="text-2xl font-syne font-bold text-white">B.Tech</h4>
                                <p className="text-xs font-mono text-gray-400 uppercase mt-1">AI & Data Science</p>
                            </div>
                            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md col-span-2 sm:col-span-1">
                                <FaAward className="text-pink-400 text-xl mb-2" />
                                <h4 className="text-2xl font-syne font-bold text-white">100+</h4>
                                <p className="text-xs font-mono text-gray-400 uppercase mt-1">Creatives Built</p>
                            </div>
                        </motion.div>

                        {/* Resume Download Hub Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-2xl flex-shrink-0">
                                    <FaFilePdf />
                                </div>
                                <div>
                                    <h4 className="text-lg font-syne font-bold text-white">Jeevananth_Resume.pdf</h4>
                                    <p className="text-xs font-mono text-gray-400 mt-1">Official Graphic Design & Experience Document</p>
                                </div>
                            </div>

                            <a
                                href="/Jeevananth_Resume.pdf"
                                download="Jeevananth_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shimmer px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] whitespace-nowrap"
                            >
                                <FaDownload size={13} className="animate-bounce" /> DOWNLOAD PDF
                            </a>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
