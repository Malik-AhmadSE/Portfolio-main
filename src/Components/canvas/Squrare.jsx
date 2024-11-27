import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload, RenderTexture, Text } from "@react-three/drei";
import { CanvasLoader } from "..";


export const Box = ({text}) => {
  const textref=useRef();
  useFrame((state)=>(textref.current.position.x= Math.sin(state.clock.elapsedTime)*2.15));
  return (
    <mesh>
          <boxGeometry args={[2,2,2]}/>
          <meshStandardMaterial >
            <RenderTexture attach="map" > 
              <PerspectiveCamera makeDefault position={[0, 0, 2]}/>
             <color attach="background" args={["#8850d2"]}/>  
               <Text ref={textref} fontSize={1.2} color="white">
                  {text}
                </Text>
            </RenderTexture>
          </meshStandardMaterial>
    </mesh>
  )
}


const Square = ({text}) => {
  return (
      <Canvas camera={{fov:25, position:[5, 5, 5]}}>
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={9}/>
       <ambientLight intensity={1}/>
       <directionalLight position={[3,2,1]}/>
       <Box text={text}/>
      </Suspense>
      <Preload all />
      </Canvas>
      
  )
};

export default Square;
