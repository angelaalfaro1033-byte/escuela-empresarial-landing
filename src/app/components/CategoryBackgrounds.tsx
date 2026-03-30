interface BackgroundProps {
  isActive: boolean;
}

export function BellezaBackground({ isActive }: BackgroundProps) {
  return (
    <div className={`absolute inset-0 -mx-6 -my-8 rounded-3xl overflow-hidden transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-80'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100/60" />
      
      {/* SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="belleza-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Makeup Brush */}
            <g transform="translate(30, 30)" opacity="0.5">
              <line x1="5" y1="5" x2="25" y2="25" stroke="#FF69B4" strokeWidth="3" strokeLinecap="round"/>
              <ellipse cx="27" cy="27" rx="9" ry="13" fill="#FFB6C1" transform="rotate(45 27 27)"/>
            </g>
            
            {/* Lipstick */}
            <g transform="translate(140, 40)" opacity="0.6">
              <rect x="0" y="10" width="14" height="28" rx="2" fill="#FF69B4"/>
              <rect x="2" y="0" width="10" height="12" rx="4" fill="#FFB6C1"/>
            </g>
            
            {/* Nail Polish */}
            <g transform="translate(80, 120)" opacity="0.5">
              <rect x="0" y="8" width="18" height="24" rx="3" fill="#FFC0CB"/>
              <rect x="4" y="0" width="10" height="10" rx="2" fill="#FF69B4"/>
              <line x1="9" y1="2" x2="9" y2="12" stroke="#FFB6C1" strokeWidth="3"/>
            </g>
            
            {/* Powder Compact */}
            <g transform="translate(150, 140)" opacity="0.55">
              <circle cx="12" cy="12" r="13" fill="none" stroke="#FFB6C1" strokeWidth="2.5"/>
              <circle cx="12" cy="12" r="9" fill="#FFC0CB" opacity="0.4"/>
            </g>
            
            {/* Sparkles */}
            <circle cx="60" cy="60" r="3" fill="#FF69B4" opacity="0.7"/>
            <circle cx="170" cy="90" r="2.5" fill="#FFB6C1" opacity="0.6"/>
            <circle cx="40" cy="160" r="3.5" fill="#FFC0CB" opacity="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#belleza-pattern)"/>
      </svg>
      
      {/* Active Border */}
      {isActive && (
        <div className="absolute inset-0 border-2 border-pink-300/50 rounded-3xl shadow-xl shadow-pink-200/40" />
      )}
    </div>
  );
}

export function GastronomiaBackground({ isActive }: BackgroundProps) {
  return (
    <div className={`absolute inset-0 -mx-6 -my-8 rounded-3xl overflow-hidden transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-80'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100/50" />
      
      {/* SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gastronomia-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Chef Hat */}
            <g transform="translate(30, 30)" opacity="0.6">
              <ellipse cx="15" cy="20" rx="16" ry="9" fill="#A0522D"/>
              <path d="M 5 20 Q 5 10, 15 8 Q 25 10, 25 20 Z" fill="#D2691E"/>
            </g>
            
            {/* Fork */}
            <g transform="translate(140, 35)" opacity="0.55">
              <line x1="6" y1="0" x2="6" y2="32" stroke="#8B4513" strokeWidth="3"/>
              <line x1="2" y1="0" x2="2" y2="14" stroke="#8B4513" strokeWidth="3"/>
              <line x1="10" y1="0" x2="10" y2="14" stroke="#8B4513" strokeWidth="3"/>
            </g>
            
            {/* Spoon */}
            <g transform="translate(80, 120)" opacity="0.5">
              <ellipse cx="9" cy="9" rx="7" ry="9" fill="#A0522D"/>
              <rect x="6" y="14" width="6" height="22" fill="#A0522D"/>
            </g>
            
            {/* Plate */}
            <g transform="translate(150, 130)" opacity="0.6">
              <circle cx="15" cy="15" r="16" fill="none" stroke="#D2691E" strokeWidth="2.5"/>
              <circle cx="15" cy="15" r="11" fill="none" stroke="#D2691E" strokeWidth="2"/>
            </g>
            
            {/* Coffee Cup */}
            <g transform="translate(45, 140)" opacity="0.55">
              <path d="M 0 5 L 0 15 Q 0 20, 5 20 L 15 20 Q 20 20, 20 15 L 20 5 Z" fill="#A0522D"/>
              <path d="M 20 8 Q 26 8, 26 12 Q 26 16, 20 16" stroke="#8B4513" fill="none" strokeWidth="2.5"/>
            </g>
            
            {/* Decorative dots */}
            <circle cx="70" cy="50" r="3" fill="#A0522D" opacity="0.7"/>
            <circle cx="160" cy="80" r="2.5" fill="#D2691E" opacity="0.6"/>
            <circle cx="30" cy="170" r="3.5" fill="#8B4513" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gastronomia-pattern)"/>
      </svg>
      
      {/* Active Border */}
      {isActive && (
        <div className="absolute inset-0 border-2 border-orange-300/50 rounded-3xl shadow-xl shadow-orange-200/40" />
      )}
    </div>
  );
}

