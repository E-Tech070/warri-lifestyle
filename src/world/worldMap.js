import { mapData } from './mapData.js';

export function getMapWidth() {
  return mapData[0].length;
}

export function getMapHeight() {
  return mapData.length;
}

export function getTile(x, y) {
  if (x < 0 || y < 0 || x >= getMapWidth() || y >= getMapHeight()) {
    return null;
  }
  return mapData[y][x];
}