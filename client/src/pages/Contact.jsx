import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Service from '../components/Service'
import contact from '../assets/images/contactphoto.jpg'

const Contact = () => {
  return (
    <>
      <Hero img={contact} pageName="Contact" />
      <ContactForm />
      <Service />
      <Footer />
    </>
  )
}

export default Contact
