import React from 'react';

// Perfectly symmetric forged-style alloy wheel (10 spokes, chrome/silver palette).
// Renders crisp at any size and rotates flawlessly.
const WheelSVG = ({ className = '', style = {} }) => {
  const SPOKE_COUNT = 10;
  const LUG_COUNT = 20;

  return (
    <svg viewBox="0 0 400 400" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Outer rim chrome gradient (polished lip) */}
        <radialGradient id="lipChrome" cx="50%" cy="50%" r="50%">
          <stop offset="82%" stopColor="#1a1a1d" />
          <stop offset="86%" stopColor="#4a4d52" />
          <stop offset="90%" stopColor="#E8EAED" />
          <stop offset="94%" stopColor="#B0B4B9" />
          <stop offset="97%" stopColor="#6E7278" />
          <stop offset="100%" stopColor="#1a1a1d" />
        </radialGradient>

        {/* Central barrel */}
        <radialGradient id="barrel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a2d31" />
          <stop offset="65%" stopColor="#1a1c1f" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </radialGradient>

        {/* Spoke face gradient (silver with depth) */}
        <linearGradient id="spokeFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8EAED" />
          <stop offset="30%" stopColor="#B0B4B9" />
          <stop offset="60%" stopColor="#6E7278" />
          <stop offset="100%" stopColor="#2a2d31" />
        </linearGradient>

        {/* Spoke highlight */}
        <linearGradient id="spokeHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Hub */}
        <radialGradient id="hub" cx="45%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#F0F2F5" />
          <stop offset="40%" stopColor="#9DA0A5" />
          <stop offset="100%" stopColor="#2a2d31" />
        </radialGradient>

        {/* Gloss overlay */}
        <radialGradient id="gloss" cx="35%" cy="30%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* Outer tire shadow */}
      <circle cx="200" cy="200" r="198" fill="#050505" />

      {/* Polished lip */}
      <circle cx="200" cy="200" r="192" fill="url(#lipChrome)" />

      {/* Inner dish */}
      <circle cx="200" cy="200" r="168" fill="url(#barrel)" />

      {/* Lug holes around perimeter */}
      {Array.from({ length: LUG_COUNT }, (_, i) => {
        const a = (i / LUG_COUNT) * Math.PI * 2;
        const r = 176;
        const cx = 200 + r * Math.cos(a);
        const cy = 200 + r * Math.sin(a);
        return (
          <g key={`lug-${i}`}>
            <circle cx={cx} cy={cy} r="3.4" fill="#0a0a0b" />
            <circle cx={cx - 0.6} cy={cy - 0.6} r="1.1" fill="#C5C8CC" opacity="0.8" />
          </g>
        );
      })}

      {/* Spokes */}
      {Array.from({ length: SPOKE_COUNT }, (_, i) => {
        const angle = (i / SPOKE_COUNT) * 360;
        return (
          <g key={`spoke-${i}`} transform={`rotate(${angle} 200 200)`}>
            {/* Main spoke body (tapered) */}
            <path
              d="M 200 60 Q 208 130 210 190 L 200 198 L 190 190 Q 192 130 200 60 Z"
              fill="url(#spokeFace)"
            />
            {/* Inner highlight strip */}
            <path
              d="M 200 68 Q 204 130 205 188 L 200 193 L 195 188 Q 196 130 200 68 Z"
              fill="url(#spokeHighlight)"
              opacity="0.7"
            />
            {/* Thin outer edge line */}
            <path
              d="M 200 60 Q 208 130 210 190"
              fill="none"
              stroke="#2a2d31"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </g>
        );
      })}

      {/* Inner concave ring */}
      <circle cx="200" cy="200" r="56" fill="#1a1c1f" />
      <circle cx="200" cy="200" r="52" fill="url(#hub)" />

      {/* Center cap */}
      <circle cx="200" cy="200" r="30" fill="#0a0a0b" />
      <circle cx="200" cy="200" r="28" fill="#1a1c1f" stroke="#C5C8CC" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="24" fill="url(#hub)" opacity="0.35" />
      <text
        x="200" y="204"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="700"
        letterSpacing="1"
        fill="#E8EAED"
      >
        RRP
      </text>

      {/* Top-left gloss reflection */}
      <circle cx="200" cy="200" r="192" fill="url(#gloss)" pointerEvents="none" />
    </svg>
  );
};

export default WheelSVG;
