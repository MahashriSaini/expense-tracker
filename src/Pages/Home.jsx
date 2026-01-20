// Pages/Home.jsx

import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import "../App.css";
import ExpenseList from "../ExpenseList";
import "./Home.css"

export default function Home({transactions, setTransactions}) {
  const [expense, setExpense] = useState({
    id: "",
    title: "",
    amount: "",
    type: "Expense",
    date: "",
  });

  const updateTitle = (e) => {
    setExpense({ ...expense, title: e.target.value });
  };

  const updateAmount = (e) => {
    setExpense({ ...expense, amount: e.target.value });
  };

  const updateType = (e) => {
    setExpense({ ...expense, type: e.target.value });
  };

  const addButtonClick = () => {
    if (!expense.title || !expense.amount) return;

    setTransactions([...transactions, { ...expense, id: uuidv4(), date: new Date() }]);

    setExpense({ id: "", title: "", amount: "", type: "Expense", date: "" });
  };

  return (
    <>
      <h1 className="app-title">Expense Tracker</h1>
      <Overview expenses={transactions} />
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

        <select value={expense.type} onChange={updateType}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>

        <button onClick={addButtonClick} className="add-btn">
          Add
        </button>
      </div>
      <Search expenses = {transactions}/>
      
    </>
  );
}


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


export function Search({ expenses }) {
  const [searchInput, setSearchInput] = useState("");

  // Filter expenses dynamically
  const filteredExpenses = expenses.filter((item) =>
    item.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  return (
    <><div className="search-container">
      <input
        type="text"
        placeholder="Search Transaction"
        className="search-transaction"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <h4 className="transaction-heading">Transactions</h4>
      {/* If search is empty, filteredExpenses === all expenses */}
      <ExpenseList expenses={filteredExpenses} />
      </div>
    </>
  );
}

