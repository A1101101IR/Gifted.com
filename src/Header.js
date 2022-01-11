import Card from "./img/card.png";
import Search from "./img/Search.png";
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="links">
          <a href="/" className="logo">
            Gifted.
          </a>
          <a href="/">Products</a>
          <a href="/">Contact</a>
        </div>
        <div className="rightNav">
          <div className="search">
            <form action="">
              <img src={Search} width={22} />
              <input type="text" value="Search for gift cards" />
            </form>
          </div>
          <div className="login">
            <img src={Card} width={24} />
            <a href="/">Login / Singup</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
