"use client";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Components/Navbar/page";
import Homesection5 from "../Components/Home/Components/section5";
import Homesection6 from "../Components/Home/Components/section6";
import Footer from "../Components/Footer";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./contact.module.css";
import { useSnackbar } from "notistack";

const ContactForm = () => {
  const [loading, setloading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [values, setvalues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickVariant = (variant, message) => {
    enqueueSnackbar(message, { variant });
  };

  const handleSubmit = async () => {
    if (!values.name || !values.subject || !values.email || !values.message) {
      handleClickVariant(
        "error",
        "Kindly complete all the required input fields."
      );
      return;
    }
    setloading(true);

    try {
      const response = await fetch("/api/feedback/new", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setvalues({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
        handleClickVariant("success", "Feedback submitted successfully");
      }
    } catch (error) {
      console.log(error);
      handleClickVariant("error", "Something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <Box>
      <Box
        style={{
          backgroundImage: "url('/assets/images/contact.png')",
          // height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Box style={{ background: "#000000ba", width: "100%", height: "100%" }}>
          <Box className={styles.navstyle}>
            <Navbar title="contact" />
          </Box>

          <Box
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
            className={styles.boxstyle0}
          >
            <Typography
              className={styles.text0}
              style={{
                color: "white",
                fontSize: 30,
                fontFamily: "sans-serif",
                fontWeight: "700",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              Contact Us
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
          <Box>
            <Grid container spacing={7}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    className={styles.contacttext0}
                    style={{
                      color: "black",
                      fontSize: 33,
                      fontFamily: "sans-serif",
                      fontWeight: "700",
                      wordWrap: "break-word",
                      marginBottom: "42px",
                      lineHeight: "43px",
                    }}
                  >
                    We'd love to hear your feedback. Contact us at :
                  </Typography>

                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "29px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "7px",
                      }}
                    >
                      <EmailIcon style={{ color: "#0287E6" }} />
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          className={styles.contacttext1}
                          style={{
                            color: "black",
                            fontSize: 17,
                            fontFamily: "sans-serif",
                            fontWeight: "700",
                            wordWrap: "break-word",
                          }}
                        >
                          Email
                        </Typography>
                        <Typography
                          className={styles.contacttext2}
                          style={{
                            color: "black",
                            fontSize: 15,
                            fontFamily: "sans-serif",
                            fontWeight: "500",

                            wordWrap: "break-word",
                          }}
                        >
                          info@albengg.com
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "7px",
                      }}
                    >
                      <AddIcCallIcon style={{ color: "#0287E6" }} />
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          className={styles.contacttext1}
                          style={{
                            color: "black",
                            fontSize: 15,
                            fontFamily: "sans-serif",
                            fontWeight: "700",
                            wordWrap: "break-word",
                          }}
                        >
                          Phone#:
                        </Typography>
                        <Typography
                          className={styles.contacttext2}
                          style={{
                            color: "black",
                            fontSize: 15,
                            fontFamily: "sans-serif",
                            fontWeight: "500",

                            wordWrap: "break-word",
                          }}
                        >
                          +971-4-3238008
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "7px",
                      }}
                    >
                      <LocationOnIcon style={{ color: "#0287E6" }} />
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          className={styles.contacttext1}
                          style={{
                            color: "black",
                            fontSize: 17,
                            fontFamily: "sans-serif",
                            fontWeight: "700",
                            wordWrap: "break-word",
                          }}
                        >
                          Address:
                        </Typography>
                        <Typography
                          className={styles.contacttext2}
                          style={{
                            color: "black",
                            fontSize: 16,
                            fontFamily: "sans-serif",
                            fontWeight: "500",

                            wordWrap: "break-word",
                          }}
                        >
                          P.O. Box. 6647
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      paddingBottom: "20px",
                    }}
                  >
                    <label className={styles.labelstyle} htmlFor="name">
                      Name
                    </label>
                    <input
                      value={values.name}
                      onChange={(e) => handleChange(e)}
                      className={styles.inputstyle}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter full name"
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      paddingBottom: "20px",
                    }}
                  >
                    <label className={styles.labelstyle} htmlFor="email">
                      Email
                    </label>
                    <input
                      value={values.email}
                      onChange={(e) => handleChange(e)}
                      className={styles.inputstyle}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      paddingBottom: "20px",
                    }}
                  >
                    <label className={styles.labelstyle} htmlFor="subject">
                      Subject
                    </label>
                    <input
                      value={values.subject}
                      onChange={(e) => handleChange(e)}
                      className={styles.inputstyle}
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter subject"
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      paddingBottom: "20px",
                    }}
                  >
                    <label className={styles.labelstyle} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      value={values.message}
                      onChange={(e) => handleChange(e)}
                      className={styles.inputstyle}
                      style={{ height: "158px" }}
                      type="text"
                      name="message"
                      id="message"
                      //   placeholder="Enter full name"
                    />
                  </Box>
                  <Box>
                    <Button
                      onClick={(e) => handleSubmit(e)}
                      className={styles.sendbtn}
                      style={{
                        background: "#0287E6",
                        color: "white",
                        fontSize: 16,
                        fontFamily: "sans-serif",
                        textTransform: "capitalize",
                        width: "105%",
                        wordWrap: "break-word",
                      }}
                    >
                      {loading ? (
                        <CircularProgress
                          style={{
                            color: "white",
                            width: "32px",
                            height: "32px",
                          }}
                        />
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </Box>
  );
};

export default ContactForm;
