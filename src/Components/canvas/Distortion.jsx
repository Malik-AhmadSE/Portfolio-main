import { MeshDistortMaterial, OrbitControls, Preload, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { CanvasLoader } from '..'

const Distortion = () => {
  return (
    <Canvas camera={{fov:25, position:[5,5,5]}}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={1}/>
      <directionalLight position={[3,2,1]}/>
      <Sphere args={[1]} scale={1.5}  >
      <MeshDistortMaterial color="#8942df" attach="material" distort={0.4} speed={3} />
      </Sphere>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Distortion;
