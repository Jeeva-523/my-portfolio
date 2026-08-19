import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "Marketing Lead",
        role: "Nithra Apps India",
        content: "Jeevananth consistently delivers vibrant, eye-catching posters and creative social media designs that drive strong customer engagement.",
        rating: 5
    },
    {
        name: "Design Mentor",
        role: "Creative Studio",
        content: "Great typography understanding, fast layout turnarounds, and a keen eye for branding details. Excellent graphic designer to work with.",
        rating: 5
    },
    {
        name: "Project Manager",
        role: "Digital Media",
        content: "Understands customer needs instantly thanks to his communication skills and translates feedback into stunning graphics effortlessly.",
        rating: 5
    }
];

const Testimonials = () => {
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
                        FEEDBACK & REVIEWS
                    </span>
                    <h3 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tight">
                        CLIENT & TEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">TESTIMONIALS.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 relative group shadow-2xl"
                        >
                            <FaQuoteLeft className="text-4xl text-cyan-500/20 mb-6 group-hover:text-cyan-400 transition-colors" />

                            <p className="text-gray-300 mb-8 leading-relaxed font-space italic text-base">
                                "{test.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                                    <div className="w-full h-full bg-[#090a0f] rounded-full flex items-center justify-center font-syne font-bold text-cyan-400">
                                        {test.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-syne font-bold text-white text-base">{test.name}</h4>
                                    <p className="text-xs font-mono text-purple-300 uppercase">{test.role}</p>
                                </div>
                            </div>

                            <div className="absolute top-8 right-8 flex gap-1 text-cyan-400">
                                {[...Array(test.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-xs" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
