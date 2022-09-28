import React from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Packet = (props) => {
  const {
    idMeal,
    strMeal,
    strArea,
    strCategory,
    strMealThumb,
    strInstructions,
  } = props.meal;
  return (
    <div className="meal-info">
      <img src={strMealThumb} alt="" />
      <div className="more-info">
        <h3>{strMeal}</h3>
        <p>ID : {idMeal}</p>
        <p>Category : {strCategory}</p>
        <p>Area : {strArea}</p>
      </div>
      <div>
        <button className="order-btn" onClick={() => props.orderNow(props.meal)}>
          Order Now
          <FontAwesomeIcon className="font" icon={faCoffee} />
        </button>
        {/* <FontAwesomeIcon></FontAwesomeIcon> */}
      </div>
    </div>
  );
};
export default Packet;
