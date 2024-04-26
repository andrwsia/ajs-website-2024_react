import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeJSPractice = () => {
    const canvasRef = useRef();
    const rendererRef = useRef();
    const cameraRef = useRef();
    const controlsRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        // Clear any existing canvas content
        canvasRef.current.innerHTML = '';

        const container = containerRef.current;
        const sizes = {
            width: container.clientWidth,
            height: container.clientHeight
            // width: window.innerHeight,
            // height: window.innerHeight,
        };

        const scene = new THREE.Scene();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const mesh = new THREE.Mesh(geometry, material);
        // scene.add(mesh);

        const group = new THREE.Group()
        group.scale.y = 1
        group.rotation.y = 0.2
        scene.add(group)

        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        cube1.position.x = 0
        group.add(cube1)

        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
        camera.position.z = 3;
        cameraRef.current = camera;
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        // renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        rendererRef.current = renderer;

        const cursor = { x: 0, y: 0 };

        window.addEventListener('mousemove', (event) => {
            cursor.x = event.clientX / sizes.width - 0.5;
            cursor.y = -(event.clientY / sizes.height - 0.5);
        });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controlsRef.current = controls;

        let resizeTimeout;

        const resizeHandler = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const containerWidth = container.clientWidth;
                const containerHeight = container.clientHeight;

                // Update camera aspect ratio
                camera.aspect = containerWidth / containerHeight;
                camera.updateProjectionMatrix();

                // Update renderer size to match the container
                renderer.setSize(containerWidth, containerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            }, 100); // Adjust the delay as needed (e.g., 100 milliseconds)
        };

        resizeHandler();

        window.addEventListener('resize', resizeHandler);

        const tick = () => {
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };

        tick();

        return () => {
            window.removeEventListener('resize', resizeHandler);

            geometry.dispose();
            material.dispose();
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return (
        <div className='grid-container'>
            <div className='solutions-grid' ref={containerRef}>
                <canvas className='webgl' ref={canvasRef}></canvas>
            </div>
        </div>
    );
};

export default ThreeJSPractice;