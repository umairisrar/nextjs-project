"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "../wwd.module.css";

const Interior = () => {
  return (
    <Container>
      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "500",
          width: "93%",
          //   textAlign: "justify",
          wordWrap: "break-word",
        }}
      >
        <span style={{ color: "#0287E6" }}>ISTANA Furniture</span> is part of Albwardy engineering
        group, providing a unique, bespoke & modern design in producing distinctive projects that
        fulfil the client’s desire. Over the years ISTANA has developed into a fully integrated
        practice, fulfilling project demands, from design and delivery to fitting out of commercial,
        residential and hospitality projects, within the Middle East & Africa.
      </Typography>
      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          marginTop: "17px",
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "500",
          width: "93%",
          //   textAlign: "justify",
          wordWrap: "break-word",
        }}
      >
        The ISTANA team comprises of highly qualified & experienced professionals and craftsmen.
        They understand that a well-designed space can transform any project from ordinary to
        spectacular.
      </Typography>
    </Container>
  );
};

export default Interior;
