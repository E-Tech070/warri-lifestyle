
import Phaser from 'phaser';
export class PlayerController {
  constructor(scene, player, playerRenderer) {
    this.player = player;
    this.playerRenderer = playerRenderer;

    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    let moved = false;

    if (Phaser.Input.Keyboard.JustDown(this.cursors.left)) {
      this.player.gridX -= 1;
      moved = true;
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) {
      this.player.gridX += 1;
      moved = true;
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
      this.player.gridY -= 1;
      moved = true;
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.down)) {
      this.player.gridY += 1;
      moved = true;
    }

    if (moved) {
      this.playerRenderer.update();
    }
  }
}