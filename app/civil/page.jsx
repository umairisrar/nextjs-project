"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/page";
import Footer from "../Components/Footer";
import Homesection6 from "../Components/Home/Components/section6";
import Homesection5 from "../Components/Home/Components/section5";

const Aboutus = () => {
  return (
    <Box>
      <Box
        style={{
          backgroundImage: "url('/assets/images/civil.png')",
          // height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Box style={{ background: "#000000ba", width: "100%", height: "100%" }}>
          <Box style={{ padding: "10px 90px" }}>
            <Navbar title="wwd" />
          </Box>

          <Box style={{ padding: "145px", paddingTop: "87px" }}>
            <Typography
              style={{
                color: "white",
                fontSize: 35,
                fontFamily: "Manrope",
                fontWeight: "700",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              Civil & Building Works
            </Typography>
            <Box style={{ justifyContent: "center", display: "flex", width: "100%" }}>
              <Box
                style={{
                  background: "white",
                  width: "61px",
                  height: "6px",
                  borderRadius: "20px",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={{ padding: "60px 0px" }}>
        <Container>
          <Typography
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "Manrope",
              fontWeight: "500",
              width: "93%",
              textAlign: "justify",
              wordWrap: "break-word",
            }}
          >
            When it comes to civil works, Albwardy engineering excels in the vast variety of
            services we provide. From effortless planning, adequate design and execution of
            commercial & retail buildings, residential villas, hotels and high-end supermarkets.
            Civil works is a core competence of Albwardy Engineering Enterprise. By consistently
            delivering building & infrastructures at the highest engineering standards, we make sure
            to reflect the best image of UAE and the company.
          </Typography>

          <Typography
            style={{
              color: "black",
              fontSize: 19,
              fontFamily: "Manrope",
              fontWeight: "700",
              wordWrap: "break-word",
              paddingTop: "14px",
            }}
          >
            The civil work comprises of but not limited to:
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              padding: "17px 0px",
              flexWrap: "wrap",
            }}
          >
            <Box
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 58px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "Manrope",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                {" "}
                Earth Works
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 58px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "Manrope",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                Sub Structures
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 58px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "Manrope",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                Super Structures
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 58px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "Manrope",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                Masonry Works
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 35px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "Manrope",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                Steel Structure Works
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #E4E4E4",
                padding: "17px 4px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  width: "195px",
                  wordWrap: "break-word",
                }}
              >
                Aluminium & Glazing Works
              </Typography>
            </Box>
            <Box
              style={{
                border: "1px solid #E4E4E4",
                padding: "17px 12px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  width: "195px",
                  wordWrap: "break-word",
                }}
              >
                Painting and Finishing Works
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </Box>
  );
};

export default Aboutus;
