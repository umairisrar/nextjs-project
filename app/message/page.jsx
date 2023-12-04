"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/page";
import Homesection5 from "../Components/Home/Components/section5";
import Homesection6 from "../Components/Home/Components/section6";
import Footer from "../Components/Footer";
import Image from "next/image";
import styles from "./message.module.css";

const Message = () => {
  return (
    <Box>
      <Box
        style={{
          backgroundImage: "url('/assets/images/chairmanpage.png')",
          // height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Box style={{ background: "#000000ba", width: "100%", height: "100%" }}>
          <Box className={styles.navstyle}>
            <Navbar title="company" />
          </Box>

          <Box
            className={styles.boxstyle0}
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
              Chairman Message
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
      <Box style={{ padding: "60px 0px" }} className={styles.boxpadding}>
        <Container>
          <Box>
            <Grid container spacing={7}>
              <Grid item xs={12} md={5}>
                <Box
                  className={styles.messageshow}
                  sx={{
                    width: "100%",
                    position: "relative",
                    height: "489px",
                  }}
                >
                  <Image
                    src="/assets/images/chairman.png"
                    alt="chairman"
                    layout="fill"
                  />
                  <Box
                    style={{
                      textAlign: "center",
                      height: "100%",
                      position: "relative",
                      top: "56px",
                      zIndex: 999,
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      style={{
                        color: "black",
                        fontSize: 18,
                        fontFamily: "__Manrope_36d688",
                        fontWeight: "700",
                        paddingTop: "10px",
                        wordWrap: "break-word",
                      }}
                    >
                      Ali Saeed Juma Albwardy
                    </Typography>
                    <Typography
                      style={{
                        color: "#667085",
                        fontSize: 14,
                        fontFamily: "__Manrope_36d688",
                        fontWeight: "500",

                        wordWrap: "break-word",
                      }}
                    >
                      Chairman of Albwardy
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography
                    className={styles.messagetext3}
                    style={{
                      color: "black",
                      fontSize: 25,
                      fontFamily: "__Manrope_36d688",
                      fontWeight: "700",
                      paddingBottom: "5px",
                      wordWrap: "break-word",
                    }}
                  >
                    Chairman Message
                  </Typography>
                  <Typography
                    className={styles.messagetext4}
                    style={{
                      color: "black",
                      fontSize: 16,
                      fontFamily: "__Manrope_36d688",
                      fontWeight: "600",

                      wordWrap: "break-word",
                      paddingBottom: "10px",
                    }}
                  >
                    The Emirate of Dubai is synonymous with trade and
                    development. A tiny pearl fishing village on the coast of
                    the Arabian Sea, which over the past few decades has emerged
                    triumphantly to become a world-class international city.
                  </Typography>
                  <Typography
                    className={styles.messagetext5}
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontFamily: "__Manrope_36d688",
                      fontWeight: "500",

                      wordWrap: "break-word",
                      paddingBottom: "10px",
                    }}
                  >
                    Dubai now stands at the forefront of regional development
                    and its outstanding growth must be attributed to the amazing
                    vision and foresight of the late ruler H.H. Sheikh Rashid
                    bin Saeed Al Maktoum, who undoubtedly laid the foundations
                    for the prosperity that has followed within the Emirate.
                    This success has been enhanced still further by his
                    offspring and in particular the current ruler H.H. General
                    Sheikh Mohammed bin Rashid Al Maktoum who has been
                    responsible for the Emirate of Dubai reaching even higher
                    levels of recognition and economic progress.
                  </Typography>
                  <Typography
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontFamily: "__Manrope_36d688",
                      fontWeight: "500",

                      wordWrap: "break-word",
                      paddingBottom: "10px",
                    }}
                  >
                    The development of Dubai has been quite phenomenal and I, my
                    company, and my colleagues are proud to have been a part of
                    this economic evolution. It is companies like ours who have
                    contributed to the growth of this wonderful city which has
                    allowed the Group to expand into a diverse range of
                    activities thus generating both employment opportunities and
                    prosperity. Much of our success, I think, has been due to
                    our innovative approach to conducting business. The main
                    reason for our progress has been our pioneering spirit and
                    willingness to step into areas at the time unknown to us,
                    whilst not sacrificing either our integrity or commitment to
                    excellence.
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
