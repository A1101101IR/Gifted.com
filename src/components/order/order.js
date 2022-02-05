import useFatch from "../../useFatch";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const goToOrder = useNavigate();
  /* Hämtar data för att använda senare i vår orderlist. */
  const {
    data: order,
    isLoading,
    error,
    notification,
  } = useFatch(`http://localhost:8000/order/`);
  /* skapar en delete funktion som tar bort order med delete btn */
  const handelClick = (order) => {
    fetch(`http://localhost:8000/order/${order}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Tog bort!");
      console.log("test");
    });
  };
  const sum = [];
  return (
    <div className="order-body">
      <div className="order-navbar">
        <h2>
          You have <span>{notification}</span> items in your shopping cart!{" "}
        </h2>
      </div>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {order && (
        <div className="order-list">
          {order.map((order) => (
            <div className="order-block" key={(order.id, order.product)}>
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
  );
};

export default Order;
