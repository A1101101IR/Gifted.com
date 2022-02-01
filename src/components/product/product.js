import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import useFatch from "../../useFatch";
import { useNavigate } from "react-router-dom";
import ProductData from "./ProductData";
/* Här är våran product detalj sida. */

const Product = () => {
  const { id } = useParams();
  /* Här hämtar vi data */
  const {
    data: product,
    error,
    isLoading,
  } = useFatch("http://localhost:8000/products/" + id);
  /* här skapar vi const får data som vi kommer att få av användaren. */
  const [receiver, setReceiver] = useState("Name of Receiver");
  const [message, setMessage] = useState("Your message");
  const [amount, setAmount] = useState(100);
  const [receiverMail, setReceiverMail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const goToOrder = useNavigate();
  /* Här skapar vi post req och sparar nya order i vår json databas. */
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
      /* timeout för skapa visuell känsla och sedan går till order summary */
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
            <div className="giftcard-preview">
              <div className="giftcard-preview-body">
                <div className={`giftcard-preview-front  ${product.company}`}>
                  <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                  </div>
                  <span>${product.price}</span>
                </div>
                <div className={`giftcard-preview-back  ${product.company}`}>
                  <div>
                    <h1>{receiver}</h1>
                    <p>{receiverMail}</p>
                    <p>{message}</p>
                  </div>
                  <pre>${amount}</pre>
                </div>
              </div>
            </div>
            <h3>Briefly about this product</h3>
            <ul>
              <li className="category">Product value: {amount}</li>
              <li className="category">Product category: {product.category}</li>
              <li className="category">Product company: {product.company}</li>
              <li className="category">Product type: {product.type}</li>
            </ul>
          </div>
          <div className="costumer-info-box">
            <h3>Customize your digital gift card!!</h3>
            <form className="form__container" onSubmit={handleSubmit}>
              <label>For: </label>

              <input
                type="text"
                required
                placeholder="Name"
                onChange={(e) => setReceiver(e.target.value)}
              />

              <label>Receivers email: </label>
              <input
                type="email"
                required
                placeholder="Sven@svensson.se"
                onChange={(e) => setReceiverMail(e.target.value)}
              />
              <label>Value: </label>
              <input
                type="number"
                required
                step="100"
                defaultValue={product.price}
                onChange={(e) => setAmount(e.target.value)}
              />
              <label>Message: </label>
              <br />
              <textarea
                required
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <br />

              {/* <label>Your email: </label>
              <input type="email" required value={"Your@Email.com"} /> */}

              <div className="form-btn-div">
                <button className="my-btn">
                  Add background image (not available)
                </button>
                {!isPending && <button className="my-btn">Add to Card</button>}
                {isPending && (
                  <button className="my-btn" disabled>
                    Creating giftcard...
                  </button>
                )}
              </div>
            </form>
            <div className="ex-cards">
              <div className="cards">Coming soon!</div>
              <div className="cards">Coming soon!</div>
              <div className="cards">Coming soon!</div>
            </div>
          </div>
        </div>
      )}
      <div className="space-between-element">
        <h3>Gifted.com best-selling products this week! </h3>
      </div>
      <ProductData />
    </div>
  );
};

export default Product;
