//Slå till 12. Det gäller att slå exakt 12 poäng på 3 slag.
//Om ingen lyckas slå till 12 på 3 kast börjar spelet om igen.
//Får fler 12 i samma omgång får de antingen slå om alla 3 slagen
//eller tävla om vem som får högst poäng på ett slag.

class Player {
    constructor(id){
        this.id = id;
        this.score = 0;
        this.rolls = [];
    }
    rollDice() {
        this.rolls.push(Math.ceil(Math.random()*6));
        if (this.rolls.length > 3) score = 0;
        this.calcScore();
    }

    drawDiceRoll() {
        const player = document.querySelector('player'+this.id);
        const roll = document.createElement('p');
        roll.textContent = 'roll ' + this.rolls.length + ': ' +this.rolls[this.rolls.length-1];
        player.appendChild(roll);  
    }

    calcScore(){
        this.rolls.forEach(roll => {
            this.score += roll;
        });
    }
}

let players = [];

const createPlayer = () => {
    players.push(new Player(players.length));
}

createPlayer();