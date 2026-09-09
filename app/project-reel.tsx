import type { RefObject } from 'react';
import { ArrowUpRight } from 'lucide-react';
import DeviceFrame from './device-frame';

export default function ProjectReel({ sectionRef, railRef, index, select }: {
  sectionRef: RefObject<HTMLElement | null>; railRef: RefObject<HTMLDivElement | null>; index: number; select: (index: number) => void;
}) {
  return <section id="moments" className="project-reel" ref={sectionRef} aria-label="项目交互展示">
    <div className="reel-stage">
      <div className="reel-heading"><div><div className="eyebrow">MADE TO BE EXPERIENCED</div><h2>好想法，<span>不止一面。</span></h2></div><div className="reel-controls" aria-label="选择项目画面">{['互动实验','光影之间','城市回忆'].map((name,i)=><button key={name} onClick={()=>select(i)} aria-pressed={index===i}>{name}</button>)}</div></div>
      <div className="reel-viewport"><div className="reel-track" ref={railRef}>
        <article className="reel-panel reel-play"><div className="reel-copy"><span className="eyebrow">LOOPIT / INTERACTIVE EXPERIMENTS</span><h3>想象力，<br/>即刻开场。</h3><p>把一个灵感，变成一次可以参与的体验。<br/>从城市穿梭开始，探索交互的可能。</p><a href="https://awoele.github.io/yxy-loopit-cases/" target="_blank" rel="noreferrer" onFocus={()=>select(0)}>进入互动案例 <ArrowUpRight size={17}/></a></div><div className="reel-game-art"><div className="game-orbit" aria-hidden="true"/><div className="game-screen"><img src="/images/loopit-web-swing.webp" alt="Loopit 蜘蛛侠城市穿梭互动案例实机画面" loading="lazy" width="480" height="720"/></div><span className="art-caption">FROM AN IDEA. INTO PLAY.</span></div></article>
        <article className="reel-panel reel-photo"><div className="reel-copy"><span className="eyebrow">MYSTIC ONE AURA / VISUAL JOURNAL</span><h3>留一点时间，<br/>给光和远方。</h3><p>山脉、湖水，与光停留的瞬间。<br/>在影像里，发现另一种观看方式。</p><a href="https://awoelexuan.com/" target="_blank" rel="noreferrer" onFocus={()=>select(1)}>走进影像世界 <ArrowUpRight size={17}/></a></div><div className="reel-photo-art"><figure className="landscape-main"><img src="/images/mountains.webp" alt="MYSTIC ONE AURA 图集中的雪山与湖面倒影" loading="lazy" width="1400" height="934"/><figcaption>LIGHT. STILLNESS. AURA.</figcaption></figure><figure className="landscape-detail"><img src="/images/lakeside.webp" alt="MYSTIC ONE AURA 图集中的湖畔木舟" loading="lazy" width="1400" height="934"/></figure></div></article>
        <article className="reel-panel reel-travel"><div className="reel-copy"><span className="eyebrow">TRAVELFILM / CITY MEMORIES</span><h3>去过的地方，<br/>还可以再回味。</h3><p>从城市里的片刻，到旅途中的风景。<br/>让照片重新连成一段回忆。</p><a href="https://awoele.github.io/TravelFilm/" target="_blank" rel="noreferrer" onFocus={()=>select(2)}>探索 TravelFilm <ArrowUpRight size={17}/></a></div><div className="reel-phone-stack"><DeviceFrame src="/images/tf-city-memories.webp" alt="TravelFilm 城市回忆照片叠卡界面"/><DeviceFrame src="/images/tf-photo-viewer.webp" alt="TravelFilm 草原照片浏览界面"/></div></article>
      </div></div>
      <div className="reel-progress"><span>SCROLL TO EXPLORE</span><div><i/></div><span>0{index+1} / 03</span></div>
    </div>
  </section>;
}
