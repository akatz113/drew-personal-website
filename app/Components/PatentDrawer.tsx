import React from "react";
import PatentHero from "./PatentHero";

const PatentDrawer = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <PatentHero />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h2 className="text-xl">Patents</h2>
          <li>
            <a>Sage Misting System</a>
          </li>
          <li>
            <a>More coming soon...</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatentDrawer;
