import { useMemo } from "react";
import * as THREE from "three";
import { Text, Billboard } from "@react-three/drei";
import { Vector3D } from "../../types/vector.types";

interface VectorArrowProps {
  vector: Vector3D;
}

export function VectorArrow({ vector }: VectorArrowProps) {
  const { x, y, z, color, visible, name } = vector;

  const { dir, length } = useMemo(() => {
    const v = new THREE.Vector3(x, y, z);
    const len = v.length();
    // Avoid division by zero if length is 0 (though 0 vector shouldn't really be drawn or direction is ambiguous)
    const direction = len > 0 ? v.normalize() : new THREE.Vector3(0, 1, 0);
    return { dir: direction, length: len };
  }, [x, y, z]);

  if (!visible) return null;

  // Head length ratio (e.g., 20% of length, but capped to look good)
  const headLength = Math.min(length * 0.2, 0.5);
  const headWidth = headLength * 0.5;

  return (
    <group>
      <arrowHelper
        args={[
          dir,
          new THREE.Vector3(0, 0, 0),
          length,
          color,
          headLength,
          headWidth,
        ]}
      />
      <Billboard>
        <Text
          position={[x, y + 0.5, z]} // Label slightly above the tip
          fontSize={0.5}
          color={color}
          anchorX="center"
          anchorY="bottom"
        >
          {`${name} (${x}, ${y}, ${z})`}
        </Text>
      </Billboard>
    </group>
  );
}
