import React from "react";
import { MdSend } from "react-icons/md";
import { useGlobalContext } from "../context";

const ExpenseForm = () => {
  const {
    handleSubmit,
    isEditing,
    setCharge,
    setAmount,
    amount,
    charge,
    submitError,
  } = useGlobalContext();
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            name="charge"
            id="charge"
            className="form-control"
            placeholder="e.g rent"
            value={charge}
            onChange={(e) => {
              setCharge(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-control"
            placeholder="e.g 100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          if (charge === "" || amount === "") {
            submitError("danger", "all fields are mandatory");
          } else {
            handleSubmit(charge, amount);
            setCharge("");
            setAmount("");
          }
        }}
      >
        {isEditing ? "edit" : "submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
