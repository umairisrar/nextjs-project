"use client";
import React, { useState } from "react";
import Topnav from "./topnav";
import { Box, Typography } from "@mui/material";
import Allfeedback from "../components/feedback/allfeedback";
import axios from "axios";
import Feedbackform from "../components/feedback/feedbackform";

const Feedback = () => {
  const [feedbackdata, setfeedbackdata] = useState([]);
  const [openfeedback, setopenfeedback] = useState({
    open: false,
  });
  const [loading, setloading] = useState(false);
  const getFeedbackData = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        `/api/feedback/allrecords?timestamp=${Date.now()}`,
        {}
      );
      console.log(response);
      if (response) {
        const data = await response.data;
        setfeedbackdata(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <Box>
      <Topnav title="Feedbacks" />
      <Box
        style={{
          margin: "24px",
          background: "white",
          padding: "24px 24px 24px 24px",
          borderRadius: "10px",
        }}
      >
        <Allfeedback
          setopenfeedback={setopenfeedback}
          getFeedbackData={getFeedbackData}
          feedbackdata={feedbackdata}
          setfeedbackdata={setfeedbackdata}
          loading={loading}
          setloading={setloading}
        />
      </Box>
      {openfeedback.open && (
        <Feedbackform
          openfeedback={openfeedback}
          setopenfeedback={setopenfeedback}
        />
      )}
    </Box>
  );
};

export default Feedback;
