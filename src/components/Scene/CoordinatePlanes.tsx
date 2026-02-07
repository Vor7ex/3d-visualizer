import { DoubleSide } from "three";

export function CoordinatePlanes() {
  const planeSize = 20;
  const gridDivisions = 20;

  return (
    <group>
      {/* XY Plane (Blue-ish tint) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[planeSize, planeSize]} />
        <meshBasicMaterial
          color="#e0e0ff"
          transparent
          opacity={0.15}
          side={DoubleSide}
        />
      </mesh>
      <gridHelper
        args={[planeSize, gridDivisions, 0x8888ff, 0xccccff]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* XZ Plane (Green-ish tint) - Default horizontal plane in Three.js */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[planeSize, planeSize]} />
        <meshBasicMaterial
          color="#e0ffe0"
          transparent
          opacity={0.15}
          side={DoubleSide}
        />
      </mesh>
      {/* GridHelper is already horizontal (XZ) by default */}
      <gridHelper
        args={[planeSize, gridDivisions, 0x88ff88, 0xccffcc]}
        position={[0, 0.01, 0]} // Slight offset to avoid z-fighting with plane
      />

      {/* YZ Plane (Red-ish tint) */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[planeSize, planeSize]} />
        <meshBasicMaterial
          color="#ffe0e0"
          transparent
          opacity={0.15}
          side={DoubleSide}
        />
      </mesh>
      <gridHelper
        args={[planeSize, gridDivisions, 0xff8888, 0xffcccc]}
        rotation={[0, 0, Math.PI / 2]}
      />
    </group>
  );
}
