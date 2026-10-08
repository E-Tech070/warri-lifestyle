import { getMapWidth, getMapHeight } from "../world/worldMap.js";
import { gridToScreen, TILE_HEIGHT } from "./isometric.js";

// where the map sits on the screen, worked out from the real map size
export function getMapOffset(scene) {
  const mapPixelHeight = (getMapWidth() + getMapHeight()) * (TILE_HEIGHT / 2);

  return {
    x: scene.scale.width / 2,
    y: (scene.scale.height - mapPixelHeight) / 2,
  };
}

// screen position of the middle of a tile
export function getTileCenter(scene, x, y) {
  const position = gridToScreen(x, y);
  const offset = getMapOffset(scene);

  return {
    x: position.x + offset.x,
    y: position.y + offset.y + TILE_HEIGHT / 2,
  };
}