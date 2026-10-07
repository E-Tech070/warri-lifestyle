export const TILE_WIDTH = 64;
export const TILE_HEIGHT = 32;

export function gridToScreen(x, y) {
  return {
    x: (x - y) * (TILE_WIDTH / 2),
    y: (x + y) * (TILE_HEIGHT / 2),
  };
}
