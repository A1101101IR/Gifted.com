import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import useFatch from "../../useFatch";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const {
    data: product,
    error,
    isLoading,
  } = useFatch("http://localhost:8000/products/" + id);
  const [receiver, setReceiver] = useState("Name of Receiver");
  const [message, setMessage] = useState("Your message");
  const [amount, setAmount] = useState(100);
  const [receiverMail, setReceiverMail] = useState();
  const [isPending, setIsPending] = useState(false);
  const goToOrder = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      receiver,
      message,
      receiverMail,
      amount,
      product: [product],
    };

    setIsPending(true);

    fetch("http://localhost:8000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).then(() => {
      setTimeout(() => {
        setIsPending(false);
        goToOrder("/components/order/ordersummary");
      }, 2000);
    });
  };

  return (
    <div className="product-details-container">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {product && (
        <div className="product-body">
          <div className="product-info-box">
            <div className="giftcard-preview-front">
              <div>
                <h2>{product.titel}</h2>
                <p>{product.description}</p>
              </div>
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
              <div>
                <h1>{receiver}</h1>
                <p>{receiverMail}</p>
                <p>{message}</p>
              </div>
              <pre>{amount}</pre>
            </div>

            <form onSubmit={handleSubmit}>
              <label>For: </label>
              <input
                type="text"
                required
                defaultValue={"Sven Svensson"}
                onChange={(e) => setReceiver(e.target.value)}
              />

              <label>Message: </label>
              <br />
              <textarea
                required
                defaultValue={
                  "Grattis på namnsdagen! Jag hoppas att du har en riktigt fin namnsdag!"
                }
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <br />

              <label>Receivers email: </label>
              <input
                type="email"
                required
                defaultValue={"Sven@Svensson.se"}
                onChange={(e) => setReceiverMail(e.target.value)}
              />

              <label>Your email: </label>
              <input type="email" required value={"Your@Email.com"} />

              <label>Vaule: </label>
              <input
                type="number"
                required
                defaultValue={100}
                onChange={(e) => setAmount(e.target.value)}
              />

              {!isPending && <button className="my-btn">Add to Card</button>}
              {isPending && (
                <button className="my-btn" disabled>
                  Creating giftcard...
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
