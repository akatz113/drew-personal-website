import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import PortfolioSelector from "./PortfolioSelector";

const PorfolioHero = () => {
  return (
    <div className="hero min-h-[400px] w-full">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-primary-content flex flex-col max-w-xl">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Projects</h1>
          <p className="mb-5">
            Explore my portfolio of both mechanical-leaning and software
            development projects.
          </p>
        </div>
        <PortfolioSelector />
      </div>
    </div>
  );
};

export default PorfolioHero;
