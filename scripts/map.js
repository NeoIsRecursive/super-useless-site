class Map {
    constructor(){
        this.grid = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ];
        this.cellSize = 50;
        this.sprite = new Image();
        //this.sprite.src = 'images/mapsprite.png';
    }
    draw(){
        this.celly = 0;
        this.cellx = 0;
        this.grid.forEach(row => {
            row.forEach(cell => {
                ctx.fillStyle = 'green';
                ctx.fillRect(this.cellx,this.celly,this.cellSize,this.cellSize);
                this.cellx += this.cellSize;
            });
            this.cellx = 0;
            this.celly += this.cellSize;
        });
    }
}