import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faCartShopping,
  faBars,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const userID = window.localStorage.getItem("userID");
  const navigate = useNavigate();
  const [dispay, setdisplay] = useState(false);
  const [cartVlaue, setCartVlaue] = useState("");
  const [admin, setAdmin] = useState(null);
  const [Cookies, _] = useCookies(["access_token"]);
  const location = useLocation();
  const pathsWithoutNavbar = ["/admin/home"];
  const hideNavbar = pathsWithoutNavbar.includes(location.pathname);
  if (hideNavbar) {
    return null; // Return null if navbar should be hidden
  }

  const handleState = () => {
    setdisplay(true);
  };
  const handleClose = () => {
    setdisplay(false);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/getUser/${userID}`
        );
        setAdmin(response.data.isAdmin);
        setCartVlaue(response.data.cart.length);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="flex-row flex justify-between  w-full lg:h-32 items-center bg-transparent bg-neutral-600">
        <div className="lg:hidden ml-5 w-10  relative">
          {!dispay ? (
            <button onClick={handleState}>
              <FontAwesomeIcon size="2x" icon={faBars} />
            </button>
          ) : (
            <button onClick={handleClose}>
              <FontAwesomeIcon size="2x" icon={faBarsStaggered} />
            </button>
          )}

          {dispay && (
            <div className="w-60 list-none absolute top-10 left-[-20px] h-screen  bg-zinc-700  bg-blend-lighten p-4  text-white">
              <li className="mt-5 text-3xl">
                <Link onClick={handleClose} to="/">
                  HOME
                </Link>
              </li>
              <li className="mt-5 text-3xl">
                <Link onClick={handleClose} to="/allProduct">
                  ALL PRODUCTS
                </Link>
              </li>
              <li className="mt-5 text-3xl">
                <Link onClick={handleClose} to="/tshirt">
                  TSHIRTS
                </Link>
              </li>
              <li className="mt-5 text-3xl">
                <Link onClick={handleClose} to="/mug">
                  MUGS
                </Link>
              </li>
              <li className="mt-5 text-3xl">
                <Link onClick={handleClose} to="/aboutus">
                  About
                </Link>
              </li>
              <li className="mt-5 text-3xl">
                <Link onClick={handleClose} to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="mt-5 text-3xl">
                {Cookies.access_token == "" ? (
                  <Link onClick={handleClose} to="/login">
                    ACCOUNT
                  </Link>
                ) : (
                  <Link onClick={handleClose} to="/profile">
                    ACCOUNT
                  </Link>
                )}
              </li>
            </div>
          )}
        </div>
        <div className=" items-center flex ml-5  ">
          <h1 className="teko-h1 text-4xl">Ecommerce</h1>
        </div>
        <div className="hidden  list-none justify-between w-1/2 items-center ml-40 lg:flex teko-nav ">
          <li className="hover:underline">
            {" "}
            <Link to="/">HOME</Link>{" "}
          </li>
          <li className="hover:underline">
            <Link to="/allProduct">ALL PRODUCTS</Link>
          </li>
          <li className="hover:underline">
            <Link onClick={handleClose} to="/tshirt">
              TSHIRTS
            </Link>
          </li>
          <li className="hover:underline">
            <Link onClick={handleClose} to="/mug">
              MUGS
            </Link>
          </li>
          <li className="hover:underline">
            <Link onClick={handleClose} to="/aboutus">
              ABOUT
            </Link>
          </li>
          <li className="hover:underline">
            <Link onClick={handleClose} to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="hover:underline">
            {Cookies.access_token == "" ? (
              <Link onClick={handleClose} to="/login">
                ACOUNT
              </Link>
            ) : (
              <Link onClick={handleClose} to="/profile">
                ACOUNT
              </Link>
            )}
          </li>
          {admin && (
            <li className="hover:underline">
              <Link to="/admin">ADMIN</Link>
            </li>
          )}
        </div>
        {userID ? (
          <div className="lg:mr-10 lg:w-12 flex items-center h-20 relative">
            <button
              onClick={() => {
                navigate("/cart");
              }}
            >
              <FontAwesomeIcon size="2x" icon={faCartShopping} />
            </button>
            <p className="w-5 h-5 bg-red-500 text-white  rounded-full text-center absolute top-3 right-3">
              {cartVlaue}
            </p>
          </div>
        ) : (
          <div className="lg:mr-10 lg:w-12 flex items-center h-20 relative">
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              <FontAwesomeIcon size="2x" icon={faCartShopping} />
            </button>
            <p className="w-5 h-5 bg-red-500 text-white  rounded-full text-center absolute top-3 right-3">
              0
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
