
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="absolute -top-1 -right-1 w-16 h-16 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
        </div>
        <div className={`flex-shrink-0 ${color}`}>{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
