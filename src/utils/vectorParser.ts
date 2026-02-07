export interface ParsedVector {
  name: string;
  x: number;
  y: number;
  z: number;
}

export const parseVectorString = (input: string): ParsedVector | null => {
  // Try to match "name: x, y, z" or just "x, y, z"
  // Examples: "v1: 1, 2, 3", "vec A: 1.5, -2, 0", "1, 2, 3"

  const trimmed = input.trim();
  if (!trimmed) return null;

  let name = `Vector`;
  let coordsString = trimmed;

  // Check if name is provided (colon separator)
  if (trimmed.includes(":")) {
    const parts = trimmed.split(":");
    name = parts[0].trim();
    coordsString = parts.slice(1).join(":").trim(); // In case name had colon? Unlikely but safe
  }

  // Remove brackets if present [1, 2, 3] or (1, 2, 3)
  coordsString = coordsString.replace(/[[]\]()]/g, "");

  // Split by comma or space
  const coords = coordsString.split(/[\s,]+/).filter((s) => s !== "");

  if (coords.length !== 3) {
    return null;
  }

  const x = Number(coords[0]);
  const y = Number(coords[1]);
  const z = Number(coords[2]);

  if (
    isNaN(x) ||
    isNaN(y) ||
    isNaN(z) ||
    !isFinite(x) ||
    !isFinite(y) ||
    !isFinite(z)
  ) {
    return null;
  }

  return { name, x, y, z };
};
