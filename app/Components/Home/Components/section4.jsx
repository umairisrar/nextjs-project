"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../home.module.css";

const Homesection4 = () => {
  let array = [
    {
      title1: "Expertise:",
      title2:
        "Distinctive expertise with absolute in-house capabilities of Design & execution of Civil, Interior, MEP, ELV & Solar systems, all underone roof.",
    },
    {
      title1: "The Team:",
      title2:
        " Our team is comprised of long tenured, highly skilled   passionate engineers and professionals with a wealth of experience.",
    },
    {
      title1: "Aim to be Partner: ",
      title2:
        "We aim to work not just as a contractor but a partner, by getting involved and taking ownership of the work we execute.",
    },
    {
      title1: "Customer-Centric:",
      title2:
        " We prioritize client needs, offering tailored engineering services and exceptional customer support. ",
    },
    {
      title1: "Timely Delivery:",
      title2:
        " We consistently meet project deadlines, ensuring your plans proceed smoothly. ",
    },
    {
      title1: "Cost-Effective:",
      title2:
        " Our pricing structure offers the best services, at most the competitive market price. ",
    },
    {
      title1: "Quality Assurance:",
      title2:
        " Our rigorous quality control measures ensure precision and reliability in every project. ",
    },
  ];
  return (
    <Box>
      <Box style={{ display: "flex" }} className={styles.chooseus}>
        <Box sx={{ width: "50%" }} className={styles.chooseus0}>
          <Box style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src="/assets/images/arch1.png"
              alt="Vercel Logo"
              layout="fill"
            />
          </Box>
        </Box>

        <Box className={styles.chooseus0}>
          <Box className={styles.chooseus1}>
            <Typography
              style={{
                color: "black",
                fontSize: 30,
                fontWeight: "700",
                wordWrap: "break-word",
                fontFamily: "sans-serif",
                paddingBottom: "12px",
              }}
            >
              Why Choose Us?
            </Typography>
            <Typography
              style={{
                color: "black",
                fontSize: 13,
                fontWeight: "400",

                wordWrap: "break-word",
                marginBottom: "24px",
                fontFamily: "sans-serif",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>

            <Box
              className={styles.boxstyle}
              style={{ borderTop: "1px solid #0000008f" }}
            >
              <Image
                src="/assets/images/star-04.svg"
                alt="Vercel Logo"
                width={25}
                height={"25"}
                style={{ marginRight: "10px" }}
              />
              <Box style={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  style={{
                    color: "black",
                    fontSize: 15,
                    fontWeight: "400",
                    wordWrap: "break-word",
                    fontFamily: "sans-serif",
                  }}
                >
                  <span style={{ fontWeight: "700" }}>Experience:</span>{" "}
                  Operating since 1977, over 45 years of excellence in the
                  field.
                </Typography>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              {array.map((item) => (
                <>
                  <Box className={styles.boxstyle}>
                    <Image
                      src="/assets/images/star-04.svg"
                      alt="Vercel Logo"
                      width={25}
                      height={"25"}
                      style={{ marginRight: "10px" }}
                    />
                    <Box style={{ display: "flex", flexDirection: "row" }}>
                      <Typography
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontWeight: "400",
                          wordWrap: "break-word",
                          fontFamily: "sans-serif",
                        }}
                      >
                        <span style={{ fontWeight: "700" }}>{item.title1}</span>{" "}
                        {item.title2}
                      </Typography>
                    </Box>
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homesection4;
