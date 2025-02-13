import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import DashboardTable from "./components/dashboard";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";
import SignIn1 from "./components/signIn1";
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/notFound";
import SellerDashboard from "./pages/sellerDashboard";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/* <Route path="/sell" element={<SellComp />}></Route> */}
          <Route path="/products/:id" element={<ProductDetails />}></Route>
        </Route>
        {/* <Route path="/sell" element={<SellComp />}></Route> */}
        <Route path="/sellerDashboard" element={<SellerDashboard />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/components/dashboard" element={<DashboardTable />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signIn1" element={<SignIn1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
