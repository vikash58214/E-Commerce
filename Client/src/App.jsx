import React from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
import Tshirt from "./pages/Tshirt";
import Mug from "./pages/Mug";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import File from "./pages/File";
import OverView from "./pages/OverView";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ViewOrders from "./pages/ViewOrders";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allorders" element={<ViewOrders />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/tshirt" element={<Tshirt />} />
        <Route path="/mug" element={<Mug />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/overView/:productID" element={<OverView />} />
        <Route path="/file" element={<File />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
