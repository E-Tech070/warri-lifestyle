import { TILE_TYPES } from "./tileTypes.js";
import { getTile } from "./worldMap.js";

export function isWalkable(tileType) {
  return tileType === TILE_TYPES.GRASS || tileType === TILE_TYPES.ROAD;
}

// false if the spot is off the map or the tile cannot be walked on
export function canWalkTo(x, y) {
  const tileType = getTile(x, y);

  if (tileType === null) {
    return false;
  }

  return isWalkable(tileType);
}