'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  Center,
  Environment,
  ScrollControls,
  useScroll,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { easing } from 'maath';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useSpring, animated } from '@react-spring/three';
import useThreeMousePos from '@/hooks/useThreeMousePos';
import { Group } from 'three';
import { isMobile, isTablet } from 'react-device-detect';

const SkillBox = () => {
  return <MyCanvas />;
};

function MyCanvas() {
  const isMobileDevice = isMobile || isTablet;
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 5, 150],
        zoom: 100,
      }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[0, 10, 10]} intensity={1.5} />
      <ScrollControls
        pages={14}
        style={{ scrollbarWidth: 'none', scrollbarColor: 'transparent' }}
        infinite
        horizontal={isMobileDevice}
      >
        <Rig>
          <MyScene />
        </Rig>
      </ScrollControls>
      <Environment preset="city" environmentIntensity={1} />
    </Canvas>
  );
}

function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<Group>(null);
  const scroll = useScroll();

  useFrame(({ camera, pointer, events }, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents

    events.update?.();

    easing.damp3(
      camera.position,
      [-pointer.x * 2, pointer.y + 1.5, 50],
      0.3,
      delta,
    ); // Move camera
    camera.lookAt(0, 0, 0); // Look at center
  });

  return (
    <group ref={ref} rotation={[0, 0, 0]}>
      {children}
    </group>
  );
}
function MyScene() {
  const { scene } = useLoader(GLTFLoader, '/ONE_RING.gltf', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  const { size } = useThree();
  const [ringScale, setRingScale] = useState([8, 8, 8]);
  useEffect(() => {
    setRingScale(size.width < 1232 ? [8, 8, 8] : [6.5, 6.5, 6.5]);
  }, [size.width]);

  return (
    <Center>
      <animated.group scale={ringScale as any} rotation={[0, Math.PI * 1.5, 0]}>
        <primitive object={scene} />
      </animated.group>
    </Center>
  );
}

export default SkillBox;
