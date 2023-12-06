"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../../../page.module.css";

const Section2 = () => {
  return (
    <Box style={{ position: "relative", zIndex: 10 }}>
      <Container>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "white",
            textAlign: "center",
            margin: "64px 0px",
          }}
        >
          <Box style={{ marginBottom: "15px" }}>
            <Typography
              style={{
                color: "black",
                fontSize: 20,

                fontWeight: "700",
                //  lineHeight: 36,
                fontFamily: "__Manrope_36d688",

                wordWrap: "break-word",
              }}
            >
              Welcome to Albwardy Engineering Enterprises
            </Typography>
          </Box>
          <Box
            style={{
              marginBottom: "46px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              className={styles.section2text1}
              style={{
                color: "black",
                fontSize: 19,

                fontWeight: "500",

                wordWrap: "break-word",
                fontFamily: "__Manrope_36d688",
                width: "92%",
              }}
            >
              Albwardy Engineering Enterprises is a subsidiary of Albwardy
              Investments, established in 1977 by Mr. Ali Saeed Juma Albwardy,
              to capitalise on the evergrowing demands of engineering &
              construction works. Albwardy Engineering is managed by a team of
              professionals in different disciplines and have the distinction of
              completing various prestigious projects.
            </Typography>
          </Box>
          <Box>
            <Image
              src="/assets/images/logoimage.png"
              alt="Vercel Logo"
              width={309}
              height={82}
              className={styles.logo1}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section2;
