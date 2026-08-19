import React, { useRef, useMemo, Suspense, Component } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

class ThreeErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.warn("WebGL Canvas Error caught gracefully:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="absolute inset-0 bg-gradient-to-br from-[#090a0f] via-[#12141d] to-[#090a0f] pointer-events-none" />
            );
        }
        return this.props.children;
    }
}

const createPRNG = (seed = 42) => {
    let s = seed;
    return () => {
        let t = (s += 0x6D2B79F5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

const InkVortex = () => {
    const pointsRef = useRef();
    const { mouse, viewport } = useThree();

    // Create a massive, complex particle vortex structure
    const { positions, colors } = useMemo(() => {
        const count = 12000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const random = createPRNG(42);
        
        for (let i = 0; i < count; i++) {
            const radius = random() * 7;
            const spinAngle = radius * 2.8;
            const branchAngle = (i % 5) * ((2 * Math.PI) / 5);
            
            const randomX = Math.pow(random(), 3) * (random() < 0.5 ? 1 : -1) * 0.5;
            const randomY = Math.pow(random(), 3) * (random() < 0.5 ? 1 : -1) * 0.5;
            const randomZ = Math.pow(random(), 3) * (random() < 0.5 ? 1 : -1) * 0.5;

            positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            positions[i * 3 + 1] = randomY;
            positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            // Electric Cyan -> Vivid Purple -> Deep Magenta
            const mixedColor = new THREE.Color();
            const colorProgress = radius / 7;
            if (colorProgress < 0.35) {
                mixedColor.lerpColors(new THREE.Color('#06b6d4'), new THREE.Color('#6366f1'), colorProgress * 2.8);
            } else if (colorProgress < 0.75) {
                mixedColor.lerpColors(new THREE.Color('#6366f1'), new THREE.Color('#a855f7'), (colorProgress - 0.35) * 2.5);
            } else {
                mixedColor.lerpColors(new THREE.Color('#a855f7'), new THREE.Color('#ec4899'), (colorProgress - 0.75) * 4);
            }
            
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.06;
        
        // Interactive tilt based on mouse
        const targetX = (mouse.x * viewport.width) / 10;
        const targetY = (mouse.y * viewport.height) / 10;
        pointsRef.current.rotation.x += (targetY * 0.1 - pointsRef.current.rotation.x) * 0.04;
        pointsRef.current.rotation.z += (targetX * 0.1 - pointsRef.current.rotation.z) * 0.04;
    });

    return (
        <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
            <PointMaterial
                transparent
                vertexColors
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
};

const ThreeBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#090a0f] overflow-hidden">
            <ThreeErrorBoundary>
                <Canvas 
                    camera={{ position: [0, 3, 6], fov: 60 }} 
                    dpr={[1, 1.5]}
                    gl={{ 
                        antialias: false, 
                        powerPreference: 'high-performance',
                        alpha: true,
                        stencil: false,
                        depth: true
                    }}
                >
                    <Suspense fallback={null}>
                        <InkVortex />
                    </Suspense>
                    <ambientLight intensity={1.5} />
                </Canvas>
            </ThreeErrorBoundary>
            
            {/* Ambient Cyber Light Blobs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Soft Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,10,15,0.85)_100%)] pointer-events-none" />
        </div>
    );
};

export default ThreeBackground;
