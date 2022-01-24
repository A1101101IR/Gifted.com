import React from "react";
import Logo from "../img/gifted.png";
import ProductSearch from "./SearchBar.js"
/* import ProductDetails from "../components/product/product";
import ProductList from "../components/product/ProductList"; */
/* import ProductData from "../components/product/ProductData"; */
/* import ProductList from "../components/product/ProductList"; */
import ProductData from "../components/product/ProductData";

const scrollToTop = () => {
  window.scrollTo({
    top: 550,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

const Main = () => {
  return (
    <div className="main main-columns">
      <div className="main-rows">
        <h1 className="main-element">Welcome to the world of Gift Cards</h1>
        <p className="main-element">
          Here you will find all your favourite experiences giftcards to offer
          to your friends and family for Christmas, birthdays and life's
          successes.
        </p>

        <button onClick={scrollToTop}>Jump into our world of gift cards</button>
      </div>

      <div className="main-rows">
        <img className="main-element" src={Logo} width={400}></img>
      </div>
      <ProductSearch />
    </div >
  );
};

export default Main;
