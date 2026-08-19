import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaLightbulb, FaRoute, FaDraftingCompass, FaPaintBrush, FaFigma } from 'react-icons/fa';

const ProjectDetail = ({ project, onClose }) => {
    React.useEffect(() => {
        // Lock body scroll
        document.body.style.overflow = 'hidden';
        return () => {
            // Restore body scroll
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl overflow-y-auto"
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 md:top-10 md:right-10 z-[210] w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-all border border-black/5 group"
            >
                <FaTimes size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-6 py-24">
                
                {/* Header */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-cyan-200">
                            {project.category}
                        </span>
                        <span className="text-gray-600 font-mono text-xs">/ Case Study</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-8 leading-tight">
                        {project.title}
                    </h1>
                    {/* Meta */}
                    <div className="flex flex-wrap gap-8 md:gap-12 mt-8 border-b border-black/10 pb-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Role</p>
                            <p className="font-bold text-sm">{project.caseStudy?.myRole || "UI/UX Designer & Frontend"}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Tools</p>
                            <p className="font-bold text-sm">{project.caseStudy?.tools || "Figma + HTML/CSS/React"}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Process</p>
                            <p className="font-bold text-sm">{project.caseStudy?.process || "Research → Wireframe → Design → Build"}</p>
                        </div>
                        <div className="flex gap-4 ml-auto">
                            <a href={project.figma} className="text-black hover:text-cyan-600 transition-colors flex items-center gap-2 text-sm">
                                <FaFigma /> Prototype
                            </a>
                            <a href={project.link} className="text-black hover:text-cyan-600 transition-colors flex items-center gap-2 text-sm border-l border-black/10 pl-4">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Problem Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                                <FaLightbulb />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-tight">The Problem</h2>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed mb-6">
                            {project.caseStudy?.problem || "Identifying critical friction points in the user journey to create a more intuitive experience."}
                        </p>
                        <ul className="space-y-4 mt-6">
                            {project.caseStudy.painPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <span className="text-cyan-600 mt-1">•</span>
                                    <span className="text-sm">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-black/5 overflow-hidden aspect-video bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center relative group">
                        <img 
                            src={project.caseStudy?.problemImg || ""} 
                            alt="Problem illustration"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white/80 to-transparent">
                            <p className="text-xs text-cyan-700 font-mono font-bold">Insight #01: Navigational Friction</p>
                        </div>
                    </div>
                </div>

                {/* User Flow Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-10 justify-center">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                            <FaRoute />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-tight">User Flow Optimization</h2>
                    </div>
                    <div className="bg-gray-50 border border-black/5 rounded-[2rem] p-4 md:p-12 overflow-hidden">
                        <img 
                            src={project.caseStudy?.userFlowImg || ""} 
                            alt="User flow diagram"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Wireframes Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="order-2 md:order-1 rounded-3xl border border-black/5 overflow-hidden bg-gray-50 aspect-square flex items-center justify-center p-8">
                         <img 
                            src={project.caseStudy?.wireframeImg || ""} 
                            alt="Wireframes"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                                <FaDraftingCompass />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-tight">Wireframing</h2>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed mb-6">
                            Visualizing the core logic and information architecture before adding visual layers. We focused on reducing Cognitive Load.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h6 className="font-bold text-sm mb-2">Structure First</h6>
                                <p className="text-sm text-gray-700">Prioritizing accessibility and content readability over decoration.</p>
                            </div>
                            <div>
                                <h6 className="font-bold text-sm mb-2">Iterative Feedback</h6>
                                <p className="text-sm text-gray-700">Rapid prototyping and testing to validate initial layout assumptions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final UI Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-10 justify-center">
                        <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
                            <FaPaintBrush />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-tight">The Final UI</h2>
                    </div>
                    <div className="relative rounded-[3rem] overflow-hidden border border-black/10 shadow-2xl shadow-cyan-100">
                        <img 
                            src={project.caseStudy?.finalUIImg || ""} 
                            alt="Final UI Design"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* CTA / Results */}
                <div className="text-center py-12 border-t border-black/10">
                    <h3 className="text-3xl font-serif font-bold text-black mb-4">Conclusion & Results</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-10">
                        Successfully launched with improved performance metrics, positive user feedback on the aesthetic, and a 40% increase in user retention.
                    </p>
                    <button 
                        onClick={onClose}
                        className="px-12 py-5 bg-black text-white font-bold tracking-widest hover:bg-cyan-600 transition-all rounded-full"
                    >
                        GO BACK
                    </button>
                </div>

            </div>
        </motion.div>
    );
};

export default ProjectDetail;
