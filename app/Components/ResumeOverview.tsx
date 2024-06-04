import React from "react";
import { Card, Grid } from "@mui/material";
import { CardContent } from "@mui/material";
import ResumeCard from "./ResumeCard";
import { Exp, edu } from "./ResumeInfo";
import InternshipSlider from "./InternshipSlider";
import ResumeDownload from "./ResumeDownload";
import TextArea from "./TextArea";

const ResumeOverview = () => {
  return (
    <>
      <h2 className="text-center text-7xl my-4 text-secondary">About Me</h2>
      <div className="p-4 mx-32" />
      <div className="grid grid-cols-11 text-left gap-4 place-items-center">
        <div className="col-span-5 grid gap-4 grid-cols-1 place-items-center">
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
        <div className="col-span-1 divider divider-horizontal divider-secondary"></div>
        <div className="col-span-5 grid gap-4 grid-cols-1 place-items-center">
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
      <div className="flex justify-center my-[25px]">
        <ResumeDownload />
      </div>
    </>
  );
};

export default ResumeOverview;
