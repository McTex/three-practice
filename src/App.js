/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Thing = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.z += 0.1));
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log("click")}
      onPointerOver={(e) => console.log("hover")}
      onPointerOut={(e) => console.log("unhover")}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" color="magenta" opacity={1} transparent />
    </mesh>
  );
};

const App = () => {
  return (
    <div css={theme}>
      <Canvas>
        <Thing />
      </Canvas>
    </div>
  );
};

const theme = css`
  width: 100vw;
  height: 100vh;
`;

export default App;
