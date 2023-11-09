<template>
  <div @mouseenter="startRotation" @mouseleave="stopRotation">
    <div ref="container" class=""></div>
  </div>
</template>
<script>
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
      const camera = new THREE.PerspectiveCamera(6, 1, 0.1, 1000);
      camera.position.z = 100;
      camera.position.y = 4;
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
      loader.load("src/assets/0.gltf", (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Add a rotation to the loaded model
        const rotationSpeed = 0.07; // Adjust the rotation speed as needed
        model.rotation.y = 0.7;
        const animateModelRotation = () => {
          model.rotation.y += rotationSpeed;
        };

        // Increase the intensity of the ambient light
        // const ambientLight = new THREE.AmbientLight(0xcae7c2, 3.0); // Adjust the intensity (e.g., 1.0 for a strong light)
        // scene.add(ambientLight);
        const ambientLight2 = new THREE.AmbientLight(0x7893ce, 3.0); // Adjust the intensity (e.g., 1.0 for a strong light)
        scene.add(ambientLight2);
        const directionalLight = new THREE.DirectionalLight(0xcae7c2, 4.0);
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
