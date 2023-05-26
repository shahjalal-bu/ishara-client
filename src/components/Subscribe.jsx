import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Perform subscription logic here
    console.log(`Subscribed with email: ${email}`);
    // Clear the input field
    setEmail("");
  };

  return (
    <div className="py-4 bg-gray-100" data-aos="fade-top" id="subscribe">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="max-w-md w-full">
            <h2 className="text-center text-2xl font-bold mb-4">
              Subscribe and be a part of Ishara!
            </h2>
            <div className="form-control text-center">
              <div className="input-group justify-center">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="input w-7/12 input-bordered"
                />
                <button className="btn bg-slate-800">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
