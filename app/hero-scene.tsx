'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

export default function HeroScene({ paused, progress }: { paused: boolean; progress: RefObject<number> }) {
  const host = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(paused);
  const [ready, setReady] = useState(false);
  useEffect(() => { pauseRef.current = paused; }, [paused]);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let stopped = false;
    let cleanup = () => {};
    const initialize = async () => {
      const THREE = await import('three');
      const { RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js');
      if (stopped) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
      catch { return; }
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.65));
      renderer.setClearColor(0x07080b, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      element.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, .1, 60);
      const pmrem = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const env = pmrem.fromScene(room, .04);
      scene.environment = env.texture;
      room.dispose();
      const stage = new THREE.Group();
      scene.add(stage);
      const silver = new THREE.MeshPhysicalMaterial({ color: 0xc5d4ef, metalness: 1, roughness: .14, clearcoat: 1, clearcoatRoughness: .12 });
      const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.02, .29, 180, 28, 2, 3), silver);
      knot.rotation.set(.15, .2, -.2);
      stage.add(knot);
      scene.add(new THREE.AmbientLight(0x9bbcff, .8));
      const blue = new THREE.PointLight(0x80abff, 28, 14); blue.position.set(-3, 2, 3); scene.add(blue);
      const pearl = new THREE.PointLight(0xffffff, 35, 14); pearl.position.set(3, 4, 4); scene.add(pearl);
      const edge = new THREE.PointLight(0xa88fff, 20, 12); edge.position.set(0, -2, -1); scene.add(edge);
      const groups: InstanceType<typeof THREE.Group>[] = [];
      const textures: InstanceType<typeof THREE.Texture>[] = [];
      const materials: InstanceType<typeof THREE.Material>[] = [silver];
      const loader = new THREE.TextureLoader();
      const panels = [
        { src: '/images/tf-footprints.webp', w: 1.32, h: 2.86 },
        { src: '/images/radar-interface.webp', w: 2.7, h: 1.52 },
        { src: '/images/loopit-katseye.webp', w: 1.5, h: 2.18 },
      ];
      for (const panel of panels) {
        const group = new THREE.Group();
        const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x5f6c85, metalness: .95, roughness: .23 });
        const frame = new THREE.Mesh(new THREE.BoxGeometry(panel.w + .055, panel.h + .055, .075), frameMaterial);
        group.add(frame); materials.push(frameMaterial);
        loader.load(panel.src, texture => {
          if (stopped) { texture.dispose(); return; }
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
          textures.push(texture);
          const material = new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
          materials.push(material);
          const screen = new THREE.Mesh(new THREE.PlaneGeometry(panel.w, panel.h), material);
          screen.position.z = .041; group.add(screen);
          draw(performance.now());
        });
        stage.add(group); groups.push(group);
      }
      const reduced = matchMedia('(prefers-reduced-motion: reduce)');
      let visible = true, frameId = 0, lastTime = 0, elapsed = 0;
      let pointerX = 0, pointerY = 0, easedX = 0, easedY = 0;
      const draw = (now: number) => {
        if (stopped) return;
        const motion = !pauseRef.current && !reduced.matches;
        const delta = Math.min((now - lastTime) / 1000 || 0, .04); lastTime = now;
        if (motion) elapsed += delta;
        const p = motion ? progress.current : 0;
        easedX += ((motion ? pointerX : 0) - easedX) * .055;
        easedY += ((motion ? pointerY : 0) - easedY) * .055;
        const narrow = element.clientWidth < 650;
        const spread = narrow ? 1.55 : 2.15;
        groups[0].position.set(-spread - p * .7, -.08 + Math.sin(elapsed * .65) * .08, -.4 + p * 1.45);
        groups[0].rotation.set(.08 - p * .08, .35 - p * .18, -.15 + p * .11);
        groups[1].position.set(.15, -.55 + Math.sin(elapsed * .5 + 1) * .09, -1.8 + p * 2.3);
        groups[1].rotation.set(-.12 + p * .1, -.07, .03);
        groups[2].position.set(spread + p * .65, .12 + Math.sin(elapsed * .6 + 2) * .09, -.25 + p * 1.5);
        groups[2].rotation.set(-.08 + p * .05, -.33 + p * .18, .14 - p * .09);
        knot.rotation.y = .2 + elapsed * .17 + p * 1.5;
        knot.rotation.z = -.2 + Math.sin(elapsed * .28) * .17;
        knot.position.set(0, .12 + p * 1.5, .3 - p * 3.3);
        knot.scale.setScalar(1 - p * .32);
        stage.rotation.y = easedX * .17; stage.rotation.x = easedY * .1;
        camera.position.set(easedX * .25, .2 - easedY * .18, (narrow ? 10.8 : 8.4) - p * .5);
        camera.lookAt(0, .1, 0);
        renderer.render(scene, camera);
      };
      const tick = (now: number) => {
        frameId = 0; if (!visible || stopped) return;
        draw(now);
        if (!reduced.matches && !pauseRef.current) frameId = requestAnimationFrame(tick);
      };
      const wake = () => { if (!frameId && visible && !stopped) frameId = requestAnimationFrame(tick); };
      const resize = () => {
        renderer.setSize(element.clientWidth, element.clientHeight, false);
        camera.aspect = element.clientWidth / Math.max(1, element.clientHeight);
        camera.updateProjectionMatrix(); wake();
      };
      const pointer = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        const rect = element.getBoundingClientRect();
        pointerX = (event.clientX - rect.left) / rect.width * 2 - 1;
        pointerY = (event.clientY - rect.top) / rect.height * 2 - 1; wake();
      };
      const leave = () => { pointerX = 0; pointerY = 0; };
      const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(element);
      const intersection = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible) { lastTime = performance.now(); wake(); } else { cancelAnimationFrame(frameId); frameId = 0; }
      }); intersection.observe(element);
      // Mutation on the host's parent reflects the pause button without rebuilding WebGL.
      const pauseObserver = new MutationObserver(wake);
      const site = element.closest('.site'); if (site) pauseObserver.observe(site, { attributes: true, attributeFilter: ['class'] });
      element.addEventListener('pointermove', pointer); element.addEventListener('pointerleave', leave);
      reduced.addEventListener('change', wake); resize(); setReady(true); wake();
      cleanup = () => {
        cancelAnimationFrame(frameId); resizeObserver.disconnect(); intersection.disconnect(); pauseObserver.disconnect();
        element.removeEventListener('pointermove', pointer); element.removeEventListener('pointerleave', leave); reduced.removeEventListener('change', wake);
        scene.traverse(object => { if (object instanceof THREE.Mesh) object.geometry.dispose(); });
        textures.forEach(texture => texture.dispose()); materials.forEach(material => material.dispose());
        env.dispose(); pmrem.dispose(); renderer.dispose(); renderer.domElement.remove();
      };
    };
    initialize().catch(() => { if (!stopped) setReady(false); });
    return () => { stopped = true; cleanup(); };
  }, [progress]);
  return <div className={`hero-scene ${ready ? 'scene-ready' : ''}`} ref={host} aria-hidden="true"><img className="scene-fallback" src="/images/hero.webp" alt="" width="1672" height="941" fetchPriority="high"/></div>;
}
