"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../dashboard.module.css";
import Sectionmap from "./sectionmap";

const Allsection = ({ getSectionData, sectionData, setsectionData, loading, setloading }) => {
  const deleteProject = async (id) => {
    // setloading(true);

    try {
      let data = await sectionData?.filter((item, idx) => {
        return item._id !== id;
      });

      setsectionData(data);
      await fetch(`/api/section/delete/${id.toString()}`, {
        method: "DELETE",
      });
      console.log("Project deleted");
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getSectionData();
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
            padding: "24px 24px 24px 24px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {sectionData.map((item, i) => (
            <Sectionmap
              name={item.section}
              deleteProject={deleteProject}
              id={item._id}
              setsectionData={setsectionData}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default Allsection;
