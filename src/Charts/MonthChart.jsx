import "./MonthChart.css";

export default function MonthChart({ transactions, transactionType }) {
  // 2️⃣ Group & sum by month-year
  const monthMap = transactions.reduce((acc, item) => {
    const date = new Date(item.date);

    const monthYear = date.toLocaleString("en-IN", {
      month: "short",
      year: "numeric",
    }); // e.g. "Jan 2026"

    if (!acc[monthYear]) {
      acc[monthYear] = 0;
    }

    acc[monthYear] += Number(item.amount);

    return acc;
  }, {});

  // 3️⃣ Convert to array (useful for charts)
  const monthWiseData = Object.entries(monthMap).map(([month, total]) => ({
    month,
    total,
  }));

  return (
    <div className="monthchart-container">
      <h3 className="monthchart-title">{transactionType} by Month</h3>

      {monthWiseData.length === 0 ? (
        <p className="no-data">No data available</p>
      ) : (
        <div className="monthchart-list">
          {monthWiseData.map((item) => (
            <div key={item.month} className="monthchart-card">
              <span className="month">{item.month}</span>
              <span
                className={`amount ${
                  transactionType === "Income" ? "income" : "expense"
                }`}
              >
                ₹ {item.total}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
