"use client";
import React from "react";
import Topnav from "./topnav";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import styles from "../dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import Addproject from "../components/project/addproject";
import Allproject from "../components/project/allproject";
import axios from "axios";

const Projects = () => {
  const [tab, settab] = useState("all");
  const [projectdata, setprojectdata] = useState([]);
  const [loading, setloading] = useState(false);

  const getProjectData = async () => {
    setloading(true);
    try {
      const response = await axios.get(`/api/project/allrecords?${Date.now()}`);
      if (response) {
        const data = await response.data;
        setprojectdata(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <Box>
      <Topnav
        title="Projects"
        title2="Add Project"
        settab={settab}
        getData={getProjectData}
      />
      <Box
        style={{
          margin: "24px",
          background: "white",
          padding: "24px",
          borderRadius: "10px",
        }}
      >
        {/* <Box style={{ display: "flex", flexDirection: "row", gap: "17px", marginBottom: "12px" }}>
          <Typography
            onClick={() => {
              settab("all");
            }}
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              cursor: "pointer",
              color: tab === "all" ? "#0287e6" : "black",
            }}
          >
            All Project
          </Typography>
          <Box style={{ border: "1px solid black", height: "24px", background: "black" }}></Box>
          <Typography
            onClick={() => {
              settab("add");
            }}
            style={{
              fontFamily: "sans-serif",
              cursor: "pointer",
              fontSize: "20px",
              color: tab === "add" ? "#0287e6" : "black",
            }}
          >
            Add Project
          </Typography>
        </Box> */}
        {tab === "add" ? (
          <Addproject />
        ) : (
          <Allproject
            getProjectData={getProjectData}
            projectdata={projectdata}
            setprojectdata={setprojectdata}
            loading={loading}
            setloading={setloading}
          />
        )}
      </Box>
    </Box>
  );
};

export default Projects;
