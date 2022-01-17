import React, { useState} from "react";
import Expenses from "./Components/Expenses";

import Header from "./Components/Header";
import NewExpense from "./Components/NewExpenses/NewExpense";



let Dummy_Expense  = [
 
   {
    id: 'e2',
    tittle: 'hostel fee',
    amount: 450,
    date: new Date(2021, 3, 17)
   },
   {
    id: 'e3',
    tittle: 'house ',
    amount: 600,
    date: new Date(2021, 3, 19)
   },
   {
    id: 'e4',
    tittle: 'travel ',
    amount: 6000,
    date: new Date(2022, 3, 19)
   }
];

const App = () => {
 
  const [expenses, setExpenses] = useState(Dummy_Expense);
  const addExpenseHandler = (expense) => {
    const updatedexpense = [expense, ...expenses];
    setExpenses(updatedexpense )
  };
  return (
    <div >
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses item={expenses} />


    
    
    </div>
  );
}

export default App;
