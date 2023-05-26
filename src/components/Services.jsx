import React from "react";
import { BsPersonVideo3 } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";

const Services = () => {
  return (
    <section className="bg-gray-100 py-10" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center  px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Explore Our Beutiful Work!
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-wrap justify-center">
          <div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            data-aos="zoom-in-right"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div>
                <BsPersonVideo3 className="mx-auto" size={100} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Video Calling
              </h3>
              <p className="text-gray-600">
                Experience high-quality video calls specifically designed for
                sign language users. Our platform ensures smooth and reliable
                communication for seamless conversations.
              </p>
              <a className="btn my-3 bg-slate-800" href="">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            data-aos="zoom-in-left"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <AiFillCamera className="mx-auto" size={100} />

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Interactive Lessons
              </h3>
              <p className="text-gray-600">
                Learn sign language at your own pace with our interactive
                lessons. Our comprehensive curriculum and engaging activities
                will help you improve your signing skills.
              </p>
              <a className="btn my-3 bg-slate-800" href="">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
