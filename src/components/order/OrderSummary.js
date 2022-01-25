import ProductData from "../product/ProductData";
import Order from "./order";
import useFatch from "../../useFatch";

const OrderSummary = () => {
  const { data: product } = useFatch("http://localhost:8000/products");
  return (
    <div className="order-summary-container">
      <Order />
      <div className="space-between-element">
        <h3>Other products we recommend!</h3>
      </div>
      <ProductData />
    </div>
  );
};

export default OrderSummary;
