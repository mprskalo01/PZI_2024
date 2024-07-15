import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/about" className="link link-hover">
          About
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/sign-in" className="link link-hover">
          Login
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://fpmoz.sum.ba"
            target="_blank"
            rel="noreferrer"
            className="tooltip"
            data-tip="Visit Dev Portfolio"
          >
            <FaLink className="link text-2xl" />
          </a>
          <a
            href="https://github.com/mprskalo01"
            target="_blank"
            rel="noreferrer"
            className="tooltip"
            data-tip="Visit Dev Github"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
      <div>
        <p>FPMOZ Cars</p>
      </div>
    </footer>
  );
};

export default Footer;
