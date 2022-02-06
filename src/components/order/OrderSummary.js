import ProductData from "../product/ProductData";
import Order from "./order";
/* skapar OrderSummaru som visar alla order och rekomenderar mera produkt. */
const OrderSummary = (handleReload) => {
  return (
    <div className="order-summary-container">
      {/* bugs note, När order summary är tom, sidan loads inte, måste fixas sen. */}
      <Order handleReload={handleReload} />
      <div className="space-between-element">
        <h3>Other products we recommend!</h3>
      </div>
      <ProductData />
    </div>
  );
};

export default OrderSummary;
