import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CoordinatePlanes } from "./components/Scene/CoordinatePlanes";
import { CoordinateAxes } from "./components/Scene/CoordinateAxes";
import { AxisLabels } from "./components/Scene/AxisLabels";
import { AxisMarkers } from "./components/Scene/AxisMarkers";
import { Lights } from "./components/Scene/Lights";
import { Sidebar } from "./components/UI/Sidebar";
import { VectorArrow } from "./components/Scene/VectorArrow";
import { useVectorStore } from "./store/vectorStore";

function SceneContent() {
  const vectors = useVectorStore((state) => state.vectors);

  return (
    <>
      <Lights />
      <CoordinatePlanes />
      <CoordinateAxes />
      <AxisLabels />
      <AxisMarkers />
      {vectors.map((vector) => (
        <VectorArrow key={vector.id} vector={vector} />
      ))}
      <OrbitControls makeDefault />
    </>
  );
}

function App() {
  return (
    <div className="flex h-screen w-screen flex-row bg-slate-50">
      <Sidebar />
      <main className="flex-1 relative">
        <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
          <color attach="background" args={["#f0f0f0"]} />
          <SceneContent />
        </Canvas>
      </main>
    </div>
  );
}

export default App;
