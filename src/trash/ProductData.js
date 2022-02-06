import SearchBar from "../../pages/SearchBar";
import useFatch from "../../useFatch";
import Product from "../product/product";
import ProductList from "../product/ProductList";
/* Här hämtar vi data för att mappa genom product cards */
const ProductData = () => {
  const {
    data: product,
    isLoading,
    error,
  } = useFatch("http://localhost:8000/products");
  return (
    <div className="main">
      {/* {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {product && <ProductList product={product} />} */}
    </div>
  );
};

export default ProductData;
