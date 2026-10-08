import Phaser from "phaser";
import { getMapWidth, getMapHeight } from "../world/worldMap.js";
import { isWalkable } from '../world/movementRules.js';
import { getTile } from '../world/worldMap.js';
export class PlayerController {
  constructor(scene, player, playerRenderer) {
    this.player = player;
    this.playerRenderer = playerRenderer;
    this.mapWidth = getMapWidth();
    this.mapHeight = getMapHeight();

    this.cursors = scene.input.keyboard.createCursorKeys();
  }
  canMoveTo(x, y) {
  const tileType = getTile(x, y);
  return tileType !== null && isWalkable(tileType);
}
  update() {
    let moved = false;

    if (
  Phaser.Input.Keyboard.JustDown(this.cursors.left) &&
  this.player.gridX > 0 &&
  this.canMoveTo(this.player.gridX - 1, this.player.gridY)
) {
  this.player.gridX -= 1;
  moved = true;
}

    if (
  Phaser.Input.Keyboard.JustDown(this.cursors.right) &&
  this.player.gridX < this.mapWidth - 1 &&
  this.canMoveTo(this.player.gridX + 1, this.player.gridY)
) {
  this.player.gridX += 1;
  moved = true;
}

   if (
  Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
  this.player.gridY > 0 &&
  this.canMoveTo(this.player.gridX, this.player.gridY - 1)
) {
  this.player.gridY -= 1;
  moved = true;
} 

    if (
  Phaser.Input.Keyboard.JustDown(this.cursors.down) &&
  this.player.gridY < this.mapHeight - 1 &&
  this.canMoveTo(this.player.gridX, this.player.gridY + 1)
) {
  this.player.gridY += 1;
  moved = true;
}

    if (moved) {
      this.playerRenderer.update();
    }
  }
}
