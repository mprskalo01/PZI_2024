import React from "react";
import Footer from "../components/Footer";
import Service from "../components/Service";

const About = () => {
  return (
    <>
      {/* Text section */}
      <section className='text-center py-8 h-[49.3vh]'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-violet-500'>About Us</h1>
          <p className='text-lg leading-relaxed'>
            Welcome to FPMOZ Car Rental. At FPMOZ Car Rental, our motto is
            <strong> "Strive for perfection."</strong> We are dedicated to
            providing you with an exceptional car rental experience, combining
            reliability, quality, and outstanding service.
          </p>
          <p className='mt-4'>
            <strong className='text-violet-500'>What We Offer:</strong>
            <br />• <strong className='text-violet-500'>
              Diverse Fleet:
            </strong>{" "}
            Choose from a range of well-maintained vehicles, from economical
            options to luxury rides.
            <br />•{" "}
            <strong className='text-violet-500'>
              Exceptional Service:
            </strong>{" "}
            Enjoy personalized service and a smooth rental process from start to
            finish.
            <br />•{" "}
            <strong className='text-violet-500'>Competitive Rates:</strong>{" "}
            Benefit from transparent pricing and no hidden fees.
          </p>
          <p className='mt-4'>
            <strong className='text-violet-500'>Why Us?</strong>
            <br />•{" "}
            <strong className='text-violet-500'>Top-Notch Vehicles:</strong> Our
            cars undergo rigorous inspections to ensure peak performance and
            safety.
            <br />• <strong className='text-violet-500'>
              Convenience:
            </strong>{" "}
            With multiple locations and flexible rental options, we make your
            experience hassle-free.
          </p>
          <p className='mt-4'>
            For inquiries or reservations, contact us at [Phone Number] or
            [Email Address], or visit [Website URL].
            <br />
            Thank you for choosing FPMOZ Car Rental, where perfection is our
            promise.
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
