import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProductsPage from './components/products/ProductsPage';
import IncomeLogsPage from './components/income/IncomeLogsPage';
import ExpensesLogsPage from './components/expenses/ExpensesLogsPage';
import CustomersPage from './components/customers/CustomersPage';
import ReportsPage from './components/reports/ReportsPage';


const App: React.FC = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Products / Systems':
        return <ProductsPage />;
      case 'Income Logs':
        return <IncomeLogsPage />;
      case 'Expenses Logs':
        return <ExpensesLogsPage />;
      case 'Customers':
        return <CustomersPage />;
      case 'Reports':
        return <ReportsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex text-slate-200 bg-slate-900 font-sans">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
