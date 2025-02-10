import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import HTML from "../../assets/html-removebg-preview.png"
import CSS from "../../assets/css-removebg-preview.png"
import Javascript from "../../assets/JavaScript_Logo.png"
import ReactJs from "../../assets/react-removebg-preview.png"
import Node from "../../assets/Node_logo_NodeJS-removebg-preview.png"
import Express from "../../assets/Express-JS-removebg-preview.png"
import Mongo from "../../assets/mongo-removebg-preview.png"
import Mysql from "../../assets/mysql-removebg-preview.png"
import Python from "../../assets/python-removebg-preview.png"
import Mui from "../../assets/mui-removebg-preview.png"
import Typescript from "../../assets/ts-removebg-preview.png"


const Globe = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load Textures (Replace with Your Own Logos)
    const textureLoader = new THREE.TextureLoader();
    const globeTexture = textureLoader.load("https://upload.wikimedia.org/wikipedia/commons/7/7c/Globe.svg"); // Generic Globe

    // Create Sphere (Globe)
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshStandardMaterial({ map: globeTexture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add Light
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Camera Position
    camera.position.z = 12;

    // Orbit Controls (Enable Zoom & Drag)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2; // Speed of Rotation

    // Create Image Sprites (HTML, CSS, JS, etc.)
    // const techLogos = [
    //     "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/9/96/Node.js_logo_2015.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/0/0d/MySQL_logo.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/4/4b/Nodemailer_logo_2018.png",
    //     "https://upload.wikimedia.org/wikipedia/commons/3/3a/Material-UI_logo.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/4/4f/Typescript_logo_2020.svg",
    //     "https://upload.wikimedia.org/wikipedia/commons/6/60/Tailwind_CSS_Logo.svg",
    //   ];
    const techLogos = [
        HTML, CSS, Javascript, Typescript, ReactJs, Node, Express, Mysql, Mongo, Python, Mui
      ];
      

    techLogos.forEach((logo, index) => {
      const logoTexture = textureLoader.load(logo);
      const logoMaterial = new THREE.SpriteMaterial({ map: logoTexture });
      const sprite = new THREE.Sprite(logoMaterial);
      
      // Position Sprites Randomly Around the Globe
      const phi = Math.acos(-1 + (2 * index) / techLogos.length);
      const theta = Math.sqrt(techLogos.length * Math.PI) * phi;

      sprite.position.set(
        6 * Math.cos(theta) * Math.sin(phi),
        6 * Math.sin(theta) * Math.sin(phi),
        6 * Math.cos(phi)
      );

      sprite.scale.set(1.5, 1.5, 1.5);
      scene.add(sprite);
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002; // Globe Rotation
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="globe-container" />;
};

export default Globe;
