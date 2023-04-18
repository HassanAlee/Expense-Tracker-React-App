import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import "./App.css";
import { useGlobalContext } from "./context";
function App() {
  const { expenses, alert } = useGlobalContext();
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, cur) => {
            acc += parseInt(cur.amount);
            return acc;
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
