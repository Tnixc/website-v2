<template>
  <div
    class="flex border-b-4 border-cyan-600 bg-teal-200 transition-all duration-300 hover:shadow-xl"
    @mouseenter="startRotation"
    @mouseleave="stopRotation"
  >
    <div class="relative bg-blue-200/5">
      <div class="aspect-square bg-teal-200">
        <div ref="container"></div>
        <div
          class="absolute inset-10 -z-10 rounded-full bg-blue-500 blur-xl"
        ></div>
      </div>
    </div>
    <div class="bg-cyan-400/50 p-4">
      <h3 class="text-3xl">Tailwind CSS</h3>
      <p class="text-teal-900">
        The objectively best way to write styles. <br />
        I'm gonna use it everywhere.
      </p>
    </div>
  </div>
</template>
<script lang="js">
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export default {
  data() {
    return {
      isHovered: false,
    };
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // Create a scene
      const scene = new THREE.Scene();

      // Create a camera
      const camera = new THREE.PerspectiveCamera(3, 1, 0.1, 1000);
      camera.position.z = 100;
      camera.position.y = 1;
      camera.rotation.x = 0;

      // Create a renderer with a transparent background
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(160, 160);

      renderer.shadowMap.enabled = true; // Enable shadow mapping

      this.$refs.container.appendChild(renderer.domElement);

      // Load your external 3D model
      const loader = new GLTFLoader();
      loader.load("assets/1.gltf", (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Add a rotation to the loaded model
        const rotationSpeed = 0.05; // Adjust the rotation speed as needed
        model.rotation.y = 0.7;
        const animateModelRotation = () => {
          model.rotation.y += rotationSpeed;
        };
        const ambientLight2 = new THREE.AmbientLight(0x7893ce, 4.0); // Adjust the intensity (e.g., 1.0 for a strong light)
        scene.add(ambientLight2);
        const directionalLight = new THREE.DirectionalLight(0xcae7c2, 5.0);
        directionalLight.position.set(10, 10, 10); // Set the position of the directional light
        scene.add(directionalLight);
        // Create an animate function to continuously render the scene
        const animate = () => {
          requestAnimationFrame(animate);

          // Rotate the model continuously
          if (this.isHovered) {
            animateModelRotation();
          }

          renderer.render(scene, camera);
        };
        animate();
      });
    },
    startRotation() {
      this.isHovered = true;
    },
    stopRotation() {
      this.isHovered = false;
    },
  },
};
</script>
<style scoped></style>
