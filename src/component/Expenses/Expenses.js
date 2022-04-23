import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

function ExpenseList(props){
    return (props.items.length > 0 )? 
    props.items.map((item)=>{
        return  (
            <ExpenseItem 
                key={item.id} 
                date={new Date(item.date)} 
                title={item.title} 
                amount={item.amount} /> )}) :
     <h2 className="expenses-list__fallback">Found no expenses</h2>
}


export default function Expenses(props){
    //這邊建議使用map來返回新的array，因為舊的array可能會有資料沒更新到的問題
    let filterOptionList = [ "All","2018","2019", "2020","2021","2022"]

    return(
        <Card className="expenses">
            <ExpenseFilter onFilterChange={props.onFilterChange} filterOptions={filterOptionList}/>
            <ExpenseList className="expenses-list"  items={props.items}/>
        </Card>)
}