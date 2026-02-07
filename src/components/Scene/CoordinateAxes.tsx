export function CoordinateAxes() {
  const axisLength = 10;

  // Colors
  const xColor = "#ff0000";
  const yColor = "#00ff00";
  const zColor = "#0000ff";

  return (
    <group>
      {/* X Axis (Red) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[axisLength * 2, 0.05, 0.05]} />
        <meshBasicMaterial color={xColor} />
      </mesh>

      {/* Y Axis (Green) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.05, axisLength * 2, 0.05]} />
        <meshBasicMaterial color={yColor} />
      </mesh>

      {/* Z Axis (Blue) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, axisLength * 2]} />
        <meshBasicMaterial color={zColor} />
      </mesh>
    </group>
  );
}
