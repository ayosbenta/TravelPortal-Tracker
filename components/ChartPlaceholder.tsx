
import React from 'react';

const ChartPlaceholder: React.FC = () => {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Performance Analytics</h2>
        <div className="flex space-x-2">
          <button className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300 hover:bg-cyan-500 hover:text-white transition-colors">Monthly</button>
          <button className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300">Quarterly</button>
          <button className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300">Yearly</button>
        </div>
      </div>
      <div className="h-80 flex items-center justify-center bg-dots-pattern rounded-lg">
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
            <p className="mt-4 text-slate-500 font-semibold">Graph & Chart Section</p>
            <p className="text-sm text-slate-600">Coming soon...</p>
        </div>
      </div>
      <style>{`
        .bg-dots-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(203, 213, 225, 0.1) 1px, transparent 0);
          background-size: 1.25rem 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default ChartPlaceholder;
