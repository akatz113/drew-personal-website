import React, { Children } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a
        className="btn btn-ghost text-xl text-primary"
        href="http://localhost:3001/"
      >
        Home
      </a>
      <a
        className="btn btn-ghost text-xl text-primary"
        href="http://localhost:3001/aboutMe"
      >
        About Me
      </a>
      <a
        className="btn btn-ghost text-xl text-primary"
        href="http://localhost:3001/contactInfo"
      >
        Contact Info
      </a>
    </div>
  );
};

export default Navbar;
