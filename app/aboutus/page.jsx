"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/page";
import Footer from "../Components/Footer";
import Homesection6 from "../Components/Home/Components/section6";
import Homesection5 from "../Components/Home/Components/section5";
import styles from "./about.module.css";

const Aboutus = () => {
  return (
    <Box>
      <Box
        style={{
          backgroundImage: "url('/assets/images/about.png')",
          // height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Box style={{ background: "#000000ba", width: "100%", height: "100%" }}>
          <Box className={styles.navstyle}>
            <Navbar title="company" />
          </Box>

          <Box
            className={styles.boxstyle0}
            style={{
              height: "302px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              position: " relative",
              top: "-24px",
            }}
          >
            <Typography
              className={styles.text0}
              style={{
                color: "white",
                fontSize: 30,
                fontFamily: "__Manrope_36d688",
                fontWeight: "700",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              About us
            </Typography>
            <Box
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <Box
                style={{
                  background: "white",
                  width: "61px",
                  height: "4px",
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
              fontSize: 20,
              fontFamily: "__Manrope_36d688",
              fontWeight: "700",
              marginBottom: "10px",
              wordWrap: "break-word",
            }}
          >
            About Albwardy Engineering Enterprises EST.
          </Typography>
          <Typography
            className={styles.abouttext0}
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "__Manrope_36d688",
              fontWeight: "500",

              wordWrap: "break-word",
            }}
          >
            Founded in 1977, Albwardy Engineering Enterprises stands as a
            prominent construction and engineering firm, part of the{" "}
            <span style={{ color: "#0287E6" }}>Albwardy</span> group of
            companies. Our dedication extends from meticulous pre-construction
            planning to execution and comprehensive post-construction
            maintenance services, across a diverse range of projects completed
            in the Middle East and Africa, primarily: 
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              padding: "34px 0px",
              flexWrap: "wrap",
            }}
          >
            <Box
              className={styles.boxstyle2}
              style={{
                border: "1px solid #E4E4E4",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "__Manrope_36d688",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                {" "}
                Hospitality
              </Typography>
            </Box>
            <Box
              className={styles.boxstyle2}
              style={{
                border: "1px solid #E4E4E4",
                // padding: "21px 58px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "__Manrope_36d688",
                  fontWeight: "500",

                  wordWrap: "break-word",
                  padding: "0px 10px",
                }}
              >
                Residential Building & Villas
              </Typography>
            </Box>
            <Box
              className={styles.boxstyle2}
              style={{
                border: "1px solid #E4E4E4",
                // padding: "22px 58px",
                textAlign: "center",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "__Manrope_36d688",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                Industrial & Warehouse complexes
              </Typography>
               
            </Box>
            <Box
              className={styles.boxstyle2}
              style={{
                border: "1px solid #E4E4E4",
                // padding: "35px 58px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "__Manrope_36d688",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                Retail
              </Typography>
            </Box>
            <Box
              className={styles.boxstyle2}
              style={{
                border: "1px solid #E4E4E4",
                // padding: "22px 58px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography
                style={{
                  color: "black",
                  fontSize: 17,
                  fontFamily: "__Manrope_36d688",
                  fontWeight: "500",

                  wordWrap: "break-word",
                }}
              >
                Food & Beverage
              </Typography>
            </Box>
          </Box>
          <Typography
            className={styles.abouttext0}
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "__Manrope_36d688",
              fontWeight: "500",
              wordWrap: "break-word",
              paddingBottom: "16px",
            }}
          >
            Albwardy Engineering Enterprises was founded by its owner, Mr. Ali
            Saeed Juma Albwardy with a vision to support the nation's burgeoning
            economy and its holding company, Albwardy Investment. Since
            inception, we have unwaveringly provided construction and
            engineering services, consistently delivering impeccable quality
            work to both our group companies and external clients.
          </Typography>
          <Typography
            className={styles.abouttext0}
            style={{
              color: "black",
              fontSize: 15,
              fontFamily: "__Manrope_36d688",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Our team comprises of highly skilled and experienced professionals
            with profound expertise in Civil, Interior, MEP, ELV alongside with
            Solar systems. We steadfastly pursue excellence, striving to attain
            customer satisfaction through the delivery of premium-quality work
            within optimal timelines and cost parameters. A comprehensive
            network of Facilities Services ensures efficient post-sale services,
            while our Interior fit out and Furniture Manufacturing department
            guarantees unmatched quality and craftsmanship. Our clients have
            consistently experienced satisfaction with our services, thanks to
            our unwavering commitment to delivering premium workmanship
            efficiently.
          </Typography>
        </Container>
      </Box>
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </Box>
  );
};

export default Aboutus;
