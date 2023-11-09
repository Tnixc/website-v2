<template>
  <div @mouseenter="startRotation" @mouseleave="stopRotation">
    <div ref="container" class=""></div>
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
        const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `;
  
  // Fragment Shader (simple Gaussian blur)
  const fragmentShader = `
  uniform sampler2D tDiffuse;
  uniform vec2 resolution;
  uniform float blurAmount;
  
  void main() {
    vec2 texelSize = 1.0 / resolution;
    vec4 color = vec4(0.0);
  
    for (float x = -4.0; x <= 4.0; x++) {
      for (float y = -4.0; y <= 4.0; y++) {
        color += texture2D(tDiffuse, gl_FragCoord.xy + vec2(x, y) * texelSize);
      }
    }
  
    color /= 81.0; // Adjust for the size of the kernel
  
    gl_FragColor = color;
  }
  `;
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
          const duplicateModel = model.clone();
    scene.add(duplicateModel);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        resolution: { value: new THREE.Vector2(160, 160) },
        blurAmount: { value: 0.1 }, // Adjust the blur amount
      },
      vertexShader,
      fragmentShader,
    });
    duplicateModel.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });
  
          // Add a rotation to the loaded model
          const rotationSpeed = 0.07; // Adjust the rotation speed as needed
          model.rotation.y = 0.7;
          const animateModelRotation = () => {
            model.rotation.y += rotationSpeed;
          };
   // Position the duplicate model behind the original model
   duplicateModel.position.copy(model.position);
    duplicateModel.scale.copy(model.scale);
    duplicateModel.rotation.copy(model.rotation);
    duplicateModel.translateZ(-5); // Adjust the depth of the glow effect
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
