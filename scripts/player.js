class Player {
  constructor(id) {
    this.id = id;
    this.rolled = 0;
    this.score = 0;
    this.die = [];
    this.init();
  }
  init() {
    const player = document.createElement("div");
    player.id = "player" + this.id;
    player.setAttribute("class", "player");
    document.querySelector(".game-board").appendChild(player);
    this.drawPlayer();
    player.addEventListener("click", (event) => {
      this.rollDice();
    });
  }
  rollDice() {
    this.die.push(Math.floor(Math.random() * 6) + 1);
    if (this.die.length > 3) this.reset();
    this.calcScore();
    this.drawPlayer();
  }

  drawPlayer() {
    const player = document.querySelector("#player" + this.id);
    player.textContent = "player " + this.id;
    const rolls = document.createElement("ol");
    this.die.forEach((value) => {
      const roll = document.createElement("li");
      roll.textContent = value;
      rolls.appendChild(roll);
    });
    const rolled = document.createElement("p");
    rolled.textContent = "total rolled: " + this.rolled;
    const score = document.createElement("p");
    score.textContent = "score: " + this.score;
    player.appendChild(score);
    player.appendChild(rolled);
    player.appendChild(rolls);
  }

  calcScore() {
    this.rolled = 0;
    this.die.forEach((roll) => {
      this.rolled += roll;
    });
    if (this.rolled === 12) {
      this.reset();
      this.score++;
    }
  }
  reset() {
    this.rolled = 0;
    this.die = [];
  }
}
