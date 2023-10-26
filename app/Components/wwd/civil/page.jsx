"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import styles from "../wwd.module.css";

const Civil = () => {
  return (
    <Container>
      <Typography
        className={styles.civiltext0}
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
        When it comes to civil works, Albwardy engineering excels in the vast variety of services we
        provide. From effortless planning, adequate design and execution of commercial & retail
        buildings, residential villas, hotels and high-end supermarkets. Civil works is a core
        competence of Albwardy Engineering Enterprise. By consistently delivering building &
        infrastructures at the highest engineering standards, we make sure to reflect the best image
        of UAE and the company.
      </Typography>

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
        The civil work comprises of but not limited to:
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
        <Box className={styles.civilbox0}>
          <Typography
            className={styles.facilitytext11}
            style={{
              color: "black",
              fontSize: 17,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            {" "}
            Earth Works
          </Typography>
        </Box>
        <Box className={styles.civilbox0}>
          <Typography
            className={styles.facilitytext11}
            style={{
              color: "black",
              fontSize: 17,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            Sub Structures
          </Typography>
        </Box>
        <Box className={styles.civilbox0}>
          <Typography
            className={styles.facilitytext11}
            style={{
              color: "black",
              fontSize: 17,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            Super Structures
          </Typography>
        </Box>
        <Box className={styles.civilbox0}>
          <Typography
            className={styles.facilitytext11}
            style={{
              color: "black",
              fontSize: 17,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            Masonry Works
          </Typography>
        </Box>
        <Box className={styles.civilbox0}>
          <Typography
            className={styles.facilitytext11}
            style={{
              color: "black",
              fontSize: 17,
              fontFamily: "sans-serif",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            Steel Structure Works
          </Typography>
        </Box>
        <Box className={styles.civilbox0}>
          <Typography
            className={styles.facilitytext11}
            style={{
              color: "black",
              fontSize: 17,
              fontFamily: "sans-serif",
              fontWeight: "500",
              width: "195px",
              wordWrap: "break-word",
            }}
          >
            Aluminium & Glazing Works
          </Typography>
        </Box>
        <Box className={styles.civilbox0}>
          <Typography
            className={styles.facilitytext11}
            style={{
              color: "black",
              fontSize: 17,
              fontFamily: "sans-serif",
              fontWeight: "500",
              width: "195px",
              wordWrap: "break-word",
            }}
          >
            Painting and Finishing Works
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Civil;
