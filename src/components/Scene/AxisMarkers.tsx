import { Text } from "@react-three/drei";

export function AxisMarkers() {
  const range = 10;
  const fontSize = 0.4;
  const markers = [];

  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;

    // X Axis Markers
    markers.push(
      <Text
        key={`x-${i}`}
        position={[i, -0.5, 0]}
        fontSize={fontSize}
        color="#aa0000"
        anchorX="center"
        anchorY="middle"
      >
        {i.toString()}
      </Text>
    );

    // Y Axis Markers
    markers.push(
      <Text
        key={`y-${i}`}
        position={[-0.5, i, 0]}
        fontSize={fontSize}
        color="#00aa00"
        anchorX="center"
        anchorY="middle"
      >
        {i.toString()}
      </Text>
    );

    // Z Axis Markers
    markers.push(
      <Text
        key={`z-${i}`}
        position={[0, -0.5, i]}
        fontSize={fontSize}
        color="#0000aa"
        anchorX="center"
        anchorY="middle"
      >
        {i.toString()}
      </Text>
    );
  }

  return <group>{markers}</group>;
}
