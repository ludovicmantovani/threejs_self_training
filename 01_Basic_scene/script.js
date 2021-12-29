// Scene creation
const scene = new THREE.Scene();

// Red cube creation
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial(
    {
        color: 0xff0000
    }
)
const mesh = new THREE.Mesh(geometry, material);
// Add red cube on scene
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(
    75, // vertical vision angle = fov
    sizes.width / sizes.height // aspect ratio
);
camera.position.z = 3;
scene.add(camera);

// Get canvas DOM element
const canvas = document.querySelector('.webgl');
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
// Update renderer size
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera)
