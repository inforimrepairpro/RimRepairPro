import React from 'react';

/**
 * BMW M5 E39 "Style 65" inspired forged wheel.
 * 5 main Y-split spokes (each splitting into 2 curved blades).
 * Anthracite / gunmetal palette with polished outer lip.
 * Fully symmetric — spins / tilts cleanly at any angle.
 */
const WheelSVG = ({ className = '', style = {} }) => {
  const SPOKES = 5;
  const LUGS = 20;

  // One Y-split spoke (two curved blades joined at hub). Centered, points UP.
  // Blade-Left  : from (-3,-58) curves out-up-left to rim at (-46,-178)
  // Blade-Right : mirror.
  // Inner closure across hub at base.
  const spokePath = `
    M -3 -58
    C -6 -90 -10 -118 -18 -138
    C -28 -158 -38 -170 -46 -178
    C -42 -181 -36 -181 -32 -178
    C -22 -167 -12 -150 -4 -130
    C -2 -120 -1 -110 -1 -100
    C -1 -94 -1 -88 -2 -82
    C 1 -76 -1 -76 2 -82
    C 1 -88 1 -94 1 -100
    C 1 -110 2 -120 4 -130
    C 12 -150 22 -167 32 -178
    C 36 -181 42 -181 46 -178
    C 38 -170 28 -158 18 -138
    C 10 -118 6 -90 3 -58
    C 1 -55 -1 -55 -3 -58 Z
  `;

  // Subtle highlight along the upper edge of each blade (catches light)
  const highlight = `
    M -28 -158
    C -22 -167 -12 -150 -4 -130
    C -3 -127 -5 -127 -6 -129
    C -14 -148 -22 -160 -28 -158 Z
  `;

  return (
    <svg viewBox="0 0 400 400" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Tire / outer ring */}
        <radialGradient id="tire" cx="50%" cy="50%" r="50%">
          <stop offset="92%" stopColor="#040405" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* Polished chrome lip — directional light from top */}
        <linearGradient id="lipChrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F2F5" />
          <stop offset="14%" stopColor="#D5D8DC" />
          <stop offset="32%" stopColor="#9B9FA4" />
          <stop offset="50%" stopColor="#4A4D52" />
          <stop offset="68%" stopColor="#2C2F33" />
          <stop offset="84%" stopColor="#7E8287" />
          <stop offset="100%" stopColor="#5C6065" />
        </linearGradient>

        {/* Inner barrel (deep dark) */}
        <radialGradient id="barrel" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#16181B" />
          <stop offset="70%" stopColor="#0A0B0D" />
          <stop offset="100%" stopColor="#030304" />
        </radialGradient>

        {/* Spoke face — anthracite gunmetal with directional highlight */}
        <linearGradient id="spokeFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7B7F84" />
          <stop offset="22%" stopColor="#5A5D62" />
          <stop offset="55%" stopColor="#3A3D42" />
          <stop offset="80%" stopColor="#252830" />
          <stop offset="100%" stopColor="#1A1C20" />
        </linearGradient>

        {/* Side shading (3D roundness on each blade) */}
        <linearGradient id="spokeRound" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
          <stop offset="22%" stopColor="rgba(0,0,0,0)" />
          <stop offset="78%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
        </linearGradient>

        {/* Hub / center cone */}
        <radialGradient id="hubDome" cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#9DA1A6" />
          <stop offset="40%" stopColor="#5A5D62" />
          <stop offset="80%" stopColor="#2C2F33" />
          <stop offset="100%" stopColor="#101216" />
        </radialGradient>

        {/* Center cap */}
        <radialGradient id="capFace" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#3A3D42" />
          <stop offset="70%" stopColor="#16181B" />
          <stop offset="100%" stopColor="#040405" />
        </radialGradient>

        {/* Top-left global gloss */}
        <radialGradient id="globalGloss" cx="32%" cy="26%" r="58%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0.02)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Bottom inner shadow */}
        <radialGradient id="bottomShade" cx="50%" cy="78%" r="52%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
          <stop offset="85%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        <filter id="wheelShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000" floodOpacity="0.6" />
        </filter>
      </defs>

      <g filter="url(#wheelShadow)">
        {/* Tire */}
        <circle cx="200" cy="200" r="199" fill="url(#tire)" />

        {/* Polished outer lip */}
        <circle cx="200" cy="200" r="194" fill="url(#lipChrome)" />
        <circle cx="200" cy="200" r="194" fill="none" stroke="#E0E2E5" strokeWidth="0.4" opacity="0.6" />
        <circle cx="200" cy="200" r="180" fill="#0a0a0b" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="#3A3D42" strokeWidth="0.5" />

        {/* Lug holes around perimeter */}
        {Array.from({ length: LUGS }, (_, i) => {
          const a = (i / LUGS) * Math.PI * 2 - Math.PI / 2;
          const r = 186;
          const cx = 200 + r * Math.cos(a);
          const cy = 200 + r * Math.sin(a);
          return (
            <g key={`lug-${i}`}>
              <circle cx={cx} cy={cy} r="2.4" fill="#020203" />
              <circle cx={cx - 0.4} cy={cy - 0.4} r="0.7" fill="#B0B4B9" opacity="0.5" />
            </g>
          );
        })}

        {/* Inner barrel */}
        <circle cx="200" cy="200" r="176" fill="url(#barrel)" />

        {/* Spokes — 5 Y-split */}
        <g transform="translate(200 200)">
          {Array.from({ length: SPOKES }, (_, i) => {
            const angle = (i / SPOKES) * 360;
            return (
              <g key={`spoke-${i}`} transform={`rotate(${angle})`}>
                <path d={spokePath} fill="url(#spokeFace)" />
                <path d={spokePath} fill="url(#spokeRound)" opacity="0.85" />
                <path d={highlight} fill="#9DA1A6" opacity="0.45" />
                <path d={spokePath} fill="none" stroke="#000" strokeWidth="0.5" opacity="0.7" />
              </g>
            );
          })}
        </g>

        {/* Bottom shading inside wheel */}
        <circle cx="200" cy="200" r="176" fill="url(#bottomShade)" pointerEvents="none" />

        {/* Hub dome */}
        <circle cx="200" cy="200" r="48" fill="#0F1115" />
        <circle cx="200" cy="200" r="44" fill="url(#hubDome)" />
        <circle cx="200" cy="200" r="38" fill="none" stroke="#1a1c20" strokeWidth="0.8" opacity="0.7" />

        {/* Lug nuts on hub (5, between spokes) */}
        {Array.from({ length: 5 }, (_, i) => {
          const a = ((i + 0.5) / 5) * Math.PI * 2 - Math.PI / 2;
          const r = 30;
          const cx = 200 + r * Math.cos(a);
          const cy = 200 + r * Math.sin(a);
          return (
            <g key={`nut-${i}`}>
              <circle cx={cx} cy={cy} r="3.2" fill="#040405" />
              <circle cx={cx} cy={cy} r="2.4" fill="url(#hubDome)" />
              <circle cx={cx - 0.5} cy={cy - 0.5} r="0.7" fill="#E0E2E5" opacity="0.7" />
            </g>
          );
        })}

        {/* Center cap */}
        <circle cx="200" cy="200" r="18" fill="url(#capFace)" />
        <circle cx="200" cy="200" r="18" fill="none" stroke="#5A5D62" strokeWidth="0.5" />
        <text
          x="200" y="203"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fontWeight="800"
          letterSpacing="2"
          fill="#9DA1A6"
        >
          RRP
        </text>

        {/* Top-left specular highlight */}
        <circle cx="200" cy="200" r="194" fill="url(#globalGloss)" pointerEvents="none" />
      </g>
    </svg>
  );
};

export default WheelSVG;
