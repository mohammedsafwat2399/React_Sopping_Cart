import React from "react";
import { Link } from "react-router-dom";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";

import "./header.css";
import Card from "./Card";
import User from "./User";

const Header = () => {
  

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="log">
            <Link to="/">
              <img src={Medicine} alt="Medicine" />
            </Link>
          </div>
          <div>
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              <h2>Home</h2>
            </Link>
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
