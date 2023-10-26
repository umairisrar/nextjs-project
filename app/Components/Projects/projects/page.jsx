"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styles from "./project.module.css";
import CachedIcon from "@mui/icons-material/Cached";

const Project = () => {
  const toparray = [
    "All",
    "Hospitality Sector",
    "Commercial & Retail",
    "Luxury - Residential Villas",
    "Industrial",
    "F&B",
    "Super Markets",
    "Hospital/Mosques",
  ];
  const secondarray = [
    {
      date: "2022-23",
      text: "Ngorongoro lodge",
    },
    {
      date: "2016-19",
      text: "B+G+5 Gran Melia Hotel Arusha",
    },
    {
      date: "2014-19",
      text: "B+G+8 Stories Hyatt Regency Addis",
    },
    {
      date: "2016-18",
      text: "Melia Serengeti Lodge",
    },
    {
      date: "2012-14",
      text: "Park hyatt Zanzibar",
    },
    {
      date: "2012-13",
      text: "Banquet Hall for Hotel - Desert Plam ",
    },
    {
      date: "2012-13",
      text: "Addition of Gymnasium building for Hotel ",
    },
    {
      date: "2010-12",
      text: "Refurbishment of Melia Zanzibar",
    },
    {
      date: "2008-10",
      text: "Four Seasons Safari Lodge",
    },
    {
      date: "2022-23",
      text: "Ngorongoro lodge",
    },
    {
      date: "2022-23",
      text: "Ngorongoro lodge",
    },
    {
      date: "2022-23",
      text: "Ngorongoro lodge",
    },
    {
      date: "2022-23",
      text: "Ngorongoro lodge",
    },
    {
      date: "2022-23",
      text: "Ngorongoro lodge",
    },
    {
      date: "2022-23",
      text: "Ngorongoro lodge",
    },
  ];
  return (
    <Container>
      <Box
        className={styles.projectbox}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "6px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {toparray.map((item, i) => (
          <Box
            className={styles.projectbox0}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #E4E4E4",
              borderRadius: "40px",
              background: i === 0 ? "#0287E6" : "white",
              padding: "12px 16px",
              cursor: "pointer",
              // width: "100%",
            }}
          >
            <Typography
              className={styles.projecttext0}
              variant="p"
              style={{
                color: i === 0 ? "white" : "black",
                fontSize: 14,
                fontFamily: "sans-serif",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "37px",
        }}
      >
        {secondarray.map((item, i) => {
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
                  {item.date}
                </Typography>
                <CallMadeIcon
                  className={styles.projecticon}
                  style={{ color: color2, fontSize: "18px" }}
                />
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
                {item.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        className={styles.projectbox2}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
          paddingTop: "46px",
        }}
      >
        <CachedIcon />
        <Typography
          className={styles.projecttext3}
          style={{
            color: "black",
            fontSize: 15,
            fontFamily: "sans-serif",
            fontWeight: "700",

            wordWrap: "break-word",
          }}
        >
          Continue Explore The Projects
        </Typography>
      </Box>
    </Container>
  );
};

export default Project;
