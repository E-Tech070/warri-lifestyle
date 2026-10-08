import Phaser from 'phaser';
import { gridToScreen } from '../rendering/isometric.js';

export class PlayerRenderer {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;

    this.sprite = scene.add.circle(0, 0, 12, 0xffffff);
    this.sprite.setDepth(100);
  }

  update() {
    const position = gridToScreen(
      this.player.gridX,
      this.player.gridY
    );

    this.sprite.setPosition(
      position.x + this.scene.scale.width / 2,
      position.y + 16
    );
  }
}