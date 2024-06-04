import React, { Children } from "react";
import { Home, GitHub, LinkedIn } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0">
      <a
        className="btn btn-ghost text-xl text-accent"
        href="http://localhost:3000/"
      >
        <Home />
      </a>
      <a
        className="btn btn-ghost text-accent"
        href="https://www.linkedin.com/in/drew-katz-9882a019a/"
        target="_blank"
      >
        <LinkedIn />
      </a>
      <a
        className="btn btn-ghost text-accent"
        href="https://github.com/akatz113"
        target="_blank"
      >
        <GitHub />
      </a>
      <div className="navbar place-content-end">
        <a
          className="btn btn-ghost text-xl text-primary font-light"
          href="http://localhost:3000/portfolio"
        >
          Portfolio
        </a>
        <a
          className="btn btn-ghost text-xl text-primary font-light"
          href="http://localhost:3000/patents"
        >
          Patents
        </a>
        <a
          className="btn btn-ghost text-xl text-primary font-light"
          href="http://localhost:3000/aboutMe"
        >
          Interests
        </a>
        <a
          className="btn btn-ghost text-xl text-primary font-light"
          href="http://localhost:3000/contactInfo"
        >
          Contact Info
        </a>
      </div>
    </div>
  );
};

export default Navbar;
