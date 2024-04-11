import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [_, setCookie] = useCookies(["access_token"]);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${window.location.origin}/login`, {
      email: input.email,
      password: input.password,
    });
    if (response.data.message == "login success") {
      setCookie("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      window.location.href = "/";
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full bg-gray-100">
        <div className="flex flex-col md:w-4/12 p-7 my-28 border border-gray-300  ">
          <h1 className="mx-auto text-3xl font-serif font-bold   ">Login</h1>
          <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
            <input
              className="h-12 mb-6 border border-gray-300 text-xl"
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />

            <input
              className="h-12 mb-6 border border-gray-300 text-xl"
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
            <button className="h-12 border-2 text-xl  border-blue-300">
              LOGIN
            </button>
          </form>
          <p className="mx-auto mt-3">
            Don't have an account{" "}
            <Link className="text-blue-600 underline" to="/SignUp">
              SignUp
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
