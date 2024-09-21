'use client';
import { ThreeEvent, useThree } from '@react-three/fiber';
import { useState } from 'react';

const useThreeMousePos = () => {
  const { size } = useThree();
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

  return { mousePos, onPointerMove };
};

export default useThreeMousePos;
