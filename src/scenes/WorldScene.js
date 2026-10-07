import Phaser from 'phaser';
import { drawMap } from '../rendering/drawMap.js';

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene');
  }

  create() {
    drawMap(this);

    this.add
      .text(500, 40, 'WARRI LIFESTYLE', {
        fontSize: '32px',
        color: '#ffffff'
      })
      .setOrigin(0.5);
  }
}