import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className=" w-10/12 lg:flex   m-auto lg:mt-28 mt-10">
        <div className="lg:w-5/12 grid place-content-center text-cyan-950 font-serif">
          <h1 className="text-6xl font-serif font-bold">SAY HELLO.</h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            consectetur quas dicta ipsum nostrum molestiae vitae soluta atque
            necessitatibus magnam.
          </p>
          <h1 className="text-xl font-bold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            harum?
          </h1>
          <p className="pt-4 text-xl font-bold">vikash@gmail.com</p>
        </div>
        <div className="lg:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.2147550068478!2d73.91829018859619!3d18.55466509563643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16911e7326d%3A0x4a6fc6294a8510aa!2sAzad%20Nagar%2C%20Someshwar%20Nagar%2C%20Wadgaon%20Sheri%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1711020892509!5m2!1sen!2sin"
            width="90%"
            height="400vh"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="lg:w-5/12 w-11/12 m-auto px-8 py-8 mt-28 bg-gray-200 rounded-md shadow-lg">
        <h1 className="lg:text-3xl text-lg font-bold font-serif mb-4 text-cyan-950">
          Send Us A Message
        </h1>
        <div className="flex flex-col">
          <input
            type="text"
            className=" mb-3 h-14 border border-gray-400 rounded-sm"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="border border-gray-400 mb-3 h-14 rounded-sm"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="border border-gray-400 mb-3 h-14 rounded-sm"
            placeholder="Subject"
          />
          <input
            type="text"
            className="border border-gray-400 mb-3 h-14 rounded-sm"
            placeholder="Message"
          />
          <button className="border border-gray-400 h-14 rounded-sm ">
            SEND MESSAGE
          </button>
        </div>
      </div>

      <div className="flex justify-between lg:w-8/12 mx-auto my-14">
        <div>
          <h1 className="text-xl text-cyan-950 font-bold  text-center">
            Business
          </h1>
          <h1 className="lg:text-2xl text-cyan-950 font-bold">123 456 7890 </h1>
        </div>
        <div>
          <h1 className="text-xl text-cyan-950  text-center font-bold">
            Orders
          </h1>
          <h1 className="lg:text-2xl text-cyan-950 font-bold">123 456 7890</h1>
        </div>
        <div>
          <h1 className="text-xl text-cyan-950 text-center font-bold ">
            Support
          </h1>
          <h1 className="lg:text-2xl text-cyan-950 font-bold">123 456 7890 </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
