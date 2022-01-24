import React, { useState } from "react";
import "./products.css";
import products from "./products.json";

function App() {
    const [search, setNewSearch] = useState('')

    const handleSearchChange = (e) => {
        e.preventDefault();
        setNewSearch(e.target.value);
    };

    const filtered = !search
        ? products
        : products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()) || product.company.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div className="main shop">
            <h2 className="page-title">Products</h2>
            <div className="page-title">Filter products: {""}
                <input type="text" className="ui search" value={search} onChange={handleSearchChange} /></div>
            <h2 className="page-title">Gift cards</h2>

            <div className="main-products">
                {filtered.map((product) => {
                    return (


                        <div className="product">
                            <p key={product.id} >
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p>{product.category}</p>
                                <p>{product.company}</p>
                                <p>{product.price}</p>
                            </p>
                        </div>


                    );
                })}
            </div>
        </div>
    );
};

export default App;