import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeEx } from './components/IncomeEx';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header className="a" />
      <div className="container">
        <Balance />
        <IncomeEx />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;