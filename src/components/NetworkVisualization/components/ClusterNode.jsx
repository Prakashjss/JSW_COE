// import React from 'react';

// const ClusterNode = ({ 
//   cluster, 
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
//         r={isHovered ? 20 : isHighlighted ? 16 : 12}
//         fill={isHovered ? '#10b981' : isHighlighted ? '#34d399' : '#1e3a5f'}
//         stroke={isHovered || isHighlighted ? '#6ee7b7' : '#3b82f6'}
//         strokeWidth={isHovered ? 3 : isHighlighted ? 2 : 1}
//         filter={isHovered ? 'url(#strongGlow)' : isHighlighted ? 'url(#glow)' : 'none'}
//         style={{ transition: 'all 0.3s' }}
//       >
//         {(isHovered || isHighlighted) && (
//           <animate
//             attributeName="r"
//             values={isHovered ? '20;24;20' : '16;18;16'}
//             dur="1.5s"
//             repeatCount="indefinite"
//           />
//         )}
//       </circle>
//       <text
//         x={position.x}
//         y={position.y - 25}
//         textAnchor="middle"
//         fill={isHovered || isHighlighted ? '#ffffff' : '#94a3b8'}
//         fontSize={isHovered ? 13 : 11}
//         fontWeight={isHovered || isHighlighted ? 'bold' : 'normal'}
//         style={{ 
//           transition: 'all 0.3s', 
//           pointerEvents: 'none', 
//           userSelect: 'none' 
//         }}
//       >
//         {cluster}
//       </text>
//     </g>
//   );
// };

// export default ClusterNode;



import React from "react";

const ClusterNode = ({ cluster, position, isHovered, onMouseEnter, onMouseLeave, isHighlighted }) => (
  <g transform={`translate(${position.x}, ${position.y})`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ cursor: "pointer" }}>
    <circle  r={isHovered ? 22 : 18} fill={isHovered ? "#10b981" : "#059669"} stroke="#6ee7b7" 
    strokeWidth={isHovered ? 3 : 1} filter="url(#glow)"/>
    <text textAnchor="middle" y={-26} 
        fill={isHovered || isHighlighted ? '#ffffff' : '#94a3b8'}
        fontSize={isHovered ? 11 : 10}
        fontWeight={isHovered || isHighlighted ? 'bold' : 'normal'}
      style={{  transition: 'all 0.3s', pointerEvents: "none" }}>
        {cluster.name}
    </text>
  </g>
);

export default ClusterNode;
