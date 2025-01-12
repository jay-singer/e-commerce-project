import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import DashboardTable from "./components/dashboard";
import Products from "./components/products";
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/notFound";
import SellComp from "./pages/sell";
import SellerDashboard from "./pages/sellerDashboard";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/* <Route path="/sell" element={<SellComp />}></Route> */}
        </Route>
        <Route path="/sell" element={<SellComp />}></Route>
        <Route path="/sellDashboard" element={<SellerDashboard />}></Route>
        <Route path="/products" element={<Products />} />

        <Route path="/components/dashboard" element={<DashboardTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
