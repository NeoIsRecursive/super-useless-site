const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let keys = [];
let mouse = {
    x:0,
    y:0
}

window.addEventListener('keydown', x => {
    keys[x.key] = true;
});

window.addEventListener('keyup', x => {
    keys[x.key] = false;
});

window.addEventListener('mousemove', x => {
    mouse.x = x.x;
    mouse.y = x.y;
})

function gameLoop(){
    this.prev_time = 0;
    canvas.width = 500;
    canvas.height = 500;
    gameMap = new Map();
    player = new Player();

    this.update = (dt) =>{
        [player].forEach(enteties => {
            enteties.update(dt);
        })
    }

    this.render = () => {
        [gameMap,player].forEach(enteties => {
            enteties.draw();
        });
        ctx.fillStyle = 'red';
        ctx.fillRect(mouse.x-5,mouse.y-5,10,10);
    }


    this.frame = (timestamp) => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        this.dt = (timestamp - this.prev_time)/1000;
        this.prev_time = timestamp;
        this.update(dt);
        this.render();
        requestAnimationFrame(frame);
    }
    this.frame();


}

gameLoop();