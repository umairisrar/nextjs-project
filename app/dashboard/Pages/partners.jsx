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

const Partners = () => {
  const [partnersData, setpartnersData] = useState([]);
  const [loading, setloading] = useState(false);

  const [tab, settab] = useState("all");

  const getPartnerData = async () => {
    setloading(true);
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
      setloading(false);
    }
  };

  return (
    <Box>
      <Topnav title="Partners" title2="Add Partner" settab={settab} getData={getPartnerData} />
      <Box style={{ margin: "24px" }}>
        {tab === "all" && (
          <AllPartner
            getPartnerData={getPartnerData}
            partnersData={partnersData}
            setpartnersData={setpartnersData}
            loading={loading}
            setloading={setloading}
          />
        )}
      </Box>
    </Box>
  );
};

export default Partners;
