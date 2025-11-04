import React from 'react';

const SVGFilters = () => {
  return (
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <radialGradient id="centerGrad" x="-50%" y="-50%" width="200%" height="200%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#1e40af" stopOpacity="1"/>
      </radialGradient>
    </defs>
  );
};

export default SVGFilters;
