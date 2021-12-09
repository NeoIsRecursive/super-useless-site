//Slå till 12. Det gäller att slå exakt 12 poäng på 3 slag.
//Om ingen lyckas slå till 12 på 3 kast börjar spelet om igen.
//Får fler 12 i samma omgång får de antingen slå om alla 3 slagen
//eller tävla om vem som får högst poäng på ett slag.

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

document.querySelector(".newPlayerBtn").addEventListener("click", () => {
  createPlayer();
});

createPlayers();
autoPlay();
