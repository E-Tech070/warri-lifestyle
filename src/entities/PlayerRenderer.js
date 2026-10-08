import { getTileCenter } from "../rendering/mapLayout.js";

export class PlayerRenderer {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;

    this.sprite = scene.add.circle(0, 0, 12, 0xffffff);
    this.sprite.setDepth(100);
  }

  update() {
    const center = getTileCenter(
      this.scene,
      this.player.gridX,
      this.player.gridY,
    );

    this.sprite.setPosition(center.x, center.y);
  }
}