import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
export default class ExpenseItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            amount: props.amount,
            date: new Date(props.date),
            title: props.title,
        }
    }
    render(){

        //console.log(this.state);
        return(
            <div className="expense-item">
                <ExpenseDate date={this.state.date} />
                <div className="expense-item__description"> 
                    <h2> {this.state.title} </h2>
                    <div className="expense-item__price">  $ {this.state.amount}  </div>
                </div>
                
            </div>
        )
    }

}
