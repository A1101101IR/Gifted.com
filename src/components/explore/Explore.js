import Logo from "../../img/gifted.png";
import ProductData from "../product/ProductData";
import { Link } from "react-router-dom";

/* This is a function to scroll to the shop */
const scrollToShop = () => {
  window.scrollTo({
    top: 550,
    behavior: 'smooth'

  });
};

/* This is the main explore page */

const Explore = () => {
  return (
    <div className="Explore-container">
      <div className="Explore-left">
        <h1 className="main-element">Welcome to the world of Gift Cards</h1>
        <p className="main-element">
          Here you will find all your favourite experiences giftcards to offer
          to your friends and family for Christmas, birthdays and life's
          successes.
        </p>
        <div>

          <button onClick={scrollToShop}>Explore</button>

        </div>
      </div>

      <div className="Explore-right">
        <img className="main-element" src={Logo} width={400}></img>
      </div>
    </div>
  );
};

export default Explore;
