//ExpenseList.jsx
import Expense from "./Expense";

export default function ExpenseList({ expenses }) {
  if(expenses.length === 0)
  {
    return (<>
      <p className="no-transaction">No transactions yet!</p>
      </>
    );
  }
  return (
    <><div>
      {expenses.map((item) => (
        <Expense
          key={item.id}
          item = {item}
        />
      ))}
      </div>
    </>
  );
}
