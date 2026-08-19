import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaBullhorn, FaObjectGroup, FaFigma, FaLayerGroup, FaCropAlt } from 'react-icons/fa';

const services = [
    {
        icon: <FaPaintBrush className="text-cyan-400" />,
        title: "Poster & Banner Design",
        description: "Designing high-converting marketing posters, event banners, and promotional content using Photoshop & Illustrator with striking typography."
    },
    {
        icon: <FaBullhorn className="text-purple-400" />,
        title: "Social Media & Video Edits",
        description: "Editing promotional videos, Instagram reels, and YouTube shorts combined with engaging social media ad graphics."
    },
    {
        icon: <FaObjectGroup className="text-pink-400" />,
        title: "Branding & Logo Design",
        description: "Creating unique visual identity systems, vector logos, color palettes, and brand guidelines that stand out in competitive markets."
    },
    {
        icon: <FaFigma className="text-indigo-400" />,
        title: "UI/UX & Web Prototyping",
        description: "Designing intuitive web and mobile app interfaces in Figma, backed by real user research and modern layout principles."
    }
];

const Services = () => {
    return (
        <section className="bg-[#090a0f] text-white py-28 px-6 relative z-10 border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase inline-block mb-4">
                        WHAT I OFFER
                    </span>
                    <h3 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tight">
                        DESIGN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">SERVICES.</span>
                    </h3>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.12, duration: 0.8 }}
                            className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-2xl"
                        >
                            {/* Card Content */}
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-syne font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-sm font-space">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                                Explore Details
                                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
