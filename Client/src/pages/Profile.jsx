import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Footer from "../components/Footer";
import PreLogin from "./PreLogin";
const Profile = () => {
  const [isLoggedIN, setIsLoggedIn] = useState(false);
  const userID = window.localStorage.getItem("userID");
  const [user, setUser] = useState({});
  const [cookies, setCookie] = useCookies(["access_token"]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${window.location.origin}/getUser/${userID}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    if (userID) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }

    fetchUser();
  }, []);
  const handleLogout = () => {
    setCookie("access_token", "");
    console.log(cookies);
    window.localStorage.removeItem("userID");
    window.location.href = "/";
  };
  return (
    <>
      {isLoggedIN ? (
        <PreLogin />
      ) : (
        <div className="container mx-auto py-10">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-gray-800 teko-h1">
                Profile
              </h1>
              <div className="mt-4 teko-p">
                <p className="text-gray-600">Name: {user.name}</p>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Logout
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

export default Profile;
