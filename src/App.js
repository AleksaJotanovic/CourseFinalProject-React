import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Category from "./components/Category";
import Product from "./components/Product";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ShoppingCart from "./components/ShoppingCart";
import ProductOrder from "./components/ProductOrder";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="category" element={<Category />} />
        </Route>
        <Route path="/shop/category/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product-order" element={<ProductOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
