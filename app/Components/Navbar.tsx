"use client";

import React, { Children, useState, useEffect } from "react";
import { Home, GitHub, LinkedIn } from "@mui/icons-material";
import { preconnect } from "react-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={`sticky navbar ${visible ? "top-0" : "hidden"}`}>
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
          className="btn btn-ghost text-xl text-accent font-light"
          href="http://localhost:3000/portfolio"
        >
          Portfolio
        </a>
        <a
          className="btn btn-ghost text-xl text-accent font-light"
          href="http://localhost:3000/patents"
        >
          Patents
        </a>
        <a
          className="btn btn-ghost text-xl text-accent font-light"
          href="http://localhost:3000/aboutMe"
        >
          Interests
        </a>
        <a
          className="btn btn-ghost text-xl text-accent font-light"
          href="http://localhost:3000/contactInfo"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
