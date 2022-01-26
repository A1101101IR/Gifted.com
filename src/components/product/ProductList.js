import { Link } from "react-router-dom";
/* import ProductData from "./ProductData"; */
const ProductList = ({ product }) => {
  return (
    <div className="product-list">
      {product.map((product) => (
        <div className={`products-card-sm ${product.company}`} key={product.id}>
          <div className="product-info-before">
            <h2>{product.titel}</h2>
<<<<<<< HEAD
            <p>{product.description}</p>
            <span>{product.price} ;-kr</span>
            <br />
            <button>Details</button>
            <button>buy</button>
          </Link>
=======
            <p>{product.description.substring(0, 125)}...</p>
          </div>
          <div className="product-pris-btn">
            <span>${product.price}</span>
            <Link to={`/pages/products/${product.id}`}>
              <button className="my-btn">Detalis</button>
            </Link>
          </div>
>>>>>>> 54721da2be6316f2c72da1d53138d1a1b667c86a
        </div>
      ))}
    </div>
  );
};

export default ProductList;
