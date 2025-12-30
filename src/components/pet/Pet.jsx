import React from "react";
import "./Pet.scss";

const Pet = ({item}) => {
  return (
    <div className="petDisplay">
      <div className="img">
        <img src={item.img} alt="" />
      </div>
      <div className="txt">
        <div className="info">
          <h1>{item.name}</h1>
          <h5>Category: {item.category}</h5>
          <h3>{item.des}</h3>
          <p>{item.price} JOD</p>
        </div>
        <div className="more-info">
            <h3>More Info</h3>
          <ul>
            <li>Monthly Cost: {item.monthlyCost}</li>
            <li>Foods: {item.foods.join(", ")}</li>
            <li>Hobbies: {item.hobbies.join(", ")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pet;
