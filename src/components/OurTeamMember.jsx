const OurTeamMember = () => {
  return (
    <section
      className="container mx-auto py-10"
      data-aos="fade-right"
    >
      <div className="container mx-auto px-4">
        <div className="text-center px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Meet Our Team Members
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Learn more about our team members
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 mx-2">
              <img
                src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Developer 1"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 mx-2">
              <img
                src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Developer 2"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Backend Developer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 mx-2">
              <img
                src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Developer 3"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                David Johnson
              </h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 mx-2">
              <img
                src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Developer 4"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Emily Wilson
              </h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamMember;
