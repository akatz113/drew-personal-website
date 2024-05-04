import React from "react";
import { Card, Grid } from "@mui/material";
import { CardContent } from "@mui/material";
import ResumeCard from "./ResumeCard";
import { Exp, edu } from "./ResumeInfo";
/*
//Define info for the resume overview
let edu = [
  {
    title: "University of Louisville",
    date: "2024-Present",
    details: "Mechanical Engineering, M.S.",
    description: "Edison Engineering Program",
  },
  {
    title: "The Ohio State University",
    date: "2019-2023",
    details: "Mechanical Engineering, B.S.",
    description: "Summa Cum Laude",
  },
];

let Exp = [
  {
    title: "GE Appliances, Haier",
    date: "2024-Present",
    details: "Edison Engineering Development Program",
    description: "Position assigned in July 2024",
  },
  {
    title: "GE Appliances, Haier",
    date: "Summer 2023",
    details: "Wash Systems Team",
    description: "Co-op Program President",
  },
  {
    title: "GE Appliances, Haier",
    date: "Summer 2022",
    details: "Dish Advanced Systems Team",
    description: "Python Development and Prototyping",
  },
  {
    title: "GE Appliances, Haier",
    date: "Spring 2021",
    details: "Sage Indoor Grower NPI",
    description: "First Design Patent",
  },
];
*/
const ResumeOverview = () => {
  return (
    <>
      <h2 className="text-center text-3xl text-secondary my-4">About Me</h2>
      <hr className="p-4 mx-32"></hr>
      <div className="grid grid-cols-2 text-left gap-4 place-items-center">
        <div className="grid gap-4 grid-cols-1 xs:max-w-[400px] place-items-center">
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
        <div className="grid gap-4 grid-cols-1 xs:max-w-[400px] place-items-center">
          <div>
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
            <ResumeCard
              date={Exp[1].date}
              description={Exp[1].description}
              details={Exp[1].details}
            >
              {Exp[1].title}
            </ResumeCard>
          </div>
          <div>
            <ResumeCard
              date={Exp[2].date}
              description={Exp[2].description}
              details={Exp[2].details}
            >
              {Exp[2].title}
            </ResumeCard>
          </div>
          <ResumeCard
            date={Exp[3].date}
            description={Exp[3].description}
            details={Exp[3].details}
          >
            {Exp[3].title}
          </ResumeCard>
        </div>
      </div>
    </>
  );
};

export default ResumeOverview;
