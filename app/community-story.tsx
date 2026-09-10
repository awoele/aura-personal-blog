import { ArrowUpRight } from 'lucide-react';

const accountUrl = 'https://xhslink.cn/o/w2IAcv2ht6';

export default function CommunityStory() {
  return <section className="community-story" aria-labelledby="community-title" data-reveal>
    <div className="community-copy">
      <div className="eyebrow">CONTENT WITH CARE / 内容运营</div>
      <h3 id="community-title">让善意，<br/><span>被更多人看见。</span></h3>
      <p>独立运营校园流浪动物救助账号，记录救助日常、发布领养信息，让每一个小生命的故事被看见。</p>
      <div className="community-audience"><strong>4,179</strong><div><span>小红书关注者</span><small>截至 2026.09.10</small></div></div>
      <a className="community-account" href={accountUrl} target="_blank" rel="noreferrer"><img src="/images/xhs-avatar.webp" alt="" width="44" height="44" loading="lazy"/><span><strong>TJU在逃小流浪🐾</strong><small>查看小红书主页</small></span><ArrowUpRight size={20}/></a>
    </div>
    <div className="community-notes" aria-label="账号真实笔记封面">
      <a className="community-note" href={accountUrl} target="_blank" rel="noreferrer" aria-label="前往小红书主页，查看领养记录"><img src="/images/xhs-adoption.webp" alt="笔记封面：那些年，被我们送出去的小猫们" width="540" height="720" loading="lazy" decoding="async"/><span><small>ADOPTION / 领养记录</small><strong>那些年，<br/>被我们送出去的小猫们。</strong><ArrowUpRight size={19}/></span></a>
      <a className="community-note" href={accountUrl} target="_blank" rel="noreferrer" aria-label="前往小红书主页，查看小猫日常"><img src="/images/xhs-cat.webp" alt="笔记封面：为啥没人想领养我们小猫啊，一只等待领养的小猫" width="540" height="720" loading="lazy" decoding="async"/><span><small>DAILY / 小猫日常</small><strong>等待一个家，<br/>也记录每一天。</strong><ArrowUpRight size={19}/></span></a>
    </div>
  </section>;
}
