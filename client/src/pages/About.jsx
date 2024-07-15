import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Service from "../components/Service";
import about from "../assets/images/aboutphoto.jpg";

const About = () => {
  return (
    <>
      {/* Hero section with image and page name */}
      <Hero img={about} pageName="About Us" />

      {/* Text section */}
      <section className="text-center py-8">
        <div className="container mx-auto">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque tincidunt tortor, eget ullamcorper risus tincidunt ac.
            Donec pharetra neque id mollis tempus. Fusce rutrum, nisi eu
            fringilla tincidunt, nisi libero ultricies felis, a feugiat odio
            lacus sed quam.
          </p>
          <p className="mt-4">
            Sed non urna et eros ultrices varius sit amet eu massa. In varius
            turpis at eros elementum bibendum. Aliquam erat volutpat. Nam
            bibendum ex eu magna tincidunt, quis feugiat nunc varius.
          </p>
        </div>
      </section>

      {/* Service section showcasing our offerings */}
      <Service />

      {/* Footer section to wrap up the page */}
      <Footer />
    </>
  );
};

export default About;
