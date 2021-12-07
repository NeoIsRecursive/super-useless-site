const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function moveCube(){
    if (keys['ArrowLeft']){
        cube.position.x -= 0.1;
    }
    if (keys['ArrowRight']){
        cube.position.x += 0.1;
    }
}
dt = 0;
function animate() {
    moveCube();
    renderer.render( scene, camera );
	requestAnimationFrame(animate);
}

const plane = new THREE.Plane(new THREE.Vector3(1, 1, 1), 1);
const raycaster = new THREE.Raycaster(); 
const mouse = new THREE.Vector2();       
const intersectPoint = new THREE.Vector3();
document.addEventListener('mousemove', event =>{

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, intersectPoint);
    cube.lookAt(intersectPoint);
});

let keys = [];

document.addEventListener('keydown', x => {
    keys[x.key] = true;
});

document.addEventListener('keyup', x => {
    keys[x.key] = false;
});

animate();