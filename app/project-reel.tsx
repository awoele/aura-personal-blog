import type { RefObject } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectReel({ sectionRef, railRef, index, select }: {
  sectionRef: RefObject<HTMLElement | null>; railRef: RefObject<HTMLDivElement | null>; index: number; select: (index: number) => void;
}) {
  return <section id="moments" className="project-reel" ref={sectionRef} aria-label="项目交互展示">
    <div className="reel-stage">
      <div className="reel-heading"><div><div className="eyebrow">MADE TO BE EXPERIENCED</div><h2>好想法，<span>不止一面。</span></h2></div><div className="reel-controls" aria-label="选择项目画面">{['互动案例','模板看板','旅行胶卷'].map((name,i)=><button key={name} onClick={()=>select(i)} aria-pressed={index===i}>{name}</button>)}</div></div>
      <div className="reel-viewport"><div className="reel-track" ref={railRef}>
        <article className="reel-panel reel-cases"><div className="reel-copy"><span className="eyebrow">LOOPIT / INTERACTIVE CASES</span><h3>选择。试玩。<br/>创造你的版本。</h3><p>从模板入口，到卡牌策略与预算选择。<br/>把内容策略转化为可体验的交互。</p><a href="https://awoele.github.io/yxy-loopit-cases/" target="_blank" rel="noreferrer" onFocus={()=>select(0)}>体验真实案例 <ArrowUpRight size={17}/></a></div><div className="reel-case-stack"><img src="/images/loopit-template.webp" alt="Loopit 模板真实界面" loading="lazy"/><img src="/images/loopit-katseye.webp" alt="KATSEYE 卡牌真实界面" loading="lazy"/><img src="/images/loopit-emergency.webp" alt="Emergency Draft 真实界面" loading="lazy"/></div></article>
        <article className="reel-panel reel-dashboard"><div className="reel-copy"><span className="eyebrow">LOOPIT / PRODUCT ANALYTICS</span><h3>每一次创造，<br/>都有数据回应。</h3><p>从模板使用、创作到作品反馈，<br/>用看板连接业务过程与产品迭代。</p><a href="https://awoele.github.io/loopit-template-showcase/" target="_blank" rel="noreferrer" onFocus={()=>select(1)}>查看完整看板 <ArrowUpRight size={17}/></a></div><div className="reel-browser"><div className="screen-surface"><img src="/images/dashboard-interface.webp" alt="Loopit 模板功能效果看板线上截图" loading="lazy"/></div></div></article>
        <article className="reel-panel reel-travel"><div className="reel-copy"><span className="eyebrow">TRAVELFILM / MOBILE EXPERIENCE</span><h3>足迹有了形状。<br/>回忆有了归处。</h3><p>旅行胶卷、足迹与行程详情，<br/>让整理之后的照片，继续被回顾。</p><a href="https://awoele.github.io/TravelFilm/" target="_blank" rel="noreferrer" onFocus={()=>select(2)}>探索 TravelFilm <ArrowUpRight size={17}/></a></div><div className="reel-phone-stack"><img src="/images/tf-footprints.webp" alt="TravelFilm 足迹界面" loading="lazy"/><img src="/images/tf-rolls.webp" alt="TravelFilm 胶卷界面" loading="lazy"/><img src="/images/tf-detail.webp" alt="TravelFilm 详情界面" loading="lazy"/></div></article>
      </div></div>
      <div className="reel-progress"><span>SCROLL TO EXPLORE</span><div><i/></div><span>0{index+1} / 03</span></div>
    </div>
  </section>;
}
