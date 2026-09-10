'use client';

import { useRef, type PointerEvent } from 'react';

export default function HeroScene({ paused }: { paused: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const reset = () => {
    host.current?.style.setProperty('--metal-x', '0deg');
    host.current?.style.setProperty('--metal-y', '0deg');
  };
  const follow = (event: PointerEvent<HTMLDivElement>) => {
    if (paused || event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    event.currentTarget.style.setProperty('--metal-x', `${-y * 16}deg`);
    event.currentTarget.style.setProperty('--metal-y', `${x * 16}deg`);
  };
  return <div className="hero-scene original-metal" ref={host} onPointerMove={follow} onPointerLeave={reset} aria-hidden="true"><div className="metal-parallax"><img src="./images/hero.webp" alt="" width="1672" height="941" fetchPriority="high"/></div></div>;
}
