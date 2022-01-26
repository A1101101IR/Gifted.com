import React from "react";
import Logo from "../img/gifted.png";
import SearchBar from "./SearchBar";
import Explore from "../components/explore/Explore";

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
      <Explore />
      <SearchBar />
    </div>
  );
};

export default Main;
