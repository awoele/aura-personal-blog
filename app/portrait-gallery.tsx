'use client';
/* eslint-disable jsx-a11y/prefer-tag-over-role -- This image listbox needs rich, animated options that a native select cannot display. */

import { useEffect, useRef, useState, type RefObject, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

const portraits = [
  { src:'/images/about-portrait-formal.webp', alt:'杨玄一的正装肖像', label:'工作', width:900, height:1200 },
  { src:'/images/about-portrait-camera.webp', alt:'杨玄一携相机出行的生活照', label:'摄影', width:900, height:1200 },
  { src:'/images/about-portrait.webp', alt:'杨玄一在湖边的旅行照片', label:'旅行', width:1100, height:1467 },
];

export default function PortraitGallery({ galleryRef, paused }: { galleryRef:RefObject<HTMLDivElement | null>; paused:boolean }) {
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const drag = useRef({ id:-1, x:0, y:0, moved:false });
  const frame = useRef(0);
  const playing = autoplay && !paused && !reduced;
  const choose = (index:number) => { setAutoplay(false); setActive((index+portraits.length)%portraits.length); };

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReduced(media.matches);
    const syncVisibility = () => setPageVisible(!document.hidden);
    syncMotion(); syncVisibility();
    media.addEventListener('change',syncMotion);
    document.addEventListener('visibilitychange',syncVisibility);
    const observer = new IntersectionObserver(entries => {
      const inView = entries.some(entry => entry.isIntersecting);
      setVisible(inView); if(inView) setEntered(true);
    }, { threshold:.35 });
    if(galleryRef.current) observer.observe(galleryRef.current);
    return () => { observer.disconnect(); media.removeEventListener('change',syncMotion); document.removeEventListener('visibilitychange',syncVisibility); cancelAnimationFrame(frame.current); };
  }, [galleryRef]);

  useEffect(() => {
    if(!playing || !visible || !pageVisible || interacting) return;
    const timer = window.setInterval(() => setActive(index => (index+1)%portraits.length),4200);
    return () => window.clearInterval(timer);
  }, [playing,visible,pageVisible,interacting]);

  const start = (event:PointerEvent<HTMLDivElement>) => {
    if(event.button !== 0) return;
    drag.current={ id:event.pointerId,x:event.clientX,y:event.clientY,moved:false };
  };
  const move = (event:PointerEvent<HTMLDivElement>) => {
    const state=drag.current;
    if(state.id===event.pointerId) {
      const x=event.clientX-state.x,y=event.clientY-state.y;
      if(!state.moved && Math.abs(y)>Math.abs(x) && Math.abs(y)>10) { state.id=-1; return; }
      if(Math.abs(x)>10) { state.moved=true; event.currentTarget.setPointerCapture(event.pointerId); }
    }
    if(event.pointerType!=='mouse' || paused || reduced) return;
    const el=event.currentTarget,rect=el.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;
    cancelAnimationFrame(frame.current);
    frame.current=requestAnimationFrame(()=>{el.style.setProperty('--deck-rx',`${-y*7}deg`);el.style.setProperty('--deck-ry',`${x*10}deg`);});
  };
  const finish = (event:PointerEvent<HTMLDivElement>) => {
    const state=drag.current;
    if(state.id!==event.pointerId) return;
    state.id=-1;
    if(event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if(state.moved && Math.abs(event.clientX-state.x)>32) choose(active+(event.clientX<state.x?1:-1));
  };
  const reset = (event:PointerEvent<HTMLDivElement>) => {
    cancelAnimationFrame(frame.current);
    event.currentTarget.style.setProperty('--deck-rx','0deg');event.currentTarget.style.setProperty('--deck-ry','0deg');
  };

  return <div className="about-portrait-gallery portrait-deck" ref={galleryRef} data-entered={entered} data-running={playing && visible && pageVisible && !interacting} aria-label="杨玄一的三面生活"
    onFocusCapture={event=>setInteracting((event.target as HTMLElement).classList.contains('portrait-deck-card'))} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node)) setInteracting(false);}}>
    <div className="portrait-deck-stage" role="listbox" tabIndex={0} aria-label="个人照片，左右滑动切换" aria-orientation="horizontal" aria-activedescendant={`portrait-option-${active}`} onPointerDown={start} onPointerMove={move} onPointerUp={finish} onPointerCancel={()=>{drag.current.id=-1;drag.current.moved=false;}}
      onPointerEnter={event=>{if(event.pointerType==='mouse') setInteracting(true);}} onPointerLeave={event=>{reset(event);setInteracting(false);}}
      onDragStart={event=>event.preventDefault()} onClickCapture={event=>{if(drag.current.moved){event.preventDefault();event.stopPropagation();drag.current.moved=false;}}}
      onKeyDown={event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();choose(active+(event.key==='ArrowRight'?1:-1));}}}>
      {portraits.map((photo,index)=>{const position=(index-active+3)%3;return <button key={photo.src} id={`portrait-option-${index}`} className="portrait-deck-card" type="button" role="option" tabIndex={-1} data-position={position} aria-selected={active===index} aria-label={`查看${photo.label}照片`} onClick={()=>choose(index)}>
        <span className="portrait-deck-surface"><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async"/><span className="portrait-deck-glint" aria-hidden="true"/></span>
      </button>;})}
    </div>
    <div className="portrait-deck-controls"><div className="portrait-deck-caption"><span key={active}>{portraits[active].label}</span><small>0{active+1} / 03</small></div><div className="portrait-deck-actions">
      <button type="button" aria-label="上一张个人照片" onClick={()=>choose(active-1)}><ArrowLeft size={15}/></button>
      <button type="button" aria-label={playing?'暂停照片轮播':'播放照片轮播'} disabled={paused||reduced} aria-pressed={playing} onClick={()=>setAutoplay(value=>!value)}>{playing?<Pause size={13}/>:<Play size={13}/>}</button>
      <button type="button" aria-label="下一张个人照片" onClick={()=>choose(active+1)}><ArrowRight size={15}/></button>
    </div></div>
  </div>;
}
