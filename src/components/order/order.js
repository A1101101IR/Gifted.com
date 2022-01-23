import { useState, useEffect } from "react";
const Order = () => {
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/order")
      .then((res) => {
        return res.json();
      })
      .then((order) => {
        setOrder(order);
        /* console.log(order); */
      });
  }, []);
  return <div>hello</div>;
};

export default Order;
