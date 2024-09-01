import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ProductSection from "../Components/ProductSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import HelpSection from "../Components/HelpSection";
import PopularProduct from "../Components/PopularProduct";
import Testimonial from "../Components/Testimonial";
import BlogSection from "../Components/BlogSection";

function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "home" }} />
      <Hero
        two={{
          title: "Modern Interior Design Studio",
        }}
      />
      <ProductSection />
      <WhyChooseUs />
      <HelpSection />
      <PopularProduct />
      <Testimonial />
      <BlogSection/>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Home;
