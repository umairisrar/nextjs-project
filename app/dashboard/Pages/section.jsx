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
import Allsection from "../components/section/allsection";

const Sections = () => {
  const [sectionData, setsectionData] = useState([]);
  const [loading, setloading] = useState(false);

  const [tab, settab] = useState("all");

  const getSectionData = async () => {
    setloading(true);
    try {
      const response = await fetch("/api/section/allrecords", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setsectionData(data);
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
        title="Project Section"
        title2="ADD NEW SECTION"
        settab={settab}
        getData={getSectionData}
      />
      <Box style={{ margin: "24px" }}>
        {tab === "all" && (
          <Allsection
            getSectionData={getSectionData}
            sectionData={sectionData}
            setsectionData={setsectionData}
            loading={loading}
            setloading={setloading}
          />
        )}
      </Box>
    </Box>
  );
};

export default Sections;
