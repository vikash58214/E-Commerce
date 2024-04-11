import React, { useEffect, useState } from "react";
import QuickView from "../components/QuickView";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Tshirt = () => {
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
  const filterImages = allProduct.filter(
    (product) => product.category == "tshirt"
  );
  return (
    <>
      <div className="bg-gray-100  w-full  flex justify-center ">
        <div className="flex justify-center w-full">
          <div className="lg:flex lg:flex-wrap lg:w-11/12 h-auto pt-8 lg:pl-10 ">
            {filterImages.map((product) => (
              <Link key={product._id} to={`/overView/${product._id}`}>
                <button>
                  <QuickView
                    key={product._id}
                    image={product.image}
                    title={product.name}
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

export default Tshirt;
