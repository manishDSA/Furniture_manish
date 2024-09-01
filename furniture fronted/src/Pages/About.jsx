import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurTeams from "../Components/OurTeams";
import Testimonial from "../Components/Testimonial";

function About() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "about" }} />
      <Hero two={{ title: "About us" }} />
      {/* <h1>about</h1> */}
      <WhyChooseUs />
      <OurTeams />
      <Testimonial />
      {/* footer */}
      <Footer />
    </>
  );
}

export default About;
