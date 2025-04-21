import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MobileLogIn from "./components/IdentificationsStaff/logIn1";
import SignIn1 from "./components/IdentificationsStaff/signIn1";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";
import DashboardTable from "./components/ReUsableComponent/dashboard";
import CartProducts from "./components/UserComponents/BuyerStaff/CartProducts";
import AboutUs from "./pages/aboutUs";
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/notFound";
import SellerDashboard from "./pages/sellerDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />}>
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
      {/* Seller Dashboard with Nested Routes */}
      <Route path="/sellerDashboard" element={<SellerDashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="dashboard" element={<DashboardTable />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signIn1" element={<SignIn1 />} />
      <Route path="/logIn1" element={<MobileLogIn />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/CartProducts" element={<CartProducts />}></Route>
    </>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: false, // Added this line
    },
  }
);

function App() {
  return (
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  );
}

export default App;
