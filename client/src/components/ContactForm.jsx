import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className='w-full flex items-center flex-col md:flex-row bg-zinc-800 text-white py-12 md:gap-8 h-[80vh]'>
      {/* Contact Form */}
      <form className='md:w-1/2 flex flex-col bg-zinc-700 p-8 marker:shadow-lg rounded-lg mx-4 md:mx-0'>
        <h2 className='text-3xl font-semibold mb-8 text-center text-gray-100'>
          Get in Touch
        </h2>
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-300'
          >
            Name
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='mt-2 px-4 py-2 border border-gray-600 bg-zinc-900 text-gray-300 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-300'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            className='mt-2 px-4 py-2 border border-gray-600 bg-zinc-900 text-gray-300 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-300'
          >
            Message
          </label>
          <textarea
            placeholder='Enter your message'
            className='mt-2 px-4 py-2 resize-none border border-gray-600 bg-zinc-900 text-gray-300 rounded-lg w-full h-32 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition'
          ></textarea>
        </div>
        <button className='w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105'>
          Send
        </button>
      </form>

      {/* Contact Information */}
      <div className='md:w-1/2 flex flex-col justify-center items-center gap-2 p-8 md:pl-12 md:gap-12 pb-8 md:pb-0'>
        <div className='flex items-center gap-4'>
          <FaLocationArrow className='text-indigo-400 text-2xl' />
          <p className='text-xl font-medium text-gray-200'>Mario</p>
        </div>
        <div className='flex items-center gap-4'>
          <FaPhone className='text-indigo-400 text-2xl' />
          <p className='text-xl font-medium text-gray-200'>+38763#####</p>
        </div>
        <div className='flex items-center gap-4'>
          <FaEnvelope className='text-indigo-400 text-2xl' />
          <a
            href='mailto:mario.prskalo@fpmoz.sum.ba'
            className='text-xl font-medium text-gray-200 hover:underline'
          >
            mario#####@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
