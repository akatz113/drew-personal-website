import React, { Children } from "react";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0">
      <a
        className="btn btn-ghost text-xl text-primary"
        href="http://localhost:3000/"
      >
        Home
      </a>
      <a
        className="btn btn-ghost text-xl text-primary font-light"
        href="http://localhost:3000/aboutMe"
      >
        About Me
      </a>
      <a
        className="btn btn-ghost text-xl text-primary font-light"
        href="http://localhost:3000/contactInfo"
      >
        Contact Info
      </a>
      <a
        className="btn btn-ghost text-xl text-primary font-light"
        href="http://localhost:3000/portfolio"
      >
        Project Portfolio
      </a>
      <a
        className="btn btn-ghost text-xl text-primary font-light"
        href="http://localhost:3000/Resume"
      >
        Resume
      </a>
      <a
        className="btn btn-ghost text-xl text-primary font-light"
        href="http://localhost:3000/patents"
      >
        Patents
      </a>
    </div>
  );
};

export default Navbar;
