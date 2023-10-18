import './ExpenseItem.css';

function ExpenseItem() {
    return(
        <div className="expense-item">
            <div>Wed 18 Oct 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">456.45 kr.</div>
            </div>
        </div>
    )
}

export default ExpenseItem;