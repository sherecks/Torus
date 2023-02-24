import * as THREE from "three";
import "./style.css";


const container = document.querySelector(".cont");

//Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

//sphere 
const top = new THREE.TorusGeometry( 0.8, 0.07, 30, 200 );
const mat = new THREE.PointsMaterial({
    size: 0.01,
});
const sphere = new THREE.Points(top, mat);
scene.add(sphere);

//sphere 01
const top1 = new THREE.TorusGeometry( 0.8, 0.02, 30, 200 );
const mat1 = new THREE.MeshPhysicalMaterial({
    color: 0x575757,
    emissive: 0x0032FF,
    flatShading: true,
    wireframe: true
});
mat1.reflectivity = 0
mat1.roughness = 0
mat1.metalness = 0.4
mat1.clearcoat = 0
const sphere01 = new THREE.Mesh(top1, mat1);
scene.add(sphere01);


//sphere 1
const tup = new THREE.TorusGeometry( 0.6, 0.04, 30, 175 );
const mit = new THREE.MeshPhysicalMaterial({
    color: 0x8c9da6,
    emissive: 0x425557,
});
mit.reflectivity = 1
mit.roughness = 0
mit.metalness = 1
mit.clearcoat = 0
const sphere1 = new THREE.Mesh(tup, mit);
scene.add(sphere1);

//sphere 2
const txp = new THREE.TorusGeometry( 0.4, 0.03, 30, 150 );
const mzt = new THREE.MeshPhysicalMaterial({
    color: 0x575757,
    emissive: 0x000000,
    flatShading: true,
    wireframe: true
});
mzt.reflectivity = 0
mzt.roughness = 0
mzt.metalness = 0.4
mzt.clearcoat = 0
const sphere2 = new THREE.Mesh(txp, mzt);
scene.add(sphere2);

//sphere 3 Protection
const tpp = new THREE.SphereGeometry( 0.17, 22, 22 );
const mtt = new THREE.PointsMaterial({
    size: 0.01,
});
const sphere3 = new THREE.Points(tpp, mtt);
scene.add(sphere3);

//sphere 4
const tppp = new THREE.TorusGeometry( 1.2, 0.1, 15, 75 );
const mttt = new THREE.MeshPhysicalMaterial({
    color: 0x575757,
    emissive: 0x000000,
    wireframe: true
})
mttt.reflectivity = 0
mttt.roughness = 0
mttt.metalness = 0.4
mttt.clearcoat = 0
const sphere4 = new THREE.Mesh(tppp, mttt);
scene.add(sphere4);

//sphere 5
const tppp1 = new THREE.TorusGeometry( 1.2, 0.04, 15, 75 );
const mttt1 = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 0.01
})
const sphere5 = new THREE.Points(tppp1, mttt1);
scene.add(sphere5);

//sphere 6
const tppp2 = new THREE.TorusGeometry( 1.2, 0.01, 35, 50 );
const mttt2 = new THREE.MeshPhysicalMaterial({
    color: 0x575757,
    emissive: 0x000000,
    flatShading: true,
    wireframe: true
})
mttt2.reflectivity = 0
mttt2.roughness = 0
mttt2.metalness = 0.4
mttt2.clearcoat = 0
const sphere6 = new THREE.Mesh(tppp2, mttt2);
scene.add(sphere6);


//Circle
const tip = new THREE.SphereGeometry( 0.12, 8, 8 );
const mut = new THREE.MeshPhysicalMaterial( {
    color: 0x9EAFD1,
    emissive: 0x0032FF,
    flatShading: true,
    wireframe: true
} );
mut.reflectivity = 0
mut.roughness = 0
mut.metalness = 0.4
mut.clearcoat = 0
const circle = new THREE.Mesh(tip, mut);
scene.add(circle);


//Circle1
const tip1 = new THREE.IcosahedronGeometry( 0.09, 0 );
const mut1 = new THREE.MeshPhysicalMaterial( {
    color: 0xFFFFFF,
    emissive: 0x0032FF,
    flatShading: true,
} );
mut1.reflectivity = 0
mut1.roughness = 0
mut1.metalness = 0.4
mut1.clearcoat = 0
const circle1 = new THREE.Mesh(tip1, mut1);
scene.add(circle1);

const grid = new THREE.Points( new THREE.PlaneGeometry( 15000, 15000, 64, 64 ),
new THREE.PointsMaterial( { color: 0xff0000, size: 0.05 } ) );
	grid.position.y = - 100;
	grid.rotation.x = - Math.PI / 2;
	scene.add( grid );


//Light
const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1.5 );
scene.add( directionalLight );

const light = new THREE.PointLight( 0xB3BAFF, 1.5, 50 );
light.position.set( 10, 0, 20 );
scene.add( light );

const light1 = new THREE.PointLight( 0xFFFFFF, 0.75, 50 );
light1.position.set( -20, 0, 20 );
scene.add( light1 );



//Particles
const particlesGeometry = new THREE.BufferGeometry();
const counts = 12000;

const positions = new Float32Array(counts * 5);
for ( let i = 0; i < counts * 100; i++){
    positions[i + 1] = (Math.random() -0.5) * 35;
}

particlesGeometry.setAttribute(
    'position', 
    new THREE.BufferAttribute(positions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    emissive: 0xFFFFFF,
});
particlesMaterial.size = 0.01;
particlesMaterial.sizeAttenuation = true;

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);


//Renderer
const renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);




//Animate
function animate() {

    particles.rotation.y += 0.0009;
    particles.rotation.x += 0.0009;

    circle.rotation.z -= 0.02;
    circle.rotation.x += 0.02;

    circle1.rotation.z -= 0.02;
    circle1.rotation.x += 0.02;

    sphere.rotation.z += 0.002;
    sphere.rotation.x += 0.02;
    sphere.rotation.y -= 0.015;

    sphere01.rotation.z += 0.002;
    sphere01.rotation.x += 0.02;
    sphere01.rotation.y -= 0.015;

    sphere1.rotation.z += 0.002;
    sphere1.rotation.y -= 0.0155;
    sphere1.rotation.x += 0.018;

    sphere2.rotation.y -= 0.017;
    sphere2.rotation.x += 0.018;
    sphere2.rotation.z -= 0.002;

    sphere3.rotation.y -= 0.02;
    sphere3.rotation.z -= 0.002;

    sphere4.rotation.x = 2;
    sphere4.rotation.z -= 0.002;

    sphere5.rotation.x = 2;
    sphere5.rotation.z -= 0.003;

    sphere6.rotation.x = 2;
    sphere6.rotation.z -= 0.002;


    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();