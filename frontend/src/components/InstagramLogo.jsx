import React from 'react';

// Instagram's recognizable camera glyph with its signature gradient.
export default function InstagramLogo({ className = 'h-6 w-6' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-[27%] bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[18%] shadow-sm ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-white">
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="18" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    </span>
  );
}
