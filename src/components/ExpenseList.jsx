import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context";

const ExpenseList = () => {
  const { expenses, clearExpenses } = useGlobalContext();
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearExpenses}>
          clear expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
