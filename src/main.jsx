import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs.jsx";
import Cart from "./pages/Cart.jsx";
import MangaShop from "./pages/MangaShop.jsx";
import Post from "./pages/Post.jsx";
import Shop from "./pages/Shop.jsx";
import Novita from "./pages/Novita.jsx";
import Login from "./pages/Login.jsx";
import AxiosProvider from "./context/AxiosProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AxiosProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/novita" element={<Novita />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/manga" element={<MangaShop />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AxiosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