export function AutopartesBackground({ isActive }: BackgroundProps) {
  return (
    <div className={`absolute inset-0 -mx-6 -my-8 rounded-3xl overflow-hidden transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-80'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-slate-100 to-zinc-100/60" />
      
      {/* SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="autopartes-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Wrench */}
            <g transform="translate(30, 30)" opacity="0.6">
              <rect x="11" y="0" width="8" height="26" fill="#808080" rx="1"/>
              <circle cx="15" cy="29" r="7" fill="none" stroke="#808080" strokeWidth="3.5"/>
            </g>
            
            {/* Gear */}
            <g transform="translate(140, 35)" opacity="0.6">
              <circle cx="15" cy="15" r="13" fill="none" stroke="#999999" strokeWidth="2.5"/>
              <circle cx="15" cy="15" r="7" fill="#B0B0B0"/>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 15 + Math.cos(rad) * 13;
                const y = 15 + Math.sin(rad) * 13;
                return <rect key={i} x={x - 2.5} y={y - 5} width="5" height="10" fill="#808080" transform={`rotate(${angle} ${x} ${y})`}/>;
              })}
            </g>
            
            {/* Tire */}
            <g transform="translate(75, 115)" opacity="0.55">
              <circle cx="20" cy="20" r="19" fill="none" stroke="#696969" strokeWidth="3.5"/>
              <circle cx="20" cy="20" r="13" fill="none" stroke="#808080" strokeWidth="2.5"/>
              <circle cx="20" cy="20" r="7" fill="#999999"/>
              {[0, 72, 144, 216, 288].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 20 + Math.cos(rad) * 8;
                const y1 = 20 + Math.sin(rad) * 8;
                const x2 = 20 + Math.cos(rad) * 13;
                const y2 = 20 + Math.sin(rad) * 13;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#696969" strokeWidth="2.5"/>;
              })}
            </g>
            
            {/* Car Silhouette */}
            <g transform="translate(145, 140)" opacity="0.5">
              <path d="M 5 15 L 10 8 L 20 8 L 25 15 L 25 20 L 0 20 L 0 15 Z" fill="#B0B0B0"/>
              <circle cx="7" cy="20" r="3.5" fill="#696969"/>
              <circle cx="18" cy="20" r="3.5" fill="#696969"/>
            </g>
            
            {/* Bolts */}
            <circle cx="60" cy="60" r="4" fill="none" stroke="#808080" strokeWidth="2" opacity="0.6"/>
            <circle cx="170" cy="90" r="3.5" fill="none" stroke="#999999" strokeWidth="2" opacity="0.5"/>
            <circle cx="40" cy="165" r="4.5" fill="none" stroke="#696969" strokeWidth="2" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#autopartes-pattern)"/>
      </svg>
      
      {/* Active Border */}
      {isActive && (
        <div className="absolute inset-0 border-2 border-gray-400/50 rounded-3xl shadow-xl shadow-gray-300/40" />
      )}
    </div>
  );
}

export function DisenoBackground({ isActive }: BackgroundProps) {
  return (
    <div className={`absolute inset-0 -mx-6 -my-8 rounded-3xl overflow-hidden transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-80'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-violet-100/70 to-indigo-100/50" />
      
      {/* SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diseno-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Paintbrush */}
            <g transform="translate(30, 30)" opacity="0.6">
              <rect x="11" y="0" width="8" height="16" fill="#9370DB" rx="1"/>
              <path d="M 9 16 Q 15 27, 21 16 Z" fill="#BA55D3"/>
            </g>
            
            {/* Scissors */}
            <g transform="translate(140, 35)" opacity="0.65">
              <circle cx="6" cy="6" r="6" fill="none" stroke="#9370DB" strokeWidth="2.5"/>
              <circle cx="6" cy="20" r="6" fill="none" stroke="#9370DB" strokeWidth="2.5"/>
              <line x1="6" y1="6" x2="22" y2="13" stroke="#9370DB" strokeWidth="2.5"/>
              <line x1="6" y1="20" x2="22" y2="13" stroke="#9370DB" strokeWidth="2.5"/>
            </g>
            
            {/* Palette */}
            <g transform="translate(75, 120)" opacity="0.6">
              <ellipse cx="20" cy="15" rx="19" ry="13" fill="#BA55D3"/>
              <circle cx="15" cy="12" r="3.5" fill="#E6E6FA"/>
              <circle cx="25" cy="12" r="3.5" fill="#DDA0DD"/>
              <circle cx="20" cy="18" r="3.5" fill="#DA70D6"/>
              <circle cx="12" cy="8" r="4.5" fill="white" opacity="0.4"/>
            </g>
            
            {/* Paper/Origami */}
            <g transform="translate(150, 135)" opacity="0.55">
              <path d="M 0 0 L 22 0 L 22 27 L 0 27 Z" fill="#E6E6FA"/>
              <path d="M 22 0 L 16 6 L 22 12 Z" fill="#9370DB"/>
              <line x1="5" y1="9" x2="16" y2="9" stroke="#9370DB" strokeWidth="2" opacity="0.6"/>
              <line x1="5" y1="15" x2="16" y2="15" stroke="#9370DB" strokeWidth="2" opacity="0.6"/>
            </g>
            
            {/* Pencil */}
            <g transform="translate(40, 140)" opacity="0.6">
              <rect x="7" y="0" width="6" height="24" fill="#9370DB"/>
              <path d="M 7 24 L 10 31 L 13 24 Z" fill="#6A5ACD"/>
              <rect x="7" y="0" width="6" height="5" fill="#FFD700"/>
            </g>
            
            {/* Creative dots and stars */}
            <path d="M 65 55 L 67 60 L 72 60 L 68 63 L 70 68 L 65 65 L 60 68 L 62 63 L 58 60 L 63 60 Z" fill="#9370DB" opacity="0.6"/>
            <circle cx="170" cy="85" r="3" fill="#BA55D3" opacity="0.7"/>
            <circle cx="35" cy="170" r="3.5" fill="#DDA0DD" opacity="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diseno-pattern)"/>
      </svg>
      
      {/* Active Border */}
      {isActive && (
        <div className="absolute inset-0 border-2 border-purple-300/50 rounded-3xl shadow-xl shadow-purple-200/40" />
      )}
    </div>
  );
}