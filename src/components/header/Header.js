import React, { useState, useEffect } from "react";
import Search from "../../img/Search.png";
import Navicon from "../../img/navicon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="header">
      <div className="logo-btn">
        <Link to="/" className="link logo">
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

          <div className="search">
            <form action="">
              <img src={Search} width={22} />
              <input type="text" value="Search for gift cards" />
            </form>
          </div>

          <div className="login">
            <Link to="pages/login" className="link">
              Login
            </Link>
            <Link to="pages/singup" className="link">
              Singup
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
