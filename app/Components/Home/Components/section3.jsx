"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../home.module.css";

const Homesection3 = () => {
  return (
    <Box style={{ background: "#000000", fontFamily: "sans-serif" }}>
      <Container>
        <Box
          style={{
            border: "1px solid rgba(228, 228, 228, 0.12)",
            padding: "60px 0px",
          }}
        >
          <Box style={{ padding: "0px 5px" }}>
            <Typography
              className={styles.section3text2}
              style={{
                color: "white",
                fontSize: 33,

                fontWeight: "700",

                wordWrap: "break-word",
              }}
            >
              What We Do?
            </Typography>
            <Typography
              className={styles.section3text}
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "600",
                wordWrap: "break-word",
                fontFamily: "sans-serif",
              }}
            >
              A team of proactive thinkers, unified by a resolute commitment to
              serving
              <span style={{ color: "#0287E6" }}> our clients.</span>  
            </Typography>
          </Box>
          <Box style={{ marginTop: "20px" }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "101%",
              }}
              className={styles.section2Box}
            >
              <Box
                className={styles.dfwork}
                style={{
                  border: "1px solid rgba(228, 228, 228, 0.12)",
                  color: "white",
                }}
              >
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.icontab}
                    // style={{ background: "rgba(255, 255, 255, 0.12)", borderRadius: "360px" }}
                  >
                    <Image
                      src="/assets/images/building.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={21}
                    />
                  </span>
                </Box>

                <Typography>Civil & Building Works</Typography>
              </Box>
              <Box
                className={styles.dfwork}
                style={{
                  border: "1px solid rgba(228, 228, 228, 0.12)",
                  color: "white",
                }}
              >
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.icontab}
                    // style={{ background: "rgba(255, 255, 255, 0.12)", borderRadius: "360px" }}
                  >
                    <Image
                      src="/assets/images/tool-02.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={21}
                    />
                  </span>
                </Box>
                <Typography>MEP Works</Typography>
              </Box>
              <Box
                className={styles.dfwork}
                style={{
                  border: "1px solid rgba(228, 228, 228, 0.12)",
                  color: "white",
                }}
              >
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.icontab}
                    // style={{ background: "rgba(255, 255, 255, 0.12)", borderRadius: "360px" }}
                  >
                    <Image
                      src="/assets/images/electricity.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={21}
                    />
                  </span>
                </Box>
                <Typography>ELV Services</Typography>
              </Box>
              <Box
                className={styles.dfwork}
                style={{
                  border: "1px solid rgba(228, 228, 228, 0.12)",
                  color: "white",
                  width: "285px",
                }}
              >
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.icontab}
                    // style={{ background: "rgba(255, 255, 255, 0.12)", borderRadius: "360px" }}
                  >
                    <Image
                      src="/assets/images/Vectorsvg.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={18}
                    />
                  </span>
                </Box>
                <Typography>Interior Fitout Services</Typography>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Box
                className={styles.dfwork}
                style={{
                  border: "1px solid rgba(228, 228, 228, 0.12)",
                  color: "white",
                }}
              >
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.icontab}
                    // style={{ background: "rgba(255, 255, 255, 0.12)", borderRadius: "360px" }}
                  >
                    <Image
                      src="/assets/images/Vector2svg.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={21}
                    />
                  </span>
                </Box>
                <Typography>Commercial Refrigeration</Typography>
              </Box>
              <Box
                className={styles.dfwork}
                style={{
                  border: "1px solid rgba(228, 228, 228, 0.12)",
                  color: "white",
                }}
              >
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.icontab}
                    // style={{ background: "rgba(255, 255, 255, 0.12)", borderRadius: "360px" }}
                  >
                    <Image
                      src="/assets/images/sun-fog.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={21}
                    />
                  </span>
                </Box>
                <Typography>Solar Systems</Typography>
              </Box>
              <Box
                className={styles.dfwork}
                style={{
                  border: "1px solid rgba(228, 228, 228, 0.12)",
                  color: "white",
                }}
              >
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.icontab}
                    // style={{ background: "rgba(255, 255, 255, 0.12)", borderRadius: "360px" }}
                  >
                    <Image
                      src="/assets/images/setting-2.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={21}
                    />
                  </span>
                </Box>
                <Typography>Facility Management Services</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homesection3;
