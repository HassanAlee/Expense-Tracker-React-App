export const reducer = (state, action) => {
  // handle submit
  if (action.type === "HANDLE_SUBMIT") {
    if (state.isEditing) {
      const tempExpenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            charge: action.payload.charge,
            amount: action.payload.amount,
          };
        } else {
          return expense;
        }
      });
      return { ...state, expenses: tempExpenses, isEditing: false };
    } else {
      return { ...state, expenses: [...state.expenses, action.payload] };
    }
  }
  // clear all expenses
  if (action.type === "CLEAR_EXPENSES") {
    return { ...state, expenses: [] };
  }
  // delete a single expense
  if (action.type === "DELETE_EXPENSE") {
    const newExpense = state.expenses.filter((expense) => {
      return expense.id !== action.payload;
    });
    return { ...state, expenses: newExpense };
  }
  // edit expense
  if ((action.type = "EDIT_EXPENSE")) {
    return { ...state, isEditing: true };
  }
  return state;
};
