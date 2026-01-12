
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Use a capitalized alias for the 'group' intrinsic element to bypass JSX namespace errors
const Group = 'group' as any;

const ParticleCloud = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const count = 6000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.08;
      
      // Gentle floating animation
      const time = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <Group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
      {/* Secondary subtle layer */}
      <Points positions={positions.slice(0, 3000)} stride={3}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.3}
        />
      </Points>
    </Group>
  );
};

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#0a0a0f_0%,_#000000_100%)]">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
};
