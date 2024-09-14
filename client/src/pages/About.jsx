import React from "react";
import Footer from "../components/Footer";
import Service from "../components/Service";

const About = () => {
  return (
    <>
      {/* Text section */}
      <section className='bg-zinc-800 text-white py-10 flex flex-col items-center h-[80vh]'>
        <div className='container mx-auto text-center px-4 md:px-6'>
          <h1 className='text-4xl font-bold mb-6 text-violet-400'>About Us</h1>
          <p className='text-base leading-relaxed mb-6'>
            Welcome to <strong>FPMOZ Car Rental</strong>. Our motto is
            <strong> "Strive for perfection."</strong> We are dedicated to
            providing you with an exceptional car rental experience, combining
            reliability, quality, and outstanding service.
          </p>
          <p className='mb-6'>
            <strong className='text-violet-400'>What We Offer:</strong>
            <br />• <strong className='text-violet-400'>
              Diverse Fleet:
            </strong>{" "}
            Choose from a range of well-maintained vehicles, from economical
            options to luxury rides.
            <br />•{" "}
            <strong className='text-violet-400'>
              Exceptional Service:
            </strong>{" "}
            Enjoy personalized service and a smooth rental process from start to
            finish.
            <br />•{" "}
            <strong className='text-violet-400'>Competitive Rates:</strong>{" "}
            Benefit from transparent pricing and no hidden fees.
          </p>
          <p className='mb-6'>
            <strong className='text-violet-400'>Why Us?</strong>
            <br />•{" "}
            <strong className='text-violet-400'>Top-Notch Vehicles:</strong> Our
            cars undergo rigorous inspections to ensure peak performance and
            safety.
            <br />• <strong className='text-violet-400'>
              Convenience:
            </strong>{" "}
            With multiple locations and flexible rental options, we make your
            experience hassle-free.
          </p>
          <p>
            For inquiries or reservations, contact us at [Phone Number] or
            [Email Address], or visit [Website URL].
            <br />
            Thank you for choosing FPMOZ Car Rental, where perfection is our
            promise.
          </p>
        </div>
        {/* Service section showcasing our offerings */}
        <Service />
      </section>

      {/* Footer section to wrap up the page */}
      <Footer />
    </>
  );
};

export default About;
