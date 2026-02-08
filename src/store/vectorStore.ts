import { create } from "zustand";
import { Vector3D, VectorStore } from "../types/vector.types";

// Default colors to cycle through
const DEFAULT_COLORS = [
  "#ef4444", // red-500
  "#22c55e", // green-500
  "#3b82f6", // blue-500
  "#eab308", // yellow-500
  "#a855f7", // purple-500
  "#ec4899", // pink-500
  "#06b6d4", // cyan-500
  "#f97316", // orange-500
];

export const useVectorStore = create<VectorStore>((set) => ({
  vectors: [],

  addVector: (vectorData) =>
    set((state) => {
      if (state.vectors.length >= 20) {
        console.warn("Max vectors limit reached");
        return state;
      }

      const id = crypto.randomUUID();
      const newVector: Vector3D = {
        id,
        ...vectorData,
        color:
          vectorData.color ||
          DEFAULT_COLORS[state.vectors.length % DEFAULT_COLORS.length] ||
          "#ef4444",
        visible: vectorData.visible ?? true,
      };

      return { vectors: [...state.vectors, newVector] };
    }),

  removeVector: (id) =>
    set((state) => ({
      vectors: state.vectors.filter((v) => v.id !== id),
    })),

  updateVector: (id, updates) =>
    set((state) => ({
      vectors: state.vectors.map((v) =>
        v.id === id ? { ...v, ...updates } : v
      ),
    })),

  setVectors: (vectors) => set({ vectors }),
}));
