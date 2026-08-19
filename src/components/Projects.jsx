import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import ProjectDetail from './ProjectDetail';

// Project Assets
import nkMaster from '../assets/casestudies/nk_holidays_master.png';
import nkDest from '../assets/casestudies/nk_destinations.png';
import nkFooter from '../assets/casestudies/nk_footer.png';
import nkPack from '../assets/casestudies/nk_packages.png';

import ttMaster from '../assets/casestudies/tamil_treats_master.png';
import ttMenu from '../assets/casestudies/tt_menu.png';
import ttContact from '../assets/casestudies/tt_contact.png';
import ttFeatV2 from '../assets/casestudies/tt_features_v2.png';

import dashMaster from '../assets/casestudies/ecommerce_dash_master.png';
import dashBoard from '../assets/casestudies/dash_dashboard.png';
import dashAnalytics from '../assets/casestudies/dash_analytics.png';
import dashLogin from '../assets/casestudies/dash_login.png';

import portMaster from '../assets/casestudies/portfolio_master.png';
import portProj from '../assets/casestudies/port_projects.png';
import portAb from '../assets/casestudies/port_about.png';

import dailyMaster from '../assets/casestudies/daily_notes_master.png';
import dailyList from '../assets/casestudies/daily_list.png';
import dailyLand from '../assets/casestudies/daily_landing.png';
import dailyFeat from '../assets/casestudies/daily_features.png';

const projects = [
    {
        title: "NK Holidays — Travel Booking UX",
        category: "Travel & UX",
        desc: "Designed an immersive trip planning interface for India's magic, featuring dynamic destination modals and conversion-optimized booking flows.",
        tech: ["React", "UI Design", "Tailwind"],
        color: "from-blue-500/20 to-cyan-900/20",
        number: "01",
        image: nkMaster,
        link: "https://nk-holidays.netlify.app/",
        figma: "#",
        caseStudy: {
            problem: "Travelers were struggling to get quick, granular information about local sightseeing without being redirected to multiple pages, leading to high bounce rates.",
            myRole: "UI/UX Designer + Frontend",
            tools: "Figma + HTML/CSS/React",
            process: "Research → Wireframe → Design → Build",
            painPoints: ["Disjointed navigation across destination pages", "Lack of immediate sightseeing insights", "Complex travel package filtering"],
            problemImg: nkFooter,
            userFlowImg: nkDest,
            wireframeImg: nkPack,
            finalUIImg: nkMaster
        }
    },
    {
        title: "Tamil Treats — Food Delivery App UI",
        category: "Food Delivery App",
        desc: "Engineered a user-centric food ordering platform focusing on conversion optimization and effortless checkout flows.",
        tech: ["React", "Firebase", "Redux"],
        color: "from-red-500/20 to-orange-900/20",
        number: "02",
        image: ttMaster,
        link: "https://tamiltreats-523.web.app/",
        figma: "#",
        caseStudy: {
            problem: "High drop-off rates on the checkout page due to hidden fees and a non-intuitive address selection process.",
            myRole: "UI/UX Designer + Frontend",
            tools: "Figma + HTML/CSS/React",
            process: "Research → Wireframe → Design → Build",
            painPoints: ["Cart abandonment at checkout", "Inaccurate restaurant filtering", "Visual clutter in menus"],
            problemImg: ttContact,
            userFlowImg: ttMenu,
            wireframeImg: ttFeatV2,
            finalUIImg: ttMaster
        }
    },
    {
        title: "Personal Portfolio — UX Case Study",
        category: "Personal Brand",
        desc: "Developed a high-performance portfolio showcasing technical proficiency and modern UX design principles.",
        tech: ["React", "Tailwind", "Framer Motion"],
        color: "from-purple-500/20 to-pink-900/20",
        number: "03",
        image: portMaster,
        link: "https://portfolio-523.web.app/",
        figma: "#",
        caseStudy: {
            problem: "Designer portfolios often feel flat and static, failing to demonstrate the technical depth and interactive potential of modern web technologies.",
            myRole: "UI/UX Designer + Frontend",
            tools: "Figma + HTML/CSS/React",
            process: "Research → Wireframe → Design → Build",
            painPoints: ["Generic, uninspired templates", "Performance issues with heavy 3D assets", "Fragmented user experience across devices"],
            problemImg: portAb,
            userFlowImg: portProj,
            wireframeImg: portAb,
            finalUIImg: portMaster
        }
    },
    {
        title: "NammaMart — E-Commerce UX & UI",
        category: "Analytics Dashboard",
        desc: "Designed a clean, data-driven dashboard focusing on clarity, ease of use, and quick decision-making for store owners.",
        tech: ["Next.js", "Recharts", "Node"],
        color: "from-orange-500/20 to-red-900/20",
        number: "04",
        image: dashAnalytics,
        link: "https://nammamart-73d7c.web.app/",
        figma: "#",
        caseStudy: {
            problem: "Small business owners struggled to interpret complex data charts, leading to missed opportunities and poor inventory management.",
            myRole: "UI/UX Designer + Frontend",
            tools: "Figma + HTML/CSS/React",
            process: "Research → Wireframe → Design → Build",
            painPoints: ["Overwhelming data density", "Unclear action items from reports", "Poor mobile optimization for on-the-go tracking"],
            problemImg: dashAnalytics,
            userFlowImg: dashBoard,
            wireframeImg: dashLogin,
            finalUIImg: dashMaster
        }
    },
    {
        title: "Daily Notes — Mood-Driven Journal UX",
        category: "Productivity & AI",
        desc: "An intelligent journaling platform that tracks your emotional journey through mood-based notes and AI-powered reflections.",
        tech: ["React", "Firebase", "Tailwind", "AI"],
        color: "from-emerald-500/20 to-teal-900/20",
        number: "05",
        image: dailyList,
        link: "https://daily-notes-523.web.app/",
        figma: "#",
        caseStudy: {
            problem: "Traditional note-taking apps focus on data storage but ignore the user's emotional state, making it difficult to find patterns in personal growth.",
            myRole: "UI/UX Designer + Frontend",
            tools: "Figma + HTML/CSS/React",
            process: "Research → Wireframe → Design → Build",
            painPoints: ["Lack of emotional context in notes", "Monotonous journaling experience", "No actionable insights from personal data"],
            problemImg: dailyLand,
            userFlowImg: dailyList,
            wireframeImg: dailyFeat,
            finalUIImg: dailyMaster
        }
    }
];

