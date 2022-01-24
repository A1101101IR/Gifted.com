import React, { useState } from 'react';
import products from '../db.js';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        products.filter((product) => {
            return product.title.match(searchInput);
        });
    }

    return <div>

        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />

        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>

            {products.map((product, index) => {
                <div>
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                    </tr>
                </div>
            })}
        </table>
    </div>
};


export default SearchBar;