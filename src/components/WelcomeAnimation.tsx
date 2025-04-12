
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Stars, OrbitControls } from '@react-three/drei';
import { Color, Group } from 'three';

interface TextProps {
  children: string;
  position: [number, number, number];
  color?: string;
  fontSize?: number;
  rotation?: [number, number, number];
}

const AnimatedText: React.FC<TextProps> = ({ 
  children, 
  position, 
  color = "#ffffff", 
  fontSize = 1,
  rotation = [0, 0, 0]
}) => {
  const textRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.1;
      textRef.current.rotation.y = rotation[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={textRef} position={position} rotation={rotation}>
      <Text
        color={color}
        fontSize={fontSize}
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </group>
  );
};

const Logo: React.FC = () => {
  const logoRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={logoRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#1A3A5A" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]} scale={[1.5, 0.1, 0.5]} rotation={[0, Math.PI * 0.25, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#D97941" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
};

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [opacity, setOpacity] = useState<number>(1);
  
  useEffect(() => {
    // Fade out after 4 seconds
    const timeout = setTimeout(() => {
      const fadeInterval = setInterval(() => {
        setOpacity((prev) => {
          const newOpacity = prev - 0.02;
          if (newOpacity <= 0) {
            clearInterval(fadeInterval);
            // Trigger completion when fully faded
            onComplete();
            return 0;
          }
          return newOpacity;
        });
      }, 20);
      
      return () => clearInterval(fadeInterval);
    }, 4000);
    
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 9999,
        opacity,
        transition: 'opacity 0.5s ease-in-out',
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={new Color("#D97941")} />
        
        <Logo />
        
        <AnimatedText 
          position={[0, 1.8, 0]} 
          fontSize={0.7} 
          color="#ffffff"
        >
          Welcome to
        </AnimatedText>
        
        <AnimatedText 
          position={[0, 0.8, 0]} 
          fontSize={1} 
          color="#D97941"
          rotation={[0, 0.1, 0]}
        >
          AKFAS Car Rental
        </AnimatedText>
        
        <AnimatedText 
          position={[0, -0.5, 0]} 
          fontSize={0.4} 
          color="#E6D2B5"
        >
          Explore Dakhla with Comfort and Style
        </AnimatedText>
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default WelcomeAnimation;
