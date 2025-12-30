import React from "react";
import "./FAQ.scss";
import img from "../../assets/rabbit1.png";
import img2 from "../../assets/cat4.png";

const FAQ = () => {
  return (
    <div className="faq" id="FAQ">
      <h1>Frequently Asked Questions</h1>
      <h5>Learn more about our pet shop here!!</h5>

      <div className="cont">
        <div className="faq1">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h2>Why adopting the suitable pet is important?</h2>
            <p>
              Pets are conscious beings, they have souls and emotions. Once a pet
              is used to live in houses it struggles to survive alone outside.
              Adopting the wrong pet leads to their owners abandoning them.
            </p>
          </div>
        </div>
        <div className="faq1">
          <div className="text">
          <h2>Why Care (pet abandonment)?</h2>
          <p>
            Pet abandonment is a cruel behaviour, most pets don't survive alone
            when kept outside their houses, they struggle a lot and experience
            tough times, they usually end up dying alone in rough conditions.
          </p>
        </div>
          <div className="img">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
