import React from "react";
import Explore from "../components/explore/Explore";
import ProductList from "../components/product/ProductList";

const scrollToProducts = () => {
  window.scrollTo({
    top: 550,
    behavior: "smooth",
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};
const Main = () => {
  return (
    <>
      <Explore />
      <ProductList />
    </>
  );
};

export default Main;
