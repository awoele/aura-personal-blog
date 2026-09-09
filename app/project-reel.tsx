import type { RefObject } from 'react';

const moments = [
  { label:'去远方', eyebrow:'OUT INTO THE OPEN', title:<>走远一点。<br/>世界会大一点。</>, description:'山脉、湖泊、旷野。让视线离开屏幕，让好奇心带路。', image:'/images/mountains.webp', alt:'雪山与湖面的倒影', detail:'/images/seaside.webp', detailAlt:'海边的风景', style:'moment-horizon' },
  { label:'看日常', eyebrow:'THE BEAUTY IN BETWEEN', title:<>有些美好，<br/>不必有目的。</>, description:'风吹过花田，光落在身边。值得记录的，往往就是这些片刻。', image:'/images/moment-sunflowers.webp', alt:'花田中的旅行影像', detail:'/images/lakeside.webp', detailAlt:'湖畔停靠的木舟', style:'moment-everyday' },
  { label:'留住片刻', eyebrow:'LIFE, IN LITTLE FRAMES', title:<>把日子，<br/>过成值得回看的样子。</>, description:'去散步，去看风景，也为平常的一天留下一张照片。', image:'/images/moment-grassland.webp', alt:'草原旅行中的红帽人物影像', detail:'/images/moment-sheep.webp', detailAlt:'草原与羊群的旅行影像', style:'moment-memory' },
];

export default function ProjectReel({ sectionRef, railRef, index, select }: {
  sectionRef: RefObject<HTMLElement | null>; railRef: RefObject<HTMLDivElement | null>; index: number; select: (index: number) => void;
}) {
  return <section id="moments" className="project-reel" ref={sectionRef} aria-label="项目之外的生活影像">
    <div className="reel-stage">
      <div className="reel-heading"><div><div className="eyebrow">BEYOND THE WORK</div><h2>好想法，<span>不止一面。</span></h2></div><div className="reel-controls" aria-label="选择生活画面">{moments.map((moment,i)=><button key={moment.label} onClick={()=>select(i)} aria-pressed={index===i}>{moment.label}</button>)}</div></div>
      <div className="reel-viewport"><div className="reel-track" ref={railRef}>
        {moments.map(moment=><article key={moment.label} className={`reel-panel life-panel ${moment.style}`}>
          <div className="reel-copy"><span className="eyebrow">{moment.eyebrow}</span><h3>{moment.title}</h3><p>{moment.description}</p><span className="life-caption">生活，也是一种灵感。</span></div>
          <div className="life-art"><figure className="life-main"><img src={moment.image} alt={moment.alt} loading="lazy"/></figure><figure className="life-detail"><img src={moment.detail} alt={moment.detailAlt} loading="lazy"/></figure></div>
        </article>)}
      </div></div>
      <div className="reel-progress"><span>SCROLL TO EXPLORE</span><div><i/></div><span>0{index+1} / 03</span></div>
    </div>
  </section>;
}
