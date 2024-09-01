import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "contact" }} />
      <Hero two={{ title: "Contact" }} />
      {/* <h1>contact</h1> */}
      <ContactForm />
      {/* footer */}
      <Footer />
    </>
  );
}

export default Contact;
