import React from "react";
import { Box, Container, Typography } from "@mui/material";
import styles from "../wwd.module.css";

const Steel = () => {
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
          textAlign: "justify",
          wordWrap: "break-word",
        }}
      >
        Our expertise in steel structures is the foundation upon which great projects stand. We
        design, fabricate, and construct steel structures that endure the test of time while being
        equipped to deliver robust and visually striking steel solutions.
      </Typography>

      <Typography
        className={styles.steeltext1}
        style={{
          color: "black",
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "700",
          wordWrap: "break-word",
          paddingTop: "14px",
        }}
      >
        Some of the works we do include:
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
          padding: "17px 0px",
          flexWrap: "wrap",
        }}
      >
        <Box
          className={styles.steeltext2}
          style={{
            border: "1px solid #E4E4E4",
            padding: "26px 0px",
            textAlign: "center",
            borderRadius: "8px",
            width: "370px",
          }}
        >
          <Typography
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            {" "}
            Aluminium Sandwich Panel Roofing System
          </Typography>
        </Box>
        <Box
          style={{
            border: "1px solid #E4E4E4",
            padding: "26px 0px",
            textAlign: "center",
            borderRadius: "8px",
            width: "370px",
          }}
        >
          <Typography
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            Pre-Engineered Steel Structure
          </Typography>
        </Box>
        <Box
          style={{
            border: "1px solid #E4E4E4",
            padding: "26px 0px",
            textAlign: "center",
            borderRadius: "8px",
            width: "370px",
          }}
        >
          <Typography
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            Standard Steel Structures
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Steel;
