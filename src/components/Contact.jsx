import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaArrowRight, FaCheckCircle, FaExclamationCircle, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const SocialLink = ({ href, icon: Icon, label }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-cyan-500/10 group transition-all duration-300 shadow-md"
        >
            <Icon className="text-xl text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-200 group-hover:text-white transition-colors">{label}</span>
        </motion.a>
    );
};

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus('loading');
        try {
            // 1. Save to Firestore
            await addDoc(collection(db, 'contact_messages'), {
                ...formData,
                timestamp: serverTimestamp()
            });

            // 2. Send Email via EmailJS
            const SERVICE_ID = "service_0pi323r";
            const TEMPLATE_ID = "template_m0v6mlv";
            const PUBLIC_KEY = "6zJ5HbV5u4g93KQQ6";

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject || "General Inquiry",
                message: formData.message,
            };

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error submitting form: ", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="min-h-screen bg-[#090a0f] text-white pt-28 pb-12 px-4 sm:px-8 relative overflow-hidden flex flex-col justify-between border-t border-white/5">

            {/* Ambient Background Glows */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl z-10">
                
                {/* Master Card Enclosure (Folio Tailwind Style) */}
                <div className="rounded-3xl border border-white/10 bg-[#12141d]/70 backdrop-blur-2xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Left Column: Heading & Contact Info */}
                        <div ref={ref} className="lg:col-span-5 space-y-6">
                            <div>
                                <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase inline-block mb-4">
                                    GET IN TOUCH
                                </span>
                                <motion.h2
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8 }}
                                    className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-syne font-extrabold leading-[1.1] mb-4 tracking-tight break-words"
                                >
                                    LET'S WORK <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                                        TOGETHER
                                    </span>
                                </motion.h2>
                                <p className="text-gray-300 font-space text-sm sm:text-base leading-relaxed">
                                    Have a graphic design project, video editing request, or UI/UX opportunity in mind? Feel free to reach out directly!
                                </p>
                            </div>

                            {/* Contact Details Cards */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="space-y-4 text-gray-300 font-space text-sm"
                            >
                                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Location</p>
                                        <p className="font-semibold text-white">Tiruchengodu, Namakkal, Tamil Nadu</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-400/40 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-lg shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Email Address</p>
                                        <a href="mailto:jeevarkjs523@gmail.com" className="font-semibold text-white hover:text-cyan-300 transition-colors">
                                            jeevarkjs523@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-emerald-400/40 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Phone & WhatsApp</p>
                                        <a href="tel:+919894722375" className="font-semibold text-white hover:text-cyan-300 transition-colors">
                                            +91 98947 22375
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Social Connect Pills */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="flex flex-wrap gap-3 pt-2"
                            >
                                <SocialLink href="https://www.linkedin.com/in/jeevananth-designer" icon={FaLinkedin} label="LinkedIn" />
                                <SocialLink href="https://portfolio-523.web.app" icon={FaGlobe} label="Portfolio" />
                                <SocialLink href="https://wa.me/919894722375" icon={FaWhatsapp} label="WhatsApp" />
                            </motion.div>
                        </div>

                        {/* Right Column: Folio-Tailwind Styled Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="lg:col-span-7 bg-[#090a0f]/60 border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-inner"
                        >
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16"
                                    >
                                        <FaCheckCircle className="text-6xl text-cyan-400" />
                                        <h3 className="text-3xl font-syne font-bold">Message Received!</h3>
                                        <p className="text-gray-300 font-space text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                                    </motion.div>
                                ) : status === 'error' ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16"
                                    >
                                        <FaExclamationCircle className="text-6xl text-rose-500" />
                                        <h3 className="text-3xl font-syne font-bold">Message Failed</h3>
                                        <p className="text-gray-300 font-space text-sm">Something went wrong. Please reach out directly via email or WhatsApp.</p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <h3 className="text-2xl font-syne font-bold mb-6 text-white">Send a Direct Message</h3>
                                        <form onSubmit={handleSubmit} className="space-y-5 font-space">
                                            
                                            {/* Side-by-Side 2-Column Inputs for Name & Email */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold">
                                                        Your Name <span className="text-rose-400">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-500"
                                                        placeholder="e.g. John Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold">
                                                        Your Email <span className="text-rose-400">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-500"
                                                        placeholder="e.g. john@example.com"
                                                    />
                                                </div>
                                            </div>

                                            {/* Subject / Project Type */}
                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold">
                                                    Subject / Project Type
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-500"
                                                    placeholder="e.g. Poster Design, Branding, Job Opportunity..."
                                                />
                                            </div>

                                            {/* Message Textarea */}
                                            <div>
                                                <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold">
                                                    Your Message <span className="text-rose-400">*</span>
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="4"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none placeholder:text-gray-500"
                                                    placeholder="Tell me about your project requirements or details..."
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                disabled={status === 'loading'}
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-mono font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] group"
                                            >
                                                {status === 'loading' ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="container mx-auto max-w-7xl mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs font-mono">
                <p>&copy; 2026 JEEVANANTH | Graphic Designer, Video Editor & UI/UX Specialist</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="/Jeevananth_Resume.pdf" download="Jeevananth_Resume.pdf" className="hover:text-cyan-400 transition-colors">Download Resume PDF</a>
                    <a href="#home" className="hover:text-cyan-400 transition-colors">Back to Top ↑</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
