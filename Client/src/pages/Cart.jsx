import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Cart = () => {
  const userID = window.localStorage.getItem("userID");
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${window.location.origin}/getCart/${userID}`
      );
      setCart(response.data.allCart);
      setTotal(response.data.totalPrice);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleRemove = async (productIdd) => {
    const response = await axios.delete(
      `${window.location.origin}/cart/${productIdd}/${userID}`
    );
    fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      {cart.length == 0 ? (
        <div className="h-96 grid place-content-center">
          {" "}
          <h1 className="font-bold text-4xl">cart is impty</h1>
        </div>
      ) : (
        <div className="flex justify-center bg-gray-100 h-full">
          <div className="lg:w-8/12 p-10 lg:mt-28">
            <h1 className="text-3xl  teko-h1 text-cyan-950">CART</h1>
            <div className="lg:flex">
              <div>
                <table className="border border-gray-500 mt-5">
                  <tbody>
                    <tr className="border-b border-gray-500">
                      <td className="w-48 teko-h1 text-xl text-center p-4 h-14 font-bold text-gray-500">
                        Product
                      </td>
                      <td className="w-28 teko-h1 text-xl p-4 h-14 font-bold text-gray-500">
                        Price
                      </td>
                      <td className="w-28 teko-h1 text-xl p-4 h-14 font-bold text-gray-500">
                        Quality
                      </td>
                      <td className="w-28 teko-h1 text-xl p-4 h-14 font-bold text-gray-500">
                        Subtotal
                      </td>
                    </tr>
                    {cart.map((cartItem) => (
                      <tr key={cartItem._id}>
                        <td className="lg:flex lg:p-4">
                          <img
                            className="w-14 h-14"
                            src={cartItem.productID.image}
                          />
                          <p className="lg:pt-4 lg:ml-4 teko-h1">
                            Printed tees
                          </p>
                        </td>
                        <td className="teko-h1 p-4">
                          ₹{cartItem.productID.price}
                        </td>
                        <td className="p-4 teko-h1">{cartItem.quantity}</td>
                        <td className="p-4 teko-h1">
                          ₹{cartItem.quantity * cartItem.productID.price}
                        </td>
                        <td className="p-4">
                          <button onClick={() => handleRemove(cartItem._id)}>
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="h-80 lg:ml-7 mt-5 border border-gray-500 lg:w-4/12">
                <h1 className="teko-h1  text-cyan-950 text-2xl border-b border-gray-500">
                  CART TOTALS
                </h1>
                <p className="mt-10 teko-h1 text-xl text-gray-600">
                  Subtotal {total}
                </p>
                <p className="mt-10  teko-h1 font-bold text-xl text-gray-600">
                  Total {total}
                </p>
                <button
                  onClick={() => {
                    navigate("/checkout");
                  }}
                  className="h-14 p-3 teko-button text-xl text-gray-600 mt-10 ml-3 border-2 border-gray-600"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
