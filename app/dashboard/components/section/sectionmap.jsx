"use client";
import React, { useState } from "react";
import styles from "../../dashboard.module.css";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DeleteIcon from "@mui/icons-material/Delete";

const Sectionmap = ({ name, deleteProject, id, setsectionData }) => {
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
        width: "21%",

        padding: "0px 14px",
        paddingTop: "17px",
        height: "70px",
        display: "flex",
        gap: "8px",
        paddingTop: "17px",
        transition: "1s",
        flexDirection: "column",
        cursor: "pointer",
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
          //   className={styles.projecttext2}
          style={{
            color: color2,
            fontSize: 15,
            fontFamily: "__Manrope_36d688",
            fontWeight: "700",

            wordWrap: "break-word",
            lineHeight: "20px",
          }}
        >
          {name && name}
        </Typography>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon
              // className={styles.projecticon}
              onClick={() => deleteProject(id)}
              style={{ color: color2, fontSize: "21px", cursor: "pointer" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Sectionmap;
