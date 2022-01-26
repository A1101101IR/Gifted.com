import React from "react";
import Logo from "../img/gifted.png";
import SearchBar from "./SearchBar";

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
    <div>
      <SearchBar />
    </div>
  );
};

export default Main;
