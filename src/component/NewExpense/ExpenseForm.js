import React, {useState} from "react";
import './ExpenseForm.css';

export default function ExpenseForm( props ){
    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterDate, setEnterDate] = useState("");

    const titleChangeHandler = (event)=>{setEnterTitle(event.target.value)};
    const amountChangeHandler = (event)=>{setEnterAmount(event.target.value)};
    const dateChangeHandler = (event)=>{setEnterDate(event.target.value)};
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: enterDate
        }
        // console.log(expenseData);
        props.onSaveExpenseHandler(expenseData);

        //clear form data
        setEnterTitle("");
        setEnterAmount("");
        setEnterDate("")
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input  type="text" value={enterTitle} onChange={titleChangeHandler} required={true}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="1" step="1" value={enterAmount} onChange={amountChangeHandler} required={true}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2018-01-01" max="2024-12-31" value={enterDate} onChange={dateChangeHandler} required={true}></input>
            </div>
            <div className="new-expense__actions">
                <button type="submit">確認</button>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>取消</button>
            </div>
        </div>
        
    </form>)
}