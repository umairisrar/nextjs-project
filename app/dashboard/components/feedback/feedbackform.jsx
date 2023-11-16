"use client";
import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import Close from "@mui/icons-material/Close";
import styles from "../../dashboard.module.css";

const Feedbackform = ({ openfeedback, setopenfeedback }) => {
  return (
    <Box
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Box
        style={{
          background: "white",
          width: "400px",
          border: "1px solid #00000059",
          borderRadius: "10px",
          boxShadow: "2px 3px 13px 0px #00000029",
          padding: "15px",
          paddingBottom: "0px",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Close
            onClick={() =>
              setopenfeedback({
                open: false,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingBottom: "20px",
            width: "93%",
          }}
        >
          <label
            style={{ fontSize: "16px" }}
            className={styles.labelstyle}
            htmlFor="section"
          >
            Full Name
          </label>
          <input
            disabled
            onChange={(e) => setsection(e.target.value)}
            className={styles.inputstyle}
            style={{ background: "rgb(242, 244, 247)" }}
            value={openfeedback.name}
            type="text"
            name="section"
            id="section"
            placeholder="Enter Section Name"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingBottom: "20px",
            width: "93%",
          }}
        >
          <label
            style={{ fontSize: "16px" }}
            className={styles.labelstyle}
            htmlFor="section"
          >
            Email
          </label>
          <input
            disabled
            onChange={(e) => setsection(e.target.value)}
            className={styles.inputstyle}
            style={{ background: "rgb(242, 244, 247)" }}
            value={openfeedback.email}
            type="text"
            name="section"
            id="section"
            placeholder="Enter Section Name"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingBottom: "20px",
            width: "93%",
          }}
        >
          <label
            style={{ fontSize: "16px" }}
            className={styles.labelstyle}
            htmlFor="section"
          >
            Subject
          </label>
          <input
            disabled
            onChange={(e) => setsection(e.target.value)}
            className={styles.inputstyle}
            style={{ background: "rgb(242, 244, 247)" }}
            value={openfeedback.subject}
            type="text"
            name="section"
            id="section"
            placeholder="Enter Section Name"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingBottom: "20px",
            width: "93%",
          }}
        >
          <label
            style={{ fontSize: "16px" }}
            className={styles.labelstyle}
            htmlFor="section"
          >
            Message
          </label>
          <textarea
            disabled
            onChange={(e) => setsection(e.target.value)}
            className={styles.inputstyle}
            style={{
              background: "rgb(242, 244, 247)",
              height: "112px",
              maxWidth: "100%",
              overflow: "auto",
            }}
            value={openfeedback.message}
            type="text"
            name="section"
            id="section"
            placeholder="Enter Section Name"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Feedbackform;
