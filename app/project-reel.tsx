import type { RefObject } from 'react';
import { ArrowUpRight } from 'lucide-react';

const moments = [
  { label:'模板动机', eyebrow:'UNDERSTAND THE WHY', title:<>每一次创造，<br/>都有一个起点。</>, description:'从用户动机出发，将创作意愿与消费价值放在同一张地图里观察。', image:'/images/loopit-work-0.webp', alt:'Loopit 上线模板动机地图', url:'https://awoele.github.io/loopit-template-motivation-map/', style:'work-motivation' },
  { label:'模板看板', eyebrow:'FOLLOW THE WHOLE JOURNEY', title:<>从一次点击，<br/>看到完整的旅程。</>, description:'串联模板使用、创作、作品反馈与留存，让每一步转化都有迹可循。', image:'/images/loopit-work-1.webp', alt:'Loopit 模板功能效果看板', url:'https://awoele.github.io/loopit-template-showcase/', style:'work-dashboard' },
  { label:'代表性 Case', eyebrow:'MADE TO BE PLAYED', title:<>把好想法，<br/>交给你来玩。</>, description:'六个互动原型，两组世界模型探索。让策略、节奏与创意，变成可体验的作品。', image:'/images/loopit-work-2.webp', alt:'代表性案例网站的内容 Case 页面', url:'https://awoele.github.io/yxy-loopit-cases/', style:'work-cases' },
  { label:'复盘文档', eyebrow:'LEARN FROM EVERY LAUNCH', title:<>每次上线，<br/>都值得再看一眼。</>, description:'回到真实任务和用户表现，拆解问题、识别原因，把观察转化为下一轮改进。', image:'/images/loopit-work-3.webp', alt:'Beat It Loop 上线质量复盘', url:'https://awoele.github.io/beat-it-loop-launch-review-report/', style:'work-review' },
  { label:'评测说明', eyebrow:'MAKE QUALITY VISIBLE', title:<>好不好，<br/>让证据来说。</>, description:'把评测方法、问题归因与改进方向放在一起，让质量判断更清晰。', image:'/images/loopit-work-4.webp', alt:'Power 评测说明与看板', url:'https://awoele.github.io/power-evaluation-dashboard/', style:'work-evaluation' },
  { label:'Skill 工作台', eyebrow:'TURN CRAFT INTO A WORKFLOW', title:<>从一次创造，<br/>到一套工作流。</>, description:'连接素材、任务和产物，把内容制作中的重复步骤沉淀为可复用的工具。', image:'/images/loopit-work-5.webp', alt:'Material Skill 工作台', url:'https://awoele.github.io/material-skill-console/', style:'work-skills' },
];
const detailViews = [
  { image:'/images/loopit-work-0-table.webp', alt:'模板动机地图中的完整分类明细表' },
  { image:'/images/loopit-work-1-detail.webp', alt:'模板看板的作品反馈数据页面' },
  { image:'/images/loopit-work-2-world.webp', alt:'代表性案例网站的世界模型 Case 页面' },
  { image:'/images/loopit-work-3-detail.webp', alt:'上线复盘中的五个维度综合判断与链路分析' },
  { image:'/images/loopit-work-4-detail.webp', alt:'Power 测评中的 Codex 本地报告章节' },
  { image:'/images/loopit-work-5-lab.webp', alt:'Loopit Lab 平台 Power 管理页面' },
];

export default function ProjectReel({ sectionRef, railRef, index, select }: {
  sectionRef: RefObject<HTMLElement | null>; railRef: RefObject<HTMLDivElement | null>; index: number; select: (index: number) => void;
}) {
  return <section id="moments" className="project-reel loopit-work-reel" ref={sectionRef} aria-label="Loopit 项目与完整工作展示">
    <div className="reel-stage">
      <div className="reel-heading"><div><div className="eyebrow">THE MANY SIDES OF LOOPIT</div><h2>好想法，<span>不止一面。</span></h2></div><div className="reel-controls" aria-label="选择 Loopit 工作展示">{moments.map((moment,i)=><button key={moment.label} onClick={()=>select(i)} aria-pressed={index===i}>{moment.label}</button>)}</div></div>
      <div className="reel-viewport"><div className="reel-track" ref={railRef}>
        {moments.map((moment,i)=><article key={moment.label} className={`reel-panel loopit-work-panel ${moment.style}`}>
          <div className="reel-copy"><span className="work-index">LOOPIT / 0{i+1}</span><span className="eyebrow">{moment.eyebrow}</span><h3>{moment.title}</h3><p>{moment.description}</p><a className="work-visit" href={moment.url} target="_blank" rel="noreferrer">{i===2?'探索全部案例':'查看'+moment.label}<span><ArrowUpRight size={19}/></span></a></div>
          <div className="work-art"><a className="work-screens" href={moment.url} target="_blank" rel="noreferrer" aria-label={`打开${moment.label}`}><figure className="work-window work-window-main"><img src={moment.image} alt={moment.alt} loading="lazy" width="1400" height="875"/></figure><figure className="work-window work-window-detail"><img src={detailViews[i].image} alt={detailViews[i].alt} loading="lazy" width="1400" height="875"/></figure></a></div>
        </article>)}
      </div></div>
      <div className="reel-progress"><span>SCROLL TO EXPLORE</span><div><i/></div><span>0{index+1} / 0{moments.length}</span></div>
    </div>
  </section>;
}
