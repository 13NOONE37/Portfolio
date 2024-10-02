'use client';
import LoaderR3F from '@/components/loaderR3F/loaderR3F';
import { useSpring, animated } from '@react-spring/three';
import { Box, Center, Text3D } from '@react-three/drei';
import { Canvas, ThreeEvent, useThree } from '@react-three/fiber';
import { Flex, Box as BoxGroup } from '@react-three/flex';
import { useLocale, useTranslations } from 'next-intl';
import React, { Suspense, useEffect, useState } from 'react';

const HeroScene3D = () => {
  return <MyCanvas />;
};

function MyCanvas() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <Suspense fallback={<LoaderR3F />}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[0, 10, 10]} intensity={3.5} />
        <MyScene />
      </Suspense>
    </Canvas>
  );
}

function MyScene() {
  const locale = useLocale();
  const t = useTranslations('Home');
  const { viewport, size } = useThree();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const onPointerMove = ({ offsetX, offsetY }: ThreeEvent<PointerEvent>) => {
    const { width, height } = size;
    const x = offsetX / width - 0.5;
    const y = offsetY / height - 0.5;

    setMousePos({
      x: x,
      y: y,
    });
  };

  const { cardRotation } = useSpring({
    cardRotation: [mousePos.y * 0.5, mousePos.x * 0.5, 0],
    config: {
      mass: 4,
      tension: 550,
      friction: 140,
    },
  });

  const canvasMargin = 0.15;
  const [sideMargin, setSideMargin] = useState(0);
  const [displayCorners, setDisplayCorners] = useState(true);
  const [headingSize, setHeadingSize] = useState(0.2);
  const [subHeadingSize, setSubHeadingSize] = useState(0.15);

  const handleReflow = () => {
    const width = window.innerWidth;
    if (locale === 'en') {
      if (width > 0) {
        setHeadingSize(0.22);
        setSubHeadingSize(0.15);
        setSideMargin(0);
        setDisplayCorners(false);
      }
      if (width > 400) {
        setHeadingSize(0.4);
        setSubHeadingSize(0.15);
        setSideMargin(0.25);
        setDisplayCorners(true);
      }
      if (width > 540) {
        setHeadingSize(0.6);
        setSubHeadingSize(0.2);
      }
      if (width > 810) {
        setHeadingSize(0.8);
        setSubHeadingSize(0.2);
      }
    } else if (locale === 'pl') {
      if (width > 0) {
        setHeadingSize(0.22);
        setSubHeadingSize(0.15);
        setSideMargin(0);
        setDisplayCorners(false);
      }
      if (width > 410) {
        setHeadingSize(0.25);
        setSubHeadingSize(0.15);
        setSideMargin(0.25);
        setDisplayCorners(true);
      }
      if (width > 540) {
        setHeadingSize(0.35);
        setSubHeadingSize(0.2);
      }
      if (width > 600) {
        setHeadingSize(0.4);
        setSubHeadingSize(0.2);
      }
      if (width > 810) {
        setHeadingSize(0.55);
        setSubHeadingSize(0.2);
      }
      if (width > 900) {
        setHeadingSize(0.65);
        setSubHeadingSize(0.2);
      }

      if (width > 1100) {
        setHeadingSize(0.8);
        setSubHeadingSize(0.2);
      }
    }
  };
  useEffect(() => {
    handleReflow();
  }, []);

  return (
    <animated.group
      onPointerMove={onPointerMove}
      onPointerDown={onPointerMove}
      rotation={cardRotation as any}
    >
      <mesh position={[0, 0, -0.3]}>
        <boxGeometry args={[size.width, size.height, 0.25]} />

        <meshStandardMaterial color={'#ffffff'} transparent opacity={0} />
      </mesh>

      <Flex
        position={[-viewport.width / 2, viewport.height / 2, 0]}
        size={[viewport.width, viewport.height, 0]}
        flexDirection={'column'}
        justify={'center'}
        onReflow={handleReflow}
      >
        <BoxGroup
          flexGrow={1}
          height={'auto'}
          flexDirection={'column'}
          margin={canvasMargin}
        >
          {/* Corner top */}
          <BoxGroup
            alignItems={'flex-start'}
            marginBottom={0.5}
            marginTop={0.35}
          >
            <BoxGroup centerAnchor>
              <Corner hide={!displayCorners} />
            </BoxGroup>
          </BoxGroup>

          {/* I TURN */}
          <BoxGroup alignItems={'flex-start'} marginLeft={sideMargin}>
            <BoxGroup centerAnchor>
              <SubHeading3D
                text={t('i_turn').toUpperCase()}
                size={subHeadingSize}
                key={subHeadingSize}
              />
            </BoxGroup>
          </BoxGroup>

          {/* IDEAS */}
          <BoxGroup
            alignItems={'flex-start'}
            marginTop={0.15}
            marginLeft={sideMargin}
          >
            <BoxGroup centerAnchor>
              <Heading3D
                text={t('ideas').toUpperCase()}
                size={headingSize}
                key={headingSize}
              />
            </BoxGroup>
          </BoxGroup>

          {/* INTO */}
          <BoxGroup
            alignItems={'flex-end'}
            marginTop={0.5}
            marginRight={sideMargin}
          >
            <BoxGroup centerAnchor>
              <SubHeading3D
                text={t('into').toUpperCase()}
                size={subHeadingSize}
                key={subHeadingSize}
              />
            </BoxGroup>
          </BoxGroup>

          {/* REALITY */}
          <BoxGroup
            alignItems={'flex-end'}
            marginTop={0.15}
            marginRight={sideMargin}
          >
            <BoxGroup centerAnchor>
              <Heading3D
                text={t('reality').toUpperCase()}
                size={headingSize}
                key={headingSize}
              />
            </BoxGroup>
          </BoxGroup>

          {/* Corner bottom */}
          <BoxGroup alignItems={'flex-end'} marginTop={0.5} marginBottom={0.35}>
            <BoxGroup centerAnchor rotation={[Math.PI, Math.PI, 0]}>
              <Corner hide={!displayCorners} />
            </BoxGroup>
          </BoxGroup>
        </BoxGroup>
      </Flex>
    </animated.group>
  );
}
function Corner({ hide = false }: { hide?: boolean }) {
  return (
    <group>
      <Box
        args={[0.1, 0.4, 0.25]}
        position={[-0.15, -0.15, 0]}
        scale={hide ? 0 : 1}
      >
        <meshStandardMaterial color={'#ffffff'} />
      </Box>
      <Box args={[0.4, 0.1, 0.25]} position={[0, 0, 0]} scale={hide ? 0 : 1}>
        <meshStandardMaterial color={'#ffffff'} />
      </Box>
    </group>
  );
}
function SubHeading3D({ text, size = 0.2 }: { text: string; size: number }) {
  return (
    <Center>
      <Text3D
        size={size}
        font={'/fonts/Poppins_Bold.json'}
        height={0.1}
        curveSegments={12}
        letterSpacing={0.005}
      >
        {text}
        <meshStandardMaterial color={'#ef253c'} />
      </Text3D>
    </Center>
  );
}
function Heading3D({ text, size = 0.8 }: { text: string; size: number }) {
  return (
    <Center>
      <Text3D
        size={size}
        font={'/fonts/Poppins_Bold.json'}
        height={0.25}
        curveSegments={12}
        letterSpacing={0.005}
      >
        {text}
        <meshStandardMaterial color={'#ffffff'} />
      </Text3D>
    </Center>
  );
}

export default HeroScene3D;
