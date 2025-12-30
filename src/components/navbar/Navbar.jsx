import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {myCon} from '../../context/Context'

const Navbar = () => {
  const { search } = useContext(myCon);

  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <h1>PetShop</h1>
      <ul className={`ul ${mobile ? 'open' : ''}`}>
       <Link to="/" className="a"><li>Home</li></Link> 
        <li onClick={() => setIsOpen((prev) => !prev)}>
          Pets
          <i
            className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}
          ></i>
          <ul className={`subList ${isOpen ? "open" : ""}`}>
            <Link to="/cats" className="a"><li>Cats</li></Link>
             <Link to="/dogs" className="a"><li>Dogs</li></Link>
             <Link to="/birds" className="a"><li>Birds</li></Link>
             <Link to="/rabbits" className="a"><li>Rabbits</li></Link>
          </ul>
        </li>
        <li>About Us</li>
        <a href="#FAQ" className="a"><li>FAQ</li></a>
      </ul>

      <div className="search">
        <input
          type="text"
          placeholder="Search Pet"
          onKeyUp={search}
          id="search-pet"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="menubar">
        <i
          
          onClick={() => setMobile((prev) => !prev)}
          className={`fa-solid ${mobile ? "fa-xmark" : "fa-bars"}`}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
