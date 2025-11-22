import { v4 } from "uuid";
import { useState } from "react";
import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_05() {
  let [orders, setOrders] = useState([]);

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
          <div className="button_control">
            <Button
              name="Burger"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Burger"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Fries"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Fries"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Cola"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Cola"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Salad"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Salad"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Ketchup"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Ketchup"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Ice-cream"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Ice-cream"];
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{orderListItems}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;