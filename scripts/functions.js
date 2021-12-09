let players = [];

const createPlayer = () => {
  players.push(new Player(players.length + 1));
};

const createPlayers = () => {
  for (let i = 0; i < 10; i++) {
    createPlayer();
  }
};

const autoPlay = () => {
  index = 0;
  setInterval(() => {
    players[index].rollDice();
    index++;
    if (index >= players.length) index = 0;
  }, 1000);
};
