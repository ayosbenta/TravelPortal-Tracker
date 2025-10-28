
import React, { useState, useMemo } from 'react';
import StatCard from './StatCard';
import ChartPlaceholder from './ChartPlaceholder';

const Dashboard: React.FC = () => {
  const [stats] = useState({
    grossIncome: 125670,
    systemsSold: 89,
    totalExpenses: 34500,
  });

  const netIncome = useMemo(() => stats.grossIncome - stats.totalExpenses, [stats.grossIncome, stats.totalExpenses]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const statCardsData = [
    {
      title: 'Gross Income',
      value: formatCurrency(stats.grossIncome),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
      color: 'text-green-400',
    },
    {
      title: 'Total Systems Sold',
      value: stats.systemsSold.toString(),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      color: 'text-blue-400',
    },
    {
      title: 'Total Expenses',
      value: formatCurrency(stats.totalExpenses),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
      color: 'text-red-400',
    },
    {
      title: 'Net Income',
      value: formatCurrency(netIncome),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      color: 'text-cyan-400',
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Mission Control</h1>
        <p className="mt-2 text-lg text-slate-400">Welcome back, Captain. Here is your business performance overview.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCardsData.map((card) => (
          <StatCard key={card.title} title={card.title} value={card.value} icon={card.icon} color={card.color} />
        ))}
      </div>

      <ChartPlaceholder />
    </div>
  );
};

export default Dashboard;
