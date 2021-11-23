class Player {
    constructor(){
        this.height = 50;
        this.width = 50;
        this.x = 0;
        this.y = 0;
        this.speed = 500;
    }
    update(dt){
        if(keys['ArrowLeft'])   this.x -= this.speed * dt;
        if(keys['ArrowRight'])  this.x += this.speed * dt;
        if(keys['ArrowUp'])     this.y -= this.speed * dt;
        if(keys['ArrowDown'])   this.y += this.speed * dt;
    }

    collision(){
        
    }

    draw(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}