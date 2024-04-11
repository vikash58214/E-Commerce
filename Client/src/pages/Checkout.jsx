import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const userID = window.localStorage.getItem("userID");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(null);
  const [address, setAddress] = useState({
    fullname: "",
    country: "",
    landMark: "",
    city: "",
    state: "",
    pin: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        address: address,
        orderDetails: {
          user: userID,
          productDetails: cart.map((item) => ({
            productID: item.productID._id,
            quantity: item.quantity,
          })),
        },
      };

      await axios.post(`${window.location.origin}/order`, orderData);
      await axios.delete(`${window.location.origin}/user/${userID}/cart`);
      window.alert("order placed");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
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

    fetchUser();
  }, []);
  return (
    <>
      <div className="flex justify-center bg-gray-100 ">
        <div className="lg:w-9/12 lg:flex lg:mt-5 lg:justify-between">
          <div className="lg:w-5/12 lg:px-3 px-2">
            <h1 className="font-bold text-2xl lg:mb-10 mb-4">
              Billing Details
            </h1>
            <form
              onSubmit={handleCheckout}
              className="flex flex-col px-3 lg:px-0 "
            >
              <input
                className="h-12 mb-5 border border-gray-500 pl-3 rounded-md text-lg"
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={address.fullname}
                onChange={handleChange}
              />
              <input
                className="h-12 mb-5 border border-gray-500 pl-3 rounded-md text-lg"
                type="text"
                placeholder="Country"
                name="country"
                value={address.country}
                onChange={handleChange}
              />
              <input
                className="h-12 mb-5 border border-gray-500 pl-3 rounded-md text-lg"
                type="text"
                placeholder="Land Mark"
                name="landMark"
                value={address.landMark}
                onChange={handleChange}
              />
              <div className="lg:flex lg:flex-row lg:items-center lg:justify-between">
                <input
                  className="h-12 lg:w-36 mb-5 border border-gray-500 pl-3 rounded-md text-lg"
                  type="text"
                  placeholder="City"
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                />
                <input
                  className="h-12 mb-5 lg:w-36 border border-gray-500 pl-3 rounded-md text-lg"
                  type="text"
                  placeholder="State"
                  name="state"
                  value={address.state}
                  onChange={handleChange}
                />
                <input
                  className="h-12 mb-5 lg:w-36 border border-gray-500 pl-3 rounded-md text-lg"
                  type="number"
                  placeholder="PIN Code"
                  name="pin"
                  value={address.pin}
                  onChange={handleChange}
                />
              </div>
              <input
                className="h-12 mb-5 border border-gray-500 pl-3 rounded-md text-lg"
                type="Number"
                placeholder="Number"
                name="number"
                value={address.number}
                onChange={handleChange}
              />
              <input
                className="h-12 mb-5 border border-gray-500 pl-3 rounded-md text-lg"
                type="email"
                placeholder="Email"
                name="email"
                value={address.email}
                onChange={handleChange}
              />

              <div>
                <h1 className="text-2xl font-bold">Payment</h1>
                <div className="border-l border-r border-t border-gray-600 py-4 mt-6 ">
                  <p>Cash on delivery</p>
                </div>
                <div className="border border-gray-600 py-4 ">
                  <p>Pay with cash upon delivery</p>
                </div>
                <p className="mt-5">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
              </div>
              <button className="h-12 border border-gray-600 my-6 flex place-content-center  items-center">
                PLACE ORDER <p className="text-red-500"> ₹{total}</p>
              </button>
            </form>
          </div>
          <div className="lg:w-5/12 pl-3 w-11/12">
            <h1 className="font-bold text-2xl mb-10">Your Order</h1>
            <div className="border border-gray-600 lg:w-9/12 rounded-md ">
              <div className="flex justify-between border-b h-14 border-gray-600 items-center px-3 ">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              {cart.map((cartItem) => (
                <div
                  key={cartItem.productID._id}
                  className="flex justify-between items-center border-b border-gray-600 h-20 px-3"
                >
                  <div className="flex items-center">
                    <img className="w-14 h-14" src={cartItem.productID.image} />
                    <p>{cartItem.productID.name}</p>
                  </div>
                  <p>{cartItem.quantity * cartItem.productID.price}</p>
                </div>
              ))}
              <div className="flex justify-between border-b h-16 border-gray-600 px-3 items-center">
                <p>Subtotal</p>
                <p>{total}</p>
              </div>
              <div className="flex justify-between  h-16 px-3 items-center">
                <p>Total</p>
                <p>{total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
