import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context";

const ExpenseItem = ({ expense }) => {
  const { id, charge, amount } = expense;
  const { deleteExpense, editHandler, handleAlert } = useGlobalContext();
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button className="edit-btn" onClick={() => editHandler(id)}>
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            deleteExpense(id);
            handleAlert("danger", "item deleted");
          }}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
