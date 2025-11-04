import React from 'react';

const CentralNode = ({ centerX, centerY }) => {
  return (
    <g>
      <circle cx={centerX} cy={centerY} r="35" fill="url(#centerGrad)" stroke="#60a5fa" strokeWidth="3" filter="url(#strongGlow)">
        <animate attributeName="r" values="35;38;35" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx={centerX} cy={centerY} r="45" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="45;55;45" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
      </circle>
      <text x={centerX} y={centerY + 8} textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" style={{ userSelect: 'none' }}> 
        COE 
      </text>
    </g>
  );
};

export default CentralNode;
