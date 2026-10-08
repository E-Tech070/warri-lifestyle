import { getMapWidth, getMapHeight, getTile } from "../world/worldMap.js";
import { getTileColor } from "./tileColors.js";
import { TILE_WIDTH, TILE_HEIGHT } from "./isometric.js";
import { getTileCenter } from "./mapLayout.js";

export function drawMap(scene) {
  const graphics = scene.add.graphics();

  const mapWidth = getMapWidth();
  const mapHeight = getMapHeight();

  for (let y = 0; y < mapHeight; y += 1) {
    for (let x = 0; x < mapWidth; x += 1) {
      const tileType = getTile(x, y);
      const center = getTileCenter(scene, x, y);

      const screenX = center.x;
      const screenY = center.y - TILE_HEIGHT / 2;

      graphics.fillStyle(getTileColor(tileType), 1);

      graphics.beginPath();
      graphics.moveTo(screenX, screenY);
      graphics.lineTo(screenX + TILE_WIDTH / 2, screenY + TILE_HEIGHT / 2);
      graphics.lineTo(screenX, screenY + TILE_HEIGHT);
      graphics.lineTo(screenX - TILE_WIDTH / 2, screenY + TILE_HEIGHT / 2);
      graphics.closePath();
      graphics.fillPath();
    }
  }

  return graphics;
}