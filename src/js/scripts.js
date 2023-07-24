import * as THREE from 'three';
import * as dat from 'dat.gui';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-10,30,30);

const gridHelper = new THREE.GridHelper(100);
scene.add(gridHelper);

const gui = new dat.GUI();

const sceneBoxGeometry = new THREE.BoxGeometry(100,100,100);
const sceneMaterial = new THREE.MeshStandardMaterial({color: 0xFFFFFF,side:THREE.DoubleSide});
const sceneBox = new THREE.Mesh(sceneBoxGeometry,sceneMaterial);
sceneBox.position.set(0,50,0);
scene.add(sceneBox);

const ambientLight = new THREE.AmbientLight(0x333333);
ambientLight.castShadow = true
scene.add(ambientLight);


const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.3);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, -30);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(dLightHelper);


const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight);
spotLight.position.set(0, 30, -15);
spotLight.castShadow = true;
spotLight.angle = 0.2;

const cardGeometry = new THREE.BoxGeometry(2,4,0.2);
const cardMaterialGreen = new THREE.MeshStandardMaterial({color: 0x00FF00});
const cardGreen = new THREE.Mesh(cardGeometry,cardMaterialGreen);
cardGreen.position.set(0,3,-15)
scene.add(cardGreen)
spotLight.target = cardGreen;

const spotLight2 = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight2);
spotLight2.position.set(0, 30, 0);
spotLight2.castShadow = true;
spotLight2.angle = 0.2;

const cardMaterialBlue = new THREE.MeshStandardMaterial({color: 0x0000FF});
const cardBlue = new THREE.Mesh(cardGeometry,cardMaterialBlue);
cardBlue.position.set(0,3,0)
scene.add(cardBlue)


const spotLight3 = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight3);
spotLight3.position.set(0, 30, 15);
spotLight3.castShadow = true;
spotLight3.angle = 0.2;


const cardMaterialRed = new THREE.MeshStandardMaterial({color: 0xFF0000});
const cardRed = new THREE.Mesh(cardGeometry,cardMaterialRed);
cardRed.position.set(0,3,15)
scene.add(cardRed)
spotLight3.target = cardRed;


const sLightHelper1 = new THREE.SpotLightHelper(spotLight);
scene.add(sLightHelper1);
const sLightHelper2 = new THREE.SpotLightHelper(spotLight2);
scene.add(sLightHelper2);
const sLightHelper3 = new THREE.SpotLightHelper(spotLight3);
scene.add(sLightHelper3);

function animate(){
    cardBlue.rotation.y +=0.02;
    cardGreen.rotation.y +=0.02;
    cardRed.rotation.y +=0.02;
    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);