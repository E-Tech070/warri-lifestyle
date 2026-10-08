import { PlayerController } from "../entities/PlayerController.js";

import { Player } from "../entities/Player.js";
import { PlayerRenderer } from "../entities/PlayerRenderer.js";

import Phaser from "phaser";
import { drawMap } from "../rendering/drawMap.js";

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  }

  create() {
    drawMap(this);
    this.player = new Player();
    this.playerRenderer = new PlayerRenderer(this, this.player);
    this.playerRenderer.update();
    this.playerController = new PlayerController(
      this,
      this.player,
      this.playerRenderer,
    );

    this.add
      .text(500, 40, "WARRI LIFESTYLE", {
        fontSize: "32px",
        color: "#ffffff",
      })
      .setOrigin(0.5);
  }
  update() {
    this.playerController.update();
  }
}
