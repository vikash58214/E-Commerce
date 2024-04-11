import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const OverView = () => {
  const userID = window.localStorage.getItem("userID");
  const { productID } = useParams();
  const [viewProduct, setViewProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${window.location.origin}/product/${productID}`
        );
        setViewProduct(response.data.product);
        console.log(viewProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const addToCart = async (productID) => {
    const response = await axios.post("${window.location.origin}/cart", {
      productID: productID,
      userID: userID,
      quantity: quantity,
    });

    window.alert(response.data.message);
    window.location.reload();
  };
  return (
    <>
      <div className="flex justify-center font-serif">
        <div className="md:flex md:w-10/12 w-11/12 mb-10 mt-5">
          <div className="flex justify-center w-11/12">
            <img className="w-10/12" src={viewProduct.image} alt="tshirt" />
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-serif font-bold  text-cyan-950">
                {viewProduct.name}
              </h1>
              <h3 className="3xl font-serif font-bold text-gray-600">
                ${viewProduct.price}
              </h3>
              <p className="font-serif  w-11/12 text-gray-500">
                {viewProduct.description}
              </p>
              <div className="flex my-6">
                <div className="flex border border-gray-400">
                  <button
                    onClick={handleQuantityDecrement}
                    className="border-r w-8 h-10 border-gray-400"
                  >
                    -
                  </button>
                  <p className="w-8 h-10 pt-2 text-center item-center">
                    {quantity}
                  </p>
                  <button
                    onClick={handleQuantityIncrement}
                    className="border-l w-8 h-10 border-gray-400"
                  >
                    +
                  </button>
                </div>
                {!userID ? (
                  <Link to="/login">
                    <button className="ml-5 h-10 border-2 border-gray-500">
                      TO ORDER LOGIN FIRST
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(viewProduct._id)}
                    className="ml-5 border-2 border-gray-500"
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
            </div>
            <div>
              <p>Category:{viewProduct.category}</p>
              <h3 className="font-bold text-xl text-gray-600 my-5">
                Free shipping on orders over $10!
              </h3>
              <ul className="text-gray-600 text-lg">
                <li>No-Risk Money Back Gurantee!</li>
                <li>No Hassle Refunds</li>
                <li>Secure Payments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OverView;
