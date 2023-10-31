"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./project.module.css";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Projectmap = ({ name, date }) => {
  const [color1, setcolor1] = useState("black");
  const [color2, setcolor2] = useState("#0287E6");
  return (
    <Box
      onMouseEnter={() => {
        setcolor1("white");
        setcolor2("white");
      }}
      onMouseLeave={() => {
        setcolor1("black");
        setcolor2("#0287E6");
      }}
      className={styles.projects0}
      style={{
        border: "1px solid #E4E4E4",
        borderRadius: "10px",
        width: "249px",

        padding: "0px 14px",
        paddingTop: "17px",
        height: "98px",
        display: "flex",
        gap: "8px",
        paddingTop: "17px",
        cursor: "default",
        transition: "1s",
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className={styles.projecttext1}
          style={{
            color: color1,
            fontSize: 15,
            fontFamily: "sans-serif",
            fontWeight: "500",

            wordWrap: "break-word",
          }}
        >
          {date.slice(0, 7)}
        </Typography>
        <CallMadeIcon className={styles.projecticon} style={{ color: color2, fontSize: "18px" }} />
      </Box>
      <Typography
        className={styles.projecttext2}
        style={{
          color: color2,
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "700",

          wordWrap: "break-word",
          lineHeight: "20px",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Projectmap;
