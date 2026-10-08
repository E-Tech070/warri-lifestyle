import Phaser from "phaser";
import { canWalkTo } from "../world/movementRules.js";

export class PlayerController {
  constructor(scene, player, playerRenderer) {
    this.player = player;
    this.playerRenderer = playerRenderer;

    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    let moved = false;

    if (
      Phaser.Input.Keyboard.JustDown(this.cursors.left) &&
      canWalkTo(this.player.gridX - 1, this.player.gridY)
    ) {
      this.player.gridX -= 1;
      moved = true;
    }

    if (
      Phaser.Input.Keyboard.JustDown(this.cursors.right) &&
      canWalkTo(this.player.gridX + 1, this.player.gridY)
    ) {
      this.player.gridX += 1;
      moved = true;
    }

    if (
      Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
      canWalkTo(this.player.gridX, this.player.gridY - 1)
    ) {
      this.player.gridY -= 1;
      moved = true;
    }

    if (
      Phaser.Input.Keyboard.JustDown(this.cursors.down) &&
      canWalkTo(this.player.gridX, this.player.gridY + 1)
    ) {
      this.player.gridY += 1;
      moved = true;
    }

    if (moved) {
      this.playerRenderer.update();
    }
  }
}