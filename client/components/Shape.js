import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Shape = () => {
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh ref={ref}>
      <torusKnotGeometry attach="geometry" args={[1.5, 0.5]} />
      <meshPhongMaterial
        attach="material"
        specular="black"
        color="black"
        shininess={500}
      />
    </mesh>
  );
};

export default Shape;
