import React, { useState } from "react";
import useFatch from "../useFatch";
import { Link } from "react-router-dom";
import "./products.css";
function SearchBar() {
  const {
    data: product,
    isLoading,
    error,
  } = useFatch("http://localhost:8000/products");
  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    e.preventDefault();
    setNewSearch(e.target.value);
  };
  const filtered = !search
    ? product
    : product.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()) ||
          product.company.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="main shop">
      {/* <h2 className="page-title">Products</h2> */}
      <div className="page-title">
        <div className="search-bar">
          <span>Search for gift cards: {""}</span>
          <input
            type="text"
            className="search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {/* <h2 className="page-title">Gift cards</h2> */}
      <div className="product-list">
        {error && <h2>{error}</h2>}
        {isLoading && <h2>Loading...</h2>}
        {product &&
          filtered.slice(0, 12).map((product) => (
            <div
              className={`products-card-sm ${product.company}`}
              key={product.id}
            >
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
    </div>
  );
}

export default SearchBar;
