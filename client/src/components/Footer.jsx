import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-zinc-800 text-white py-4 h-[12vh]'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-5'>
        {/* Navigation Links */}
        <div className='flex space-x-4'>
          <Link to='/' className='hover:text-indigo-400'>
            Home
          </Link>
          <Link to='/about' className='hover:text-indigo-400'>
            About
          </Link>
          <Link to='/contact' className='hover:text-indigo-400'>
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className='flex space-x-4'>
          <a
            href='https://fpmoz.sum.ba'
            target='_blank'
            rel='noreferrer'
            className='text-xl hover:text-indigo-400'
            aria-label='FPMOZ'
          >
            <FaLink />
          </a>
          <a
            href='https://github.com/mprskalo01'
            target='_blank'
            rel='noreferrer'
            className='text-xl hover:text-indigo-400'
            aria-label='GitHub'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
