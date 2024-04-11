import React from "react";
import Notfound from "../assets/not.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          Sorry, the page you are looking for could not be found.
        </p>
        <img src={Notfound} alt="404 Image" className="mt-8 w-64 mx-auto" />
        {/* You can replace the image source with your custom 404 image */}
        <a href="/" className="mt-8 text-blue-500 hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
