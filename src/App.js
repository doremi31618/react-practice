// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';
// import './component/Expanses/Expanses';
let filterValue = 'All';
let initExpenseItems = []


function App() {
  let [expenseItems, setExpenseItems] = useState(initExpenseItems);
  
  const addExpenseData = (expense) =>{
    let filterItems = getFilterItems(filterValue);
    // 這裡 ”必需” 要返回新陣列
    setExpenseItems(()=> [...filterItems, expense]);
    initExpenseItems.push(expense);
  }
  const getFilterItems = (_filterValue)=>{
    if (filterValue === 'All') return initExpenseItems;
  
    return initExpenseItems.filter((item)=>{
      let item_year = new Date(item.date).getFullYear().toString();
      if (item_year === filterValue) return item;
    })
    
  }

  const filterChangeHandler = (_filterValue)=>{
    filterValue = _filterValue;
    let filterItems = getFilterItems(filterValue);
    setExpenseItems(filterItems);
  }

  return (
    <div className="app-root">
      <NewExpense onAddExpenseData={addExpenseData}/>
      <Expenses items={expenseItems} onFilterChange={filterChangeHandler}/>
    </div>
   
  );
}

export default App;
