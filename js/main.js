

const scene  = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xffffff,1)
document.body.appendChild(renderer.domElement)
camera.position.z = 5

//lights
console.log(camera.position)
const ambientLight = new THREE.AmbientLight(0x101010, 1.0)
ambientLight.position.x = 0
ambientLight.position.y = 0
ambientLight.position.z = 5
// const pointLight = new THREE.PointLight(0x101010, 1.0)
// const directionalLight = new THREE.DirectionalLight(0x101010, 1.0)
scene.add(ambientLight)

//directional light
const sunlight = new THREE.DirectionalLight(0xdddddd, 1.0)
sunlight.position.y = 15
scene.add(sunlight)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

renderer.render(scene, camera)