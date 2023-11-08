"use client";
import React, { useState } from "react";
import styles from "../../dashboard.module.css";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DeleteIcon from "@mui/icons-material/Delete";

const Careermap = ({ name, email, phoneno, _id, position, address, resume, deleteCareer }) => {
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
        borderRadius: "18px",
        width: "320px",

        padding: "0px 14px 15px",
        paddingTop: "17px",
        // height: "173px",
        display: "flex",
        gap: "8px",
        paddingTop: "17px",
        cursor: "default",
        transition: "1s",
        flexDirection: "column",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "flex-end" }}></Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          // className={styles.projecttext1}
          style={{
            color: color1,
            fontSize: 18,
            fontFamily: "sans-serif",
            fontWeight: "500",

            wordWrap: "break-word",
          }}
        >
          {name}
        </Typography>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon
              // className={styles.projecticon}
              onClick={() => deleteCareer(_id)}
              style={{ color: color2, fontSize: "21px", cursor: "pointer" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography
        //   className={styles.projecttext2}
        style={{
          color: color2,
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "700",

          wordWrap: "break-word",
          lineHeight: "18px",
        }}
      >
        {email}
      </Typography>
      <Typography
        //   className={styles.projecttext2}
        style={{
          color: color2,
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "700",

          wordWrap: "break-word",
          lineHeight: "18px",
        }}
      >
        {phoneno}
      </Typography>
      <Typography
        //   className={styles.projecttext2}
        style={{
          color: color2,
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "700",

          wordWrap: "break-word",
          lineHeight: "18px",
        }}
      >
        {address}
      </Typography>
      <Typography
        //   className={styles.projecttext2}
        style={{
          color: color2,
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "700",

          wordWrap: "break-word",
          lineHeight: "18px",
        }}
      >
        {position}
      </Typography>
      <Box style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Typography style={{ fontSize: "18px" }}>Resume</Typography>
        <iframe
          title="Resume"
          src={resume}
          width="100%"
          height="300"
          style={{ border: "none" }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default Careermap;
