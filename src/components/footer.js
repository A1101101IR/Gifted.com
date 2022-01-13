import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="link logo">
        Gifted.
      </Link>
      <div className="footer-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem quasi
        dolore vel. Recusandae, natus consequatur blanditiis provident magnam
        eius eos nemo, eaque fugit voluptates nesciunt earum!
      </div>
      <div className="footer-links">
        <nav>
          <ul>
            <li></li>
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
            <li>
              <Link to="/" className="link">
                Lorem
              </Link>
            </li>
            <li>
              <Link to="pages/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="pages/singup" className="link">
                Singup
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social-icons">
        <a href="">
          <img src={Facebook} width={40} />
        </a>
        <a href="">
          <img src={Instagram} width={40} />
        </a>
        <a href="">
          <img src={Twitter} width={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
