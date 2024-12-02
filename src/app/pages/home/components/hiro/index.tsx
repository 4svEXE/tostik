import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./index.scss";
import Loader from "../../../../components/shared/loader";

const Hiro: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const objectRef = useRef<THREE.Object3D | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 5, 5);
    scene.add(ambientLight, directionalLight);

    const loader = new FBXLoader();
    loader.load("/tostik/img/home/hiro/grill.fbx", (object) => {
      object.traverse((child: THREE.Object3D) => {
        const mesh = child as THREE.Mesh;
        if (
          mesh.isMesh &&
          mesh.material instanceof THREE.MeshStandardMaterial
        ) {
          delete (mesh.material as any).reflectionFactor;
          delete (mesh.material as any).map;
        }
      });
      object.scale.set(0.05, 0.05, 0.05);
      object.position.set(0, 0, 0);
      scene.add(object);
      objectRef.current = object;

      // Сцена завантажена, приховуємо лоадер
      setIsLoading(false);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls as any;
    (controls as any).enableDamping = true;
    (controls as any).dampingFactor = 0.05;
    (controls as any).enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);
      (controls as any).update();

      if (objectRef.current) {
        objectRef.current.rotation.y -= 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    const disableScroll = () => (document.body.style.overflow = "hidden");
    const enableScroll = () => (document.body.style.overflow = "auto");

    const handleTouchStart = () => {
      disableScroll();
      (controls as any).enableRotate = true;
    };

    const handleTouchEnd = () => {
      enableScroll();
      (controls as any).enableRotate = true;
    };

    const handleMouseDown = () => {
      disableScroll();
      (controls as any).enableRotate = true;
    };

    const handleMouseUp = () => {
      enableScroll();
      (controls as any).enableRotate = false;
    };

    mountRef.current?.addEventListener("touchstart", handleTouchStart);
    mountRef.current?.addEventListener("touchend", handleTouchEnd);
    mountRef.current?.addEventListener("mousedown", handleMouseDown);
    mountRef.current?.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeEventListener("touchstart", handleTouchStart);
        mountRef.current.removeEventListener("touchend", handleTouchEnd);
        mountRef.current.removeEventListener("mousedown", handleMouseDown);
        mountRef.current.removeEventListener("mouseup", handleMouseUp);
        mountRef.current.removeChild(renderer.domElement);
      }
      enableScroll();
    };
  }, []);

  return (
    <section className="FirstScreen">
      <div className="container banner p-2 md:p-0 md:flex-row flex-col md:items-center m-auto gap-10">
        <div className="decoration-sircle"></div>
        <h1>MAGICO</h1>

        <div className="gallery">
          {isLoading && <div className="loader-box"><Loader /></div>}
          <div className="gallery-container" ref={mountRef}></div>

          <div className="smaller-images">
            <img src="img/home/hiro/present.svg" className="" alt="" />
          </div>
        </div>

        <a href="#get-product" className="button light">
          Замовити зараз +
          <svg
            className="ml-1"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9354 2.56797H14.5554C14.6471 2.23138 14.6482 1.87655 14.5586 1.53939C14.4691 1.20223 14.292 0.894712 14.0454 0.647975C13.6677 0.277255 13.1597 0.0695624 12.6304 0.0695624C12.1012 0.0695624 11.5931 0.277255 11.2154 0.647975L9.50043 2.36697L7.79043 0.647975C7.60468 0.462022 7.38411 0.314504 7.14131 0.213855C6.89851 0.113207 6.63826 0.0614014 6.37543 0.0614014C6.1126 0.0614014 5.85234 0.113207 5.60955 0.213855C5.36675 0.314504 5.14618 0.462022 4.96043 0.647975C4.71382 0.894712 4.53677 1.20223 4.44721 1.53939C4.35765 1.87655 4.35876 2.23138 4.45043 2.56797H2.06543C1.6676 2.56797 1.28607 2.72601 1.00477 3.00731C0.723465 3.28862 0.56543 3.67015 0.56543 4.06797V5.06797C0.565984 5.36499 0.655294 5.65507 0.821895 5.90096C0.988496 6.14685 1.22479 6.33734 1.50043 6.44797V15.438C1.50228 16.1004 1.76626 16.7353 2.2347 17.2037C2.70314 17.6721 3.33796 17.9361 4.00043 17.938H15.0004C15.6635 17.938 16.2994 17.6746 16.7682 17.2057C17.237 16.7369 17.5004 16.101 17.5004 15.438V6.45797C17.777 6.34523 18.014 6.15299 18.1813 5.90557C18.3486 5.65814 18.4388 5.36666 18.4404 5.06797V4.06797C18.4404 3.87057 18.4015 3.67511 18.3258 3.49279C18.2501 3.31048 18.1391 3.1449 17.9993 3.00554C17.8595 2.86619 17.6936 2.7558 17.511 2.68072C17.3284 2.60563 17.1328 2.56732 16.9354 2.56797ZM5.66543 1.35697C5.85279 1.17072 6.10624 1.06618 6.37043 1.06618C6.63462 1.06618 6.88807 1.17072 7.07543 1.35697L8.28543 2.56797H5.51543C5.40157 2.37837 5.35448 2.1561 5.38167 1.93662C5.40886 1.71713 5.50875 1.51307 5.66543 1.35697ZM8.50043 16.938H4.00043C3.6026 16.938 3.22107 16.7799 2.93977 16.4986C2.65846 16.2173 2.50043 15.8358 2.50043 15.438V6.56797H8.50043V16.938ZM8.50043 5.56797H2.06543C1.93282 5.56797 1.80564 5.5153 1.71188 5.42153C1.61811 5.32776 1.56543 5.20058 1.56543 5.06797V4.06797C1.56543 3.93537 1.61811 3.80819 1.71188 3.71442C1.80564 3.62065 1.93282 3.56797 2.06543 3.56797H8.50043V5.56797ZM11.9304 1.35697C12.1024 1.18598 12.3307 1.08332 12.5728 1.06812C12.8148 1.05292 13.0542 1.1262 13.2462 1.27434C13.4383 1.42247 13.5699 1.63535 13.6167 1.87333C13.6635 2.11132 13.6221 2.35819 13.5004 2.56797H10.7204L11.9304 1.35697ZM16.5004 15.438C16.5004 15.8358 16.3424 16.2173 16.0611 16.4986C15.7798 16.7799 15.3983 16.938 15.0004 16.938H10.5004V6.56797H16.5004V15.438ZM17.4404 5.06797C17.4404 5.20058 17.3878 5.32776 17.294 5.42153C17.2002 5.5153 17.073 5.56797 16.9404 5.56797H10.5004V3.56797H16.9404C17.073 3.56797 17.2002 3.62065 17.294 3.71442C17.3878 3.80819 17.4404 3.93537 17.4404 4.06797V5.06797Z"
              fill="#ffffff"
            />
          </svg>
        </a>
      </div>

      <div className="info flex flex-col gap-4">
        <h2>
          Готувати можна смачно, швидко та естетично
        </h2>
        <p>
          В цьому допоможе <mark>сендвічниця MAGICO</mark>
        </p>
        <p>
          Ці <b>рецепти здивують вас</b> і ваших близьких, особливо останній.
        </p>
      </div>

      <div className="w-full px-2">
        <a href="#why-us" className="button">
          Читати далі
        </a>
      </div>
    </section>
  );
};

export default Hiro;
