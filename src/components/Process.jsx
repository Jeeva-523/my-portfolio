import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "Requirement & Brief",
        description: "I begin by understanding your marketing goals, brand guidelines, target audience, and specific creative requirements to establish a clear visual direction."
    },
    {
        id: "02",
        title: "Sketches & Wireframes",
        description: "Translating concepts into composition sketches, layout wireframes, and typography hierarchies to map out visual impact before high-resolution rendering."
    },
    {
        id: "03",
        title: "Visual Design & Retouching",
        description: "Executing pixel-perfect posters, banners, and UI components using Photoshop, Illustrator, Canva, and Figma with custom retouching and color grading."
    },
    {
        id: "04",
        title: "Review & Delivery",
        description: "Finalizing design assets across print and digital formats (PNG, JPG, PDF, SVG), ensuring crisp resolution and seamless brand consistency."
    }
];

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="bg-[#090a0f] text-white py-28 px-6 relative z-10 border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase inline-block mb-4">
                        DESIGN WORKFLOW
                    </span>
                    <h3 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tight">
                        FROM CONCEPT TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">CREATIVE.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Interactive Step Selectors */}
                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveStep(index)}
                                onClick={() => setActiveStep(index)}
                                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                                    activeStep === index
                                        ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                                        : "border-white/10 bg-white/5 hover:border-white/20"
                                }`}
                            >
                                <div className="flex items-center gap-6">
                                    <span className={`text-2xl font-mono font-bold ${
                                        activeStep === index ? "text-cyan-400" : "text-gray-500"
                                    }`}>
                                        {step.id}
                                    </span>
                                    <h4 className={`text-xl sm:text-2xl font-syne font-bold transition-colors ${
                                        activeStep === index ? "text-white" : "text-gray-400"
                                    }`}>
                                        {step.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Active Detail Card */}
                    <div className="h-[360px] sm:h-[400px] relative mt-8 lg:mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl flex flex-col justify-center overflow-hidden shadow-2xl"
                            >
                                <span className="text-[10rem] font-syne font-extrabold text-white/5 absolute -top-12 -right-6 select-none pointer-events-none">
                                    {steps[activeStep].id}
                                </span>

                                <h3 className="text-3xl font-syne font-bold text-cyan-300 mb-6 relative z-10">
                                    {steps[activeStep].title}
                                </h3>
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-space relative z-10">
                                    {steps[activeStep].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
