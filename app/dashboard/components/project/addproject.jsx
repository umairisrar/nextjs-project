"use client";
import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import styles from "../../dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { Close } from "@mui/icons-material";

const Addproject = ({ setopen, getProjectData }) => {
  const [values, setvalues] = useState({ date: "", name: "", section: "Hospitality Sector" });
  const [loading, setloading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [sectiondata, setsectiondata] = useState([]);

  const getSectionData = async () => {
    try {
      const response = await fetch("/api/section/allrecords", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        let sections = data.map((item) => {
          return item.section;
        });
        setsectiondata(sections);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    getSectionData();
  }, []);

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickVariant = (variant, message) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const createProject = async (e) => {
    if (!values.date || !values.name) {
      handleClickVariant("error", "Kindly complete all the required input fields.");
      return;
    }
    setloading(true);

    try {
      const response = await fetch("/api/project/new", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        handleClickVariant("success", "New Project created Successfully");
        setvalues({ date: "", name: "", section: "Hospitality Sector" });
        setopen(null);
        getProjectData();
      }
    } catch (error) {
      console.log(error);
      handleClickVariant("error", "Something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <Box
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10",
      }}
    >
      <Box
        style={{
          background: "white",
          width: "400px",
          border: "1px solid #00000059",
          borderRadius: "10px",
          boxShadow: "2px 3px 13px 0px #00000029",
          padding: "15px",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Close onClick={() => setopen(null)} style={{ cursor: "pointer" }} />
        </Box>
        <Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
              paddingBottom: "20px",
              paddingTop: "20px",
              width: "92%",
            }}
          >
            <label className={styles.labelstyle} htmlFor="name">
              Project Name
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className={styles.inputstyle}
              value={values.name}
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
              gap: "11px",
              paddingBottom: "20px",
              width: "92%",
            }}
          >
            <label className={styles.labelstyle} htmlFor="date">
              Date
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className={styles.inputstyle}
              value={values.date}
              type="date"
              name="date"
              id="date"
              placeholder="Enter date"
            />
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
              paddingBottom: "20px",
              width: "99%",
            }}
          >
            <label className={styles.labelstyle} htmlFor="section">
              Section
            </label>
            <select
              onChange={(e) => handleChange(e)}
              name="section"
              value={values.section}
              id="section"
              className={styles.inputstyle}
              // style={{ width: "334px" }}
            >
              {sectiondata.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </Box>

          <Box>
            <Button
              onClick={createProject}
              className={styles.sendbtn}
              style={{
                background: "#0287E6",
                color: "white",
                fontSize: 16,
                fontFamily: "sans-serif",
                textTransform: "capitalize",
                // width: "105%",
                wordWrap: "break-word",
                width: "100%",
              }}
            >
              {loading ? (
                <CircularProgress style={{ width: "30px", height: "30px", color: "white" }} />
              ) : (
                "Submit"
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Addproject;
