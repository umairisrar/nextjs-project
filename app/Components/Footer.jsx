"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styles from "../page.module.css";

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
    <Box className={styles.footer} style={{ padding: "60px 0px" }}>
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
