import { Link } from "react-router-dom";
import Navicon from "../../img/navicon.png";
import React, { useState, useEffect } from "react";

/* Header components som har Navbar och login/signup inuti */
export default function Navbar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  /* Använder useEffect för att hålla koll på sidas bredd */
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  /* returnerar header med dess innehåll */
  return (
    <div className="header">
      <div className="logo-btn">
        <Link to="/" className="toggle-btn logo">
          Gifted.
        </Link>
        <div className="toggle-btn">
          <img onClick={toggleNav} src={Navicon} width={36} />
        </div>
      </div>
      {(toggleMenu || screenWidth > 768) && (
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className="link logo">
                Gifted.
              </Link>
            </li>
            <li>
              <Link to="pages/products" className="link">
                Products
              </Link>
            </li>
            <li>
              <Link to="pages/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="login">
            <Link to="pages/login" className="link">
              Login
            </Link>
            <Link to="pages/signup" className="link">
              Sign up
            </Link>
            <Link to="components/order/Order" className="link">
              {/* <img className="shopping-card-icon" src={Card} width={30} /> */}
              <span className="newOrder">{props.orderNotis}</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
