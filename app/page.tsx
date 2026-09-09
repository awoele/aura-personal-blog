'use client';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, Plus, X, Pause, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const posts = [
  { category: '设计随想', date: '2026.09.08', time: '5 分钟', title: '好的设计，\n让复杂悄然消失。', subtitle: '从一颗按钮开始，重新理解「恰到好处」。', style: 'design', tag: 'LESS, BUT BETTER.', body: ['每一次删减，都应该让真正重要的东西更清楚。最近我开始留意那些用起来毫不费力的产品：它们不急着解释自己，而是在需要的时候，恰好出现。', '一个按钮的距离，一行文字的停顿，一次反馈的时机，看起来都是小事。但我们对一个产品的信任，往往就藏在这些小事里。', '我试着把一个复杂的页面重新拆开：先写下用户此刻最想完成的事，再问每一个元素，为什么你必须在这里？删掉一半之后，页面安静了，目标却更鲜明了。', '克制并不意味着少做。它意味着在每一次选择背后，都花了足够多的心思。最好的设计，或许是你完成了想做的事，才发现它一直在那里。'] },
  { category: '数字实验', date: '2026.09.02', time: '4 分钟', title: '给想法，\n一个发生的机会。', subtitle: '在灵感与现实之间，先做一个小小的原型。', style: 'experiment', tag: 'MAKE SOMETHING.', body: ['一个想法留在脑海里时，总是完整而漂亮的。直到第一次把它做出来，才会发现真正值得解决的问题。', '所以我给自己留了一块实验的空间。不追求完美的开场，也不急着给它一个宏大的名字，只是让一个微小的交互真实地发生。', '我喜欢原型带来的诚实。它会告诉你，一个动效是不是多余，一句话是不是难懂，一个看似自然的路径，是否真的有人愿意走下去。', '下一次有灵感的时候，先留下一个能被体验的小片段。很多有趣的事情，都是这样开始的。'] },
  { category: '生活切片', date: '2026.08.24', time: '3 分钟', title: '偶尔离线，\n世界反而更清晰。', subtitle: '把注意力，交还给此刻。', style: 'life', tag: 'A LITTLE MORE PRESENT.', body: ['那天下午，我没有带耳机出门。街道依然是熟悉的街道，但有些平时被忽略的声音，忽然变得具体起来。', '咖啡杯落在桌面的轻响，树叶被风吹过的声音，红灯变绿之前，人群短暂的安静。原来生活并不缺少细节，只是我的注意力常常不在这里。', '记录不一定要变成产出。有时，一张没有发出去的照片，一段只写给自己的文字，就已经足够。', '给日常留一点空白。下一次抬头的时候，也许会遇到一个意料之外的好瞬间。'] },
];
export default function Home() {
  const hero = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const progress = Math.min(y / Math.max(window.innerHeight, 1), 1);
      hero.current?.style.setProperty('--scroll', String(media.matches || paused ? 0 : progress));
      document.documentElement.style.setProperty('--page-progress', `${y / Math.max(document.documentElement.scrollHeight - innerHeight, 1) * 100}%`);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    update();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, [paused]);
  const tilt = (event: PointerEvent<HTMLButtonElement>) => {
    if (paused || event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty('--rx', `${-y * 7}deg`);
    event.currentTarget.style.setProperty('--ry', `${x * 7}deg`);
    event.currentTarget.style.setProperty('--mx', `${(x + .5) * 100}%`);
    event.currentTarget.style.setProperty('--my', `${(y + .5) * 100}%`);
  };
  return <div className={paused ? 'site motion-paused' : 'site'}>
    <a className="skip-link" href="#journal">跳至文章</a>
    <header className="navigation">
      <a href="#" className="wordmark" aria-label="AURA 首页">aura<span>®</span></a>
      <nav aria-label="主导航" className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#journal" onClick={() => setMenu(false)}>文字</a><a href="#philosophy" onClick={() => setMenu(false)}>灵感</a><a href="#about" onClick={() => setMenu(false)}>关于</a>
      </nav>
      <a href="#journal" className="nav-cta">开始探索 <ArrowUpRight size={14}/></a>
      <button className="menu-toggle" aria-label={menu ? '关闭导航' : '打开导航'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Plus/>}</button>
    </header>
    <main>
      <section ref={hero} className="hero" aria-labelledby="hero-title">
        <div className="hero-ambient" aria-hidden="true"/>
        <div className="hero-copy"><div className="eyebrow hero-eyebrow"><span/> A PERSONAL UNIVERSE</div><h1 id="hero-title">想法，自有引力。</h1><p>关于设计、创造，以及生活里值得停留的瞬间。</p><a className="hero-link" href="#journal">进入我的宇宙 <ArrowUpRight size={18}/></a></div>
        <div className="hero-visual" aria-hidden="true"><img src="/hero.png" alt="" fetchPriority="high" width="1672" height="941"/></div>
        <div className="hero-bottom"><span>独立思考 · 持续创造</span><a href="#journal" className="scroll-cue">SCROLL TO DISCOVER <ArrowDown size={14}/></a><button className="motion-control" onClick={() => setPaused(!paused)} aria-label={paused ? '播放动效' : '暂停动效'} aria-pressed={paused}>{paused ? <Play size={14}/> : <Pause size={14}/>}</button></div>
      </section>
      <section id="journal" className="journal section-wrap">
        <div className="section-heading" data-reveal><div><div className="eyebrow">THE JOURNAL</div><h2>一些思考。<br/><span>一些新的可能。</span></h2></div><p>记录正在发生的灵感，<br/>也收藏那些慢慢长成的答案。</p></div>
        <div className="post-grid">{posts.map((post, index) => <article className="post-shell" key={post.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
          <button className={`post-card ${post.style}`} onPointerMove={tilt} onPointerLeave={event => { event.currentTarget.style.setProperty('--rx', '0deg'); event.currentTarget.style.setProperty('--ry', '0deg'); }} onClick={() => setSelected(index)} aria-label={`阅读：${post.title.replace('\n', '')}`}>
            <div className="post-topline"><span>{post.category}</span><ArrowUpRight size={21}/></div><h3>{post.title}</h3>
            <div className="card-art" aria-hidden="true">{index === 0 ? <span className="less-word">Less<span>is more.</span></span> : index === 1 ? <span className="experiment-word">what<br/><i>if.</i><span className="experiment-dot"/></span> : <span className="life-word">慢<span>一点。</span></span>}</div>
            <div className="post-foot"><span>{post.tag}</span><span className="plus-circle"><Plus size={19}/></span></div>
          </button>
          <div className="post-meta"><span>{post.date} <span className="meta-dot">·</span> {post.time}</span><span>随笔 / 0{index + 1}</span></div><p className="post-subtitle">{post.subtitle}</p>
        </article>)}</div>
      </section>
      <section id="philosophy" className="philosophy"><div className="philosophy-inner" data-reveal><div className="eyebrow">STAY CURIOUS. KEEP MAKING.</div><h2>不止于看见。<br/>更想，<span>创造一点不同。</span></h2><p>好奇心是起点，行动让它有了形状。<br/>在理性与感性之间，寻找属于自己的表达。</p><a href="#about" className="text-link">认识屏幕背后的我 <ArrowRight size={19}/></a></div><div className="philosophy-index" aria-hidden="true">THINK. MAKE. REPEAT.</div></section>
      <section id="about" className="about section-wrap">
        <div className="about-top" data-reveal><div className="eyebrow">THE HUMAN BEHIND THE PIXELS</div><span className="demo-label">虚构身份 · 展示样稿</span></div>
        <div className="about-grid"><div data-reveal><h2>你好，我是 Alex。<br/><span>永远保持，<br/>一点好奇。</span></h2></div><div className="about-copy" data-reveal><div className="avatar-monogram" aria-hidden="true">a.</div><p>一个喜欢设计、技术和日常观察的创造者。<br/>习惯把复杂的事情想清楚，<br/>也愿意为一个微小的细节反复打磨。</p><p className="muted">这里是我的数字花园。<br/>放一些想法，做一些实验，慢慢生长。</p><div className="interest-tags"><span>设计</span><span>科技</span><span>摄影</span><span>生活</span></div></div></div>
        <a href="#journal" className="closing-link" data-reveal><span>下一个想法，<br/>已经在路上。</span><span className="closing-arrow"><ArrowUpRight/></span></a>
      </section>
    </main>
    <footer className="footer"><a href="#" className="wordmark">aura<span>®</span></a><span>© 2026 AURA · 示例个人博客</span><a href="#">回到顶部 ↑</a></footer>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="reading-panel" showCloseButton={false}>{selected !== null && <><div className="reading-top"><span className="eyebrow">AURA / {posts[selected].category}</span><DialogClose className="reader-close" aria-label="关闭文章"><X size={20}/></DialogClose></div><DialogTitle className="reading-title">{posts[selected].title}</DialogTitle><DialogDescription className="reading-description">{posts[selected].date} · {posts[selected].time}阅读 · 示例文章</DialogDescription><div className="reading-body">{posts[selected].body.map(p => <p key={p}>{p}</p>)}</div><div className="reading-end">保持好奇，下篇见。</div><button className="next-post" onClick={() => setSelected((selected + 1) % posts.length)}>下一篇：{posts[(selected + 1) % posts.length].category}<ArrowRight size={18}/></button></>}</DialogContent></Dialog>
  </div>;
}
