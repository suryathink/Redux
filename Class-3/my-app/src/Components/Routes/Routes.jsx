import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../ContactUs/Contact";
import Home from "../Home/Home";
import ProductDetails from "../Products/ProductDetails";
import Products from "../Products/Products";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Users from "../Users/Users";
import Input from "../Input";
import City from "../City";
import Results from "../Results";
const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/redux" element={
          <div>
            <div style={{ display: "flex" }}>
              <Input />
              <City />
            </div>
            <Results />
          </div>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default RoutesComp;
