"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/page";
import Homesection5 from "../Components/Home/Components/section5";
import Homesection6 from "../Components/Home/Components/section6";
import Footer from "../Components/Footer";
import Image from "next/image";
import styles from "./vision.module.css";

const Message = () => {
  const array = [
    "To be the builder of choice by forging lasting partnerships with clients. ",
    "To be the employer of choice by empowering and investing in the team.",
    "To uphold the highest industry standards of quality, safety and ethics.",
    "To achieve a fair balance of responsibility & profitability. ",
    "To invest in our team's growth and development, providing them with the  tools and resources needed to excel in their careers and deliver outstanding results. ",
  ];
  return (
    <Box>
      <Box
        style={{
          backgroundImage: "url('/assets/images/visionpage.png')",
          // height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Box style={{ background: "#000000ba", width: "100%", height: "100%" }}>
          <Box className={styles.navstyle}>
            <Navbar title="company" />
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
                fontSize: 26,
                fontFamily: "sans-serif",
                fontWeight: "700",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              Vision & Mission Statements
            </Typography>
            <Box style={{ justifyContent: "center", display: "flex", width: "100%" }}>
              <Box
                style={{
                  background: "white",
                  width: "61px",
                  height: "4px",
                  borderRadius: "20px",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={{ padding: "60px 0px" }}>
        <Container>
          <Box>
            <Grid container spacing={7}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Box>
                    <Typography
                      className={styles.visiontext1}
                      style={{
                        color: "black",
                        fontSize: 25,
                        fontFamily: "sans-serif",
                        fontWeight: "700",
                        paddingBottom: "5px",
                        wordWrap: "break-word",
                      }}
                    >
                      Mission Statement:
                    </Typography>
                    <Typography
                      className={styles.visiontext0}
                      style={{
                        color: "black",
                        fontSize: 15,
                        fontFamily: "sans-serif",
                        fontWeight: "500",

                        wordWrap: "break-word",
                      }}
                    >
                      Our Mission is to lead the construction & services industry by offering
                      clients the highest level of internal expertise and a fully integrated suite
                      of services with a precise and dedicated approach to the business. 
                    </Typography>

                    <Box>
                      <Typography
                        className={styles.visiontext0}
                        style={{
                          color: "black",
                          fontSize: 14,
                          fontFamily: "sans-serif",
                          fontWeight: "700",
                          wordWrap: "break-word",
                          padding: "10px 0px",
                        }}
                      >
                        Through relentless pursuit of excellence, we aim: 
                      </Typography>
                    </Box>
                    <Box>
                      {array.map((item) => (
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            // alignItems: "",
                            paddingBottom: "9px",
                          }}
                        >
                          <Image
                            src="/assets/images/star-04.svg"
                            alt="Vercel Logo"
                            width={25}
                            height={"25"}
                            style={{ marginRight: "10px" }}
                          />
                          <Typography
                            className={styles.visiontext0}
                            style={{
                              color: "black",
                              fontSize: 15,
                              fontFamily: "sans-serif",
                              fontWeight: "500",

                              wordWrap: "break-word",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid className={styles.gridstyle} item xs={12} md={6}>
                <Box>
                  <Typography
                    className={styles.visiontext1}
                    style={{
                      color: "black",
                      fontSize: 25,
                      fontFamily: "sans-serif",
                      fontWeight: "700",

                      wordWrap: "break-word",
                      paddingBottom: "5px",
                    }}
                  >
                    Vision Statement:
                  </Typography>
                  <Typography
                    className={styles.visiontext0}
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontFamily: "sans-serif",
                      fontWeight: "500",

                      wordWrap: "break-word",
                    }}
                  >
                    Our vision is to achieve global recognition as an engineering firm that reflects
                    the image of United Arab Emirates, by providing renowned working methodologies,
                    technological skills,and multi skill human resource capabilities. 
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </Box>
  );
};

export default Message;
