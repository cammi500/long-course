import "./ExpenseItem.css";
import Card from "./Card"
import ExpenseDate from "./ExpenseDate"
import ExpenseTitle from "./ExpenseTitle"
import ExpenseAmount from "./ExpenseAmount"

function ExpenseItem(props){
    return (
    <Card className="expense-item">
        {/* {props.date.toISOString()} */}
        <ExpenseDate date={props.date}/>
        <div>
            <ExpenseTitle title={props.title}/>
            <ExpenseAmount amount={props.amount}/>
        </div>
    </Card>
    );
}
export default ExpenseItem;