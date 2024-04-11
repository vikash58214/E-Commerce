import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="lg:flex lg:justify-between w-full bg-slate-600 h-60 lg:px-40 px-5 lg:pt-20 pt-10">
        <div className="flex justify-between text-white list-none lg:w-3/12 mx-3">
          <div>
            <li className="mb-3">Home</li>
            <li className="mb-3">About VSX</li>
            <li className="mb-3">My account</li>
          </div>
          <div>
            <li className="mb-3">Tshirt</li>
            <li className="mb-3">Mugs</li>
            <li className="mb-3">Contact</li>
          </div>
        </div>
        <div className="flex lg:w-40 justify-between h-10 w-1/2 mx-auto lg:mx-0 ">
          <FontAwesomeIcon
            icon={faSquareTwitter}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            icon={faSquareFacebook}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>
      <div className="bg-white w-full h-32 flex justify-center items-center">
        <div>
          <p>Made with ❤️ by "VIKASH SHARMA"</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
