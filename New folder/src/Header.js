import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import logo from "./logo.jpeg"
function Header() {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <div className="header">
      
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt=""
        />

      </Link>
      
      <Link to="/"><div className="header_item5">
         <h4> Home</h4>
        </div>
        </Link>
      <Link to="/about"><div className="header_item5">
         <h4> About</h4>
        </div>
        </Link>
        <Link to="/services"><div className="header_item5">
        <h4>Services</h4>
        </div>
        </Link>
        <Link to="/contact"><div className="header_item5">
        <h4>ContactUs</h4>
        </div>
        </Link>
       
        <div className="header_item1">
          {isAuthenticated ? (
            <button className="btn_1"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button className="btn_1" onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </div>
      </div>
  );
}

export default Header;
