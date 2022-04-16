import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props){
    //這邊建議使用map來返回新的array，因為舊的array可能會有資料沒更新到的問題
    let filterOptionList = [ "All","2018","2019", "2020","2021","2022"]
    let expenseItemList = props.items.map((item)=>{
        const ele =  <ExpenseItem key={item.id} date={new Date(item.date)} title={item.title} amount={item.amount} /> 
        console.log(ele, item);
        return ele;
    });
    console.log(expenseItemList);
    

    return(
        <Card className="expenses">
            <ExpenseFilter onFilterChange={props.onFilterChange} filterOptions={filterOptionList}/>
            {expenseItemList}
        </Card>)
}