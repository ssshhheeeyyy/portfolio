import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Shape = () => {
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh ref={ref}>
      <tetrahedronGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Shape;
