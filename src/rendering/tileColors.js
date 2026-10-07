import { TILE_TYPES } from "../world/tileTypes.js";

export const TILE_COLORS = {
  [TILE_TYPES.GRASS]: 0x5a9e3f,
  [TILE_TYPES.ROAD]: 0x555555,
  [TILE_TYPES.WATER]: 0x2a6fb0,
};

export function getTileColor(tileType) {
  return TILE_COLORS[tileType] ?? 0xff00ff;
}
