import "./ExpenseItem.css";
function Item() {
  const expenseDate = new Date(2021,2,13);
  const expensePrice = "294.5";
  const expenseTitle = "car";
  return (
    <div className="expense-item">
      <div >{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        </div>
      <div className="expense-item__price">{expensePrice}</div>
    </div>
  );
}
export default Item;
