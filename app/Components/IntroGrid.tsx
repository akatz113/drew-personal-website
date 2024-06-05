import { Grid } from "@mui/material";
import React from "react";

const IntroGrid = () => {
  return (
    <>
      <div className=" bg-primary grid grid-cols-8 mb-[100px] place-items-center p-12">
        <div className="col-span-1" />
        <div className="col-span-3 text-justify">
          <h1 className="text-7xl text-primary-content py-6">Hi, I'm Drew.</h1>
          <h2 className="text-xl font-light text-primary-content">
            Welcome to my website, I'm a mechanical engineer at{" "}
            <a
              className="link link-hover link-accent"
              target="_blank"
              href="https://www.geappliances.com/"
            >
              GE Appliances
            </a>{" "}
            and a graduate student at{" "}
            <a
              className="link link-hover link-accent"
              href="https://louisville.edu/"
            >
              University of Louisville
            </a>{" "}
            pursuing an M.S. in Mechanical Engineering.
          </h2>
        </div>
        <div className="col-span-1" />
        <div className="col-span-3  p-[5px]">
          <img
            src="ProfilePic_Resized.JPG"
            className="rounded-full shadow-[10px_10px_15px_5px] shadow-gray-800 h-[400px] "
          ></img>
        </div>
      </div>
    </>
  );
};

export default IntroGrid;
