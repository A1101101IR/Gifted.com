import { useState, useEffect } from "react";
import useFatch from "../../useFatch";
import OrderList from "./OrderList";
const OrderData = () => {
  const {
    data: order,
    isLoading,
    error,
  } = useFatch("http://localhost:8000/order");

  return (
    <div className="main">
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {order && <OrderList order={order} />}
    </div>
  );
};

export default OrderData;
