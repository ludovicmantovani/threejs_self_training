import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//let time = Date.now()

//Clock
//const clock = new THREE.Clock();

gsap.to(mesh.position, {
    duration: 1,
    delay: 0,
    x: -2
})
gsap.to(mesh.position, {
    duration: 1,
    delay: 1,
    x: 0
})
gsap.to(mesh.position, {
    duration: 1,
    delay: 2,
    x: 2
})
gsap.to(mesh.position, {
    duration: 1,
    delay: 3,
    x: 0
})


// Animations
const tick = () =>
{
    // Time
    /*const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    console.log(deltaTime)*/

    //const elapsedTime = clock.getElapsedTime()

    // Update objects
    //mesh.rotation.y += 0.001 * deltaTime
    //mesh.rotation.y = elapsedTime * Math.PI * 2 // One revolution per second
    /*mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)*/
    /*camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)
    camera.lookAt(mesh.position)*/

    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()