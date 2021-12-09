//Slå till 12. Det gäller att slå exakt 12 poäng på 3 slag.
//Om ingen lyckas slå till 12 på 3 kast börjar spelet om igen.
//Får fler 12 i samma omgång får de antingen slå om alla 3 slagen
//eller tävla om vem som får högst poäng på ett slag.

class Player {
    constructor(id){
        this.id = id;
        this.score = 0;
        this.die = [];
        this.init();
    }
    init(){
      const player = document.createElement('div');
      player.id = 'player'+this.id;
      document.querySelector('.game-board').appendChild(player);
      this.drawPlayer();
      player.addEventListener('click', event =>{
        this.rollDice();
      });
    }
    rollDice() {
        this.die.push(Math.floor(Math.random()*6)+1);
        if (this.die.length > 3) {
          this.score = 0;
          this.die = [];
        }
        this.drawPlayer();
    }

    drawPlayer() {
        const player = document.querySelector('#player'+this.id);
        player.innerHTML = '';
        const rolls = document.createElement('ul');
        this.die.forEach(value => {
          const roll = document.createElement('li');
          roll.textContent = value;
          rolls.appendChild(roll);
        });
        const button = document.createElement('button');
        button.id = this.id;
        button.textContent = 'roll';
        player.appendChild(rolls);
        player.appendChild(button);
    }

    calcScore(){
        this.die.forEach(roll => {
            this.score += roll;
        });
    }
}

let players = [];

const createPlayer = () => {
    players.push(new Player(players.length));
}

createPlayer();
