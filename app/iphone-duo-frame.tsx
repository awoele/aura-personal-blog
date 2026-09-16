export default function IphoneDuoFrame({ src, alt }: { src: string; alt: string }) {
  return <div className="iphone-duo-position">
    <div className="iphone-duo-frame">
      <span className="duo-side-key duo-side-key-left" aria-hidden="true" />
      <span className="duo-side-key duo-side-key-right" aria-hidden="true" />
      <div className="iphone-duo-screen"><img src={src} alt={alt} loading="lazy" decoding="async" width="1400" height="875" /></div>
      <span className="duo-island duo-island-left" aria-hidden="true"><i /></span>
      <span className="duo-island duo-island-right" aria-hidden="true"><i /></span>
      <span className="duo-seam" aria-hidden="true" />
    </div>
  </div>;
}
