const SolveProblem = () => {
  return (
    <section className="py-10 container mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-row-reverse flex-wrap items-center">
          <div className="w-full md:w-1/2 overflow-hidden p-10" data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Photo"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-xl" data-aos="zoom-in-down">
            <div className="text-center  px-5">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                How we solve!
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Way We Solve Problem!
              </p>
            </div>
            <div className="divider"></div>
            <p className="text-gray-600 mb-2">
              Project Ishara's main goal is to assist those who have hearing
              loss and make daily life easier for them
            </p>
            <p className="text-gray-600 mb-2">
              Even though there have been many contributions about sign language
              interpretation using computer vision, Bengali sign language hasn't
              gotten much attention
            </p>
            <p className="text-gray-600">
              Our method involves creating, cleaning, enhancing, analyzing, and
              feeding renowned ML models for evaluation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolveProblem;
