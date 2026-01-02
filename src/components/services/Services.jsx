import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>Our pet shop provides many services for customer satisfaction </p>
      <div className="cont">
        <div className="item">
          <div className="ui">
            <i className="fa-solid fa-dog"></i>
          </div>
          <div className="txt">
            <h3>Wide Range of Pets</h3>
            <p>
              Our petshop provides a vareity of pets, including ctas, dogs,
              birds, and even rabbits.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="ui">
            <i className="fa-solid fa-robot"></i>
          </div>
          <div className="txt">
            <h3>Decision Assistance</h3>
            <p>
              We care about pets, so we provide an intellegent expert-systems decision
              assistant to help the customer choose their perfect pet.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="ui">
            <i className="fa-solid fa-cat"></i>
          </div>
          <div className="txt">
            <h3>Search and Filtering Options</h3>
            <p>
              We provide easier user interactions such as searching features to
              help search by pet name, and filtering feature to filter pets by
              categories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
