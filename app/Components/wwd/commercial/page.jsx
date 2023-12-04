"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "../wwd.module.css";

const Commercial = () => {
  const electricalwork = [
    "In-House Design Capabilities",
    "In-House Installation Engineers & Team",
    "In-House Services Team",
    "Company with Years of Experience",
    "Highest Standards of Workmanship",
    "Engineers on Call 24/7 (Contract Customers)",
    "Expert on Supermarket Refrigeration Needs",
  ];
  return (
    <Container>
      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "__Manrope_36d688",
          fontWeight: "500",
          width: "93%",
          wordWrap: "break-word",
          paddingBottom: "14px",
        }}
      >
        We have a long-established refrigeration system department, built on
        reputation and specializing in design, installation, service and
        maintenance of all types of commercial and semi-industrial refrigeration
        systems.
      </Typography>

      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "__Manrope_36d688",
          fontWeight: "500",
          width: "93%",
          paddingBottom: "14px",
          wordWrap: "break-word",
        }}
      >
        We pride ourselves on our attention to detail and commitment to
        delivering quality; by providing a highly professional service with
        dedicated personnel and a proactive approach, which we believe is highly
        competitive trait in today’s market. If you need a reliable
        refrigeration contractor, you know where to find us.
      </Typography>

      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "__Manrope_36d688",
          fontWeight: "500",
          width: "93%",

          wordWrap: "break-word",
        }}
      >
        Our business is built upon reputation, repeat business and
        recommendation. We are well known for our low energy, food retail
        refrigeration systems - saving owners a substantial amount of their
        capital.
      </Typography>

      <Box style={{ marginTop: "20px" }}>
        <Typography
          style={{
            color: "black",
            fontSize: 15,
            fontFamily: "__Manrope_36d688",
            fontWeight: "700",
            wordWrap: "break-word",
            paddingTop: "14px",
          }}
        >
          Our expertise in commercial refrigeration:
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
                  fontFamily: "__Manrope_36d688",
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

export default Commercial;
