import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authtActions } from "../../store/authSlice";
import back from "../../assets/images/my-account.jpg";
import "./login.css";


const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authtActions.logIn());
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My Account </h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <span> Username orEmail address</span>
            <input type="text" required />
            <span>Password *</span>
            <input type="Password" required />
            <button className="button">Login in </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
