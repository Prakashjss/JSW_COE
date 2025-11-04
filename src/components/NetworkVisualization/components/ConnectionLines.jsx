// import React from 'react';
// import { getNodePosition } from '../utils/geometry';
// import { locations, clusters } from '../data';

// const ConnectionLines = ({
//   centerX,
//   centerY,
//   locationRadius,
//   clusterRadius,
//   hoveredLocation,
//   hoveredCluster,
//   isLocationHighlighted,
//   isClusterHighlighted
// }) => {
//   return (
//     <>
//       {/* Lines from COE to Locations */}
//       {locations.map((loc, i) => {
//         const pos = getNodePosition(i, locations.length, locationRadius, centerX, centerY);
//         return (
//           <line
//             key={`line-loc-${i}`}
//             x1={centerX}
//             y1={centerY}
//             x2={pos.x}
//             y2={pos.y}
//             // stroke={hoveredLocation === i || isLocationHighlighted ? '#60a5fa' : '#334155'}
//             strokeWidth={hoveredLocation === i || isLocationHighlighted ? 2 : 1}
//             opacity={hoveredLocation === i || isLocationHighlighted ? 0.8 : 0.3}
//             style={{ transition: 'all 0.3s' }}
//           />
//         );
//       })}

//       {/* Lines from Locations to Clusters */}
//       {locations.map((loc, locIdx) => {
//         const locPos = getNodePosition(locIdx, locations.length, locationRadius, centerX, centerY);
//         return clusters.map((cluster, clusterIdx) => {
//           const clusterPos = getNodePosition(clusterIdx, clusters.length, clusterRadius, centerX, centerY);
//           return (
//             <line
//               key={`line-${locIdx}-${clusterIdx}`}
//               x1={locPos.x}
//               y1={locPos.y}
//               x2={clusterPos.x}
//               y2={clusterPos.y}
//               stroke={
//                 (hoveredLocation === locIdx && isClusterHighlighted) || 
//                 (hoveredCluster === clusterIdx && isLocationHighlighted)
//                   ? '#34d399' 
//                   : '#1e293b'
//               }
//               strokeWidth="0.5"
//               opacity={
//                 (hoveredLocation === locIdx && isClusterHighlighted) || 
//                 (hoveredCluster === clusterIdx && isLocationHighlighted)
//                   ? 0.6 
//                   : 0.1
//               }
//               style={{ transition: 'all 0.3s' }}
//             />
//           );
//         });
//       })}
//     </>
//   );
// };

// export default ConnectionLines;


import React from "react";
import { getNodePosition } from "../utils/geometry";
import { clusters, locations, clusterLocations } from "../data";

const ConnectionLines = ({ centerX, centerY, locationRadius, clusterRadius, hoveredLocation, hoveredCluster}) => {
  return (
    <>
      {/* Lines from COE to each Location */}
      {locations.map((loc, i) => {
        const locPos = getNodePosition(i, locations.length, locationRadius, centerX, centerY);
        const isActive = hoveredLocation === i || hoveredCluster !== null;
        return (
          <line key={`coe-${i}`}
            x1={centerX}
            y1={centerY}
            x2={locPos.x}
            y2={locPos.y}
            stroke="#1e3a8a"
            strokeWidth={isActive ? 1 : 0.5}
            opacity={isActive ? 0.4 : 0.1}
            style={{ transition: "all 0.3s" }}/>
        );
      })}

      {/* Lines from Clusters to their connected Locations */}
      {clusterLocations.map((pair, idx) => {
        const clusterIdx = clusters.findIndex((c) => c.name === pair.cluster);
        const locationIdx = locations.findIndex((l) => l.name === pair.location);
        if (clusterIdx === -1 || locationIdx === -1) return null;

        const clusterPos = getNodePosition(clusterIdx, clusters.length, clusterRadius, centerX, centerY);
        const locPos = getNodePosition(locationIdx, locations.length, locationRadius, centerX, centerY);
        const isHighlighted = hoveredCluster === clusterIdx || hoveredLocation === locationIdx;

        return (
          <line key={`line-${idx}`}
            x1={clusterPos.x}
            y1={clusterPos.y}
            x2={locPos.x}
            y2={locPos.y}
            stroke={isHighlighted ? "#22d3ee" : "#334155"}
            strokeWidth={isHighlighted ? 1 : 0.5}
            opacity={isHighlighted ? 0.8 : 0.1}
            style={{ transition: "all 0.3s" }}/>
        );
      })}
    </>
  );
};

export default ConnectionLines;
