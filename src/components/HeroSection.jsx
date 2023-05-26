import { heroImg } from "../utils/Image";

const HeroSection = () => {
  return (
    <div data-aos="fade-up">
      <div
        className="hero min-h-[calc(100vh-8rem)] rounded-lg overflow-hidden object-contain"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          data-aos="flip-left"
          className="hero-content text-center text-neutral-content"
        >
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold animate-pulse">ISHARA</h1>

            <p className="mb-5 text-xl">
              Real Time Bangla Sign Language Translation Application A mission
              to create voice for Bangladesh
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
