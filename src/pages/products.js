import React from 'react';
import JSONDATA from '../db.json'
import { useState } from 'react';
import css from './products.css';

function Products() {

  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="products">
      <input
        type="text"
        placeholder="Search Products"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.title} </p>
          </div>
        );

      })}
    </div>

  );


}

export default Products;
