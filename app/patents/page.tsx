import React from "react";
import PatentCard from "../Components/PatentCard";
import SideDrawer from "../Components/SideDrawer";

const Patents = () => {
  return (
    <>
      <div className="grid grid-cols-5 place-items-center">
        <div className="col-span-1">
          <SideDrawer />
        </div>
        <div className="col-span-3">
          <h1 className="text-primary text-7xl text-center mb-6">Patents</h1>
          <PatentCard />
        </div>
        <div className="col-span-1" />
      </div>
    </>
  );
};

export default Patents;
