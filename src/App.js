import Footer from "./components/footer";
import Header from "./components/header/Header";
import Main from "./pages/main";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Login from "./pages/Login";
import Singup from "./pages/signup";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product/product";
import OrderList from "./components/order/order";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/pages/products" element={<Products />}></Route>
          <Route path="/pages/contact" element={<Contact />}></Route>
          <Route path="/pages/login" element={<Login />}></Route>
          <Route path="/pages/singup" element={<Singup />}></Route>
          <Route path="/pages/products/:id" element={<Product />}></Route>
          <Route path="/components/order/order" element={<OrderList />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
