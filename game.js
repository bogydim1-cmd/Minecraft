const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const world = generateWorld();

// Цвета блоков (минимализм)
const COLORS = {
  grass: "#4caf50",
  stone: "#9e9e9e",
  wood: "#795548",
  water: "#2196f3",
  air: "transparent"
};

// Изометрическая отрисовка
function isoToScreen(x, y) {
  return {
    x: (x - y) * TILE_SIZE + canvas.width / 2,
    y: (x + y) * TILE_SIZE / 2
  };
}

// Отрисовка мира
function drawWorld() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < WORLD_HEIGHT; y++) {
    for (let x = 0; x < WORLD_WIDTH; x++) {
      const block = world[y][x];
      if (block === BLOCKS.AIR) continue;

      const pos = isoToScreen(x, y);

      ctx.fillStyle = COLORS[block];
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.lineTo(pos.x + TILE_SIZE, pos.y + TILE_SIZE / 2);
      ctx.lineTo(pos.x, pos.y + TILE_SIZE);
      ctx.lineTo(pos.x - TILE_SIZE, pos.y + TILE_SIZE / 2);
      ctx.closePath();
      ctx.fill();
    }
  }
}

// Ломание блоков
canvas.addEventListener("click", (e) => {
  const x = Math.floor(Math.random() * WORLD_WIDTH);
  const y = Math.floor(Math.random() * WORLD_HEIGHT);

  const block = world[y][x];
  if (block !== BLOCKS.AIR) {
    collect(block);
    world[y][x] = BLOCKS.AIR;
    updateHUD();
  }
});

// HUD
function updateHUD() {
  document.getElementById("health").innerText = `❤️ ${player.health}`;

  const inv = document.getElementById("inventory");
  inv.innerHTML = "";

  for (let key in player.inventory) {
    const slot = document.createElement("div");
    slot.className = "inv-slot";
    slot.innerText = `${key}: ${player.inventory[key]}`;
    inv.appendChild(slot);
  }
}

// Игровой цикл
function gameLoop() {
  drawWorld();
  requestAnimationFrame(gameLoop);
}

updateHUD();
gameLoop();
