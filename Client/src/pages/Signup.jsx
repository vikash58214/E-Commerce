import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [errorr, setErrorr] = useState([]);
  const [input, setInput] = useState({
    name: "",
    phone: "",
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
    const response = await axios.post(`${window.location.origin}/signup`, {
      name: input.name,
      email: input.email,
      phone: input.phone,
      password: input.password,
    });
    if (typeof response.data.validation == "object") {
      setErrorr(response.data.validation);
    } else {
      window.alert(response.data.message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full bg-gray-100 h-auto">
        <div className="flex flex-col md:w-4/12 p-7 my-28 border border-gray-300  ">
          {errorr.map((errs, index) => (
            <div className="text-red-500">
              <p key={index}>{errs.msg}</p>
            </div>
          ))}
          <h1 className="mx-auto text-3xl font-serif font-bold ">SIGN UP</h1>
          <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
            <input
              className="h-12 mb-6 border text-xl border-gray-300"
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              value={input.name}
            />
            <input
              className="h-12 mb-6 border text-xl border-gray-300"
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
            <input
              className="h-12 mb-6 border text-xl border-gray-300"
              type="number"
              placeholder="Number"
              name="phone"
              vlaue={input.phone}
              onChange={handleChange}
            />
            <input
              className="h-12 mb-6 border text-xl border-gray-300"
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
            <button className="h-12 border-2 text-xl  border-blue-300">
              SINGUP
            </button>
          </form>
          <p className="mx-auto mt-3">
            Already have an account{" "}
            <Link className="text-blue-600 underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
