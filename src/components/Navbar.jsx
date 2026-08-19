import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import Magnetic from './Magnetic';

const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4">
            <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-300 ${
                scrolled 
                    ? 'bg-[#12141d]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                    : 'bg-black/40 backdrop-blur-md border border-white/10'
            }`}>

                {/* Brand Logo */}
                <div
                    onClick={() => scrollToSection('home')}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                        <div className="w-full h-full bg-[#090a0f] rounded-full flex items-center justify-center">
                            <span className="font-syne font-extrabold text-cyan-400 text-sm">J</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-syne font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            JEEVANANTH
                        </span>
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest -mt-1 hidden sm:block">
                            GRAPHIC DESIGNER & VIDEO EDITOR
                        </span>
                    </div>
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-7">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`nl text-xs font-mono tracking-widest uppercase transition-colors py-1 ${
                                activeSection === item.id ? 'on text-cyan-400 font-bold' : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}

                    {/* Folio Tailwind Hire Me Shimmer CTA */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="shimmer px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                    >
                        Hire me <span className="text-cyan-200">→</span>
                    </button>
                </div>

                {/* Mobile Hamburger Menu Icon */}
                <div className="md:hidden z-50">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

            </div>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#090a0f]/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-6 md:hidden z-40 px-6"
                    >
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-3xl font-syne font-bold ${
                                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                                }`}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <a
                            href="/Jeevananth_Resume.pdf"
                            download="Jeevananth_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full flex items-center gap-3 text-sm font-mono font-bold uppercase tracking-widest shadow-lg shadow-cyan-500/30"
                        >
                            <FaDownload size={14} /> Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
