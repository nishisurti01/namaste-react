import { useState, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Usercontext from "../Utils/UserContext";

//Header Component

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedinUser} = useContext(Usercontext);
  return (
    <div className="flex bg-yellow-200">
      <div className="logo_container">
        <img className="w-64" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between p-4 m-4">
          <Link to="/grocery">
            <li className="px-4">Grocery</li>
          </Link>
          <li className="px-4">Online Status : {onlineStatus ? "Online" : "Offline"}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About Us</li>
          </Link>
          <li className="px-4" >Contact Us</li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
