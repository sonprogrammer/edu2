import { useEffect, useRef } from 'react';
import './App.css'
import * as THREE from 'three';

function App() {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log(mountRef.current); // null이면 문제
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;  // 안전하게 체크

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      195,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      3000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffee });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
  );
}

export default App;
