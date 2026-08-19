import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaPaintBrush, FaCropAlt, FaVectorSquare, FaFileImage, FaLayerGroup, FaMagic } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiFigma, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects } from 'react-icons/si';

const softwareSkills = [
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-blue-400" /> },
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-orange-400" /> },
    { name: 'Canva', icon: <SiCanva className="text-cyan-400" /> },
    { name: 'Figma', icon: <SiFigma className="text-purple-400" /> },
    { name: 'CorelDRAW', icon: <FaVectorSquare className="text-emerald-400" /> },
    { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro className="text-indigo-400" /> },
    { name: 'Adobe InDesign', icon: <SiAdobeindesign className="text-pink-400" /> },
    { name: 'Adobe After Effects', icon: <SiAdobeaftereffects className="text-[#9999FF]" /> },
];

const designSkills = [
    { name: 'Graphic Design', icon: <FaPaintBrush className="text-cyan-400" /> },
    { name: 'Video Editing & Reels', icon: <SiAdobepremierepro className="text-indigo-400" /> },
    { name: 'Creative Thinking', icon: <FaMagic className="text-amber-400" /> },
    { name: 'Visual Design', icon: <FaLayerGroup className="text-purple-400" /> },
    { name: 'Typography & Layouts', icon: <FaFileImage className="text-indigo-400" /> },
    { name: 'Branding & Logo Design', icon: <FaVectorSquare className="text-rose-400" /> },
    { name: 'Social Media Creatives', icon: <FaCropAlt className="text-emerald-400" /> },
    { name: 'Brochure & Flyer Design', icon: <FaFileImage className="text-blue-400" /> },
    { name: 'Photo Retouching', icon: <FaCropAlt className="text-teal-400" /> },
    { name: 'UI Design Basics', icon: <FaFigma className="text-purple-400" /> },
];

const Skills = () => {
    return (
        <section className="bg-[#090a0f] text-white py-28 relative overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
                        DESIGN TOOLKIT & SKILLS
                    </div>
                    <h3 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tight">
                        CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">ARSENAL.</span>
                    </h3>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="space-y-8">
                
                {/* Row 1: Software Suite */}
                <div className="relative w-full overflow-hidden flex">
                    <motion.div
                        className="flex w-max space-x-6"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25
                        }}
                    >
                        {[...softwareSkills, ...softwareSkills, ...softwareSkills].map((skill, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-4 px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                            >
                                <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                                <span className="text-base font-space font-medium tracking-wide text-gray-200 group-hover:text-white">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Design Competencies (Reverse) */}
                <div className="relative w-full overflow-hidden flex">
                    <motion.div
                        className="flex w-max space-x-6"
                        animate={{ x: [-1200, 0] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 28
                        }}
                    >
                        {[...designSkills, ...designSkills, ...designSkills].map((skill, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-4 px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                            >
                                <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                                <span className="text-base font-space font-medium tracking-wide text-gray-200 group-hover:text-white">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Gradient Mask Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#090a0f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#090a0f] to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default Skills;
