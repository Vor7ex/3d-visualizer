import { Text } from "@react-three/drei";

export function AxisLabels() {
  const distance = 11;
  const fontSize = 0.8;

  return (
    <group>
      {/* X Label */}
      <Text
        position={[distance, 0, 0]}
        fontSize={fontSize}
        color="#ff0000"
        anchorX="center"
        anchorY="middle"
      >
        X
      </Text>

      {/* Y Label */}
      <Text
        position={[0, distance, 0]}
        fontSize={fontSize}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
      >
        Y
      </Text>

      {/* Z Label */}
      <Text
        position={[0, 0, distance]}
        fontSize={fontSize}
        color="#0000ff"
        anchorX="center"
        anchorY="middle"
      >
        Z
      </Text>
    </group>
  );
}
