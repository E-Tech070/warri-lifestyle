import './style.css';
import Phaser from 'phaser';
import WorldScene from './scenes/WorldScene.js';

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  backgroundColor: '#1a1a2e',
  parent: 'game-container',
  scene: [WorldScene]
};

new Phaser.Game(config);