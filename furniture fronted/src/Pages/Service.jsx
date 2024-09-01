import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import WhyChooseUsCard from "../Components/WhyChooseUsCard";
import ProductSection from "../Components/ProductSection";
import Testimonial from "../Components/Testimonial";
function Service() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "service" }} />
      <Hero two={{ title: "Services" }} />
      {/* <h1>service</h1> */}
      <WhyChooseUsCard />
      <ProductSection />
      <Testimonial />
      {/* footer */}
      <Footer />
    </>
  );
}

export default Service;
