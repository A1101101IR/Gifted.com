import Card from "../img/card.png";
import Search from "../img/Search.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="links">
          <nav>
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
          </nav>
        </div>
        <div className="rightNav">
          <div className="search">
            <form action="">
              <img src={Search} width={22} />
              <input type="text" value="Search for gift cards" />
            </form>
          </div>
          <div className="login">
            <Link to="pages/login" className="link">
              Login
            </Link>{" "}
            /
            <Link to="pages/singup" className="link">
              Singup
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
