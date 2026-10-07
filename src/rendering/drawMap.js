import Phaser from "phaser";
import { getMapWidth, getMapHeight, getTile } from "../world/worldMap.js";
import { getTileColor } from "./tileColors.js";
import { gridToScreen, TILE_WIDTH, TILE_HEIGHT } from "./isometric.js";

export function drawMap(scene) {
  const graphics = scene.add.graphics();

  const mapWidth = getMapWidth();
  const mapHeight = getMapHeight();

  const mapPixelWidth = (mapWidth + mapHeight) * (TILE_WIDTH / 2);
  const mapPixelHeight = (mapWidth + mapHeight) * (TILE_HEIGHT / 2);

  const offsetX = scene.scale.width / 2;
  const offsetY = (scene.scale.height - mapPixelHeight) / 2;

  for (let y = 0; y < mapHeight; y += 1) {
    for (let x = 0; x < mapWidth; x += 1) {
      const tileType = getTile(x, y);
      const position = gridToScreen(x, y);

      const screenX = position.x + offsetX;
      const screenY = position.y + offsetY;

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
