import './ExpenseFilter.css';



export default function ExpenseFilter( props ){
    let optionList = props.filterOptions.map((item)=>{return <option key={item} value={item}>{item}</option>});
    const changeHandler = (event)=>{
        props.onFilterChange(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Expense Filter by year</label>
                <select name="filter" onChange={changeHandler} > {optionList} </select>
            </div>
        </div>
    );
}