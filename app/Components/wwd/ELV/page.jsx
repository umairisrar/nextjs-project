"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../wwd.module.css";

const ELV = () => {
  const electricalwork = [
    "ICT Systems (Active & Passive)",
    "CCTV Systems",
    "Access Control Systems",
    "AV Systems",
    "BGM System",
  ];

  return (
    <Container>
      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "sans-serif",
          fontWeight: "500",
          width: "93%",
          wordWrap: "break-word",
          paddingBottom: "14px",
        }}
      >
        At the Albwardy Engineering Enterprises ELV department, we have a team of professionals with
        multiple years of experience on various systems and technologies. Our ELV Team is equipped
        with the latest technologies and regulations of Etisalat, DU, SIRA, and Abu Dhabi MCC along
        with upholding international standards and requirements.
      </Typography>

      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "sans-serif",
          fontWeight: "500",
          width: "93%",
          wordWrap: "break-word",
        }}
      >
        Our team of engineers can handle system design, installation, T&C and maintenance of
        projects of any magnitude. Our strength is to deliver a seamless integration of ICT,
        Security Systems, BMS and AV systems, providing our clients with reliable and cost-effective
        solutions.
      </Typography>

      <Box style={{ marginTop: "20px" }}>
        <Typography
          style={{
            color: "black",
            fontSize: 15,
            fontFamily: "sans-serif",
            fontWeight: "700",
            wordWrap: "break-word",
            paddingTop: "14px",
          }}
        >
          We specialize in the following areas:
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            padding: "17px 0px",
            flexWrap: "wrap",
          }}
        >
          {electricalwork.map((item) => (
            <Box
              className={styles.meptext2}
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 0px",
                textAlign: "center",
                borderRadius: "8px",
                width: "220px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                className={styles.facilitytext11}
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  width: "213px",
                  wordWrap: "break-word",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ELV;
