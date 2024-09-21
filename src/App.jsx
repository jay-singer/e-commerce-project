import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
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
          <Route path="/sell" element={<SellComp />} />
        </Route>
        <Route path="/sellerDashboard" element={<SellerDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
