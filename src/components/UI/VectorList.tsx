import { useVectorStore } from "../../store/vectorStore";

export function VectorList() {
  const vectors = useVectorStore((state) => state.vectors);
  const removeVector = useVectorStore((state) => state.removeVector);
  const updateVector = useVectorStore((state) => state.updateVector);

  if (vectors.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 text-sm">
        No hay vectores
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">
        Vectores ({vectors.length}/20)
      </h2>
      <ul className="space-y-2">
        {vectors.map((vector) => (
          <li
            key={vector.id}
            className="bg-gray-50 border border-gray-200 rounded-md p-3 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm text-gray-800">
                {vector.name}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    updateVector(vector.id, { visible: !vector.visible })
                  }
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  title={vector.visible ? "Ocultar" : "Mostrar"}
                >
                  {vector.visible ? "👁️" : "🚫"}
                </button>
                <button
                  onClick={() => removeVector(vector.id)}
                  className="text-red-400 hover:text-red-600 focus:outline-none"
                  title="Eliminar"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                ({vector.x}, {vector.y}, {vector.z})
              </span>
              <input
                type="color"
                value={vector.color}
                onChange={(e) =>
                  updateVector(vector.id, { color: e.target.value })
                }
                className="h-5 w-5 border-none p-0 bg-transparent cursor-pointer"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
