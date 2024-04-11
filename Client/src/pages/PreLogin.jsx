import React from "react";
import { Link } from "react-router-dom";

const PreLogin = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-gray-800 teko-h1">
              Profile
            </h1>
            <div className="mt-4 teko-p">
              <p className="text-red-500 underline">
                <Link to="/login">Login Please First</Link>
              </p>
            </div>
            <div className="mt-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreLogin;
