import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function HidingExpenseForm(props){
    return(
        <div className="new-expense__actions">
            <button onClick={props.handleOnCancel}>Add new expense</button>
        </div>
    );
}

export default function NewExpense(props){
    let [formState, setFormState] = useState(false);

    //push new exprense item to expenses component
    const saveExpenseHandler = (enterExpenseData)=>{
        const newExpenseData = {
            ... enterExpenseData,
            id: Math.random().toString(),
        }
        // console.log("NewExpense", newExpenseData);
        props.onAddExpenseData(newExpenseData);
    }
    
    const handleOnCancel = ()=>{
        setFormState((oldState)=>!oldState);
    }

    var expenseFormView = (
        formState ? 
        <ExpenseForm 
            onSaveExpenseHandler={saveExpenseHandler} 
            onCancel={handleOnCancel}
        />:
        <HidingExpenseForm onClick={handleOnCancel}/>)

    return (
       <div className="new-expense">
           {expenseFormView}
       </div>
    )
}

