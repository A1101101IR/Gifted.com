import ProductData from "../product/ProductData";
import OrderData from "./OrderData";

const OrderSummary = () => {
  return (
    <div className="order-summary-container">
      <OrderData />
      <h3 className="center-text-line">Other products we recommend!</h3>
      <ProductData />
    </div>
  );
};

export default OrderSummary;
