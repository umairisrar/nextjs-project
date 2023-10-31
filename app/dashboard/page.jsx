"use client";
import { Box } from "@mui/material";
import Sidenav from "./Pages/sidenav";
import { useState } from "react";
import Dashboard from "./Pages/dashboard";
import Portfolio from "./Pages/portfolio";
import Projects from "./Pages/projects";
import Gallery from "./Pages/gallery";
import News from "./Pages/news";
import { SnackbarProvider } from "notistack";
import Partners from "./Pages/partners";
import Career from "./Pages/career";
import Sections from "./Pages/section";

const Dashoard = () => {
  const [switchvalue, setswitchvalue] = useState("PROJECTS");
  return (
    <Box style={{ background: "#f6f6f6", minHeight: "100vh" }}>
      <Sidenav setswitchvalue={setswitchvalue} switchvalue={switchvalue} />
      <SnackbarProvider maxSnack={3}>
        <Box style={{ marginLeft: "250px" }}>
          {switchvalue === "DASHBOARD" ? (
            <Dashboard />
          ) : switchvalue === "PORTFOLIO" ? (
            <Portfolio />
          ) : switchvalue === "PROJECTS" ? (
            <Projects />
          ) : switchvalue === "PROJECT GALLERY" ? (
            <Gallery />
          ) : switchvalue === "NEWS" ? (
            <News />
          ) : switchvalue === "PARTNERS" ? (
            <Partners />
          ) : switchvalue === "CAREERS" ? (
            <Career />
          ) : switchvalue === "SECTIONS" ? (
            <Sections />
          ) : null}
        </Box>
      </SnackbarProvider>
    </Box>
  );
};

export default Dashoard;
