import React, { useState } from "react";
import "./PetCollection.scss";
import data from "../../data/data";
import { Link } from "react-router-dom";

const PetCollection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories
  const categories = [
    "all",
    ...new Set(data.map(item => item.category.toLowerCase()))
  ];

  const newData = data.filter(pet => activeCategory === "all" ? true : pet.category.toLowerCase() === activeCategory)

  return (
    <div className="pets-collection">
      <h1>Our Pets Collection</h1>

      <div className="filter">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`tag ${activeCategory === category ? "active" : ""}`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="cont" id="pet-list">
        {newData.map(pet => (
          <div className="card pet" key={pet.id}>
            <div className="img">
              <Link to={`/${pet.id}`}><img src={pet.img} alt={pet.name} /></Link>
            </div>
            <div className="txt">
              <h3>{pet.name}</h3>
              <h6>{pet.category}</h6>
              <p>{pet.price} JOD</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCollection;
