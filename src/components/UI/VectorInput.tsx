import { useState } from "react";
import { useVectorStore } from "../../store/vectorStore";
import { parseVectorString } from "../../utils/vectorParser";

export function VectorInput() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const addVector = useVectorStore((state) => state.addVector);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = parseVectorString(inputValue);
    if (!parsed) {
      setError("Formato inválido. Ej: 'v1: 1, 2, 3'");
      return;
    }

    addVector({
      name: parsed.name,
      x: parsed.x,
      y: parsed.y,
      z: parsed.z,
    });

    setInputValue("");
  };

  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">
        Agregar Vector
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ej: v1: 5, 5, 5"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
