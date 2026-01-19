//ExpenseList.jsx
import Expense from "./Expense";

export default function ExpenseList({ expenses }) {
  return (
    <>
      {expenses.map((item) => (
        <Expense
          key={item.id}
          item = {item}
        />
      ))}
    </>
  );
}
