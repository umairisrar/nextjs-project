"use client";
import React, { useState } from "react";
import styles from "../../dashboard.module.css";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DeleteIcon from "@mui/icons-material/Delete";

const Gallerymap = ({
  image,
  name,
  deleteProject,
  id,
  settab,
  setprojectid,
}) => {
  const [color1, setcolor1] = useState("black");
  const [color2, setcolor2] = useState("#0287E6");

  return (
    <Box style={{ position: "relative", width: "21%" }}>
      <Box
        onClick={() => {
          settab("project");
          setprojectid({ images: image, name: name, id });
        }}
        onMouseEnter={() => {
          setcolor1("white");
          setcolor2("white");
        }}
        onMouseLeave={() => {
          setcolor1("black");
          setcolor2("#0287E6");
        }}
        className={styles.projects0}
        style={{
          border: "1px solid #E4E4E4",
          borderRadius: "10px",

          padding: "0px 14px",

          height: "70px",
          display: "flex",

          transition: "1s",
          flexDirection: "column",
          cursor: "pointer",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            //   className={styles.projecttext2}
            style={{
              color: color2,
              fontSize: 16,
              fontFamily: "__Manrope_36d688",
              fontWeight: "700",

              wordWrap: "break-word",
              lineHeight: "20px",
            }}
          >
            {name && name}
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          position: "absolute",
          top: "0px",
          right: "0px",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Tooltip
          title="Delete"
          onClick={() => deleteProject(id)}
          style={{ height: "40px" }}
        >
          <IconButton>
            <DeleteIcon
              style={{ color: color2, fontSize: "21px", cursor: "pointer" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Gallerymap;
