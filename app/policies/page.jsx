"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Components/Navbar/page";
import Homesection5 from "../Components/Home/Components/section5";
import Homesection6 from "../Components/Home/Components/section6";
import Footer from "../Components/Footer";
import Image from "next/image";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styles from "./policies.module.css";

const Message = () => {
  const [imagename, setimagename] = useState("");
  const array = [
    "AEE HSE Policy - Year 2023",
    "AEE Quality Policy - Year 2023",
    "AEE Sustainability Policy - Year 2023",
    "AEE Environmental Policy - Year 2023",
    "AEE Worker Welfare Policy - Year 2023",
  ];
  return (
    <Box>
      <Box
        style={{
          backgroundImage: "url('/assets/images/policiespage.png')",
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
                fontFamily: "__Manrope_36d688",
                fontWeight: "700",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              Policies and Accreditations
            </Typography>
            <Box
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
              }}
            >
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
              <Grid item xs={12} md={8}>
                <Box>
                  <Typography
                    className={styles.policiestext1}
                    style={{
                      color: "black",
                      fontSize: 20,
                      fontFamily: "__Manrope_36d688",
                      fontWeight: "700",
                      marginBottom: "8px",
                      wordWrap: "break-word",
                    }}
                  >
                    Policies
                  </Typography>
                  {array.map((item, i) => (
                    <Box
                      onClick={() => {
                        if (i === 0) {
                          setimagename("health");
                        } else if (i === 1) {
                          setimagename("quality");
                        } else if (i === 2) {
                          setimagename("sustainability");
                        } else if (i === 3) {
                          setimagename("environment");
                        } else if (i === 4) {
                          setimagename("welfare");
                        }
                      }}
                      className={styles.hoverbox0}
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        transition: "1s",
                        alignItems: "center",
                        background: i === 0 ? "#0287E6" : "white",
                        justifyContent: "space-between",
                        borderRadius: "8px",
                        marginBottom: "11px",
                        padding: "16px 26px",
                        border:
                          i === 0 ? "1px solid #0287E6" : "1px solid #E4E4E4",
                        cursor: "pointer",
                        color: i === 0 ? "white" : "black",
                      }}
                    >
                      <Typography
                        className={styles.policiestext0}
                        style={{
                          //   color: i === 0 ? "white" : "black",
                          fontSize: 18,
                          fontFamily: "__Manrope_36d688",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        {item}
                      </Typography>
                      <CallMadeIcon style={{ fontSize: "21px" }} />
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={4} className={styles.gridstyle}>
                <Box>
                  <Typography
                    className={styles.policiestext1}
                    style={{
                      color: "black",
                      fontSize: 20,
                      fontFamily: "__Manrope_36d688",
                      fontWeight: "700",

                      wordWrap: "break-word",
                      marginBottom: "8px",
                    }}
                  >
                    Certifications
                  </Typography>

                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Box
                      className={styles.certificatebox}
                      style={{
                        background: "#0287E6",
                        borderRadius: "8px",
                        textAlign: "center",
                        padding: " 11px",
                        width: "81%",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setimagename("ISO1");
                      }}
                    >
                      <Typography
                        className={styles.policiestext2}
                        style={{
                          color: "white",
                          fontSize: 20,
                          paddingBottom: "6px",
                          fontFamily: "__Manrope_36d688",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        ISO: 9001
                      </Typography>
                      <Box
                        style={{
                          textAlign: "center",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          className={styles.policiestext3}
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontFamily: "__Manrope_36d688",
                            fontWeight: "700",
                            wordWrap: "break-word",
                            width: "141px",

                            lineHeight: "25px",
                          }}
                        >
                          QUALITY MANAGEMENT
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className={styles.certificatebox}
                      style={{
                        background: "#0287E6",
                        borderRadius: "8px",
                        textAlign: "center",
                        padding: " 11px",
                        cursor: "pointer",
                        width: "81%",
                      }}
                      onClick={() => {
                        setimagename("ISO2");
                      }}
                    >
                      <Typography
                        className={styles.policiestext2}
                        style={{
                          color: "white",
                          fontSize: 20,
                          paddingBottom: "6px",
                          fontFamily: "__Manrope_36d688",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        ISO: 14001
                      </Typography>
                      <Box
                        style={{
                          textAlign: "center",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          className={styles.policiestext3}
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontFamily: "__Manrope_36d688",
                            fontWeight: "700",
                            wordWrap: "break-word",
                            width: "189px",

                            lineHeight: "25px",
                          }}
                        >
                          ENVIRONMENTAL MANAGEMENT
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className={styles.certificatebox}
                      style={{
                        background: "#0287E6",
                        borderRadius: "8px",
                        textAlign: "center",
                        padding: " 11px",
                        cursor: "pointer",
                        width: "81%",
                      }}
                      onClick={() => {
                        setimagename("ISO3");
                      }}
                    >
                      <Typography
                        className={styles.policiestext2}
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontFamily: "__Manrope_36d688",
                          paddingBottom: "6px",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        ISO: 45001
                      </Typography>
                      <Box
                        style={{
                          textAlign: "center",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          className={styles.policiestext3}
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontFamily: "__Manrope_36d688",
                            fontWeight: "700",
                            wordWrap: "break-word",
                            width: "189px",

                            lineHeight: "25px",
                          }}
                        >
                          HEALTH & SAFETY MANAGEMENT
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Homesection5 />
      <Homesection6 />
      <Footer />
      {imagename && (
        <Box
          style={{
            background: "#000000c4",
            width: " 100%",
            height: "100%",
            zIndex: "1000",
            position: "fixed",
            top: "0px",
          }}
        >
          <Box
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
            onClick={() => {
              setimagename("");
            }}
          >
            {imagename === "health" ? (
              <Image
                src="/assets/images/health.png"
                alt="Vercel Logo"
                width={521}
                height={568}
                className={styles.imageheight}
              />
            ) : imagename === "quality" ? (
              <Image
                src="/assets/images/quality.png"
                alt="Vercel Logo"
                width={521}
                height={568}
                className={styles.imageheight}
              />
            ) : imagename === "sustainability" ? (
              <Image
                className={styles.imageheight}
                src="/assets/images/sustainaibility.png"
                alt="Vercel Logo"
                width={521}
                height={568}
              />
            ) : imagename === "environment" ? (
              <Image
                className={styles.imageheight}
                src="/assets/images/Environment.png"
                alt="Vercel Logo"
                width={521}
                height={568}
              />
            ) : imagename === "welfare" ? (
              <Image
                className={styles.imageheight}
                src="/assets/images/welfare.png"
                alt="Vercel Logo"
                width={521}
                height={568}
              />
            ) : imagename === "ISO1" ? (
              <Image
                className={styles.imageheight}
                src="/assets/images/ISO2.png"
                alt="Vercel Logo"
                width={521}
                height={568}
              />
            ) : imagename === "ISO2" ? (
              <Image
                className={styles.imageheight}
                src="/assets/images/ISO1.png"
                alt="Vercel Logo"
                width={521}
                height={568}
              />
            ) : imagename === "ISO3" ? (
              <Image
                className={styles.imageheight}
                src="/assets/images/ISO3.png"
                alt="Vercel Logo"
                width={521}
                height={568}
              />
            ) : null}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Message;
