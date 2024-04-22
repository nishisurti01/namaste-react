import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

//Header Component

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/grocery">
            <li>Grocery</li>
          </Link>
          <li>Online Status : {onlineStatus ? "Online" : "Offline"}</li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
