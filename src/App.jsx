// App.jsx
import { useState } from "react";
import "./App.css";
import ExpenseList from "./ExpenseList";

export function Overview({ expenses }) {
  let balance = 0;
  let expenditure = 0;

  expenses.forEach((item) => {
    const amt = Number(item.amount);

    if (item.type === "Income") {
      balance += amt;
    } else {
      balance -= amt;
      expenditure += amt;
    }
  });

  return (
    <div className="overview">
      <div className="overview-card balance">
        <p className="label">Balance</p>
        <p className="amount">₹ {balance}</p>
      </div>

      <div className="overview-card expenditure">
        <p className="label">Expenditure</p>
        <p className="amount">₹ {expenditure}</p>
      </div>
    </div>
  );
}


function App() {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    type: "Expense",
  });

  const [expenses, setExpenses] = useState([]);

  const updateTitle = (e) => {
    setExpense({ ...expense, title: e.target.value });
  };

  const updateAmount = (e) => {
    setExpense({ ...expense, amount: e.target.value });
  };

  const updateType = (e) => {
    setExpense({...expense, type: e.target.value })
  }

  const addButtonClick = () => {
    if (!expense.title || !expense.amount) return;

    setExpenses([...expenses, { ...expense, id: Date.now() }]);

    setExpense({ title: "", amount: "" });
  };

  return (
    <>
      <h1 className="app-title">Expense Tracker</h1>
      <Overview expenses={expenses}/>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Expense"
          value={expense.title}
          onChange={updateTitle}
          className="input"
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={expense.amount}
          onChange={updateAmount}
          className="input"
        />

        <select onChange = {updateType}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>

        <button onClick={addButtonClick} className="add-btn">
          Add
        </button>
      </div>

      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
