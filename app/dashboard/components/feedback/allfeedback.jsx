"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../dashboard.module.css";
import Feedbackmap from "./feedbackmap";

const Allfeedback = ({
  setopenfeedback,
  getFeedbackData,
  feedbackdata,
  setfeedbackdata,
  loading,
  setloading,
}) => {
  const deletefeedback = async (id) => {
    // setloading(true);

    try {
      let data = await feedbackdata?.filter((item, idx) => {
        return item._id !== id;
      });

      setfeedbackdata(data);
      await fetch(`/api/feedback/delete/${id.toString()}`, {
        method: "DELETE",
      });
      console.log("feedback deleted");
      // getFeedbackData();
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedbackData();
  }, []);
  return (
    <>
      {loading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "71vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          style={{
            background: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            paddingTop: "20px",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "11px",
          }}
        >
          {feedbackdata.length > 0 ? (
            feedbackdata.map((item, i) => (
              <Feedbackmap
                setopenfeedback={setopenfeedback}
                name={item.name}
                email={item.email}
                message={item.message}
                subject={item.subject}
                deletefeedback={deletefeedback}
                id={item._id}
              />
            ))
          ) : (
            <Box>
              <Typography
                variant="h5"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                No Feedback Available
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default Allfeedback;
