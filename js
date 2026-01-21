function craftPlanks() {
  if (player.inventory.wood >= 1) {
    player.inventory.wood -= 1;
    alert("Созданы доски!");
  }
}
