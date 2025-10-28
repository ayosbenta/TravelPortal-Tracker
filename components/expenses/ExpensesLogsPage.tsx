import React from 'react';

const PlaceholderContent: React.FC = () => (
    <div className="h-96 flex items-center justify-center bg-slate-800/50 border border-dashed border-slate-700 rounded-xl">
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m5 10v4m-2-2h4M5 3a2 2 0 00-2 2v1h16V5a2 2 0 00-2-2H5zM3 16a2 2 0 002 2h1.586a1 1 0 01.707.293l.828.828a1 1 0 001.414 0l.828-.828A1 1 0 0110.414 18H12a2 2 0 002-2v-1h-9v1z" />
            </svg>
            <p className="mt-4 text-slate-500 font-semibold">Feature Under Construction</p>
            <p className="text-sm text-slate-600">This section is coming soon!</p>
        </div>
    </div>
);


const ExpensesLogsPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-4xl font-extrabold text-white tracking-tight">Expenses Logs</h1>
                <p className="mt-2 text-lg text-slate-400">Keep track of all your business expenses.</p>
            </header>
            <PlaceholderContent />
        </div>
    );
};

export default ExpensesLogsPage;
