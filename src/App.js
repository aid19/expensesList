import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Iphone',
    amount: 1500,
    date: new Date(2022, 9, 19),
  },
  {
    id: 'e6',
    title: 'Watch',
    amount: 500,
    date: new Date(2022, 1, 12),
  },
  {
    id: 'e7',
    title: 'Flowers',
    amount: 20,
    date: new Date(2021, 2, 22),
  },
  {
    id: 'e8',
    title: 'Sofa',
    amount: 5,
    date: new Date(2020, 7, 1),
  },
  {
    id: 'e9',
    title: 'Mirror',
    amount: 50,
    date: new Date(2020, 3, 16),
  },
  {
    id: 'e10',
    title: 'Car',
    amount: 5000,
    date: new Date(2022, 5, 10),
  },
  {
    id: 'e11',
    title: 'Coffee',
    amount: 20,
    date: new Date(2022, 1, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;