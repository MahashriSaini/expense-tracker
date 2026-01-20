import ExpenseList from "../ExpenseList.jsx";
import AnalysisChart from "../Charts/AnalysisChart.jsx";
import MonthChart from "../Charts/MonthChart.jsx";
import "./Income.css";

export default function Income({ transactions}) {
  const incomeList = transactions.filter((item) => item.type === "Income");

  const totalIncome = incomeList.reduce(
    (sum, item) => sum + Number(item.amount),
    0,
  );

  return (
    <>
      <AnalysisChart transactions={incomeList} transactionType={"income"} />
      <div id="income-heading">
        <h2>Income</h2>
        <h3>{totalIncome}</h3>
      </div>
      <div id="income-main">
        <div id="recent-income">
          <h3>Recent Income</h3>
          <ExpenseList expenses={incomeList} />
        </div>
        <MonthChart transactions={incomeList} transactionType="Income" />
      </div>
    </>
  );
}
