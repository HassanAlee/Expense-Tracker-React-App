import React, { useReducer, useContext, useState } from "react";
import { reducer } from "./Reducer";
import { v4 as uuid } from "uuid";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setId] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const initialState = {
    expenses: [],
    isEditing: false,
  };
  // submitHandler
  const handleSubmit = (charge, amount) => {
    if (state.isEditing) {
      const toEdit = { id: id, charge: charge, amount: amount };
      dispatch({ type: "HANDLE_SUBMIT", payload: toEdit });
      handleAlert("success", "item edited");
    } else {
      const newExpense = { id: uuid(), charge, amount };
      dispatch({ type: "HANDLE_SUBMIT", payload: newExpense });
      handleAlert("success", "item added");
    }
  };
  // clear all expenses
  const clearExpenses = () => {
    dispatch({ type: "CLEAR_EXPENSES" });
    handleAlert("danger", "all items cleared");
  };
  // delete single expense
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };
  // edit expense
  const editHandler = (id) => {
    setId(id);
    state.expenses
      .filter((expense) => {
        return expense.id === id;
      })
      .find((item) => {
        setCharge(item.charge);
        setAmount(item.amount);
        return {};
      });
    dispatch({ type: "EDIT_EXPENSE" });
  };
  // handle the alert
  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSubmit,
        clearExpenses,
        deleteExpense,
        editHandler,
        charge,
        setCharge,
        amount,
        setAmount,
        alert,
        setAlert,
        handleAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
