import React, { useId } from 'react';

// Compact Instagram-style camera mark with a gradient background.
export default function InstagramLogo({ className = 'h-6 w-6' }) {
  const gradientId = useId().replace(/:/g, '');
  return (
    <svg className={`inline-block shrink-0 ${className}`} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FED576" />
          <stop offset=".32" stopColor="#F47133" />
          <stop offset=".66" stopColor="#BC3081" />
          <stop offset="1" stopColor="#4C63D2" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${gradientId})`} />
      <rect x="10" y="10" width="28" height="28" rx="8" stroke="white" strokeWidth="3.3" />
      <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="3.3" />
      <circle cx="33" cy="15" r="2.1" fill="white" />
    </svg>
  );
}
