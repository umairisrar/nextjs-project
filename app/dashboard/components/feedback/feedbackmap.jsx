"use client";
import React, { useState } from "react";
import styles from "../../dashboard.module.css";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DeleteIcon from "@mui/icons-material/Delete";

const Feedbackmap = ({
  setopenfeedback,
  email,
  name,
  message,
  subject,
  deletefeedback,
  id,
}) => {
  const [color1, setcolor1] = useState("black");
  const [color2, setcolor2] = useState("#0287E6");

  return (
    <Box
      className={styles.projects0}
      onMouseEnter={() => {
        setcolor1("white");
        setcolor2("white");
      }}
      onMouseLeave={() => {
        setcolor1("black");
        setcolor2("#0287E6");
      }}
      style={{
        width: "21%",
        height: "98px",
        position: "relative",
        padding: "0px 14px",
        paddingTop: "17px",
        border: "1px solid #E4E4E4",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "1s",
      }}
    >
      <Box
        onClick={() => {
          setopenfeedback({
            open: true,
            name: name,
            email: email,
            message: message,
            subject: subject,
            id: id,
          });
        }}
        style={{
          width: "100%",

          height: "100%",
          display: "flex",
          gap: "8px",

          flexDirection: "column",
          position: "relative",
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
              fontSize: 19,
              fontFamily: "__Manrope_36d688",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Typography
          //   className={styles.projecttext2}
          style={{
            color: color2,
            fontSize: 15,
            fontFamily: "__Manrope_36d688",

            wordWrap: "break-word",
            lineHeight: "20px",
          }}
        >
          {email}
        </Typography>
      </Box>
      <Box style={{ position: "absolute", top: 18, right: 2 }}>
        <Tooltip title="Delete" onClick={() => deletefeedback(id)}>
          <IconButton>
            <DeleteIcon
              style={{ color: color2, fontSize: "20px", cursor: "pointer" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Feedbackmap;
