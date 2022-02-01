import { Link } from "react-router-dom";
/* Här skapar vi en templete för våra product cards som visas på sidan. */
const ProductList = ({ product }) => {
  return (
    <div className="product-list">
      {product.slice(0, 12).map((product) => (
        <div className={`products-card-sm ${product.company}`} key={product.id}>
          <div className="product-info-before">
            <h2>{product.title}</h2>
            <p>{product.description.substring(0, 125)}...</p>
          </div>
          <div className="product-pris-btn">
            <span>${product.price}</span>
            <Link to={`/pages/products/${product.id}`}>
              <button className="my-btn">Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
