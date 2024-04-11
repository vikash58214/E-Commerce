import React, { useEffect } from "react";
import img1 from "../assets/boy-t2.png";
import img2 from "../assets/girl1.png";
import img3 from "../assets/girl.png";
import male from "../assets/male.png";
import img6 from "../assets/girl3.jpg";
import { Link } from "react-router-dom";
import mug from "../assets/mug_brown.jpg";
import QuickView from "../components/QuickView";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
const Home = () => {
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
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-11/13  lg:flex">
          <div className="w-11/12 lg:mr-5 lg:ml-40 lg:w-1/2 ml-5">
            <h1 className=" break-words teko-heading  mt-4  lg:text-7xl font-bold text-slate-500 lg:mt-40 ">
              CUSTOMIZED PRINTED TEES
            </h1>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus aut animi perspiciatis voluptatibus dicta non.
            </p>
            <button className=" lg:mt-10 mt-4 border-2 border-black p-2">
              EXPLORE STORE
            </button>
          </div>
          <div className="w-full lg:mr-40 lg:w-1/2">
            <img className="w-full h-auto  " src={img1} alt="tees" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" lg:mt-20 lg:w-10/12">
          <div className="w-full lg:flex">
            <div className="flex justify-center items-center w-80 h-60">
              <p className="w-10/12 text-lg text-gray-600">
                Best quality printed tshirt and mugs for all your needs
              </p>
            </div>
            <div className="w-80 h-60 inset-0 bg-gray-500">
              <img className="w-80 h-60" src={img2} />
            </div>
            <div className="w-80 h-auto lg:h-60 bg-stone-400">
              <img className="w-full object-cover" src={male} />
            </div>
            <div className="w-80 h-60 bg-stone-400 md:grid md:place-content-center">
              <div>
                <h1 className="text-3xl font-serif font-bold  text-cyan-950">
                  GET PRINTED T-SHIRT @ $25!
                </h1>
                <button className="border-2 border-cyan-950 text-cyan-950 mt-3 w-32 h-10">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex">
            <div className="flex justify-center items-center w-80 h-60 bg-zinc-400 relative">
              <div className="absolute top-33 left-0">
                <h1 className="text-3xl font-serif font-bold text-cyan-950">
                  GET PRINTED MUG @ $15!
                </h1>
                <button className="border-2 border-cyan-950 text-cyan-950 mt-3 w-32 h-10">
                  EXPLORE
                </button>
              </div>
              <img className="w-80 h-60 opacity-20" src={mug} />
            </div>
            <div className="w-80 h-60">
              <img className="w-80 h-60" src={img3} />
            </div>
            <div className="w-80 h-60 bg-orange-100">
              <img className="w-80 h-60" src={mug} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full lg:mt-11 bg-slate-200">
        <div className="lg:flex lg:flex-row flex  flex-col w-10/12">
          <div className="order-2">
            <img src={img6} alt="girl" />
          </div>
          <div className="flex items-center justify-center mx-10 order-1">
            <div>
              <h1 className="text-3xl text-cyan-950 font-bold">
                #COLOROFTHEMONTH
              </h1>
              <p className="w-8/12 mt-8 text-cyan-950">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore maiores cumque officia a quos perferendis nesciunt
                voluptatem, corrupti praesentium ipsa!
              </p>
              <h1 className="mt-5 text-3xl text-cyan-950 font-bold">
                JUST $35!!!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#f2295b" }}
        className="flex justify-center items-center w-full h-40"
      >
        <div className="lg:flex w-10/12 flex justify-center">
          <h1 className=" lg:text-5xl text-white font-bold">
            GRAB THIS LIMITED TIME OFFER
          </h1>
          <button className="lg:ml-40 border-zinc-50 border-2 text-white w-40">
            ORDER NOW
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-20 lg:relative">
        <div className="w-11/12 flex float-start ml-7">
          <p className="lg:w-1/12 lg:text-3xl text-xl text-white bg-black bg-opacity-70  lg:border-4 lg:absolute lg:right-28 lg:top-28 rounded-sm p-1 w-4/12">
            {" "}
            <Link to="/allProduct">View All</Link>{" "}
          </p>
        </div>

        <div className="w-11/12 lg:w-9/12 flex overflow-x-auto custom-scrollbar">
          {allProduct.map((product) => (
            <QuickView
              key={product._id}
              image={product.image}
              title={product.name}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="lg:w-11/12 lg:flex">
          <div className="flex justify-center items-center lg:w-1/2">
            <div className="p-20">
              <h1>HUNDRED OF READY DESIGN TO CHOOSE FROM</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                minima laudantium ratione ex accusamus illum provident cum
                aliquid ducimus a.
              </p>
              <button>EXPLORE DESIGN</button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img className="lg:w-9/12" src={mug} alt="mug" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
