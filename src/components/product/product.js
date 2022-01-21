import { Navigate, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useFatch from "../../useFatch";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const { product, error, isLoading } = useFatch(
    "http://localhost:8000/products/" + id
  );

  const [receiver, setReceiver] = useState("Name of Receiver");
  const [message, setMessage] = useState("Your message");
  const [amount, setAmount] = useState("100;- kr");
  const [isPending, setIsPending] = useState(false);
  const goToOrder = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { receiver, message, amount, product: [product] };
    setIsPending(true);
    fetch("http://localhost:8000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).then(() => {
      setTimeout(() => {
        setIsPending(false);
        /* skapa nåt som visas eller meddelar user vad är det som händer. */
        goToOrder("/components/order/order");
      }, 2000);
    });
  };

  return (
    <div className="product-details-container">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {/* <h2>product - {id}</h2> */}
      {product && (
        <div className="product-body">
          <div className="product-info-box">
            <div className="giftcard-preview-front">
              <h2>{product.titel}</h2>
              <p>{product.description}</p>
              <span>{product.price} ;-kr </span>
            </div>
            <h2>info about this card</h2>
            <ul>
              <li className="category">Product id: {product.id}</li>
              <li className="category">Product category: {product.category}</li>
              <li className="category">Product company: {product.company}</li>
              <li className="category">Product type: {product.type}</li>
            </ul>
          </div>
          <div className="costumer-info-box">
            <div className="giftcard-preview-back">
              <h1>{receiver}</h1>
              <p>{message}</p>
              <pre>{amount}</pre>
            </div>

            <form onSubmit={handleSubmit}>
              <label>For: </label>
              <input
                type="text"
                required
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
              <label>Message: </label>
              <br />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <label>Receivers email: </label>
              <input type="email" required />
              <label>Your email: </label>
              <input type="email" required />
              <label>Vaule: </label>
              {/* <p>"https://stackoverflow.com/questions/15615355/custom-numeric-input"</p> */}
              <input
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {!isPending && <button>Add Card</button>}
              {isPending && <button disabled>Creating giftcard...</button>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
