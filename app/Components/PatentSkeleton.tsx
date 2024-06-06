import React from "react";

const PatentSkeleton = () => {
  return (
    <div>
      <div className="skeleton min-h-[600px] w-[600px] rounded-xl flex">
        <div className="hero-content text-center text-primary-content my-auto mx-auto">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-5">More Coming Soon...</h1>
            <div className="skeleton h-4 w-full bg-stone-800 mb-2"></div>
            <div className="skeleton h-4 w-40 mx-auto py-1 bg-stone-800 mb-7"></div>
            <div className="skeleton h-12 mx-auto w-32 bg-stone-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentSkeleton;
