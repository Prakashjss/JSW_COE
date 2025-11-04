import React from 'react';

const Legend = () => {
  return (
    <div className="absolute bottom-8 left-8 bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-2xl border border-slate-700">
      <h3 className="text-white font-bold mb-4 text-lg">Network Legend</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-blue-400"></div>
          <span className="text-slate-200 text-sm">COE (Center)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-blue-700 border-2 border-blue-400"></div>
          <span className="text-slate-200 text-sm">Locations (17)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-blue-900 border border-blue-500"></div>
          <span className="text-slate-200 text-sm">Clusters (19)</span>
        </div>
      </div>
      <p className="text-slate-400 text-xs mt-4 italic">Hover over nodes to see connections</p>
    </div>
  );
};

export default Legend;
