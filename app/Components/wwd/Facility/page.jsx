"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../wwd.module.css";

const Facility = () => {
  const electricalwork = [
    "Air Condoning & Ventilation System",
    "Plumbing & Drainage System",
    "Electrical Lighting & Power System",
    "Refrigeration Systems",
    "Food Processing / Kitchen Equipment Maintenance",
    "Water Filtration & Treatment System",
    "Swimming Pool Maintenance",
    "ELV System",
    "Fire Alarm & Fire Fighting System",
    "Grease Trap Cleaning",
    "Kitchen Extract Duct & Hood Cleaning",
    "AC Duct Cleaning",
    "Water Tank Cleaning",
    "Civil Works",
    "Carpentry Works",
  ];
  const array = [
    {
      title1: "Technical Expertise:",
      title2:
        "  With a deep understanding of MEP systems and building automation, we leverage our technical expertise to enhance the performance of your facilities.",
    },
    {
      title1: "Vendor Management: ",
      title2:
        " We handle the complexities of vendor management, from sourcing and contracting to performance monitoring. This allows you to focus on your core operations while we ensure that your facility service providers meet the highest standards.",
    },
    ,
    {
      title1: "Safety and Compliance:",
      title2:
        " Your safety and compliance are our top priorities. We ensure that your facilities adhere to all regulatory requirements, creating a safe and compliant environment.",
    },
    ,
    {
      title1: "Cost Control:",
      title2:
        "Our cost-effective solutions help you manage your facilities' operating expenses without compromising on quality. work diligently to find cost-saving solutions to any opportunities presented.",
    },
  ];
  return (
    <Container>
      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "sans-serif",
          fontWeight: "500",
          width: "93%",
          wordWrap: "break-word",
        }}
      >
        At Albwardy Engineering, we understand that the success of your business or institution
        relies on the efficiency and reliability of your facilities. That is where our comprehensive
        Facilities Management Services come into play. We are your trusted partner in ensuring the
        smooth operation, maintenance, and optimization of your built environment.
      </Typography>

      <Box style={{ marginTop: "20px" }}>
        <Typography
          style={{
            color: "black",
            fontSize: 15,
            fontFamily: "sans-serif",
            fontWeight: "700",
            wordWrap: "break-word",
            paddingTop: "14px",
          }}
        >
          Our major Facility Services include:
        </Typography>
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
                width: "220px",
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
                  fontFamily: "sans-serif",
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

        <Box>
          <Typography
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "sans-serif",
              fontWeight: "700",
              wordWrap: "break-word",
              paddingTop: "14px",
              paddingBottom: "17px",
            }}
          >
            We provide FM services based on the following key aspects:
          </Typography>
        </Box>
        <Box>
          {array.map((item) => (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                // alignItems: "",
                paddingBottom: "15px",
              }}
            >
              <Image
                src="/assets/images/star-04.svg"
                alt="Vercel Logo"
                width={25}
                height={"25"}
                style={{ marginRight: "10px" }}
              />
              <Typography
                className={styles.steeltext0}
                style={{
                  color: "black",
                  fontSize: 15,
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  width: "93%",
                  wordWrap: "break-word",
                }}
              >
                <span
                  className={styles.facilitytext0}
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontFamily: "sans-serif",
                    fontWeight: "700",

                    wordWrap: "break-word",
                  }}
                >
                  {item.title1}
                </span>
                {item.title2}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Facility;
