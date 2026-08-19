import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: "What design services do you specialize in?",
        answer: "I specialize in graphic design (posters, banners, social media creatives, promotional flyers) using Photoshop, Illustrator, and Canva, as well as UI/UX design and wireframing in Figma."
    },
    {
        question: "What is your design process?",
        answer: "I start by understanding the client/user requirements, research competitive visual styles, create layout sketches/wireframes, execute pixel-perfect visual designs, and iterate based on feedback."
    },
    {
        question: "What tools do you use for graphic design & editing?",
        answer: "I work daily with Adobe Photoshop, Illustrator, Canva, Figma, CorelDRAW, and basic Premiere Pro / InDesign / After Effects."
    },
    {
        question: "Are you open to full-time Graphic Designer & Video Editor roles?",
        answer: "Yes! I am actively looking for Graphic Designer, Video Editor, or UI/UX Designer opportunities."
    },
    {
        question: "How can I download your official resume?",
        answer: "You can click any 'DOWNLOAD RESUME' button in the navigation header, hero section, or about section to download my official PDF resume directly."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#090a0f] text-white py-28 px-6 relative z-10 border-t border-white/5">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase inline-block mb-4">
                        FREQUENTLY ASKED
                    </span>
                    <h3 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
                        COMMON <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">QUESTIONS.</span>
                    </h3>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleIndex(index)}
                                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                            >
                                <span className={`text-lg sm:text-xl font-syne font-bold transition-colors ${activeIndex === index ? 'text-cyan-300' : 'text-gray-200 hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <span className={`text-lg p-2 rounded-full border transition-all ${activeIndex === index ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 rotate-180' : 'border-white/10 text-gray-400'}`}>
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden px-6 sm:px-8 pb-6"
                                    >
                                        <p className="text-gray-300 leading-relaxed font-space text-sm sm:text-base border-t border-white/10 pt-4">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
