'use client';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, Plus, X, Pause, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

import { projects as posts, experience } from './content';
import HeroScene from './hero-scene';
import ProjectReel from './project-reel';
import DeviceFrame from './device-frame';

export default function Home() {
  const hero = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.project-card'));
    const headings = Array.from(document.querySelectorAll<HTMLElement>('.section-heading h2, .reel-heading h2, .about-grid h2'));
    headings.forEach(heading => heading.classList.add('motion-text'));
    let frame = 0, smoothHero = 0, previousTime = 0;
    const update = (now: number) => {
      frame = 0;
      const y = window.scrollY;
      const active = !media.matches && !paused;
      const heroRange = Math.max((hero.current?.offsetHeight ?? innerHeight) - innerHeight, 1);
      const heroTarget = active ? Math.max(0, Math.min(y / heroRange, 1)) : 0;
      const dt = Math.min(now - previousTime || 16, 60); previousTime = now;
      const easing = 1 - Math.exp(-dt / 85);
      smoothHero += (heroTarget - smoothHero) * easing;
      hero.current?.style.setProperty('--scroll', String(smoothHero));
      cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const arrival = active ? Math.max(0, Math.min((innerHeight - top) / (innerHeight * .7), 1)) : 1;
        card.style.setProperty('--arrival', String(arrival));
      });
      headings.forEach(heading => {
        const top = heading.getBoundingClientRect().top;
        const read = active ? Math.max(0, Math.min((innerHeight * 1.03 - top) / (innerHeight * .48), 1)) : 1;
        heading.style.setProperty('--read', String(read));
      });
      document.documentElement.style.setProperty('--page-progress', `${y / Math.max(document.documentElement.scrollHeight - innerHeight, 1) * 100}%`);
      if (Math.abs(heroTarget - smoothHero) > .0001) frame = requestAnimationFrame(update);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    media.addEventListener('change', scroll);
    scroll();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); media.removeEventListener('change', scroll); };
  }, [paused]);
  const tilt = (event: PointerEvent<HTMLButtonElement>) => {
    if (paused || event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty('--rx', `${-y * 14}deg`);
    event.currentTarget.style.setProperty('--ry', `${x * 14}deg`);
    event.currentTarget.style.setProperty('--mx', `${(x + .5) * 100}%`);
    event.currentTarget.style.setProperty('--my', `${(y + .5) * 100}%`);
  };
  const magnet = (event: PointerEvent<HTMLElement>) => {
    if (paused || event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--magnet-x', `${((event.clientX - rect.left) / rect.width - .5) * 14}px`);
    event.currentTarget.style.setProperty('--magnet-y', `${((event.clientY - rect.top) / rect.height - .5) * 10}px`);
  };
  const releaseMagnet = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--magnet-x', '0px');
    event.currentTarget.style.setProperty('--magnet-y', '0px');
  };
  return <div className={paused ? 'site motion-paused' : 'site'}>
    <a className="skip-link" href="#journal">跳至作品</a>
    <header className="navigation">
      <a href="#" className="wordmark" aria-label="杨玄一 AURA 首页">aura<span>®</span></a>
      <nav aria-label="主导航" className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#journal" onClick={() => setMenu(false)}>作品</a><a href="#experience" onClick={() => setMenu(false)}>经历</a><a href="#moments" onClick={() => setMenu(false)}>交互</a><a href="#about" onClick={() => setMenu(false)}>关于</a>
      </nav>
      <a href="mailto:awoelexuan@gmail.com" className="nav-cta magnetic" onPointerMove={magnet} onPointerLeave={releaseMagnet}>联系我 <ArrowUpRight size={14}/></a>
      <button className="menu-toggle" aria-label={menu ? '关闭导航' : '打开导航'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Plus/>}</button>
    </header>
    <main>
      <section ref={hero} className="hero dimensional-hero" aria-labelledby="hero-title"><div className="hero-stage">
        <div className="hero-ambient" aria-hidden="true"/>
        <div className="hero-copy"><div className="eyebrow hero-eyebrow"><span/> YANG XUANYI · AI PRODUCT</div><h1 id="hero-title">让想法，成为产品。</h1><p>我是杨玄一。探索 AI 应用、Agent 工作流与有温度的数字体验。</p><a className="hero-link magnetic" href="#journal" onPointerMove={magnet} onPointerLeave={releaseMagnet}>探索我的作品 <ArrowUpRight size={18}/></a></div>
        <HeroScene paused={paused}/>
        <div className="hero-bottom"><span>AI 产品 · 设计 · 独立开发</span><a href="#journal" className="scroll-cue">SCROLL TO DISCOVER <ArrowDown size={14}/></a><button className="motion-control" onClick={() => setPaused(!paused)} aria-label={paused ? '播放动效' : '暂停动效'} aria-pressed={paused}>{paused ? <Play size={14}/> : <Pause size={14}/>}</button></div>
      </div></section>
      <section id="journal" className="journal section-wrap">
        <div className="section-heading" data-reveal><div><div className="eyebrow">SELECTED WORK / 2026</div><h2>从真实问题出发。<br/><span>让创造，有迹可循。</span></h2></div><p>产品设计、独立开发与持续运营。<br/>四个项目，四种探索。</p></div>
        <div className="post-grid project-grid">{posts.map((post, index) => <article className="post-shell" key={post.title} data-reveal style={{ transitionDelay: `${index % 2 * 90}ms` }}>
          <button className={`post-card project-card ${post.style}`} onPointerMove={tilt} onPointerLeave={event => { event.currentTarget.style.setProperty('--rx', '0deg'); event.currentTarget.style.setProperty('--ry', '0deg'); }} onClick={() => setSelected(index)} aria-label={`阅读项目：${post.title}`}>
            <div className="post-topline"><span>{post.category}</span><ArrowUpRight size={21}/></div>
            <div className="project-card-title"><span className="project-name">{post.title}</span><h3>{post.headline}</h3></div>
            <div className="project-art">{index === 0 ? <div className="product-phone-pair"><DeviceFrame src="/images/tf-rolls.webp" alt="TravelFilm 旅行胶卷界面"/><DeviceFrame src="/images/tf-detail.webp" alt="TravelFilm 行程详情界面"/></div> : <div className="browser-preview"><div className="screen-surface"><div className="screenshot-crop"><img className="project-cover" src={post.image} alt={post.alt} loading="lazy" decoding="async" width="1400" height="875"/></div></div></div>}</div>
            <div className="post-foot"><span>查看项目故事</span><span className="plus-circle"><Plus size={19}/></span></div>
          </button>
          <div className="project-result"><strong>{post.metric}</strong><span>{post.metricLabel}</span></div><p className="result-context">{post.secondary}</p>
          <div className="post-meta"><span>{post.date}</span><a href={post.url} target="_blank" rel="noreferrer">访问作品 ↗</a></div>
        </article>)}</div>
      </section>
      <section id="experience" className="experience-section">
        <div className="section-wrap experience-wrap"><div className="section-heading" data-reveal><div><div className="eyebrow">EXPERIENCE</div><h2>走进真实业务。<br/><span>把每一步，落到实处。</span></h2></div><p>需求、生产、评测、迭代、发布。<br/>关注完整的产品交付过程。</p></div>
        {experience.map((item,index) => <article key={item.company} className={`experience-item experience-${index}`} data-reveal>
          <div className="experience-banner">{index===0 && <div className="loopit-real-covers"><div className="case-glass"><img src="/images/loopit-case-01.webp" alt="案例 01：MyJJKDomain 三卡策略游戏" loading="lazy"/></div><div className="case-glass"><img src="/images/loopit-case-04.webp" alt="案例 04：Emergency Draft 三英雄策略游戏" loading="lazy"/></div><div className="case-glass"><img src="/images/loopit-case-06.webp" alt="案例 06：Spider Sense Online 节奏点击互动" loading="lazy"/></div></div>}<div className="experience-banner-shade"/><div className="company-heading"><div className="eyebrow">{item.date}</div><h3>{item.company}<span>{item.role}</span></h3><p>{item.headline}</p><span className="company-fullname">{item.fullName}</span></div>{index===1&&<div className="baidu-type" aria-hidden="true">AI<br/><span>CONTENT.</span></div>}</div>
          <div className="experience-content"><p className="experience-summary">{item.summary}</p><div className="experience-metrics">{item.metrics.map(([number,label])=><div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div><div className="experience-points">{item.points.map((point,i)=><p key={point}><span>0{i+1}</span>{point}</p>)}</div>{item.links.length>0 && <div className="work-links">{item.links.map(([label,url])=><a key={label} href={url} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={14}/></a>)}</div>}</div>
        </article>)}
        </div>
      </section>
      <ProjectReel paused={paused}/>
      <section id="about" className="about section-wrap">
        <div className="about-top" data-reveal><div className="eyebrow">THE HUMAN BEHIND THE PRODUCTS</div><span className="demo-label">杨玄一 / YANG XUANYI</span></div>
        <div className="about-grid"><div data-reveal><h2>研究问题。<br/>设计体验。<br/><span>也亲手把它做出来。</span></h2><div className="about-directions"><span>AI 应用</span><span>Agent 工作流</span><span>内容与效率产品</span></div></div><div className="about-copy" data-reveal><p>天津大学环境科学硕士在读，入选首批「科创硕士」培养项目。曾在 <strong>Loopit 与百度</strong>担任产品经理实习生，<strong>独立设计、开发和运营</strong>多个产品。</p><p className="muted">从研究中训练问题定义与证据意识，在产品实践中连接用户需求、交互设计、数据分析与上线交付。</p><div className="skill-lines"><div><span>产品与交付</span><p>用户 / 竞品研究、需求拆解、PRD、流程与高保真原型、上线验收与复盘</p></div><div><span>AI 与数据</span><p>LLM / Agent 场景设计、真实任务评测、Badcase 归因、Python / SQL、漏斗与留存分析</p></div><div><span>内容与观察</span><p>小红书个人账号 1K+、救助主题账号 4K+；选题策划、内容发布与用户反馈迭代</p></div></div></div></div>
        <div className="education-grid" data-reveal><div><div className="eyebrow">2024.09 — 2027.06</div><h3>天津大学</h3><p>环境科学 · 硕士 · 985 工程</p><strong>3.84 <small>/ 4.0 GPA</small></strong><span>综合排名 2 / 21 · 首批科创硕士</span></div><div><div className="eyebrow">2020.09 — 2024.06</div><h3>河南农业大学</h3><p>环境科学 · 学士</p><strong>1 <small>/ 201 综合排名</small></strong><span>GPA 3.92 / 5.0 · 绩点排名 1 / 201</span></div><div className="research-card"><div className="eyebrow">RESEARCH & INVENTION</div><h3>以证据，回应问题。</h3><p>第一作者 TOP 一区 SCI 综述论文 1 篇<br/>共同作者论文 3 篇</p><strong>5 <small>项专利申请 / 4 项授权</small></strong><span>第一发明人 · 主导文献调研与技术方案撰写</span></div></div>
        <a href="mailto:awoelexuan@gmail.com" className="closing-link" data-reveal><span>下一个好产品，<br/>从一次交流开始。<small>awoelexuan@gmail.com</small></span><span className="closing-arrow"><ArrowUpRight/></span></a>
      </section>
    </main>
    <footer className="footer"><a href="#" className="wordmark">aura<span>®</span></a><span>© 2026 杨玄一 · 保持好奇，持续创造。</span><a href="#">回到顶部 ↑</a></footer>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="reading-panel" showCloseButton={false}>{selected !== null && <><div className="reading-top"><span className="eyebrow">PROJECT / {posts[selected].role}</span><DialogClose className="reader-close" aria-label="关闭项目"><X size={20}/></DialogClose></div><div className={`reading-image-frame ${posts[selected].style}`}>{selected===0 ? <div className="product-phone-pair"><DeviceFrame src="/images/tf-rolls.webp" alt="TravelFilm 旅行胶卷界面"/><DeviceFrame src="/images/tf-detail.webp" alt="TravelFilm 行程详情界面"/></div> : <div className="screenshot-crop"><img className="reading-cover" src={posts[selected].image} alt={posts[selected].alt} width="1400" height="875"/></div>}</div><DialogTitle className="reading-title">{posts[selected].title}</DialogTitle><DialogDescription className="reading-description">{posts[selected].date} · {posts[selected].subtitle}</DialogDescription><div className="reading-body">{posts[selected].body.map(p => <p key={p}>{p}</p>)}</div><div className="reading-end">{posts[selected].tech}</div><a className="project-visit" href={posts[selected].url} target="_blank" rel="noreferrer">访问项目 <ArrowUpRight size={17}/></a><button className="next-post" onClick={() => setSelected((selected + 1) % posts.length)}>下一个项目：{posts[(selected + 1) % posts.length].title}<ArrowRight size={18}/></button></>}</DialogContent></Dialog>
  </div>;
}
