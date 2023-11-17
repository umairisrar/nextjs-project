"use client";
import { Box, CircularProgress } from "@mui/material";
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
import Feedback from "./Pages/feedback";
import LoginUser from "./Pages/login";
import { useEffect } from "react";
import { getUserFromToken, isTokenExpired } from "@/utils/decodeToken";

const Dashoard = () => {
  const [switchvalue, setswitchvalue] = useState("PROJECTS");
  const [login, setlogin] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const checked = async () => {
      setloading(true);
      let checkAdmin = getUserFromToken();
      if (checkAdmin) {
        setloading(false);
        setlogin(true);
      } else {
        setloading(false);
        setlogin(false);
      }
    };
    checked();
  }, []);

  return (
    <Box style={{ background: "#f6f6f6", minHeight: "100vh" }}>
      <Sidenav setswitchvalue={setswitchvalue} switchvalue={switchvalue} />
      {login ? (
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
            ) : switchvalue === "FEEDBACKS" ? (
              <Feedback />
            ) : null}
          </Box>
        </SnackbarProvider>
      ) : (
        <SnackbarProvider maxSnack={3}>
          {loading ? (
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <CircularProgress
                style={{ width: "50px", height: "50px", color: "#0287e6" }}
              />
            </Box>
          ) : (
            <LoginUser setlogin={setlogin} />
          )}
        </SnackbarProvider>
      )}
    </Box>
  );
};

export default Dashoard;
