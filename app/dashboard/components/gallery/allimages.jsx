"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../dashboard.module.css";
import Gallerymap from "./gallerymap";

const Allgalleryimages = ({
  getGalleryData,
  galleryData,
  setgalleryData,
  loading,
  setloading,
  settab,
  setprojectid,
}) => {
  const deleteProject = async (id) => {
    // setloading(true);

    try {
      let data = await galleryData?.filter((item, idx) => {
        return item._id !== id;
      });

      setgalleryData(data);
      await fetch(`/api/gallery/delete/${id.toString()}`, {
        method: "DELETE",
      });
      console.log("Project deleted");
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getGalleryData();
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
            padding: "24px 0px 24px 24px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {galleryData.map((item, i) => (
            <Gallerymap
              name={item.name}
              image={item.images}
              deleteProject={deleteProject}
              id={item._id}
              settab={settab}
              setprojectid={setprojectid}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default Allgalleryimages;
