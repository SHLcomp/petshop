import React from "react";
import Navbar from "../components/navbar/Navbar";
import data from "../data/data";
import "./PetCategories.scss";

const PetCategories = (pet) => {

  return (
    <>
    <Navbar />
    <div className="petCats">
      <div className="cont">
        {data.map((item) => {
        if (pet.category === item.category) {
          return (
            <div className="allPets">
              <div className="card" key={item.id}>
                <div className="img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.price} JOD</p>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      </div>
    </div></>
  );
};

export default PetCategories;
