'use client';

import { useEffect, useRef, useState, type RefObject, type PointerEvent } from 'react';

const portraits = [
  { src:'/images/about-portrait-formal.webp', alt:'杨玄一的正装肖像', label:'工作', width:900, height:1200 },
  { src:'/images/about-portrait-camera.webp', alt:'杨玄一携相机出行的生活照', label:'摄影', width:900, height:1200 },
  { src:'/images/about-portrait.webp', alt:'杨玄一在湖边的旅行照片', label:'旅行', width:1100, height:1467 },
];

export default function PortraitGallery({ galleryRef, paused }: { galleryRef:RefObject<HTMLDivElement | null>; paused:boolean }) {
  const [entered, setEntered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const frame = useRef(0);
  const reduced = useRef(false);
  const active = hovered ?? selected;

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { reduced.current = media.matches; };
    sync(); media.addEventListener('change', sync);
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setEntered(true); observer.disconnect(); }
    }, { threshold:.25 });
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => { observer.disconnect(); media.removeEventListener('change', sync); cancelAnimationFrame(frame.current); };
  }, [galleryRef]);

  const track = (event:PointerEvent<HTMLButtonElement>) => {
    if (paused || reduced.current || event.pointerType !== 'mouse') return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      card.style.setProperty('--portrait-rx', `${(0.5-y)*12}deg`);
      card.style.setProperty('--portrait-ry', `${(x-0.5)*16}deg`);
      card.style.setProperty('--portrait-light-x', `${x*100}%`);
      card.style.setProperty('--portrait-light-y', `${y*100}%`);
    });
  };
  const release = (event:PointerEvent<HTMLButtonElement>) => {
    cancelAnimationFrame(frame.current);
    event.currentTarget.style.setProperty('--portrait-rx', '0deg');
    event.currentTarget.style.setProperty('--portrait-ry', '0deg');
    setHovered(null);
  };

  return <div className="about-portrait-gallery portrait-gallery" ref={galleryRef} aria-label="杨玄一的三面生活" data-entered={entered} data-focused={active !== null}>
    {portraits.map((photo,index) => <button key={photo.src} type="button" className="about-portrait" data-active={active === index} aria-label={`突出显示${photo.alt}`} aria-pressed={selected === index}
      onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(index); }} onPointerMove={track} onPointerLeave={release} onPointerCancel={release}
      onFocus={event => { if (event.currentTarget.matches(':focus-visible')) setHovered(index); }} onBlur={() => setHovered(null)}
      onClick={() => setSelected(current => current === index ? null : index)}>
      <span className="portrait-surface"><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async"/>
        <span className="portrait-caption" aria-hidden="true">{photo.label}<span>↗</span></span>
      </span>
    </button>)}
  </div>;
}
