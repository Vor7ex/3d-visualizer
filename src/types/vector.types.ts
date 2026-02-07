export interface Vector3D {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  color: string;
  visible: boolean;
}

export interface VectorStore {
  vectors: Vector3D[];
  addVector: (vector: Omit<Vector3D, "id">) => void;
  removeVector: (id: string) => void;
  updateVector: (id: string, updates: Partial<Vector3D>) => void;
  setVectors: (vectors: Vector3D[]) => void;
}
