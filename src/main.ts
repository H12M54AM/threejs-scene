/**
 * Revisitng Threejs now in Typescript
 */

import * as THREE from 'three';


// Variables
const width = window.innerWidth;
const height = window.innerHeight;
// -- Camera --
const fov:number = 75;
const near:number = 0.1;
const far:number = 1000;
const aspect:number = width / height;
// ------------
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('app') as HTMLCanvasElement
});

renderer.setSize( width, height );
renderer.render( scene, camera );


// // Adding Objects for scene
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// // Cube
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// -----------------------------

/*
// Add Lights
function addLight(){
    const skycolor = 0xcfd7f8;
    const groundcolor = 0xcdb0b0;
    const intensity = 1;
    const light = new THREE.HemisphereLight(skycolor, groundcolor, intensity);
    scene.add(light);
    // Checks if the light is in the scene, which it is right
    console.log(light.parent === scene)
}

// Add Cube
function addCube() {
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.rotation.x += 0.4;
    cube.rotation.y += 0.4;
    // Checks if the cube is in the scene, which it is right
    console.log(cube.parent === scene)
};

// Add surface mesh
function addPane() {
    const geometry = new THREE.BoxGeometry(25, 1, 15);
    const material = new THREE.MeshBasicMaterial( {color: 0xccccff} );
    const pane = new THREE.Mesh(geometry, material);
    scene.add(pane);
    pane.position.y = -8;
     // Checks if the cube is in the scene, which it is right
    console.log(pane.parent === scene)
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
}   

function Main(){
    addLight();
    addCube();
    addPane();
    animate();
}

Main();
 */