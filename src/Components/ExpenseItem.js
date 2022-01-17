import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.tittle}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      
    </div>
  );
};

export default ExpenseItem;