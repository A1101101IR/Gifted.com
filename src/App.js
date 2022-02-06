import { useEffect } from "react/cjs/react.development";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header/Header";
import Main from "./pages/main";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Product from "./components/product/product";
import OrderList from "./components/order/order";
import OrderSummary from "./components/order/OrderSummary";
import Order from "./components/order/order";

function App() {
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/order")
      .then((res) => res.json())
      .then((data) => {
        setOrderNotis(data.length);
        setOrder(data);
      });
  }, []);

  const [orderNotis, setOrderNotis] = useState();
  const handleReload = () => {
    console.log("order was fetched!");
    fetch("http://localhost:8000/order")
      .then((res) => res.json())
      .then((data) => setOrderNotis(data.length));
  };

  return (
    <div className="App">
      <Header orderNotis={orderNotis} />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/pages/products" element={<Products />}></Route>
          <Route path="/pages/contact" element={<Contact />}></Route>
          <Route path="/pages/login" element={<Login />}></Route>
          <Route path="/pages/signup" element={<Signup />}></Route>
          <Route
            path="/pages/products/:id"
            element={<Product handleReload={handleReload} />}
          ></Route>
          <Route
            path="/components/order/order"
            element={<Order handleReload={handleReload} />}
          ></Route>
          <Route
            path="/components/order/ordersummary"
            element={<OrderSummary />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
