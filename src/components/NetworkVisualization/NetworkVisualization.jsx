import React, { useState } from 'react';
import { locations, clusters } from './data';
import CentralNode from './components/CentralNode';
import LocationNode from './components/LocationNode';
import ClusterNode from './components/ClusterNode';
import ConnectionLines from './components/ConnectionLines';
import Legend from './components/Legend';
import SVGFilters from './components/SVGFilters';
import { getNodePosition } from './utils/geometry';
import './NetworkVisualization.css';

const NetworkVisualization = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [hoveredCluster, setHoveredCluster] = useState(null);

  const centerX = 400;
  const centerY = 400;
  const locationRadius = 180;
  const clusterRadius = 320;

  const isLocationHighlighted = hoveredCluster !== null;
  const isClusterHighlighted = hoveredLocation !== null;

  return (
    <div className="network-container">
      <svg width="800" height="800" className="network-svg">
        <SVGFilters />

        <ConnectionLines
          centerX={centerX}
          centerY={centerY}
          locationRadius={locationRadius}
          clusterRadius={clusterRadius}
          hoveredLocation={hoveredLocation}
          hoveredCluster={hoveredCluster}
          isLocationHighlighted={isLocationHighlighted}
          isClusterHighlighted={isClusterHighlighted}
        />

        {/* Cluster Nodes (Outer Layer) */}
        {clusters.map((cluster, i) => {
          const pos = getNodePosition(i, clusters.length, clusterRadius, centerX, centerY);
          return (
            <ClusterNode
              key={`cluster-${i}`}
              cluster={cluster}
              position={pos}
              isHovered={hoveredCluster === i}
              isHighlighted={isClusterHighlighted}
              onMouseEnter={() => setHoveredCluster(i)}
              onMouseLeave={() => setHoveredCluster(null)}
            />
          );
        })}

        {/* Location Nodes (Middle Layer) */}
        {locations.map((location, i) => {
          const pos = getNodePosition(i, locations.length, locationRadius, centerX, centerY);
          return (
            <LocationNode
              key={`location-${i}`}
              location={location}
              position={pos}
              isHovered={hoveredLocation === i}
              isHighlighted={isLocationHighlighted}
              onMouseEnter={() => setHoveredLocation(i)}
              onMouseLeave={() => setHoveredLocation(null)}
            />
          );
        })}

        {/* Central COE Node */}
        <CentralNode centerX={centerX} centerY={centerY} />
      </svg>

      <Legend />
    </div>
  );
};

export default NetworkVisualization;
