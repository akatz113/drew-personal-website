import Image from "next/image";
import Link from "next/link";
import IntroGrid from "./Components/IntroGrid";
import Navbar from "./Components/Navbar";
import { Card, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Title from "./Components/Title";
import ResumeOverview from "./Components/ResumeOverview";
import InternshipSlider from "./Components/InternshipSlider";

export default function Home() {
  return (
    <>
      <Title />
      <IntroGrid />
      <ResumeOverview />
    </>
  );
}
