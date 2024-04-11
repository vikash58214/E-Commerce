import React from "react";
import mug from "../assets/mug_red.jpg";
import tees from "../assets/tshirt_blue.jpg";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex justify-center items-center">
              <img
                src={mug}
                alt="Mug"
                className="rounded-lg shadow-lg w-7/12"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={tees}
                alt="T-shirt"
                className="rounded-lg shadow-lg w-7/12"
              />
            </div>
          </div>

          <div className="text-lg mt-8">
            <p>
              Welcome to Mug & Tee Emporium, where creativity meets quality! We
              are more than just an online store; we're a platform for
              self-expression, individuality, and style. Our passion for unique
              designs and top-notch products drives us to curate the finest
              selection of mugs and t-shirts that cater to every taste and
              occasion.
            </p>
            <p>
              At Mug & Tee Emporium, our mission is simple: to provide you with
              exceptional products that speak to your personality and interests.
              Whether you're a coffee enthusiast looking for the perfect mug to
              start your day or a fashion-forward individual seeking statement
              tees, we've got you covered.
            </p>
            <p>
              Explore our diverse collection of mugs and tees, where you'll
              discover a treasure trove of designs ranging from quirky and
              whimsical to sleek and sophisticated. Shop with confidence knowing
              that your satisfaction is our top priority.
            </p>
            <p>
              Join our community of like-minded individuals who share a passion
              for style and creativity. Connect with us on social media to stay
              updated on the latest arrivals, behind-the-scenes sneak peeks, and
              exclusive giveaways.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
