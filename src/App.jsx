import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';

import Services from './components/Services';

import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Marquee from './components/Marquee';
import { FaArrowDown, FaDownload } from 'react-icons/fa';

import profilePic from './assets/IMG_0232.JPG';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && <Preloader onComplete={handlePreloaderComplete} key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SmoothScroll />

          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-cyan-600 origin-left z-[100]"
            style={{ scaleX }}
          />

          <ThreeBackground />
          <CustomCursor />
          <Navbar />

          {/* Folio Tailwind Styled Hero Section */}
          <div id="home" className="min-h-screen w-full flex items-center relative pt-28 pb-16 px-4 sm:px-10 text-white overflow-hidden">
            <div className="z-10 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left 6 Cols: Hero Content (Strictly contained, no overlap) */}
                <div className="lg:col-span-6 flex flex-col items-start text-left w-full max-w-full lg:max-w-xl">
                  
                  {/* Overline Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 mb-4"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono tracking-[0.2em] text-cyan-400 font-bold uppercase">
                      AVAILABLE FOR WORK
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="w-full"
                  >
                    <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-syne font-extrabold tracking-tight leading-[1.1] mb-3 break-words">
                      Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Jeevananth</span>
                    </h1>
                    <h2 className="text-base sm:text-xl font-bold text-gray-200 mb-4 font-space">
                      Junior Graphic Designer, Video Editor & UI/UX Specialist.
                    </h2>
                  </motion.div>

                  {/* Bio Subtitle Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="w-full max-w-lg"
                  >
                    <p className="text-sm sm:text-base font-light tracking-wide text-gray-300 leading-relaxed font-space mb-5">
                      I design and build high-impact posters, social media brandings, promotional video edits, and intuitive web experiences — fast, clean, and engaging.
                    </p>

                    {/* Skill Tag Pills */}
                    <div className="flex flex-wrap gap-2 text-xs font-mono mb-6">
                      {["Graphic Design", "Video Editing", "Photoshop", "Premiere Pro", "Illustrator", "Canva", "UI/UX & Figma", "Branding"].map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="flex flex-wrap gap-4 items-center mb-8"
                  >
                    <button
                      onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                      className="shimmer px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-mono text-xs font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.35)]"
                    >
                      View my work ↓
                    </button>
                    <a
                      href="/Jeevananth_Resume.pdf"
                      download="Jeevananth_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3 rounded-full border border-white/20 hover:border-cyan-400 bg-white/5 backdrop-blur-md text-white font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2.5"
                    >
                      <FaDownload size={12} className="text-cyan-400" /> Resume (PDF)
                    </a>
                  </motion.div>

                  {/* Metric Stats Banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-6 border-t border-white/10 flex flex-wrap gap-6 sm:gap-10 w-full"
                  >
                    <div>
                      <span className="text-2xl sm:text-3xl font-syne font-extrabold text-cyan-400">3+</span>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-gray-400 mt-1">Years Exp</p>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-syne font-extrabold text-purple-400">100+</span>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-gray-400 mt-1">Creatives Built</p>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-syne font-extrabold text-pink-400">8+</span>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-gray-400 mt-1">Design Tools</p>
                    </div>
                  </motion.div>

                </div>

                {/* Right 6 Cols: Profile Portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="lg:col-span-6 relative flex justify-center lg:justify-end"
                >
                  <div className="relative w-full max-w-[380px]">
                    {/* Background Neon Halo */}
                    <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-40 blur-xl pointer-events-none" />
                    
                    {/* Clean Portrait Frame with Rounded Corners */}
                    <div className="relative rounded-[32px] overflow-hidden border border-white/15 bg-[#12141d] shadow-2xl">
                      <img
                        src={profilePic}
                        alt="Jeevananth"
                        className="w-full h-[400px] sm:h-[460px] object-cover object-top rounded-[32px] block"
                      />
                    </div>

                    {/* Floating Pill Badge at Bottom Left */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -bottom-4 left-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-mono font-bold shadow-2xl flex items-center gap-2.5 border border-white/20"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      Open to projects
                    </motion.div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          <Marquee />
          <div id="skills"><Skills /></div>
          <div id="services"><Services /></div>
          <div id="process"><Process /></div>
          <div id="projects"><Projects /></div>
          <div id="testimonials"><Testimonials /></div>
          <div id="faq"><FAQ /></div>
          <div id="about"><About /></div>
          <div id="contact"><Contact /></div>

          {/* Back to Top Button */}
          <AnimatePresence>
            {scrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-cyan-600 transition-colors group"
              >
                <FaArrowDown className="rotate-180 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}

export default App;
