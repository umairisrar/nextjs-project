"use client";
import React from "react";
import Topnav from "./topnav";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import styles from "../dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import Allgalleryimages from "../components/gallery/allimages";
import ProjectImages from "../components/gallery/projectImages";

const Gallery = () => {
  const [galleryData, setgalleryData] = useState([]);
  const [loading, setloading] = useState(false);
  const [tab, settab] = useState("all");
  const [projectid, setprojectid] = useState([]);

  const getGalleryData = async () => {
    setloading(true);
    try {
      const response = await fetch("/api/gallery/allrecords", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setgalleryData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <Box>
      <Topnav title="Gallery" title2="Add Images" settab={settab} getData={getGalleryData} />
      <Box style={{ margin: "24px" }}>
        {tab === "all" ? (
          <Allgalleryimages
            getGalleryData={getGalleryData}
            galleryData={galleryData}
            setgalleryData={setgalleryData}
            loading={loading}
            setloading={setloading}
            settab={settab}
            setprojectid={setprojectid}
          />
        ) : (
          <ProjectImages
            loading={loading}
            setloading={setloading}
            settab={settab}
            setprojectid={setprojectid}
            projectid={projectid}
          />
        )}
      </Box>
    </Box>
  );
};

export default Gallery;
