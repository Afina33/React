import { v4 } from "uuid";
import { useState } from "react";
import Button from "../../components/Button/Button";

import "../../lessons/Lesson_05/styles.css";

function Homework_05() {
  let [orders, setOrders] = useState([]);

  const menuBtn = ["Burger", "Fries", "Cola", "Salad", "Ketchup", "Ice-cream"];

  const orderListItems = orders.map((value) => {
    return (
      <li key={v4()} className="order_item">
        {value}
      </li>
    );
  });

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>

        <div className="button_wrapper">

          {menuBtn.map((item) => (
            <div key={v4()} className="button_control">
              <Button
                name={item}
                onClick={() => {
                  setOrders((prevValue) => [...prevValue, item]);
                }}
              />
            </div>
          ))}

        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{orderListItems}</ol>
      </div>
    </div>
  );
}

export default Homework_05;
