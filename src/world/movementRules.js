import { TILE_TYPES } from './tileTypes.js';

export function isWalkable(tileType) {
  return tileType === TILE_TYPES.GRASS || tileType === TILE_TYPES.ROAD;
}