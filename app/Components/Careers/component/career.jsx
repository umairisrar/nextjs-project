"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../career.module.css";
import { SnackbarProvider, useSnackbar } from "notistack";

const CareerForm = ({ setcareer }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setloading] = useState(false);
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phoneno: "",
    position: "Product Designer",
    address: "",
    resume: "",
  });
  const options = [
    "Product Designer",
    "Android Engineer",
    "Engineering Manager, Back-End",
    "Front-End Engineer",
    "Customer Experience Specialist",
    "Social Media Coordinator",
    "Technical Product Manager",
    "Chief Technology Officer",
  ];

  const handleClickVariant = (variant, message) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const handleSubmit = async () => {
    if (
      !values.name ||
      !values.resume ||
      !values.email ||
      !values.phoneno ||
      !values.position ||
      !values.address
    ) {
      handleClickVariant(
        "error",
        "Kindly complete all the required input fields."
      );
      return;
    }
    setloading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phoneno", values.phoneno);
    formData.append("address", values.address);
    formData.append("position", values.position);
    formData.append("resume", values.resume);
    try {
      const response = await fetch("/api/career/new", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setvalues({
          name: "",
          email: "",
          phoneno: "",
          position: "",
          address: "",
          resume: "",
        });

        handleClickVariant("success", "Resume submitted successfully");
      }
    } catch (error) {
      console.log(error);
      handleClickVariant("error", "Something went wrong");
    } finally {
      setloading(false);
    }
  };

  const handleDragImagesOver = (e) => {
    e.preventDefault();
  };

  const handleDropImages = (e) => {
    e.preventDefault();
    let droppedFile = e.dataTransfer.files[0];
    setvalues({ ...values, resume: droppedFile });
  };

  const handlefilesChange = (e) => {
    setvalues({ ...values, resume: e.target.files[0] });
  };

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Box
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#00000063",
        zIndex: 10,
      }}
    >
      <Box
        className={styles.careerbox0}
        style={{
          background: "white",
          width: "730px",
          height: "auto",
          borderRadius: "16px",
        }}
      >
        <Box
          className={styles.careerbox8}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #00000029",
            padding: "12px 20px",
          }}
        >
          <Typography
            className={styles.careertext6}
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "sans-serif",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Join Our Team
          </Typography>
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              setcareer(false);
            }}
          />
        </Box>
        <Box style={{ padding: "20px" }} className={styles.careerbox3}>
          <Box className={styles.careerbox2} style={{ paddingBottom: "20px" }}>
            <Box
              className={styles.careerbox1}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                className={styles.careerbox4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label className={styles.labelstyle} htmlFor="name">
                  Name
                </label>
                <input
                  className={styles.inputstyle}
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Type here ..."
                />
              </Box>
              <Box
                className={styles.careerbox4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label className={styles.labelstyle} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.inputstyle}
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="hello@example.com"
                />
              </Box>
            </Box>
          </Box>
          <Box style={{}}>
            <Box
              className={styles.careerbox1}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              <Box
                className={styles.careerbox4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label className={styles.labelstyle} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className={styles.inputstyle}
                  type="text"
                  name="phoneno"
                  id="phone"
                  value={values.phoneno}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Type here ..."
                />
              </Box>
              <Box
                className={styles.careerbox6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label className={styles.labelstyle} htmlFor="position">
                  Applied Position
                </label>
                <select
                  name="position"
                  id="position"
                  value={values.position}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className={styles.inputstyle}
                  style={{ width: "334px" }}
                >
                  {options.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </Box>
            </Box>

            <Box
              className={styles.careerbox2}
              style={{ paddingBottom: "20px" }}
            >
              <Box
                className={styles.careerbox4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label className={styles.labelstyle} htmlFor="address">
                  Address
                </label>
                <input
                  className={styles.inputstyle}
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  id="address"
                  placeholder="Type here ..."
                  style={{ width: "96%" }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                className={styles.careerbox4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label className={styles.labelstyle} htmlFor="">
                  Resume
                </label>
                <Box
                  className={styles.careerbox7}
                  onDrop={(e) => handleDropImages(e)}
                  onDragOver={handleDragImagesOver}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    border: "2px #98A2B3 dotted",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
                    background: "#F2F4F7",
                    marginBottom: "12px",
                    borderRadius: "8px",
                    display: "flex",
                    gap: "7px",
                  }}
                >
                  <Box
                    className={styles.careerbox5}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      border: "2px solid #0287E6",
                      borderRadius: "40px",
                      width: "136px",
                      padding: "6px",
                      justifyContent: "space-around",
                    }}
                  >
                    <AttachFileIcon
                      style={{ color: "#0287E6", transform: "rotate(45deg)" }}
                    />
                    <input
                      id="partnerimage"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => handlefilesChange(e)}
                      accept="application/*"
                    />
                    <label
                      htmlFor="partnerimage"
                      className={styles.uploadresume}
                      style={{
                        color: "#0287E6",
                        fontSize: 13,
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        wordWrap: "break-word",
                        cursor: "pointer",
                      }}
                    >
                      Upload Resume
                    </label>
                  </Box>
                  {values.resume ? (
                    <Typography
                      style={{
                        color: "#667085",
                        fontSize: 14,
                        fontFamily: "sans-serif",
                        fontWeight: "500",

                        wordWrap: "break-word",
                      }}
                    >
                      {values.resume.name}
                    </Typography>
                  ) : (
                    <Typography
                      style={{
                        color: "#667085",
                        fontSize: 14,
                        fontFamily: "sans-serif",
                        fontWeight: "500",

                        wordWrap: "break-word",
                      }}
                    >
                      or drag and drop here
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                className={styles.submitbtn}
                style={{
                  background: "#0287E6",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: 16,
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  padding: "5px 27px",
                  textTransform: "capitalize",
                }}
              >
                {loading ? (
                  <CircularProgress
                    style={{ color: "white", width: "32px", height: "32px" }}
                  />
                ) : (
                  "Submit Application"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareerForm;
