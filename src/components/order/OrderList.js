import { useNavigate, useParams } from "react-router-dom";
const OrderList = ({ order }) => {
  const sum = [];
  const total = "";
  const { id } = useParams();
  const goToOrder = useNavigate();
  const handelClick = () => {
    fetch("http://localhost:8000/order/" + id, {
      method: "DELETE",
    }).then(console.log(order));
  };
  return (
    <div className="order-list">
      <div className="order-navbar">
        <h1>Here is Order Summary</h1>
        <h1>Add more giftcard!</h1>
      </div>
      {order.map((order) => (
        <div className="order-block" key={(order.id, order.product)}>
          <div className="order-card">
            {order.product.map((product) => (
              <div className="card" key={product.id}>
                <h3>{product.titel}</h3>
                <p>${order.amount}</p>
                {/* {console.log(order.id)} */}
              </div>
            ))}
          </div>
          <div className="order-info">
            <ul>
              <li>Receiver: {order.receiver}</li>
              <li>Receiver mail: {order.receiverMail}</li>
              <li>Value: {order.amount}</li>
            </ul>
            <button onClick={handelClick}>Delete</button>
            <button>Edit</button>
            <span className="bugs">{sum.push(parseInt(order.amount))};</span>
          </div>
        </div>
      ))}
      <div className="order-summary-peymant">
        <h1>Subtotal: ${sum.reduce((a, v) => a + v)}</h1>
      </div>
    </div>
  );
};

export default OrderList;
