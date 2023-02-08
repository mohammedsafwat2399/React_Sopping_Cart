import React from "react";
 import "./login.css";
import back from "../../assets/images/my-account.jpg";
const Regsiter = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Regsiter</h3>
              <h1>My Account </h1>
            </div>
          </div>
          <form>
            <span>Email address</span>
            <input type="text" required />
            <span>Username *</span>
            <input type="text" required />
            <span>Password *</span>
            <input type="text" required />
            <span>Confirm Password *</span>
            <input type="text" required />
            <button className="button">Regsiter</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Regsiter;
