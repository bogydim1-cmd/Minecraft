const TILE_SIZE = 32;
const WORLD_WIDTH = 30;
const WORLD_HEIGHT = 30;

// Типы блоков
const BLOCKS = {
  GRASS: "grass",
  STONE: "stone",
  WOOD: "wood",
  WATER: "water",
  AIR: "air"
};

// Генерация мира
function generateWorld() {
  const world = [];

  for (let y = 0; y < WORLD_HEIGHT; y++) {
    world[y] = [];
    for (let x = 0; x < WORLD_WIDTH; x++) {

      let block = BLOCKS.GRASS;

      if (Math.random() < 0.1) block = BLOCKS.WATER;
      if (Math.random() < 0.1) block = BLOCKS.STONE;
      if (Math.random() < 0.05) block = BLOCKS.WOOD;

      world[y][x] = block;
    }
  }

  return world;
}
