'use client';
import React, { ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import { Center, Environment, useEnvironment } from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Group } from 'three';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/three';
import { easing } from 'maath';
import LoaderR3F from '@/components/loaderR3F/loaderR3F';

const SkillBox = () => {
  return <MyCanvas />;
};

function MyCanvas() {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 150],
        zoom: 100,
      }}
      style={{
        touchAction: 'none',
      }}
    >
      <Suspense fallback={<LoaderR3F />}>
        <ambientLight intensity={0.65} />
        <directionalLight
          position={[0, 10, 10]}
          intensity={1.5}
          castShadow={false}
        />

        <Rig>
          <MyScene />
        </Rig>
        <Env />
      </Suspense>
    </Canvas>
  );
}

function Env() {
  const cubeTexture = useEnvironment({ path: '/enviromentMaps/city' });

  return <Environment map={cubeTexture} environmentIntensity={1} />;
}

function Rig({ children }: { children: ReactNode }) {
  const { viewport } = useThree();

  const rigRef = useRef<Group>(null);
  const [{ rotation }, api] = useSpring(() => ({
    rotation: [0, -0.08, 0],
    config: {
      tension: 280,
      friction: 60,
    },
  }));

  const bind = useGesture({
    onDrag: ({ movement: [mx], memo = rigRef.current?.rotation.y }) => {
      if (!rigRef.current) return;

      api.start({
        rotation: [0, memo + ((mx / viewport.width) * Math.PI) / 500, 0],
      });
      return rigRef.current.rotation.y;
    },
  });

  useFrame(({ camera, pointer }, delta) => {
    // if (!rigRef.current) return;
    if (pointer.x !== 0 || pointer.y !== 0) {
      easing.damp3(
        camera.position,
        [-pointer.x * 5, Math.min(2, Math.max(-2, pointer.y + 1.5)), 50],
        0.3,
        delta,
      );
    }
    camera.lookAt(0, 0, 0);
  });

  return (
    <group {...(bind() as any)}>
      <animated.group ref={rigRef} rotation={rotation as any}>
        {children}
      </animated.group>
    </group>
  );
}

function MyScene() {
  const { scene } = useLoader(GLTFLoader, '/models/ONE_RING.gltf', (loader) => {
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
        <primitive object={scene} frustrumCulled={true} />
      </animated.group>
    </Center>
  );
}

export default SkillBox;
