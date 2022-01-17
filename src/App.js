import Footer from "./components/footer";
import Header from "./components/header/Header";
import Main from "./pages/main";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Login from "./pages/login";
import Singup from "./pages/signup";
import { Routes, Route } from "react-router-dom";

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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
