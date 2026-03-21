import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // make sure css is imported
import "./App.css";

import BlogDetails from "./components/blogDetals";
import MobileLogIn from "./components/IdentificationsStaff/logIn1";
import SignForm from "./components/IdentificationsStaff/signIn";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";
import DashboardTable from "./components/ReUsableComponent/dashboard";
import CartProducts from "./components/UserComponents/BuyerStaff/CartProducts";
import AboutUs from "./pages/aboutUs";
import Blog from "./pages/Blog";
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/notFound";
import SellerDashboard from "./pages/sellerDashboard";
import Shop from "./pages/shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />}>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/CartProducts" element={<CartProducts />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/SingleBlog/:id" element={<BlogDetails />} />
      </Route>

      {/* Seller Dashboard with Nested Routes */}
      <Route path="/sellerDashboard" element={<SellerDashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/dashboard" element={<DashboardTable />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signIn" element={<SignForm />} />
      <Route path="/logIn1" element={<MobileLogIn />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: false,
    },
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* ✅ ToastContainer outside router, works globally */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
