import { useState } from "react";
import { VectorInput } from "./VectorInput";
import { VectorList } from "./VectorList";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative bg-white shadow-lg z-10 transition-all duration-300 flex flex-col ${
        collapsed ? "w-0 p-0 overflow-hidden" : "w-80 p-4"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Vector Visualizer</h1>
      </div>

      <VectorInput />
      <div className="border-t border-gray-200 my-4" />
      <VectorList />

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 -right-10 bg-white p-2 rounded-r-md shadow-md text-gray-600 hover:text-gray-900 focus:outline-none"
        style={{ width: "40px", height: "40px" }}
      >
        {collapsed ? "»" : "«"}
      </button>
    </aside>
  );
}
