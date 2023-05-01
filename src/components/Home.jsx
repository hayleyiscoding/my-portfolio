import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Presentations from "./Presentations";
import Projects from "./Projects";
import Publications from "./Publications";
import Education from "./Education";
import Work from "./Work";
import Workshops from "./Workshops";
import Contact from "./Contact";
import TweetLove from "./TweetLove";
import Achievements from "./Achievements";
import Testimonials from "./Testimonials";
import Exploring from "./Exploring";
import CoreSkills from "./CoreSkills";
import Footer from "./Footer";
import Guestbook from "./Guestbook";

const Home = () => {
  return (
    <div className="bg-custom-black">
      <Navbar />
      <About />
      <CoreSkills />
      <Exploring />
      <Education />
      <Work />
      <Projects />
      <Publications />
      <Presentations />
      <Workshops />
      <TweetLove />
      <Achievements />
      <Testimonials />
      <Guestbook />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
