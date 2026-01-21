const player = {
  health: 100,
  inventory: {
    wood: 0,
    stone: 0
  },
  selectedBlock: BLOCKS.GRASS
};

// Добавление ресурса
function collect(block) {
  if (block === BLOCKS.WOOD) player.inventory.wood++;
  if (block === BLOCKS.STONE) player.inventory.stone++;
}
