import Main from "./pages/main";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Footer from "./components/footer";
import Order from "./components/order/order";
import Header from "./components/header/Header";
import Product from "./components/product/product";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  /* Fetch order and set orderNotis to order.lenght */
  const [orderNotis, setOrderNotis] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/order")
      .then((res) => res.json())
      .then((data) => {
        setOrderNotis(data.length);
      });
  }, []);
  /* Fetch order and set orderNotis to order.lenght when user buy item or delete one */
  const handleReload = () => {
    fetch("http://localhost:8000/order")
      .then((res) => res.json())
      .then((data) => setOrderNotis(data.length));
    /* .then(() => console.log("Order data is reloaded!")); */
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
            element={
              <Order handleReload={handleReload} orderNotis={orderNotis} />
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
