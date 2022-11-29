import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/singleproduct/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  )
};

export default App;