const TiltCard = ({ project, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [0, 400], [8, -8]);
    const rotateY = useTransform(x, [0, 600], [-8, 8]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    }

    function handleMouseLeave() {
        x.set(300);
        y.set(200);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
            }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl group cursor-pointer shadow-2xl hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-500"
        >
            {/* Background Image Preview */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700"
                style={{ backgroundImage: `url(${project.image})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between transform-gpu">
                <div className="flex justify-between items-start">
                    <div className="bg-cyan-500/20 backdrop-blur-xl px-4 py-1.5 rounded-full border border-cyan-400/30">
                        <span className="text-[11px] font-mono text-cyan-300 tracking-wider uppercase font-bold">{project.category}</span>
                    </div>
                    <span className="text-5xl font-syne font-extrabold text-white/10 select-none group-hover:text-cyan-400/30 transition-colors">
                        {project.number}
                    </span>
                </div>

                <div>
                    <h3 className="text-2xl md:text-4xl font-syne font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors drop-shadow-md">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-6 max-w-md line-clamp-2 leading-relaxed font-space">
                        {project.desc}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex gap-2.5 flex-wrap">
                            {project.tech.slice(0, 3).map((t, i) => (
                                <span key={i} className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 border border-white/10 text-cyan-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest">
                            View Case Study <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const filterCategories = ['All', 'Travel & UX', 'Food Delivery App', 'Branding & Retouch', 'Analytics Dashboard', 'Productivity & AI'];

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-28 bg-[#090a0f] text-white relative border-t border-white/5">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase inline-block mb-4">
                            PORTFOLIO & WORK
                        </span>
                        <h3 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tight mb-4">
                            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">WORK.</span>
                        </h3>
                        <p className="text-gray-300 text-base md:text-lg font-space font-light leading-relaxed">
                            A curated showcase of graphic design projects, branding identity, and user-centered UI/UX digital applications.
                        </p>
                    </div>

                    {/* Folio Tailwind Styled Filter Category Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {filterCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                                    activeFilter === cat
                                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                        : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                {/* Staggered Grid Layout for Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {filteredProjects.map((project, index) => (
                        <TiltCard
                            key={index}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetail
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;


