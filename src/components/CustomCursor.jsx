import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Fast, responsive spring physics for crosshair reticle
    const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
    const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseOver = (e) => {
            const target = e.target.closest('button, a, input, textarea, .cursor-pointer, [data-cursor], .group, img, .glass-panel-hover');
            if (target) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block select-none">
            {/* Precision Design Crosshair Reticle */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 flex items-center justify-center"
                style={{
                    x: springX,
                    y: springY,
                }}
                animate={{
                    scale: isClicked ? 0.75 : isHovered ? 1.3 : 1,
                    rotate: isHovered ? 45 : 0,
                }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            >
                {/* Horizontal Crosshair Line */}
                <div
                    className={`absolute h-[1.5px] transition-all duration-300 ${
                        isHovered
                            ? 'w-7 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_12px_#c084fc]'
                            : 'w-5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#06b6d4]'
                    }`}
                />

                {/* Vertical Crosshair Line */}
                <div
                    className={`absolute w-[1.5px] transition-all duration-300 ${
                        isHovered
                            ? 'h-7 bg-gradient-to-b from-transparent via-purple-400 to-transparent shadow-[0_0_12px_#c084fc]'
                            : 'h-5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#06b6d4]'
                    }`}
                />

                {/* Center Precision Laser Dot */}
                <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        isHovered
                            ? 'bg-pink-400 shadow-[0_0_10px_#ec4899] scale-125'
                            : 'bg-cyan-300 shadow-[0_0_8px_#06b6d4]'
                    }`}
                />

                {/* Outer Micro Corner Ticks on Hover */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 border border-cyan-400/40 rounded-sm"
                    />
                )}
            </motion.div>
        </div>
    );
};

export default CustomCursor;
