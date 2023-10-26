"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/page";
import Footer from "../Components/Footer";
import Homesection6 from "../Components/Home/Components/section6";
import Homesection5 from "../Components/Home/Components/section5";
import Project from "../Components/Projects/projects/page";
import styles from "./project.module.css";

const Projects = () => {
  return (
    <Box>
      <Box
        style={{
          backgroundImage: "url('/assets/images/projects.png')",
          // height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box style={{ background: "#000000ba", width: "100%", height: "100%" }}>
          <Box className={styles.navstyle}>
            <Navbar title="projects" />
          </Box>

          <Box
            style={{
              height: "302px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              position: " relative",
              top: "-24px",
            }}
            className={styles.boxstyle0}
          >
            <Typography
              className={styles.text0}
              style={{
                color: "white",
                fontSize: 28,
                fontFamily: "sans-serif",
                fontWeight: "700",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              Projects
            </Typography>
            <Box style={{ justifyContent: "center", display: "flex", width: "100%" }}>
              <Box style={{}}>
                <Typography
                  className={styles.projecttext2}
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "sans-serif",
                    fontWeight: "500",
                    textAlign: "center",
                    wordWrap: "break-word",
                  }}
                >
                  A collection of our successful endeavors
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.boxstyle01}>
        <Project />
      </Box>
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </Box>
  );
};

export default Projects;
