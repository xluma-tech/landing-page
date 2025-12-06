"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Galaxy() {
    const ref = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
            ref.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <group ref={ref}>
            {/* Core Glow */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial color="#4c1d95" transparent opacity={0.2} />
            </mesh>

            {/* Surrounding Particles */}
            <Sparkles count={200} scale={12} size={4} speed={0.4} opacity={0.5} color="#a78bfa" />
            <Sparkles count={200} scale={12} size={4} speed={0.4} opacity={0.5} color="#60a5fa" />
        </group>
    );
}

export default function SpaceBackground() {
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: '#000' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <color attach="background" args={['#000']} />

                <ambientLight intensity={0.5} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                    <Galaxy />
                </Float>
            </Canvas>
        </div>
    );
}
