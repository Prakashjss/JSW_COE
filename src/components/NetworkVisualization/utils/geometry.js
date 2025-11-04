export const getNodePosition = (index, total, radius, centerX, centerY) => {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  };
};
