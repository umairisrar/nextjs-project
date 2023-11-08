"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../home.module.css";

const Homesection5 = () => {
  const [partnersData, setpartnersData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getPartnerData = async () => {
    try {
      const response = await fetch("/api/partners/getrecords", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setpartnersData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getPartnerData();
  }, []);

  return (
    <Box style={{}}>
      <Container>
        <Box
          className={styles.valuables}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            className={styles.section5valuablestext}
            style={{
              color: "black",
              fontSize: 31,

              fontWeight: "700",

              wordWrap: "break-word",
              fontFamily: "sans-serif",
            }}
          >
            Our Valuable Partners
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              className={styles.slidersectiontext}
              style={{
                color: "black",
                fontSize: 15,
                fontWeight: "400",
                wordWrap: "break-word",
                fontFamily: "sans-serif",
                width: "71%",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box style={{ padding: "0px 40px 60px" }}>
        <div>
          <Slider {...settings}>
            {/* <Box> */}
            {partnersData.map((item) => (
              <Box>
                {item?.img1 ? (
                  <Box
                    className={styles.section5box}
                    style={{
                      width: "206px",
                      border: "1px solid #E4E4E4",
                      padding: "31px",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box style={{ display: "flex", gap: "4px" }}>
                      <Image
                        className={styles.section5image}
                        src={item.img1}
                        alt="slider1"
                        width={100}
                        height={"100"}
                        style={{ width: "43px", height: "40px" }}
                      />
                      <Image
                        className={styles.section5image}
                        src={item.img2}
                        alt="slider1"
                        width={100}
                        height={"100"}
                        style={{ width: "98px", height: "40px" }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box
                    className={styles.section5box}
                    style={{
                      width: "180px",
                      border: "1px solid #E4E4E4",
                      padding: "31px",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      className={styles.section5image}
                      src={item.image}
                      alt="slider1"
                      width={100}
                      height={"100"}
                      style={{ width: "134px", height: "40px" }}
                    />
                  </Box>
                )}
              </Box>
            ))}
            {/* </Box> */}
          </Slider>
        </div>
      </Box>
    </Box>
  );
};

export default Homesection5;
