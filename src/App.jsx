import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MobileLogIn from "./components/IdentificationsStaff/logIn1";
import SignForm from "./components/IdentificationsStaff/signIn";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";
import DashboardTable from "./components/ReUsableComponent/dashboard";
import CartProducts from "./components/UserComponents/BuyerStaff/CartProducts";
import AboutUs from "./pages/aboutUs";
import ElecronicMaterial from "./pages/categories/ElecronicMaterial";
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/notFound";
import SellerDashboard from "./pages/sellerDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />}>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/CartProducts" element={<CartProducts />}></Route>
        {/* <Route
          path="/ElecronicMaterial"
          element={<ElecronicMaterial />}
        ></Route> */}
      </Route>
      {/** Electronic site */}
      <Route path="/ElecronicMaterial" element={<ElecronicMaterial />}></Route>
      {/* Seller Dashboard with Nested Routes */}
      <Route path="/sellerDashboard" element={<SellerDashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="dashboard" element={<DashboardTable />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signIn" element={<SignForm />} />
      <Route path="/logIn1" element={<MobileLogIn />} />
      <Route path="/aboutUs" element={<AboutUs />} />
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
