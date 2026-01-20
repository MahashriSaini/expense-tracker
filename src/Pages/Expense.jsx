import ExpenseList from "../ExpenseList.jsx";
import AnalysisChart from "../Charts/AnalysisChart.jsx";
import MonthChart from "../Charts/MonthChart.jsx";
import "./Expense.css";

export default function Expense({ transactions}) {
  const expenseList = transactions.filter((item) => item.type === "Expense");

  const totalExpense = expenseList.reduce(
    (sum, item) => sum + Number(item.amount),
    0,
  );

  return (
    <>
      <AnalysisChart transactions={expenseList} transactionType={"expense"} />
      <div id="expense-heading">
        <h2>Expense</h2>
        <h3>{totalExpense}</h3>
      </div>
      <div id="expense-main">
        <div id="recent-expense">
          <h3>Recent Expense</h3>
          <ExpenseList expenses={expenseList} />
        </div>
        <MonthChart transactions={expenseList} transactionType="Expense" />
      </div>
    </>
  );
}
