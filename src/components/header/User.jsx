import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authtActions } from "../../store/authSlice";
   import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";


const User = () => {
  const dispatch = useDispatch();
  const logoutHandel = () => {
    dispatch(authtActions.logOut());
  };
  const user = true;
  const [profilofileOpen, setProfiloFileOpen] = useState(false);
  const close = () => {
    setProfiloFileOpen(null);
  };

  return (
    <div className="profile">
      {user ? (
        <>
          <button
            className="img"
            onClick={() => setProfiloFileOpen(!profilofileOpen)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png'"
              alt=""
            />
          </button>
          {profilofileOpen && (
            <div className="openPrefile boxItems" onClick={close}>
              <div className="image">
                  <div className="img">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png'"
                      alt=""
                    />
                  </div>
               

                <div className="text">
                  <h4>mohammed safwat</h4>
                  <label htmlFor="">Egept maina</label>
                </div>
              </div>
              <Link to="/login">
                <button className="box">
                  <IoSettingsOutline className="icon" />
                  <h4>My Account</h4>
                </button>
              </Link>

              
              
              <button className="box" onClick={logoutHandel}>
                <BiLogOut className="icon" />
                <h4>log Out</h4>
              </button>
            </div>
          )}
        </>
      ) : (
        <button>My Account</button>
      )}
    </div>
  );
};
export default User;
