export default function DeviceFrame({ src, alt }: { src: string; alt: string }) {
  return <div className="device-position"><div className="device-frame">
    <span className="device-key device-key-left" aria-hidden="true"/>
    <span className="device-key device-key-right" aria-hidden="true"/>
    <div className="device-screen"><img src={src} alt={alt} loading="lazy" decoding="async" width="900" height="1950"/></div>
    <span className="device-island" aria-hidden="true"><i/></span>
    <span className="device-home" aria-hidden="true"/>
  </div></div>;
}
