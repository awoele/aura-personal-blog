import { ArrowUpRight } from 'lucide-react';

const accountUrl = 'https://xhslink.cn/o/w2IAcv2ht6';
const cats = [
  { name:'公主', image:'cat-gongzhu.webp', position:'55% 23%', zoom:1.25 },
  { name:'豆苗', image:'cat-doumiao.webp', position:'60% 28%', zoom:1.45 },
  { name:'玄二', image:'cat-xuaner.webp', position:'55% 44%', zoom:1.3 },
  { name:'豆花', image:'cat-douhua.webp', position:'56% 38%', zoom:1.1 },
  { name:'警长', image:'cat-jingzhang.webp', position:'64% 12%', zoom:1.3 },
];
const notes: { image: string; title: string; category: string; url?: string; likes?: string }[] = [
  { image: 'xhs-favorite.webp', title: '听说ee 们都很喜欢我～', category: 'POPULAR / 高赞笔记', url: 'https://xhslink.cn/o/4a0uQf5jek8', likes: '6.4万' },
  { image: 'xhs-pretty.webp', title: '好漂亮的小猫', category: 'PORTRAIT / 小猫肖像', url: 'https://xhslink.cn/o/CMAxF66d8X', likes: '3,464' },
  { image: 'xhs-trill.webp', title: '点击听小宝弹舌', category: 'VOICE / 小猫声音', url: 'https://xhslink.cn/o/9zt9DvFBEIb', likes: '2,511' },
  { image: 'xhs-adoption.webp', title: '那些年，被我们送出去的小猫们。', category: 'ADOPTION / 领养记录', url: 'https://xhslink.cn/o/9cCZpzKl5Df', likes: '184' },
];

export default function CommunityStory() {
  return <section className="community-story" aria-labelledby="community-title" data-reveal>
    <div className="community-copy">
      <div className="eyebrow">CONTENT WITH CARE / 内容运营</div>
      <h3 id="community-title">让善意，<br/><span>被更多人看见。</span></h3>
      <p>独立运营校园流浪动物救助账号，记录救助日常、发布领养信息，让每一个小生命的故事被看见。</p>
      <div className="community-audience"><strong>4,179</strong><div><span>小红书关注者</span><small>截至 2026.09.10</small></div></div>
      <a className="community-account" href={accountUrl} target="_blank" rel="noreferrer"><img src="./images/xhs-avatar.webp" alt="" width="44" height="44" loading="lazy"/><span><strong>TJU在逃小流浪🐾</strong><small>查看小红书主页</small></span><ArrowUpRight size={20}/></a>
      <div className="community-cat-gallery" aria-label="小猫相册">
        <div className="community-cat-portraits">{cats.map(cat=><figure className="community-cat" key={cat.name}><span className="community-cat-avatar"><img src={`./images/${cat.image}`} alt={`${cat.name}的照片`} width="640" height="960" loading="lazy" decoding="async" style={{objectPosition:cat.position,transform:`scale(${cat.zoom})`}}/></span><figcaption>{cat.name}</figcaption></figure>)}</div>
      </div>
    </div>
    <div className={`community-notes${notes.length > 2 ? ' community-notes-expanded' : ''}`} aria-label="账号真实笔记封面">
      {notes.map(note => <a key={note.image} className="community-note" href={note.url || accountUrl} target="_blank" rel="noreferrer" aria-label={`${note.url ? '查看笔记' : '前往小红书主页'}：${note.title}`}><img src={`./images/${note.image}`} alt={`笔记封面：${note.title}`} width="1080" height="1440" loading="lazy" decoding="async"/><span><small>{note.category}</small><strong>{note.title}</strong>{note.likes !== undefined && <em className="community-note-likes">♡ {note.likes} 赞</em>}<ArrowUpRight size={19}/></span></a>)}
      <p className="community-notes-date">点赞数据来自笔记公开页面 · 2026.09.10</p>
    </div>
  </section>;
}
