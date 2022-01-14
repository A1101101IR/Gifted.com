import React from "react";
import Logo from "../img/gifted.png";

const Main = () => {
  return (
    <div className="main main-columns">
      <div className="main-rows">
        <h1 className="main-element">Welcome to the world of Gift Cards</h1>
        <p className="main-element">Here you will find all your favourite experiences giftcards to offer to your friends and family for Christmas, birthdays and life's successes.</p>
        <button>Explore</button>
      </div>

      <div className="main-rows">
        <img className="main-element" src={Logo} width={400}></img>
      </div>

    </div >
  );
};

export default Main;
