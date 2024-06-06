import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

const PatentHero = () => {
  return (
    <>
      <div
        className="hero min-h-[600px] w-[600px] mx-auto rounded-xl"
        style={{
          backgroundImage: "url(patentPic1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-primary-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Sage Indoor Garden</h1>
            <p className="mb-5">
              Patent No. 11730096B2: Multi-nozzle misting system for an indoor
              gardening appliance.
            </p>
            <button className="btn btn-primary rounded-md">
              Learn More
              <LaunchIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatentHero;
