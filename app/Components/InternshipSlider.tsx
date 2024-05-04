import React from "react";
import { Exp } from "./ResumeInfo";
import ResumeCard from "./ResumeCard";

const InternshipSlider = () => {
  return (
    <div className="w-[500px]">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <ResumeCard
            date={Exp[1].date}
            description={Exp[1].description}
            details={Exp[1].details}
          >
            {Exp[1].title}
          </ResumeCard>
        </div>
        <div id="item2" className="carousel-item w-full">
          <ResumeCard
            date={Exp[2].date}
            description={Exp[2].description}
            details={Exp[2].details}
          >
            {Exp[2].title}
          </ResumeCard>
        </div>
        <div id="item3" className="carousel-item w-full">
          <ResumeCard
            date={Exp[3].date}
            description={Exp[3].description}
            details={Exp[3].details}
          >
            {Exp[3].title}
          </ResumeCard>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default InternshipSlider;
