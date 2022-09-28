import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Packet from "../Packets/Packet";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const orderNow = (meal) => {
    //  console.log(meal);
    const newCart = [...cart, meal];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
        // console.log(data.meals);
      });
  }, []);
  return (
    <div className="total-container">
      <div className="meal-container">
        {meals.map((meal) => (
          <Packet key={meal.idMeal} meal={meal} orderNow={orderNow}></Packet>
        ))}
      </div>
      <div className="count-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
export default Meals;
