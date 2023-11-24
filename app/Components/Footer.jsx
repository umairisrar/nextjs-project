"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styles from "../page.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Career from "./Careers/page";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const [career, setcareer] = useState(false);
  const sitenavigation = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Company",
      link: "aboutus",
    },
    {
      title: "What We Do",
      link: "whatwedo?title=Civil_&_Building_Works",
    },
    {
      title: "Policies & Accreditations",
      link: "policies",
    },
    {
      title: "Contact us",
      link: "contactus",
    },
    {
      title: "Projects",
      link: "projects",
    },

    {
      title: "Careers",
      link: "Careers",
    },
  ];
  const Projects = [
    "Commercial Buildings",
    "Hotels & Resorts",
    "Supermarkets",
    "Residential Luxury Villa",
    "Photo Gallery",
  ];
  const wwd = [
    {
      title: "Civil & Building Works",
      link: "civil",
    },
    {
      title: "Steel Structure Works",
      link: "steelwork",
    },
    {
      title: "MEP Works",
      link: "civil",
    },
    {
      title: "Interior Fitout Services",
      link: "civil",
    },
    {
      title: "Commercial Refrigeration",
      link: "civil",
    },
    {
      title: "Facility Management Services",
      link: "civil",
    },
    {
      title: "ELV Services",
      link: "civil",
    },
    {
      title: "Solar Systems",
      link: "civil",
    },
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
                  onClick={() => {
                    if (item.link === "Careers") {
                      setcareer(true);
                    } else {
                      router.push(item.link);
                    }
                  }}
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: "400",
                    padding: "4px 0px",
                    wordWrap: "break-word",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.title}
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
                    fontSize: 13,
                    cursor: "pointer",
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
                  onClick={() => {
                    router.push(
                      `/whatwedo?title=${item.title.replaceAll(" ", "_")}`
                    );
                  }}
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                    padding: "4px 0px",
                    wordWrap: "break-word",
                  }}
                >
                  {item.title}
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
                  fontSize: 13,
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
                  fontSize: 13,
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
                  fontSize: 13,
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
                  style={{ width: "20px", height: "20px", color: "#000000de" }}
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
                  width={20}
                  height={20}
                  style={{ width: "20", height: "20", color: "#000000de" }}
                />
              </Box>
              <Box
                style={{
                  borderRadius: "5px",
                  border: "1px solid #00000059",
                  padding: "5px 4px 0px",
                  height: "25px",
                  cursor: "pointer",
                }}
              >
                <FacebookIcon
                  style={{ width: "20px", height: "20px", color: "#000000de" }}
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
      {career && (
        <Box style={{}}>
          <Career setcareer={setcareer} />
        </Box>
      )}
    </Box>
  );
};

export default Footer;
