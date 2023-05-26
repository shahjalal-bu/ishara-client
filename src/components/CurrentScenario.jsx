const CurrentScenario = () => {
  return (
    <section className="py-10 container mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div
            className="w-full md:w-1/2 overflow-hidden p-10"
            data-aos="zoom-in-down"
          >
            <img
              src="https://blog.zoom.us/wp-content/uploads/2022/11/SLVIEW.png"
              alt="Photo"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-xl" data-aos="zoom-in-up">
            <div className="text-center  px-5">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Current Scenario
              </h2>
              <p className="text-gray-600 text-lg mb-4">What problems arise!</p>
            </div>
            <div className="divider"></div>
            <p className="text-gray-600 mb-2">
              Most video conference applications transition window focus to
              those who speak aloud, it makes it difficult for signers to “get
              the floor” so they can communicate easily and effectively.
            </p>
            <p className="text-gray-600 mb-2">
              Bangladesh has a population of over 150 million , and about 13
              million people are suffering from variable degrees of hearing loss
              of which 3 million are suffering from severe to profound hearing
              loss leading to disabilit
            </p>
            <p className="text-gray-600">
              nabling real-time sign language detection in video conferencing is
              challenging, since applications need to perform classification
              using the high-volume video feed as the input, which makes the
              task computationally heavy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentScenario;
