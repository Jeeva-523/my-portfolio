import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const stars = [];
        const numStars = 200;

        // Initialize Stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                speed: Math.random() * 0.5 + 0.1,
                alpha: Math.random()
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();

                // Move star
                star.y += star.speed;

                // Reset if out of screen
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }

                // Twinkle effect
                star.alpha += (Math.random() - 0.5) * 0.05;
                if (star.alpha < 0) star.alpha = 0;
                if (star.alpha > 1) star.alpha = 1;
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default Background;
