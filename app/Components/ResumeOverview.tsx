import React from "react";
import { Card, Grid } from "@mui/material";
import { CardContent } from "@mui/material";
import ResumeCard from "./ResumeCard";
import { Exp, edu } from "./ResumeInfo";
import InternshipSlider from "./InternshipSlider";

const ResumeOverview = () => {
  return (
    <>
      <h2 className="text-center text-3xl text-secondary my-4">About Me</h2>
      <hr className="p-4 mx-32"></hr>
      <div className="grid grid-cols-2 text-left gap-4 place-items-center">
        <div className="grid gap-4 grid-cols-1 place-items-center">
          <div>
            <h1 className="text-3xl text-secondary">Education</h1>
          </div>
          <div>
            <ResumeCard
              date={edu[0].date}
              description={edu[0].description}
              details={edu[0].details}
            >
              {edu[0].title}
            </ResumeCard>
          </div>
          <div>
            <ResumeCard
              date={edu[1].date}
              description={edu[1].description}
              details={edu[1].details}
            >
              {edu[1].title}
            </ResumeCard>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 place-items-center">
          <div className="pt-[40px]">
            <h1 className="text-3xl text-secondary">Work Experience</h1>
          </div>
          <div>
            <ResumeCard
              date={Exp[0].date}
              description={Exp[0].description}
              details={Exp[0].details}
            >
              {Exp[0].title}
            </ResumeCard>
          </div>
          <div>
            <h1 className="text-3xl text-secondary pt-[25px]">Internships</h1>
          </div>
          <div>
            <InternshipSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeOverview;
