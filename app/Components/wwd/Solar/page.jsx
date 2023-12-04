"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../wwd.module.css";

const Solar = () => {
  const electricalwork = ["Design", "Installation", "Maintenance"];

  return (
    <Container>
      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "__Manrope_36d688",
          fontWeight: "500",
          width: "93%",
          wordWrap: "break-word",
          paddingBottom: "14px",
        }}
      >
        While we may be relatively new to the solar industry, our commitment to
        excellence and sustainability remains unwavering.
      </Typography>

      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "__Manrope_36d688",
          fontWeight: "500",
          width: "93%",
          wordWrap: "break-word",
          paddingBottom: "14px",
        }}
      >
        With our expertise in engineering and the several other sectors of work,
        we've embarked on a mission to provide services in this demanding field
        and bring in our continued work ethic.
      </Typography>

      <Typography
        style={{
          color: "black",
          fontSize: 15,
          fontFamily: "__Manrope_36d688",
          fontWeight: "700",
          wordWrap: "break-word",
          paddingTop: "14px",
          paddingBottom: "5px",
        }}
      >
        What Sets Us Apart?
      </Typography>

      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "__Manrope_36d688",
          fontWeight: "500",
          width: "93%",
          wordWrap: "break-word",
        }}
      >
        Our team of skilled engineers and technicians bring a wealth of
        experience to the table. We apply the same meticulous attention to
        detail and quality that defines our other services to every solar
        project we undertake, some of which including but not limited to:
      </Typography>

      <Box style={{ marginTop: "20px" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            padding: "17px 0px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {electricalwork.map((item) => (
            <Box
              className={styles.meptext2}
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 0px",
                textAlign: "center",
                borderRadius: "8px",
                width: "370px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                className={styles.facilitytext11}
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "__Manrope_36d688",
                  fontWeight: "500",
                  width: "213px",
                  wordWrap: "break-word",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Solar;
