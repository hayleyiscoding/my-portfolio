import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Presentations from "./Presentations";
import Projects from "./Projects";
import Publications from "./Publications";
import Tech from "./Tech";
import Education from "./Education";
import Work from "./Work";
import Workshops from "./Workshops";
import Contact from "./Contact";
import TweetLove from "./TweetLove";
import Achievements from "./Achievements";
import SecondarySkills from "./SecondarySkills";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="bg-custom-black">
      <Navbar />

      <About />

      <Tech />
      {/* <hr className="w-[10%] mx-auto" /> */}
      <SecondarySkills />
      {/* <hr className="w-[10%] mx-auto" /> */}
      <Education />
      {/* <hr className="w-[10%] mx-auto" /> */}
      <Work />
      {/* <hr className="w-[10%] mx-auto" /> */}

      <Projects />
      {/* <hr className="w-[10%] mx-auto" /> */}

      <Publications />

      <Presentations />

      <Workshops />

      <TweetLove />

      <Achievements />
      <Testimonials />

      <Contact />
    </div>
  );
};

export default Home;
