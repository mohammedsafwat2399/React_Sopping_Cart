import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="boxItems">
      <div className="container flex">
        <p>
          Cartsy Medicing All right reserved - Design $ Developerd by Redq ,Inc
        </p>
        <div className="social">
          <AiFillLinkedin className="icon" />
          <BsFacebook className="icon" />
          <RiInstagramFill className="icon" />
          <AiFillTwitterCircle className="icon" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
