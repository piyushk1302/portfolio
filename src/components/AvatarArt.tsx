export function AvatarArt() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true"><defs>
<linearGradient id="rb" x1="0" x2="1"><stop offset="0" stopColor="#ff4d4d"/><stop offset=".25" stopColor="#ffb02e"/><stop offset=".5" stopColor="#5ee7ff"/><stop offset=".75" stopColor="#2ec5ff"/><stop offset="1" stopColor="#a64dff"/></linearGradient>
<filter id="fr"><feColorMatrix values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/></filter>
<filter id="fc"><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter>
<g id="hd"><rect x="52" y="70" width="16" height="16" fill="#cf9b73"/><ellipse cx="60" cy="54" rx="24" ry="27" fill="#e2b48c"/><path d="M35 54C31 26 48 15 63 17C82 19 90 34 85 54C80 42 72 36 60 37C48 38 40 44 35 54Z" fill="#1b1b1f"/><path d="M44 28C52 22 64 21 74 26" stroke="#5ee7ff" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".7"/></g></defs>
<g className="bd"><path d="M12 120C12 94 32 84 60 84C88 84 108 94 108 120Z" fill="#12254a" stroke="#5ee7ff" strokeWidth="1.5"/><path d="M50 86L52 104M70 86L68 104" stroke="#5ee7ff" strokeWidth="2" strokeLinecap="round"/>
<use href="#hd"/><use className="gl r" href="#hd" filter="url(#fr)"/><use className="gl c" href="#hd" filter="url(#fc)"/>
<g className="eyes"><g className="eye"><circle cx="47" cy="53" r="4.5" fill="#fff"/><circle className="pp" cx="47" cy="53" r="2.2" fill="#111"/></g><g className="eye"><circle cx="73" cy="53" r="4.5" fill="#fff"/><circle className="pp" cx="73" cy="53" r="2.2" fill="#111"/></g></g>
<path className="mo" d="M51 69Q60 76 69 69" stroke="#6b3a2a" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
<g className="g"><rect x="36" y="47" width="21" height="13" rx="5" fill="url(#rb)"/><rect x="63" y="47" width="21" height="13" rx="5" fill="url(#rb)"/><path d="M57 52H63M36 51L32 49M84 51L88 49" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/><path d="M40 50H48" stroke="#fff" strokeWidth="1.4" opacity=".6" strokeLinecap="round"/></g></g>
<g transform="translate(18 30)"><path className="sp" d="M0-6L1.6-1.6L6 0L1.6 1.6L0 6L-1.6 1.6L-6 0L-1.6-1.6Z" fill="#5ee7ff"/></g>
<g transform="translate(102 38)"><path className="sp" style={{ animationDelay: ".12s" }} d="M0-6L1.6-1.6L6 0L1.6 1.6L0 6L-1.6 1.6L-6 0L-1.6-1.6Z" fill="#fff"/></g>
<g transform="translate(96 14)"><path className="sp" style={{ animationDelay: ".24s" }} d="M0-6L1.6-1.6L6 0L1.6 1.6L0 6L-1.6 1.6L-6 0L-1.6-1.6Z" fill="#5ee7ff"/></g></svg>
  );
}
