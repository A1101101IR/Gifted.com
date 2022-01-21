import { Link } from "react-router-dom";
/* import ProductData from "./ProductData"; */
const ProductList = ({ product }) => {
  return (
    <div className="product-list">
      {product.map((product) => (
        <div className="products-card-sm" key={product.id}>
          <Link to={`/pages/products/${product.id}`}>
            <h2>{product.titel}</h2>
            <p>{product.description}</p>
            <span>{product.price} ;-kr</span>
            <br />
            <button>Test</button>
            <button>Detalis</button>
            <button>buy</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
