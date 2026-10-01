import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeTechSphere() {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Central 3D Geometry — Multi-layered 3D Core
    const group = new THREE.Group();
    scene.add(group);

    // Outer 3D Octahedron Wireframe
    const outerGeo = new THREE.OctahedronGeometry(2.4, 0);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xB9A36A,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // Inner 3D Icosahedron Core
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Orbiting 3D Ring
    const ringGeo = new THREE.TorusGeometry(3.1, 0.03, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xB9A36A,
      transparent: true,
      opacity: 0.6
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    group.add(ringMesh);

    // Node Vertices Points
    const nodesGeo = new THREE.BufferGeometry();
    const nodeCount = 40;
    const nodePos = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount * 3; i++) {
      nodePos[i] = (Math.random() - 0.5) * 5;
    }
    nodesGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
    const nodesMat = new THREE.PointsMaterial({
      color: 0xB9A36A,
      size: 0.15,
      transparent: true,
      opacity: 0.8
    });
    const nodesPoints = new THREE.Points(nodesGeo, nodesMat);
    group.add(nodesPoints);

    // 3. Drag Interaction Logic
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.005, y: 0.008 };

    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0
      };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;

      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const deltaX = currentX - previousMousePosition.x;
      const deltaY = currentY - previousMousePosition.y;

      rotationVelocity.x = deltaY * 0.008;
      rotationVelocity.y = deltaX * 0.008;

      group.rotation.x += rotationVelocity.x;
      group.rotation.y += rotationVelocity.y;

      previousMousePosition = { x: currentX, y: currentY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const domEl = renderer.domElement;
    domEl.style.cursor = 'grab';

    domEl.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domEl.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId;
    const animate = () => {
      if (!isDragging) {
        // Natural rotation & inertia decay
        group.rotation.y += rotationVelocity.y;
        group.rotation.x += rotationVelocity.x;
        ringMesh.rotation.z += 0.005;

        rotationVelocity.x *= 0.96;
        rotationVelocity.y = rotationVelocity.y * 0.96 + 0.003 * 0.04;
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      domEl.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);

      domEl.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      window.removeEventListener('resize', handleResize);

      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      nodesGeo.dispose();
      nodesMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[260px] flex flex-col items-center justify-center select-none">
      <div 
        ref={mountRef} 
        className="w-full h-64 sm:h-72 relative z-10"
      />

      <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
        <span className="font-mono text-[10px] text-goldAccent font-bold uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-goldAccent/30 backdrop-blur-md">
          {isInteracting ? 'DRAGGING 3D MODEL' : 'INTERACTIVE 3D MODEL • DRAG TO ROTATE'}
        </span>
      </div>
    </div>
  );
}
