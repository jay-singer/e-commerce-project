import axios from "axios";
import { useEffect, useState } from "react";
import {
	MdLogout,
	MdSettings,
	MdShoppingBag,
	MdShoppingCart,
	MdSpaceDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "../allCSS/dashboard.css";
import Products from "./../components/products";
import UpdatedNumbers from "./../components/ReUsableComponent/availableNumber";
import Button from "./../components/ReUsableComponent/button";
import DashboardTable from "./../components/ReUsableComponent/dashboard";
import CreateNewProducts from "./../components/UserComponents/SellerStaff/createNewProduct";
import { deleteProduct, getSessionToken, updateProduct } from "../components/utilities/utlilities";
import { useForm } from "react-hook-form";
import Updateproduct from "../components/productComp/updateproduct";

const SellerDashboard = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [componentChange, setComponentChange] = useState("dashboard");
	const [changeSection, setChangeSection] = useState("");
	const [productsNumber, setProductNumber] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	    const [editingProduct, setEditingProduct] = useState(null);


	const [showUpdateForm, setShowUpdateForm] = useState(false);

	//getting token by using utilities function
	const token = getSessionToken();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 720);
		};

		const handleScroll = () => {
			setShadow(window.scrollY > 0);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Fetch Products
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(
					"https://e-commerce-backend-b8fd.onrender.com/api/getProducts",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const fetchedProducts = response.data;
				setProducts(fetchedProducts);
				setProductNumber(fetchedProducts.length);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		};

		if (token) fetchProducts();
	}, [token]);

	// Reset form when editing

	

	// Delete
	const handleDelete = async (id) => {
		try {
			await deleteProduct(id);
			setProducts(products.filter((p) => p._id !== id));
			setProductNumber((prev) => prev - 1);
		} catch (err) {
			console.error(err);
		}
	};

	// Update
	const openUpdateForm = (product) => {
		setEditingProduct(product);
		setShowUpdateForm(true);
	};



	return (
		<>
			{/* Update Modal */}
			{showUpdateForm && (
				<Updateproduct editingProduct={editingProduct} setShowUpdateForm= {setShowUpdateForm} setEditingProduct={setEditingProduct} />

			)}

			{/* KEEP REST OF YOUR UI EXACTLY SAME */}
			{/* (No change below this line except logic already fixed above) */}

			<div className="flex">
				{/* Sidebar */}
				<div
					className={`bg-white ${
						isMobile
							? "fixed bottom-0 left-0 right-0 flex justify-around py-2 z-50 "
							: `sidebar fixed z-20 ${isHovered ? "" : "collapsedSideBar"}`
					}`}
					onMouseEnter={() => !isMobile && setIsHovered(true)}
					onMouseLeave={() => !isMobile && setIsHovered(false)}
				>
					<nav className={`${isMobile ? "flex justify-evenly w-full bg-white" : "flex flex-col space-y-2 py-10 px-2"}`}>
						<button onClick={() => setComponentChange("dashboard")} className={`sideBarButton p-2 rounded ${componentChange === "dashboard" ? "bg-gray-300" : "hover:bg-gray-300"}`}>
							<MdSpaceDashboard className="size-6" />
							{!isMobile && <span className="sideBarLabel">Dashboard</span>}
						</button>

						<button onClick={() => setComponentChange("order")} className="sideBarButton p-2 rounded hover:bg-gray-300">
							<MdShoppingCart className="size-6" />
							{!isMobile && <span className="sideBarLabel">Order</span>}
						</button>

						<button onClick={() => setComponentChange("products")} className="sideBarButton p-2 rounded hover:bg-gray-300">
							<MdShoppingBag className="size-6" />
							{!isMobile && <span className="sideBarLabel">Products</span>}
						</button>

						<Link to="/settings" className="p-2 rounded sideBarButton hover:bg-gray-300">
							<MdSettings className="size-6" />
							{!isMobile && <span className="sideBarLabel">Settings</span>}
						</Link>

						<Link to="/logout" className="p-2 rounded sideBarButton text-red-400">
							<MdLogout className="size-6" />
							{!isMobile && <span className="sideBarLabel">Log Out</span>}
						</Link>
					</nav>
				</div>

				{/* Main */}
				<div className="flex-1 pb-96 md:ml-[56px] ml-2 me-2 max-w-[1440px]">
					<div className={`bg-slate-100 flex sticky top-0 justify-end pe-10 py-2 ${shadow ? "shadow-md" : ""}`}>
						<Link to="/">Back</Link>
						<Link to="/">Home</Link>
					</div>

					<div className="flex">
						<div className="flex-1 md:p-6">
							{changeSection === "createProduct" ? (
								<CreateNewProducts changeSection={changeSection} setChangeSection={setChangeSection} />
							) : (
								<>
									<UpdatedNumbers availableNumber={productsNumber} />

									{componentChange === "dashboard" && (
										<DashboardTable productsData={products} loading={loading} />
									)}

									{componentChange === "products" && (
										<div className="mt-4">
											<button onClick={() => setChangeSection("createProduct")}>
												<Button data={"+ Add product"} width={"w-fit"} />
											</button>

											<Products
												onDelete={handleDelete}
												onUpdate={openUpdateForm}
												conditionState={"Dashboard"}
												productsData={products}
												componentStyleData={{
													componentName: " All products you have ",
													componentMarginLarg: " ",
												}}
											/>
										</div>
									)}

									{componentChange === "order" && (
										<DashboardTable productsData={products} loading={loading} />
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SellerDashboard;