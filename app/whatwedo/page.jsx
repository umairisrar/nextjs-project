"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/page";
import Footer from "../Components/Footer";
import Homesection6 from "../Components/Home/Components/section6";
import Homesection5 from "../Components/Home/Components/section5";
import Steel from "../Components/wwd/Steel/page";
import MEP from "../Components/wwd/mepwork/page";
import Civil from "../Components/wwd/civil/page";
import Interior from "../Components/wwd/interior/page";
import Commercial from "../Components/wwd/commercial/page";
import Facility from "../Components/wwd/Facility/page";
import ELV from "../Components/wwd/ELV/page";
import Solar from "../Components/wwd/Solar/page";
import styles from "./whatwedo.module.css";
import { useSearchParams } from "next/navigation";

const wwd = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [switchvalue, setswitch] = useState("Civil & Building Works");
  const [animationActive, setAnimationActive] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    if (title.includes("Civil")) {
      setswitch("Civil & Building Works");
    } else {
      setswitch(title.replaceAll("_", " "));
    }
  }, []);

  useEffect(() => {
    setAnimationActive(true);

    const timeout = setTimeout(() => {
      setAnimationActive(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [switchvalue]);
  return (
    <Box>
      <Box
        className={`${styles.background} ${
          animationActive ? styles.animate : ""
        }`}
        style={{
          backgroundImage:
            switchvalue === "Steel Structure Works"
              ? "url('/assets/images/steel.png')"
              : switchvalue === "MEP Works"
              ? "url('/assets/images/mep.png')"
              : switchvalue === "Civil & Building Works"
              ? "url('/assets/images/civil.png')"
              : switchvalue === "Interior Fitout Services"
              ? "url('/assets/images/interior.png')"
              : switchvalue === "Commercial Refrigeration"
              ? "url('/assets/images/commercial.png')"
              : switchvalue === "Facility Management Services"
              ? "url('/assets/images/Facility.png')"
              : switchvalue === "ELV Services"
              ? "url('/assets/images/elv.png')"
              : switchvalue === "Solar Systems"
              ? "url('/assets/images/solar.png')"
              : "",
        }}
      >
        <Box style={{ background: "#000000ba", width: "100%", height: "100%" }}>
          <Box className={styles.navstyle}>
            <Navbar title="wwd" setswitch={setswitch} />
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
              className={`${styles.text0} ${
                animationActive ? styles.textanimate : ""
              }`}
              style={{
                color: "white",
                fontSize: 26,
                fontFamily: "__Manrope_36d688",
                fontWeight: "700",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              {switchvalue === "Steel Structure Works"
                ? "Steel Structure Works"
                : switchvalue === "MEP Works"
                ? "MEP Works"
                : switchvalue === "Civil & Building Works"
                ? "Civil & Building Works"
                : switchvalue === "Interior Fitout Services"
                ? "Interior Fitout Services"
                : switchvalue === "Commercial Refrigeration"
                ? "Commercial Refrigeration"
                : switchvalue === "Facility Management Services"
                ? "Facility Management Services"
                : switchvalue === "ELV Services"
                ? "ELV Services"
                : switchvalue === "Solar Systems"
                ? "Solar Systems"
                : ""}
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
      <Box className={styles.boxstyle01}>
        {switchvalue === "Steel Structure Works" ? (
          <Steel />
        ) : switchvalue === "MEP Works" ? (
          <MEP />
        ) : switchvalue === "Civil & Building Works" ? (
          <Civil />
        ) : switchvalue === "Interior Fitout Services" ? (
          <Interior />
        ) : switchvalue === "Commercial Refrigeration" ? (
          <Commercial />
        ) : switchvalue === "Facility Management Services" ? (
          <Facility />
        ) : switchvalue === "ELV Services" ? (
          <ELV />
        ) : switchvalue === "Solar Systems" ? (
          <Solar />
        ) : (
          ""
        )}
      </Box>
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </Box>
  );
};

export default wwd;
