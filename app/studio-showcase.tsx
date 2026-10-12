'use client';
import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function StudioShowcase() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [sound, setSound] = useState(false);
  const toggleSound = () => {
    const doc = frame.current?.contentDocument;
    const audio = doc?.querySelector<HTMLAudioElement>('audio');
    if (!audio) return;
    audio.muted = sound;
    if (!sound) {
      const toggle = doc?.getElementById('sound-toggle');
      if (toggle?.getAttribute('aria-pressed') !== 'true') toggle?.click();
      void audio.play().catch(() => { audio.muted = true; setSound(false); });
    }
    setSound(!sound);
  };
  return <div className="studio-preview">
    <iframe
      ref={frame}
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
          style.textContent = '.export-frame .transport{display:none!important}';
          doc.head.appendChild(style);
          const audio = doc.querySelector<HTMLAudioElement>('audio');
          if (audio) audio.muted = true;
          setSound(false);
          doc.documentElement.dataset.fit = 'cover';
          const frameWindow = event.currentTarget.contentWindow as (Window & { resize?: () => void }) | null;
          frameWindow?.resize?.();
        } catch { /* A standalone local preview has a different origin. */ }
      }}
    />
    <button className="studio-sound-toggle" onClick={toggleSound} aria-pressed={sound} aria-label={sound ? '关闭背景音乐' : '开启背景音乐'}>
      {sound ? <Volume2 size={16}/> : <VolumeX size={16}/>}<span>{sound ? '声音已开' : '开启声音'}</span>
    </button>
  </div>;
}
