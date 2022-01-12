import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
const Footer = () => {
  return (
    <div className="footer">
      <a href="/" className="logo">
        Gifted.
      </a>
      <div className="footer-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem quasi
        dolore vel. Recusandae, natus consequatur blanditiis provident magnam
        eius eos nemo, eaque fugit voluptates nesciunt earum!
      </div>
      <div className="footer-links">
        <a href="/">Contact</a>
        <a href="/">Products</a>
        <a href="/">FAQs</a>
        <a href="/">Lorem</a>
        <a href="/">About</a>
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
