// import React from 'react';

// const LocationNode = ({ 
//   location, 
//   position, 
//   isHovered, 
//   isHighlighted, 
//   onMouseEnter, 
//   onMouseLeave 
// }) => {
//   return (
//     <g
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       style={{ cursor: 'pointer', transition: 'all 0.3s' }}
//     >
//       <circle
//         cx={position.x}
//         cy={position.y}
//         r={isHovered ? 18 : isHighlighted ? 14 : 10}
//         fill={isHovered ? '#f59e0b' : isHighlighted ? '#fbbf24' : '#1e40af'}
//         stroke={isHovered || isHighlighted ? '#fcd34d' : '#60a5fa'}
//         strokeWidth={isHovered ? 3 : isHighlighted ? 2 : 1}
//         filter={isHovered ? 'url(#strongGlow)' : isHighlighted ? 'url(#glow)' : 'none'}
//         style={{ transition: 'all 0.3s' }}
//       >
//         {(isHovered || isHighlighted) && (
//           <animate
//             attributeName="r"
//             values={isHovered ? '18;22;18' : '14;16;14'}
//             dur="1.5s"
//             repeatCount="indefinite"
//           />
//         )}
//       </circle>
//       <text
//         x={position.x}
//         y={position.y - 20}
//         textAnchor="middle"
//         fill={isHovered || isHighlighted ? '#ffffff' : '#cbd5e1'}
//         fontSize={isHovered ? 13 : 11}
//         fontWeight={isHovered || isHighlighted ? 'bold' : 'normal'}
//         style={{ 
//           transition: 'all 0.3s', 
//           pointerEvents: 'none', 
//           userSelect: 'none' 
//         }}
//       >
//         {location}
//       </text>
//     </g>
//   );
// };

// export default LocationNode;



import React from "react";

const LocationNode = ({ location, position, isHovered, onMouseEnter, onMouseLeave, isHighlighted }) => (
  <g transform={`translate(${position.x}, ${position.y})`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ cursor: "pointer" }}>
    <circle r={isHovered ? 18 : 14}
      fill={isHovered ? '#f59e0b' : isHighlighted ? '#fbbf24' : '#1e40af'}
      stroke={isHovered || isHighlighted ? '#fcd34d' : '#60a5fa'}
      strokeWidth={isHovered ? 3 : 1}
      filter="url(#glow)"/>
    <text textAnchor="middle" y={-24} fontSize={isHovered ? 11 : 10} 
      fontWeight={isHovered || isHighlighted ? 'bold' : 'normal'} 
      fill={isHovered || isHighlighted ? '#ffffff' : '#cbd5e1'}
      style={{  transition: 'all 0.3s', pointerEvents: "none" }}>
      {location.name}
    </text>
  </g>
);

export default LocationNode;
