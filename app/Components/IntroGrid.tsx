import { Grid } from "@mui/material";
import React from "react";

const IntroGrid = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <p className="text-center text-xl text-primary p-12 border-solid border-2 border-r-4 border-red-500">
            Hello and welcome to my portfolio! I am an incoming Mechanical
            Engineer at GE Appliances in the Edison Engineering Development
            Program. To learn more about my projects and interests, check out
            the rest of my website!
          </p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={5}
          className="border-solid border-2 border-green-400 h-12"
        >
          <img
            src="240052598-4SPsquare.jpg"
            className="rounded-full colored-shadow"
          ></img>
        </Grid>
      </Grid>
    </>
  );
};

export default IntroGrid;
