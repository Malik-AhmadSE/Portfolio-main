import React, { useMemo } from "react";
import { Line, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// You can draw the shape in this way if do not want to import a ready-to-use 3D model.
const Shape = () => {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group scale={1.5} >
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Sphere args={[0.55, 64, 64]} >
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Reactd = () => {
  return (
    <>
      <Shape />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={-1} radius={0.4} />
      </EffectComposer>
    </>
  );
};

export default Reactd;