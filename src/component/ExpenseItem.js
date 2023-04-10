import "./ExpenseItem.css";

function ExpenseItem(props){
    // const expenseDate = new Date(2023,4,10);
    // const expenseTitle="hotpot Eats";
    // const expenseAmount=100;
    return (
    <div>
    <div className="expense-item">
        {props.date.toISOString()}
    </div>
    <div className="">
        <h2 className="expense-item__description">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
    </div>
    );
}
export default ExpenseItem;