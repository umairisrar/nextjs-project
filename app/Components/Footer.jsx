"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styles from "../page.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const sitenavigation = [
    "Home",

    "Company",
    "What We Do",
    "News Room",
    "Projects",
    "Careers",
    "Contact us",
  ];
  const Projects = [
    "Commercial Buildings",
    "Hotels & Resorts",
    "Supermarkets",
    "Residential Luxury Villa",
    "Photo Gallery",
  ];
  const wwd = [
    "Civil & Building Works",
    "Steel Structure Works",
    "MEP Works",
    "Interior Fitout Services",
    "Commercial Refrigeration",
    "Facility Management Services",
    "ELV Services",
    "Solar Systems",
  ];
  return (
    <Box
      className={styles.footer}
      style={{
        padding: "60px 0px",
        position: "relative",
        paddingRight: "50px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/assets/images/logoimage.png"
              alt="Vercel Logo"
              width={309}
              height={82}
              className={styles.footerimage}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <Typography
              style={{
                color: "black",
                fontSize: 18,

                fontWeight: "700",

                wordWrap: "break-word",
                fontFamily: "sans-serif",
                marginBottom: "6px",
              }}
            >
              Site Navigation
            </Typography>
            {sitenavigation.map((item) => (
              <Box
                style={{ display: "flex", flexDirection: "row", gap: "2px" }}
              >
                <Typography
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontWeight: "400",
                    padding: "4px 0px",
                    wordWrap: "break-word",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item}
                </Typography>
                <CallMadeIcon style={{ fontSize: "14px" }} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <Typography
              style={{
                color: "black",
                fontSize: 18,

                fontWeight: "700",
                fontFamily: "sans-serif",
                wordWrap: "break-word",
                marginBottom: "6px",
              }}
            >
              Projects
            </Typography>
            {Projects.map((item) => (
              <Box
                style={{ display: "flex", flexDirection: "row", gap: "2px" }}
              >
                <Typography
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontWeight: "400",
                    padding: "4px 0px",
                    fontFamily: "sans-serif",
                    wordWrap: "break-word",
                  }}
                >
                  {item}
                </Typography>
                <CallMadeIcon style={{ fontSize: "14px" }} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <Typography
              style={{
                color: "black",
                fontSize: 18,
                fontFamily: "sans-serif",

                fontWeight: "700",

                wordWrap: "break-word",
                marginBottom: "6px",
              }}
            >
              What We Do
            </Typography>
            {wwd.map((item) => (
              <Box
                style={{ display: "flex", flexDirection: "row", gap: "2px" }}
              >
                <Typography
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                    padding: "4px 0px",
                    wordWrap: "break-word",
                  }}
                >
                  {item}
                </Typography>
                <CallMadeIcon style={{ fontSize: "14px" }} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <Typography
              style={{
                color: "black",
                fontSize: 18,

                fontWeight: "700",
                fontFamily: "sans-serif",
                wordWrap: "break-word",
                marginBottom: "6px",
              }}
            >
              Contact Details
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "6px",
                paddingTop: "2px",
                paddingBottom: "10px",
              }}
            >
              <Typography
                style={{
                  color: "#0287E6",
                  fontSize: 14,
                  fontFamily: "sans-serif",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  wordWrap: "break-word",
                }}
              >
                Call us:{" "}
              </Typography>
              <Typography
                style={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: "sans-serif",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  wordWrap: "break-word",
                }}
              >
                +971-4-3238008
              </Typography>
              <CallMadeIcon
                style={{
                  fontSize: "14px",
                  position: "relative",
                  top: "-10px",
                  right: "4px",
                }}
              />
            </Box>
            <Box style={{ display: "flex" }}>
              <Typography
                style={{
                  color: "#0287E6",
                  fontSize: 14,
                  fontFamily: "sans-serif",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Leave us a Message
              </Typography>
              <CallMadeIcon
                style={{ fontSize: "14px", position: "relative", top: "-10px" }}
              />
            </Box>

            <Box
              className={styles.footerlogos}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "50px",
                gap: "11px",
              }}
            >
              <Box
                style={{
                  borderRadius: "5px",
                  border: "1px solid #00000059",
                  padding: "4px",
                  paddingBottom: 0,
                  cursor: "pointer",
                }}
              >
                <InstagramIcon
                  style={{ width: "26px", height: "26px", color: "#000000de" }}
                />
              </Box>
              <Box
                style={{
                  borderRadius: "5px",
                  border: "1px solid #00000059",
                  padding: "4px",
                  paddingBottom: 0,
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/images/twitterlogo.png"
                  alt="Vercel Logo"
                  width={26}
                  height={26}
                  style={{ width: "26", height: "26", color: "#000000de" }}
                />
              </Box>
              <Box
                style={{
                  borderRadius: "5px",
                  border: "1px solid #00000059",
                  padding: "3px 4px 0px",
                  height: "32px",
                  cursor: "pointer",
                }}
              >
                <FacebookIcon
                  style={{ width: "28px", height: "28px", color: "#000000de" }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        style={{ position: "absolute", bottom: 2, width: "100%" }}
        className={styles.footercopyright}
      >
        <Typography style={{ fontFamily: "sans-serif", textAlign: "center" }}>
          Copyright © 2023 Albwardy Engineering Enterprises Est.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
