"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../dashboard.module.css";
import Projectmap from "./projectmap";

const Allproject = ({ getProjectData, projectdata, setprojectdata, loading, setloading }) => {
  const deleteProject = async (id) => {
    // setloading(true);

    try {
      let data = await projectdata?.filter((item, idx) => {
        return item._id !== id;
      });

      setprojectdata(data);
      await fetch(`/api/project/delete/${id.toString()}`, {
        method: "DELETE",
      });
      console.log("Project deleted");
      // getProjectData();
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectData();
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
          {projectdata.map((item, i) => (
            <Projectmap
              name={item.name}
              date={item.date}
              deleteProject={deleteProject}
              id={item._id}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default Allproject;
