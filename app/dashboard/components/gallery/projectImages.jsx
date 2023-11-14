"use client";
import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../dashboard.module.css";
import Gallerymap from "./gallerymap";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteIcon from "@mui/icons-material/Delete";

const ProjectImages = ({
  loading,
  setloading,
  settab,
  setprojectid,
  projectid,
}) => {
  let images = [];
  useEffect(() => {
    images = projectid.images;
    console.log(projectid.images);
  }, []);

  const deleteImage = async (id, name, i) => {
    // setloading(true);
    try {
      let data = await projectid?.images?.filter((item, id) => {
        console.log(i, id);
        return i !== id;
      });
      setprojectid((prevProjectId) => ({
        ...prevProjectId,
        images: data,
      }));
      await fetch(`/api/gallery/deleteimage/${id.toString()}`, {
        method: "PATCH",
        body: JSON.stringify(name),
      });
    } catch (error) {
      // setloading(false);
      console.log(error);
    }
  };

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
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <KeyboardBackspaceIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                settab("all");
                setprojectid({});
              }}
            />
            <Typography
              style={{
                fontSize: "28px",
                fontFamily: "sans-serif",
                marginLeft: "11px",
              }}
            >
              {projectid.name}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "15px",
            }}
          >
            {projectid.images.length > 0 ? (
              projectid.images.map((item, i) => (
                <Box
                  key={i}
                  // className={styles.projects0}
                  style={{
                    borderRadius: "10px",

                    // padding: "0px 14px",
                    // paddingTop: "17px",
                    display: "flex",
                    gap: "8px",
                    // paddingTop: "17px",
                    transition: "1s",
                    flexDirection: "column",
                    cursor: "default",
                  }}
                >
                  <Box
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  ></Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item}
                      alt="slider1"
                      width={200}
                      height={150}
                      style={{
                        width: "218px",
                        height: "150px",
                        border: "1px solid #00000014",
                        borderRadius: "9px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />

                    <Tooltip
                      onClick={() => deleteImage(projectid.id, item, i)}
                      title="Delete"
                      style={{ position: "absolute", right: "0px", top: "0px" }}
                    >
                      <IconButton>
                        <DeleteIcon
                          // className={styles.projecticon}
                          style={{
                            color: "#0287e6",
                            fontSize: "21px",
                            cursor: "pointer",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              ))
            ) : (
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                  width: "100%",
                }}
              >
                <Typography style={{ fontSize: "25px" }}>No Images</Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProjectImages;
