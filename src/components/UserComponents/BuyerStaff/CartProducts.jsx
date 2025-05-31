import axios from "axios";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import AddToCartForm from "../../ReUsableComponent/addCartProduct";
import Button from "./../../ReUsableComponent/button";

const CartProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Qunty, setQuanty] = useState(0);
  const [amount, setAmount] = useState(0);
  const [openForm, setOpen] = useState(false);
  const [product, setproduct] = useState({});
  const [productNum, setProductNum] = useState(0);
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-commerce-backend-b8fd.onrender.com/api/getProducts"
        );
        const allProducts = response.data;

        const storedCart = JSON.parse(localStorage.getItem("productId")) || [];

        const matchedProducts = storedCart
          .map((cartItem) => {
            const matchedProduct = allProducts.find(
              (product) => product._id === cartItem.id
            );
            if (matchedProduct) {
              return {
                ...matchedProduct,
                quantity: cartItem.quantity,
              };
            }
            return null;
          })
          .filter(Boolean);
        setProductNum(productNum);
        setProducts(matchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productNum]);

  // Recalculate total quantity and amount
  useEffect(() => {
    const totalQty = products.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmt = products.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setQuanty(totalQty);
    setAmount(totalAmt);
    setProductNum(productNum);
  }, [products, productNum]);

  // Update localStorage whenever quantity changes
  const updateLocalStorage = (updatedProducts) => {
    const cartData = updatedProducts.map((p) => ({
      id: p._id,
      quantity: p.quantity,
    }));
    localStorage.setItem("productId", JSON.stringify(cartData));
  };
  //Opening form for adding quantity
  const openingCartForm = (data) => {
    setproduct(data);

    setOpen((prevState) => !prevState);
  };

  const updateQuantity = (id, delta) => {
    const updated = products.map((item) => {
      if (item._id === id) {
        const newQty = Math.max(item.quantity + delta, 1); // prevent < 1
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setProducts(updated);
    updateLocalStorage(updated);
  };

  if (loading)
    return (
      <div className="text-center mt-10">
        <TailSpin height="50" width="50" color="#4fa94d" radius="1" visible />
      </div>
    );

  return (
    <div className="md:flex flex-col-reverse  w-full md:mt-[166px] max-w-[1100px] md:justify-between h-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-0 md:gap-4 mb-4 max-w-[720px]">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products in your cart.
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="mx-2 mb-3 md:m-0 shadow-md lg:w-[300px] xl:w-[230px] 
                 flex flex-col gap-2 overflow-hidden rounded-lg 
                 bg-white transition-transform transform md:hover:scale-105 md:hover:shadow-xl shadow-gray-400 -z-1"
            >
              <img
                src={product.productImage}
                alt={product.productName}
                className="object-center object-cover transition-transform duration-300 md:h-[200px] w-full h-[150px]"
              />
              <div className="mt-2 flex px-2 gap-3 justify-between">
                <div className="bg-white w-full flex flex-col justify-start">
                  <h3 className="text-lg font-semibold">
                    {product.productName}
                  </h3>
                  <div className="mt-2 text-sm text-gray-600">
                    Quantity: {product.quantity}
                  </div>
                  <p className="text-navColor">{product.price} Rwf</p>
                </div>

                <div className="flex gap-2 flex-col w-[40%]">
                  <button
                    onClick={() => {
                      const data = {
                        product_id: product._id,
                        productName: product.productName,
                      };

                      openingCartForm(data);
                    }}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    -
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Section */}
      <div className="md:w-[20%] self-start">
        <div className="p-2">
          <span className="mr-5 text-black font-semibold">Total Qnty:</span>
          <span className="text-navColor font-medium">{Qunty}</span>
        </div>
        <div className="p-2">
          <span className="mr-5 text-black font-semibold">Total price:</span>
          <span className="text-navColor font-medium">{amount} Rwf</span>
        </div>

        <button className="w-full">
          <Button data={"Check out"} />
        </button>
      </div>
      <>
        {openForm && (
          <AddToCartForm
            product={product}
            openingCartForm={openingCartForm}
            productNum={productNum}
          />
        )}
      </>
    </div>
  );
};

export default CartProducts;
