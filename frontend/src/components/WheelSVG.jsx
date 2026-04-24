import React from 'react';

/**
 * HRE P101-style forged wheel — 10 slim tapered spokes, polished chrome lip,
 * 20 lug holes around perimeter, deep barrel. Fully symmetric for clean rotation.
 */
const WheelSVG = ({ className = '', style = {} }) => {
  const SPOKES = 10;
  const LUGS = 20;

  // Slim tapered spoke — wider at hub, narrowing to rim. Subtle curve.
  // Pointing straight up from center (0,0). Wheel radius ~190.
  const spokePath = `
    M -8 -56
    C -9 -90 -10 -130 -9 -162
    C -9 -170 -5 -174 -1 -174
    L 1 -174
    C 5 -174 9 -170 9 -162
    C 10 -130 9 -90 8 -56
    C 4 -52 -4 -52 -8 -56 Z
  `;

  // Thin bright highlight on one side of spoke
  const spokeHighlight = `
    M -6 -62
    C -7 -94 -8 -130 -7 -160
    C -7 -165 -5 -167 -4 -167
    C -3 -167 -3 -165 -3 -160
    C -4 -130 -4 -94 -4 -62
    C -4 -60 -6 -60 -6 -62 Z
  `;

  return (
    <svg viewBox="0 0 400 400" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Polished chrome lip — directional light from top */}
        <linearGradient id="lipBand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F6F8" />
          <stop offset="12%" stopColor="#E2E4E7" />
          <stop offset="30%" stopColor="#9FA3A8" />
          <stop offset="50%" stopColor="#4E5158" />
          <stop offset="68%" stopColor="#2A2D32" />
          <stop offset="82%" stopColor="#6A6E73" />
          <stop offset="94%" stopColor="#C8CCD0" />
          <stop offset="100%" stopColor="#7C8085" />
        </linearGradient>

        {/* Inner barrel */}
        <radialGradient id="barrel" cx="50%" cy="52%" r="55%">
          <stop offset="0%" stopColor="#1a1c20" />
          <stop offset="70%" stopColor="#0b0c0e" />
          <stop offset="100%" stopColor="#030304" />
        </radialGradient>

        {/* Spoke face — directional silver with top light */}
        <linearGradient id="spokeFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4E6E9" />
          <stop offset="30%" stopColor="#C2C6CA" />
          <stop offset="60%" stopColor="#8C9095" />
          <stop offset="85%" stopColor="#5A5D62" />
          <stop offset="100%" stopColor="#3A3D42" />
        </linearGradient>

        {/* Spoke side shading (left/right dark edges for roundness) */}
        <linearGradient id="spokeRound" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
          <stop offset="25%" stopColor="rgba(0,0,0,0)" />
          <stop offset="75%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
        </linearGradient>

        {/* Center hub dome */}
        <radialGradient id="hubDome" cx="42%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#E8EAED" />
          <stop offset="40%" stopColor="#9DA1A6" />
          <stop offset="85%" stopColor="#3F4247" />
          <stop offset="100%" stopColor="#1A1C20" />
        </radialGradient>

        {/* Center cap dome (darker, with HRE-style small emblem) */}
        <radialGradient id="capFace" cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#2A2D32" />
          <stop offset="70%" stopColor="#141518" />
          <stop offset="100%" stopColor="#050506" />
        </radialGradient>

        {/* Top-left soft gloss across whole wheel */}
        <radialGradient id="globalGloss" cx="32%" cy="26%" r="58%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0.02)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Bottom inner shadow */}
        <radialGradient id="bottomShade" cx="50%" cy="78%" r="52%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
          <stop offset="85%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        {/* Drop shadow for entire wheel (used as filter) */}
        <filter id="wheelShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>

      <g filter="url(#wheelShadow)">
        {/* Subtle outer tire line */}
        <circle cx="200" cy="200" r="198" fill="#050506" />

        {/* Polished chrome lip ring */}
        <circle cx="200" cy="200" r="194" fill="url(#lipBand)" />
        {/* Lip outer rim highlight (thin bright line on top, shadow on bottom) */}
        <circle cx="200" cy="200" r="194" fill="none" stroke="#E8EAED" strokeWidth="0.5" opacity="0.6" />
        {/* Inner lip edge */}
        <circle cx="200" cy="200" r="180" fill="#0a0a0b" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="#4E5158" strokeWidth="0.4" />

        {/* Lug holes around perimeter (20 small dark holes on the lip) */}
        {Array.from({ length: LUGS }, (_, i) => {
          const a = (i / LUGS) * Math.PI * 2 - Math.PI / 2;
          const r = 186;
          const cx = 200 + r * Math.cos(a);
          const cy = 200 + r * Math.sin(a);
          return (
            <g key={`lug-${i}`}>
              <circle cx={cx} cy={cy} r="2.6" fill="#050506" />
              <circle cx={cx - 0.4} cy={cy - 0.4} r="0.8" fill="#C5C8CC" opacity="0.55" />
            </g>
          );
        })}

        {/* Dish / barrel (inside the lip) */}
        <circle cx="200" cy="200" r="176" fill="url(#barrel)" />

        {/* Spokes — 10 slim tapered spokes */}
        <g transform="translate(200 200)">
          {Array.from({ length: SPOKES }, (_, i) => {
            const angle = (i / SPOKES) * 360;
            return (
              <g key={`spoke-${i}`} transform={`rotate(${angle})`}>
                <path d={spokePath} fill="url(#spokeFace)" />
                <path d={spokePath} fill="url(#spokeRound)" opacity="0.9" />
                <path d={spokeHighlight} fill="#F0F2F5" opacity="0.55" />
                {/* Thin dark outline to separate from barrel */}
                <path d={spokePath} fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.7" />
              </g>
            );
          })}
        </g>

        {/* Bottom shade inside wheel for depth */}
        <circle cx="200" cy="200" r="180" fill="url(#bottomShade)" pointerEvents="none" />

        {/* Inner hub dome (where spokes converge) */}
        <circle cx="200" cy="200" r="52" fill="#0F1012" />
        <circle cx="200" cy="200" r="48" fill="url(#hubDome)" />
        {/* Hub inner circular groove */}
        <circle cx="200" cy="200" r="38" fill="none" stroke="#1a1c20" strokeWidth="1" opacity="0.7" />

        {/* Center cap (smaller, HRE-style) */}
        <circle cx="200" cy="200" r="22" fill="url(#capFace)" />
        <circle cx="200" cy="200" r="22" fill="none" stroke="#7C8085" strokeWidth="0.6" />
        <circle cx="200" cy="200" r="18" fill="none" stroke="#3A3D42" strokeWidth="0.4" />
        {/* RRP emblem */}
        <text
          x="200" y="204"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fontWeight="800"
          letterSpacing="2"
          fill="#D6D8DB"
        >
          RRP
        </text>

        {/* Top-left global gloss — adds realism */}
        <circle cx="200" cy="200" r="194" fill="url(#globalGloss)" pointerEvents="none" />
      </g>
    </svg>
  );
};

export default WheelSVG;
