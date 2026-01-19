//Expense.jsx
export default function Expense({ item }) {
  return (
    <div className="expense-item">
      <span className="expense-title">{item.title}</span>

      <span
        className={`expense-amount ${
          item.type === "Income" ? "income" : "expense"
        }`}
      >
        ₹ {item.amount}
      </span>
    </div>
  );
}
