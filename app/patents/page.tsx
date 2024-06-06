import React from "react";
import PatentHero from "../Components/PatentHero";
import PatentDrawer from "../Components/PatentDrawer";
import PatentSkeleton from "../Components/PatentSkeleton";

const Patents = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      <div className="col-span-1">
        <PatentHero />
      </div>
      <div className="col-span-1">
        <PatentSkeleton />
      </div>
    </div>
  );
};

export default Patents;
