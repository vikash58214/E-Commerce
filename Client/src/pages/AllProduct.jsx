import React, { useEffect, useState } from "react";
import QuickView from "../components/QuickView";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const AllProduct = () => {
  const userID = window.localStorage.getItem("userID");
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${window.location.origin}/getProduct`
        );
        setAllProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="bg-gray-100  w-full  flex justify-center ">
        <div className="flex justify-center w-full">
          <div className="lg:flex lg:flex-wrap lg:w-11/12 h-auto pt-8 lg:pl-10  ">
            {allProduct.map((product) => (
              <Link key={product._id} to={`/overView/${product._id}`}>
                <button>
                  <QuickView
                    image={product.image}
                    title={product.name}
                    price={product.price}
                  />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProduct;
