class Player {
  constructor(id) {
    this.id = id;
    this.sumOfRolls = 0;
    this.score = 0;
    this.diceThrown = 0;
    this.dice = [];
    this.init();
  }

  init() {
    const player = document.createElement("div");
    player.id = "player" + this.id;
    player.setAttribute("tabindex", "0");
    player.setAttribute("class", "player");
    document.querySelector(".game-board").appendChild(player);
    this.drawPlayer();
    player.addEventListener("keyup", (event) => {
      if (event.key === "Enter") this.rollDice();
    });
  }

  rollDice() {
    this.dice.push(Math.floor(Math.random() * 6) + 1);
    this.diceThrown++;
    const rolls = this.getDices();
    this.calcScore();
    this.drawPlayer(rolls);
    if (this.dice.length >= 3) this.reset();
  }

  getDices() {
    const rolls = document.createElement("div");
    rolls.setAttribute("class", "dice-rolls");

    this.dice.forEach((value) => {
      rolls.appendChild(makeDice(value));
    });

    return rolls;
  }

  drawPlayer(dice = document.createElement("div")) {
    const player = document.querySelector("#player" + this.id);
    player.textContent = "player " + this.id;

    const rolls = dice;

    const rolled = document.createElement("p");
    rolled.textContent = "total rolled: " + this.sumOfRolls;

    const score = document.createElement("p");
    score.textContent = "score: " + this.score;

    const diceThrown = document.createElement("p");
    diceThrown.textContent = "dice thrown: " + this.diceThrown;

    player.appendChild(score);
    player.appendChild(diceThrown);
    player.appendChild(rolled);
    player.appendChild(rolls);
  }

  calcScore() {
    this.sumOfRolls += this.dice[this.dice.length - 1];
    if (this.sumOfRolls === 12) {
      this.reset();
      this.score++;
    }
  }

  reset() {
    this.sumOfRolls = 0;
    this.dice = [];
  }
}
