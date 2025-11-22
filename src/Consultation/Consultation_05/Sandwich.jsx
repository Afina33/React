import { useState } from "react";
import './styles.css';

export default function Sandwich() {
  const [sandwich, setSandwich] = useState("Бутербротный конфигуратор👨‍🍳: ");
  function handleAddBread() {
    setSandwich(`${sandwich} Хлеб 🍞`);
  }
  function handleAddCheese() {
    setSandwich(`${sandwich} Сыр 🧀`);
  }
  function handleAddBacon() {
    setSandwich(`${sandwich} Бекон 🥓`);
  }
  function handleAddSalad() {
    setSandwich(`${sandwich} Салат 🥬`);
  }
  function handleAddTomato() {
    setSandwich(`${sandwich} Помидор 🍅`);
  }
  function handleClear() {
    setSandwich("Бутерброт");
  }

  return (
    <div>
      <h1>Sandwich</h1>
      <img
        src="https://www.eatclub.de/wp-content/uploads/2022/01/Club-Sandwich.jpg"
        alt="Sandwich"
      />
      <p>{sandwich}</p>
      <div className="container">
        <button type="button" onClick={handleAddBread} className="btn">Хлеб</button>
        <button type="button" onClick={handleAddCheese} className="btn">Сыр</button>
        <button type="button" onClick={handleAddBacon} className="btn">Бекон</button>
        <button type="button" onClick={handleAddSalad} className="btn">Салат</button>
        <button type="button" onClick={handleAddTomato} className="btn">Томат</button>
        <button type="button" onClick={handleClear} className="btn">Очистить</button>
      </div>
    </div>
  );
}
