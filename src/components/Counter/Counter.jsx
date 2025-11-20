// 1 ШАГ: Импортируем useState из библиотеки react
import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
function Counter() {
  //   const state = useState(0);
  //   const stateElement = state[0];
  //   const state2Element = state[1];

  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };
  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };
  // При старом способе компонент Counter не перезагружается и не может показать на странице актуальное значения переменных
  // let count = 0;
  // console.log("В теле компонента Counter", count);
  // const onMinus = () => {
  //   count = count - 1;
  //   console.log("onMinus function", count);
  // };
  // const onPlus = () => {
  //   count = count + 1;
  //   console.log("onPlus function", count);
  // };
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}
export default Counter;
