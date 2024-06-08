import React from "react";

const PortfolioSelector = () => {
  return (
    <div className="flex w-full">
      <button className="grid h-20 flex-grow card bg-secondary rounded-box place-items-center">
        Mechanical
      </button>
      <div className="divider divider-horizontal"></div>
      <button className="grid h-20 flex-grow card bg-secondary rounded-box place-items-center">
        Software
      </button>
    </div>
  );
};

export default PortfolioSelector;
