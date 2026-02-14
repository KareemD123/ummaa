import { useEffect, useRef } from 'react';
import styles from './FloatingParticles.module.css';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
}

interface FloatingParticlesProps {
    colors?: string[];
    count?: number;
    minSize?: number;
    maxSize?: number;
    speed?: number;
}

export default function FloatingParticles({
    colors = ['#007bff', '#116466'],
    count = 100,
    minSize = 6,
    maxSize = 10,
    speed = 0.8
}: FloatingParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const dimensionsRef = useRef({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            // const width = window.innerWidth;
            // const height = window.innerHeight;
            const width = 3500;
            const height = 3500;

            dimensionsRef.current = { width, height };

            // Set canvas buffer size
            canvas.width = width;
            canvas.height = height;

            // Reinitialize particles with new dimensions
            particlesRef.current = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: minSize + Math.random() * (maxSize - minSize),
                speedX: (Math.random() - 0.5) * speed,
                speedY: (Math.random() - 0.5) * speed,
                color: colors[Math.floor(Math.random() * colors.length)]
            }));
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const animate = () => {
            const { width, height } = dimensionsRef.current;
            ctx.clearRect(0, 0, width, height);

            particlesRef.current.forEach((particle) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around edges
                // if (particle.x < 0) particle.x = width;
                // if (particle.x > width) particle.x = 0;
                // if (particle.y < 0) particle.y = height;
                // if (particle.y > height) particle.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 5);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = 0.75;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [colors, count, minSize, maxSize, speed]);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
