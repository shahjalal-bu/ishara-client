import { FaLanguage, FaMobile, FaRobot, FaVideo } from "react-icons/fa";

import { heroImg } from "../utils/Image";

const WhyIshra = () => {
  return (
    <div className="container mx-auto" id="features">
      <div className="text-center  px-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Our Features !
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Features Which May You Need.!
        </p>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col items-center py-4 my-5 lg:flex-row">
        <div className="p-10">
          <img src={heroImg} className="w-96 rounded-lg shadow-2xl" />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-5 shadow-sm p-5">
            <div>
              <FaVideo size={80} />
            </div>
            <p>
              <b>
                Easily Accessible without having intensive hardware suppor :
              </b>
              Model using MobileNet v2 architecture which uses lightweight
              depthwise convolutions to filter feature
            </p>
          </div>
          <div className="flex items-center gap-5 shadow-sm p-5">
            <div>
              <FaRobot size={80} />
            </div>
            <p>
              <b> Can be easily integrated</b> with ESP32 and Raspberry pi for
              integrating the technology in robotics.
            </p>
          </div>
          <div className="flex items-center gap-5 shadow-sm p-5">
            <div>
              <FaLanguage size={80} />
            </div>
            <p>Translates Bangla sign language in real time</p>
          </div>
          <div className="flex items-center gap-5 shadow-sm p-5">
            <div>
              <FaMobile size={80} />
            </div>
            <p>
              API can be used with any video calling or conferencing
              applications easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIshra;
