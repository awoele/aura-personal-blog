'use client';

export default function StudioShowcase() {
  return <div className="studio-preview">
    <iframe
      src="https://awoele.github.io/PhoneTwin-Studio/showcase/?autoplay=1&loop=1&clean=1"
      title="TravelFilm Showcase：带背景音乐的 3D 产品演示"
      allow="autoplay; fullscreen"
      loading="lazy"
      onLoad={event => {
        // Both published projects share an origin. Keep the showcase's own
        // audio button so its user gesture and audio state stay together.
        try {
          const doc = event.currentTarget.contentDocument;
          if (!doc || doc.getElementById('portfolio-controls')) return;
          const style = doc.createElement('style');
          style.id = 'portfolio-controls';
          style.textContent = '.export-frame .transport{display:flex!important;position:fixed;right:18px;top:18px;z-index:50;margin:0;padding:0}.export-frame .transport>*:not(#sound-toggle){display:none!important}#sound-toggle{background:#111827d9;color:#fff;border:1px solid #ffffff60;border-radius:24px;padding:10px 16px;font-size:12px;cursor:pointer}#sound-toggle:focus-visible{outline:3px solid #b9d3fa;outline-offset:3px}';
          doc.head.appendChild(style);
          doc.documentElement.dataset.fit = 'cover';
          event.currentTarget.contentWindow?.dispatchEvent(new Event('resize'));
        } catch { /* A standalone local preview has a different origin. */ }
      }}
    />
  </div>;
}
