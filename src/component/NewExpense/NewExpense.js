import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props){
    const saveExpenseHandler = (enterExpenseData)=>{
        const newExpenseData = {
            ... enterExpenseData,
            id: Math.random().toString(),
        }
        // console.log("NewExpense", newExpenseData);
        props.onAddExpenseData(newExpenseData);
    }
    return (
       <div className="new-expense">
           <ExpenseForm onSaveExpenseHandler={saveExpenseHandler}/>
       </div>
    )
}

