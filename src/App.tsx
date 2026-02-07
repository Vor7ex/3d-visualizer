import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="flex h-screen w-screen flex-row bg-slate-50">
      <aside className="w-80 bg-white p-4 shadow-lg z-10">
        <h1 className="text-xl font-bold mb-4">Vector Visualizer</h1>
        <p className="text-sm text-gray-500">Sidebar placeholder</p>
      </aside>
      <main className="flex-1 relative">
        <Canvas>
          <color attach="background" args={["#f0f0f0"]} />
          <mesh>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
          <gridHelper />
          <axesHelper />
        </Canvas>
      </main>
    </div>
  );
}

export default App;
