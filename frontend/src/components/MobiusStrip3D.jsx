import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MobiusStrip3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);

    // Create Mobius Strip Geometry
    const createMobiusStrip = () => {
      const geometry = new THREE.ParametricGeometry(
        (u, v, target) => {
          u = u * 2 * Math.PI;
          const width = 1.5;
          
          // Mobius strip parametric equation
          const x = (1 + (width * v / 2) * Math.cos(u / 2)) * Math.cos(u);
          const y = (1 + (width * v / 2) * Math.cos(u / 2)) * Math.sin(u);
          const z = (width * v / 2) * Math.sin(u / 2);
          
          target.set(x * 2.5, y * 2.5, z * 2.5);
        },
        64,
        16
      );

      // Gold material with metallic finish
      const material = new THREE.MeshStandardMaterial({
        color: 0xC8A951,
        metalness: 0.8,
        roughness: 0.2,
        side: THREE.DoubleSide,
        emissive: 0xC8A951,
        emissiveIntensity: 0.1
      });

      const mesh = new THREE.Mesh(geometry, material);
      return mesh;
    };

    const mobiusStrip = createMobiusStrip();
    scene.add(mobiusStrip);

    // Add wireframe overlay
    const wireframeGeometry = mobiusStrip.geometry.clone();
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFD700,
      wireframe: true,
      opacity: 0.3,
      transparent: true
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Lighting for metallic effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xC8A951, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Slow, continuous rotation
      mobiusStrip.rotation.y += 0.003;
      mobiusStrip.rotation.x += 0.001;
      wireframe.rotation.y += 0.003;
      wireframe.rotation.x += 0.001;
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{ minHeight: '600px' }}
    />
  );
};