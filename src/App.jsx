// App.jsx
import {Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx"
import Income from "./Pages/Income.jsx"
import Expense from "./Pages/Expense.jsx"
import Logout from "./Pages/Logout.jsx"
import Layout from "./Layout/Layout.jsx";
import {useState} from "react";

function App() {
const [transactions, setTransactions] = useState([]);
  return (<>
  

    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home transactions = {transactions} setTransactions = {setTransactions}/>}></Route>
      <Route path="income" element={<Income transactions = {transactions}/>}></Route>
      <Route path="expense" element={<Expense transactions = {transactions}/>}></Route>
      <Route path="logout" element={<Logout/>}></Route>
      </Route>
    </Routes>
      </>
  );
}

export default App;
