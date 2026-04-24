import React from 'react';

/**
 * Premium forged-style alloy wheel — 5 Y-split spokes (HRE / Vossen inspired).
 * Fully symmetrical SVG so it rotates flawlessly at any angle.
 */
const WheelSVG = ({ className = '', style = {} }) => {
  const SPOKES = 5;

  // Single Y-split spoke path. Center (0,0) is at wheel center, spoke points UP (-Y).
  // Consists of a thick stem from the hub that splits into two curved arms reaching the lip.
  const spokePath = `
    M -14 -62
    C -18 -95 -22 -118 -24 -132
    C -28 -150 -36 -168 -46 -178
    C -42 -182 -34 -184 -28 -180
    C -20 -172 -12 -160 -6 -146
    C -2 -136 0 -132 0 -130
    C 0 -132 2 -136 6 -146
    C 12 -160 20 -172 28 -180
    C 34 -184 42 -182 46 -178
    C 36 -168 28 -150 24 -132
    C 22 -118 18 -95 14 -62
    C 10 -58 -10 -58 -14 -62 Z
  `;

  // Highlight strip (one side of each spoke) to create a polished edge.
  const highlightPath = `
    M -12 -68
    C -16 -100 -22 -130 -30 -160
    C -28 -162 -26 -162 -24 -160
    C -18 -130 -14 -100 -10 -68
    C -10 -66 -12 -66 -12 -68 Z
  `;

  return (
    <svg viewBox="0 0 400 400" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Outer tire / shadow ring */}
        <radialGradient id="tire" cx="50%" cy="50%" r="50%">
          <stop offset="92%" stopColor="#050505" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* Polished outer lip — chrome with 3D highlight */}
        <linearGradient id="lipChrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="18%" stopColor="#D6D8DB" />
          <stop offset="35%" stopColor="#8C9095" />
          <stop offset="55%" stopColor="#4A4D52" />
          <stop offset="72%" stopColor="#7B7F84" />
          <stop offset="88%" stopColor="#CDD0D3" />
          <stop offset="100%" stopColor="#6A6E73" />
        </linearGradient>

        {/* Inner barrel / dish — deep dark */}
        <radialGradient id="barrel" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1E2024" />
          <stop offset="60%" stopColor="#0E0F11" />
          <stop offset="100%" stopColor="#050506" />
        </radialGradient>

        {/* Spoke face — brushed silver with subtle chrome fall-off */}
        <linearGradient id="spokeFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8DBDE" />
          <stop offset="20%" stopColor="#B8BCC1" />
          <stop offset="55%" stopColor="#6E7278" />
          <stop offset="85%" stopColor="#4A4D52" />
          <stop offset="100%" stopColor="#2A2D31" />
        </linearGradient>

        {/* Inner shading to give spoke volume */}
        <linearGradient id="spokeShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0.45)" />
          <stop offset="30%" stopColor="rgba(0,0,0,0)" />
          <stop offset="70%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
        </linearGradient>

        {/* Hub — polished dome */}
        <radialGradient id="hubDome" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F0F2F5" />
          <stop offset="35%" stopColor="#AEB2B7" />
          <stop offset="80%" stopColor="#4A4D52" />
          <stop offset="100%" stopColor="#1E2024" />
        </radialGradient>

        {/* Center cap */}
        <radialGradient id="capGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#2A2D31" />
          <stop offset="70%" stopColor="#131517" />
          <stop offset="100%" stopColor="#050506" />
        </radialGradient>

        {/* Soft gloss overlay (top-left) */}
        <radialGradient id="gloss" cx="35%" cy="28%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Bottom soft shadow inside wheel */}
        <radialGradient id="underShade" cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
          <stop offset="80%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      {/* Tire shadow base */}
      <circle cx="200" cy="200" r="199" fill="url(#tire)" />

      {/* Outer polished lip (thin ring) */}
      <circle cx="200" cy="200" r="194" fill="url(#lipChrome)" />
      <circle cx="200" cy="200" r="180" fill="#0a0a0b" />

      {/* Inner barrel / dish */}
      <circle cx="200" cy="200" r="176" fill="url(#barrel)" />

      {/* Inner lip highlight ring */}
      <circle cx="200" cy="200" r="176" fill="none" stroke="#6E7278" strokeWidth="0.8" opacity="0.4" />

      {/* Spokes */}
      <g transform="translate(200 200)">
        {Array.from({ length: SPOKES }, (_, i) => {
          const angle = (i / SPOKES) * 360;
          return (
            <g key={`spoke-${i}`} transform={`rotate(${angle})`}>
              {/* Spoke body */}
              <path d={spokePath} fill="url(#spokeFace)" />
              {/* Edge shading for depth */}
              <path d={spokePath} fill="url(#spokeShade)" opacity="0.8" />
              {/* Polished highlight strip */}
              <path d={highlightPath} fill="#E8EAED" opacity="0.55" />
              {/* Thin dark outline */}
              <path d={spokePath} fill="none" stroke="#1A1C1F" strokeWidth="0.6" opacity="0.6" />
            </g>
          );
        })}
      </g>

      {/* Under-shadow to give the face depth */}
      <circle cx="200" cy="200" r="176" fill="url(#underShade)" />

      {/* Bolt/drill holes around the barrel (between spokes) */}
      {Array.from({ length: 10 }, (_, i) => {
        const a = ((i + 0.5) / 10) * Math.PI * 2 - Math.PI / 2;
        const r = 160;
        const cx = 200 + r * Math.cos(a);
        const cy = 200 + r * Math.sin(a);
        return (
          <g key={`bolt-${i}`}>
            <circle cx={cx} cy={cy} r="3.2" fill="#050506" />
            <circle cx={cx - 0.4} cy={cy - 0.4} r="1.1" fill="#B8BCC1" opacity="0.55" />
          </g>
        );
      })}

      {/* Hub dome */}
      <circle cx="200" cy="200" r="58" fill="#1A1C1F" />
      <circle cx="200" cy="200" r="55" fill="url(#hubDome)" />

      {/* Lug nuts (5, one per spoke) */}
      {Array.from({ length: 5 }, (_, i) => {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const r = 42;
        const cx = 200 + r * Math.cos(a);
        const cy = 200 + r * Math.sin(a);
        return (
          <g key={`lug-${i}`}>
            <circle cx={cx} cy={cy} r="6" fill="#0A0B0D" />
            <circle cx={cx} cy={cy} r="4.5" fill="url(#hubDome)" />
            <circle cx={cx - 0.8} cy={cy - 0.8} r="1.4" fill="#F3F4F6" opacity="0.75" />
          </g>
        );
      })}

      {/* Center cap */}
      <circle cx="200" cy="200" r="22" fill="url(#capGrad)" />
      <circle cx="200" cy="200" r="22" fill="none" stroke="#8C9095" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="18" fill="none" stroke="#4A4D52" strokeWidth="0.4" />
      <text
        x="200" y="204"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="2"
        fill="#D6D8DB"
      >
        RRP
      </text>

      {/* Top-left gloss reflection (adds realism) */}
      <circle cx="200" cy="200" r="194" fill="url(#gloss)" pointerEvents="none" />
    </svg>
  );
};

export default WheelSVG;
