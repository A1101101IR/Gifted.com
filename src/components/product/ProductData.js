import { useState, useEffect } from "react";
import useFatch from "../../useFatch";
import ProductList from "./ProductList";
const ProductData = () => {
  const {
    data: product,
    isLoading,
    error,
  } = useFatch("http://localhost:8000/products");
  return (
    <div>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {product && <ProductList product={product} />}
    </div>
  );
};

export default ProductData;
