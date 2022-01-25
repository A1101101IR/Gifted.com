import React from "react";
/* import Explore from "../components/explore/Explore"; */
import ProductData from "../components/product/ProductData";
import Logo from "../img/gifted.png";

const Products = () => {
  return (
    <div className="main-content">
      {/* <div className="main shop">
        <h1 className="page-title">Products</h1>
      </div> */}

      <div>
        <div className="main-products">
          <div className="product">A treehotel night</div>
          <div className="product">A night at the museum</div>
          <div className="product">A cooking lesson</div>
          <div className="product">A massage at the SPA</div>
          <div className="product">A night at the opera</div>
          <div className="product">A football game</div>
        </div>

        <ProductData />
      </div>
    </div>
  );
};

export default Products;
