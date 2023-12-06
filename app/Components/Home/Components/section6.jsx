"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import styles from "../home.module.css";

const Homesection6 = () => {
  return (
    <Box style={{ padding: "60px 0px", background: "black" }}>
      <Container>
        <Box style={{ textAlign: "center" }}>
          <Typography
            className={styles.section6text0}
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "700",
              wordWrap: "break-word",
              fontFamily: "__Manrope_36d688",
              paddingBottom: "12px",
            }}
          >
            Be The First To Know
          </Typography>
          <Typography
            className={styles.section6text1}
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "400",
              wordWrap: "break-word",
              fontFamily: "__Manrope_36d688",
            }}
          >
            Want to keep up to date with the latest news? Sign up below.
          </Typography>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "36px",
          }}
        >
          <input
            className={styles.section6input}
            type="text"
            placeholder="Enter your email"
            style={{
              background: "white",
              width: "453px",
              padding: "11px",
              outline: "none",
              border: "none",
              height: "27px",
              fontFamily: "__Manrope_36d688",
              fontSize: "15px",
              borderTopLeftRadius: "6px",
              borderBottomLeftRadius: "6px",
            }}
          />
          <Button
            className={styles.section6btn}
            style={{
              background: "#0287E6",
              color: "white",
              height: "49px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
              fontSize: 14,
              fontFamily: "__Manrope_36d688",
              fontWeight: "700",
              wordWrap: "break-word",
              textTransform: "capitalize",
            }}
          >
            Stay in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Homesection6;
