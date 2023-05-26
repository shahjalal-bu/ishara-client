import CurrentScenario from "../components/CurrentScenario";
import HeroSection from "../components/HeroSection";

import OurTeamMember from "../components/OurTeamMember";
import Services from "../components/Services";
import SolveProblem from "../components/SolveProblem";
import Subscribe from "../components/Subscribe";
import WhyIshra from "../components/WhyIshra";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CurrentScenario />
      <SolveProblem />
      <WhyIshra />
      <Services />
      <OurTeamMember />
      <Subscribe />
    </>
  );
};

export default Home;
