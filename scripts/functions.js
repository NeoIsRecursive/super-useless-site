let players = [];

let createPlayer = () => {
  players.push(new Player(players.length + 1));
};

const createPlayers = (x) => {
  for (let i = 0; i < x; i++) {
    createPlayer();
  }
  createPlayer = () =>
    openContainer("<h2>you aren't making any more players my dude.</h2>");
};

const makeDice = (spots) => {
  const container = document.createElement("div");
  container.setAttribute("class", "dice");

  const spot = document.createElement("div");
  spot.setAttribute("class", "spot");

  for (let index = 0; index < spots; index++) {
    container.appendChild(spot.cloneNode());
  }
  return container;
};

const autoPlay = () => {
  index = 0;
  setInterval(() => {
    players[index].rollDice();
    index++;
    if (index >= players.length) index = 0;
  }, 1000);
};
