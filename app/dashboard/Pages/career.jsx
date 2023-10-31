"use client";
import React from "react";
import Topnav from "./topnav";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import styles from "../dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

import Addpartner from "../components/partners/addpartner";
import AllPartner from "../components/partners/allpartner";
import AllCareer from "../components/career/allrecords";

const Career = () => {
  const [careerdata, setcareerData] = useState([]);
  const [loading, setloading] = useState(false);

  const [tab, settab] = useState("all");

  return (
    <Box>
      <Topnav title="Careers" />
      <Box style={{ margin: "24px" }}>
        {tab === "all" && (
          <AllCareer
            careerdata={careerdata}
            setcareerData={setcareerData}
            loading={loading}
            setloading={setloading}
          />
        )}
      </Box>
    </Box>
  );
};

export default Career;
