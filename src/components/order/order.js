import { useEffect, useState } from "react";
import ProductList from "../product/ProductList";

const Order = (props) => {
  const sum = [];
  /* Fetch order data from API and setOrder to fetched data */
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/order")
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, []);

  /* Delete function for each order, after deleting order, order will be fetched again and setOrder to new data */
  const handelClick = (order) => {
    fetch(`http://localhost:8000/order/${order}`, {
      method: "DELETE",
    }).then(() => {
      /* console.log("Deleted Order!"); */
      fetch("http://localhost:8000/order")
        .then((res) => res.json())
        .then((data) => {
          setOrder(data);
        })
        .then((data) => {
          props.handleReload("reload!");
        });
    });
  };

  return (
    <div className="order-summary-container">
      <div className="order-body">
        <div className="order-navbar">
          <h2>
            You have <span>{props.orderNotis}</span> items in your shopping
            cart!
          </h2>
        </div>
        {/* {error && <h2>{error}</h2>}
        {isLoading && <h2>Loading...</h2>} */}
        {order && (
          <div className="order-list">
            {order.map((order) => (
              <div className="order-block" key={order.id}>
                <div className="order-card">
                  {order.product.map((product) => (
                    <div className={`card ${product.company}`} key={product.id}>
                      <h3>{product.title}</h3>
                      <p>${order.amount}</p>
                    </div>
                  ))}
                </div>
                <div className="order-info">
                  <ul>
                    <li>Receiver: {order.receiver}</li>
                    <li>Receiver mail: {order.receiverMail}</li>
                    <li>Value: {order.amount}</li>
                  </ul>
                  <button
                    className="my-btn"
                    onClick={() => handelClick(order.id)}
                  >
                    Delete
                  </button>
                  <span className="bugs">
                    {sum.push(parseInt(order.amount))};
                  </span>
                </div>
              </div>
            ))}
            <div className="order-summary-payment">
              <h3>Subtotal: ${sum.reduce((a, v) => a + v)}</h3>
              <button className="my-btn">
                Checkout ${sum.reduce((a, v) => a + v)}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="space-between-element">
        <h3>Other products we recommend!</h3>
      </div>
      <ProductList />
    </div>
  );
};

export default Order;
