import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseDate);
  }

  function hideForm() {
    setIsEditing(false);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

  }

  function showForm() {
    setIsEditing(true);
  }

  let renderForm = <></>;

  if (isEditing) {
    renderForm = (
      <div className="new-expense__controls">
        <div className="new-expense__control" onChange={titleChangeHandler}>
          <label>Title</label>
          <input type="text" value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      {renderForm}
      <div className="new-expense__actions">
        <button type="submit" onClick={showForm}>Add expense</button>
        <button type="submit" onClick={hideForm}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
