import React from 'react';

export const GaneshaIllustration: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-28 h-28 mx-auto text-[#d4af62]", 
  size = 120 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lord Ganesha Sacred Motif"
    >
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3CD" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#D4AF62" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A67C35" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3CD" />
          <stop offset="50%" stopColor="#D4AF62" />
          <stop offset="100%" stopColor="#A67C35" />
        </linearGradient>
      </defs>

      {/* Halo Background Glow */}
      <circle cx="100" cy="100" r="85" fill="url(#goldGlow)" />
      <circle cx="100" cy="100" r="80" stroke="url(#goldLinear)" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Decorative Outer Lotus Ring */}
      <circle cx="100" cy="100" r="74" stroke="#D4AF62" strokeWidth="0.75" />

      {/* Tilak / Namam on Forehead */}
      <path 
        d="M 97 45 Q 100 35 103 45 L 103 62 Q 100 65 97 62 Z" 
        fill="#FFD700" 
      />
      <circle cx="100" cy="58" r="3" fill="#B91C1C" />

      {/* Ganesha Crown (Mukut) */}
      <path 
        d="M 85 45 Q 100 20 115 45 Q 108 42 100 42 Q 92 42 85 45 Z" 
        fill="url(#goldLinear)" 
      />
      <circle cx="100" cy="22" r="3.5" fill="#FFF3CD" />

      {/* Large Ears (Pranava / Om Shape) */}
      <path 
        d="M 82 58 C 50 45 42 85 75 92" 
        stroke="url(#goldLinear)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M 118 58 C 150 45 158 85 125 92" 
        stroke="url(#goldLinear)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Face & Trunk Curved Flow (The Sacred Omkar / Vakratunda) */}
      <path 
        d="M 100 65 C 105 75 108 90 106 108 C 104 125 92 135 84 135 C 76 135 72 128 75 122 C 78 116 86 116 88 122" 
        stroke="url(#goldLinear)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Single Tusk (Ekadanta) */}
      <path d="M 88 88 L 80 92" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />

      {/* Modak (Sweet) in Trunk */}
      <ellipse cx="82" cy="122" rx="4" ry="5" fill="#FFF3CD" />

      {/* Abhaya Mudra / Blessing Hand */}
      <path 
        d="M 125 98 C 135 100 142 108 140 120 C 138 128 130 132 124 132" 
        stroke="url(#goldLinear)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <circle cx="132" cy="115" r="2" fill="#D4AF62" />

      {/* Base Lotus Petals */}
      <path 
        d="M 65 155 Q 100 145 135 155 Q 120 170 100 165 Q 80 170 65 155 Z" 
        fill="url(#goldLinear)" 
        opacity="0.85" 
      />
    </svg>
  );
};

export const ToranBorder: React.FC<{ className?: string }> = ({ className = "w-full" }) => {
  return (
    <div className={`overflow-hidden flex justify-center py-2 ${className}`}>
      <div className="flex space-x-3 text-[#d4af62] opacity-85">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <path 
                d="M 12 0 C 4 8 2 18 12 28 C 22 18 20 8 12 0 Z" 
                fill="#d4af62" 
                fillOpacity="0.45"
                stroke="#d4af62" 
                strokeWidth="1"
              />
              <circle cx="12" cy="3" r="2" fill="#fff" />
              <circle cx="12" cy="14" r="1.5" fill="#f59e0b" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CornerDecoration: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br' }> = ({ position }) => {
  const rotationClass = {
    tl: '',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90',
  }[position];

  return (
    <div className={`absolute w-12 h-12 pointer-events-none ${rotationClass}`}>
      <svg viewBox="0 0 50 50" fill="none" className="w-full h-full text-[#d4af62]">
        <path d="M 0 0 L 35 0 C 35 18 18 35 0 35 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M 2 2 L 40 2 M 2 2 L 2 40" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M 12 12 Q 25 15 28 28 Q 15 25 12 12" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
};
