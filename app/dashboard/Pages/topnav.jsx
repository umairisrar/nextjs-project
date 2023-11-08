"use client";
import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import Close from "@mui/icons-material/Close";
import styles from "../dashboard.module.css";
import { useSnackbar } from "notistack";
import Addpartner from "../components/partners/addpartner";
import Addgalleryimage from "../components/gallery/addimage";
import Addproject from "../components/project/addproject";

const Topnav = ({ title, title2, settab, getData }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setopen] = useState(null);
  const [section, setsection] = useState("");
  const [loading, setloading] = useState(false);

  const handleClickVariant = (variant, message) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const createSection = async (e) => {
    setloading(true);

    try {
      const response = await fetch("/api/section/new", {
        method: "POST",
        body: JSON.stringify(section),
      });

      if (response.ok) {
        handleClickVariant("success", "New Section created Successfully");
        console.log(response);
        // router.push("/");
        setopen(null);
        getData();
      }
    } catch (error) {
      console.log(error);
      handleClickVariant("error", "Something went wrong");
    } finally {
      setloading(false);
    }
  };
  return (
    <Box style={{}}>
      <Box
        style={{
          background: "white",
          position: "relative",
          height: "91px",
          display: "flex",
          padding: "0px 24px",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0px 24px 31px",
          borderRadius: "10px",
          top: "16px",
          zIndex: 10,
        }}
      >
        <Typography style={{ fontFamily: "sans-serif", fontSize: "26px", cursor: "default" }}>
          {title}
        </Typography>
        {title2 && (
          <Button
            onClick={() => {
              if (title2 === "Add Partner") {
                setopen("partner");
              } else if (title2 === "ADD NEW SECTION") {
                setopen("section");
              } else if (title2 === "Add Images") {
                setopen("gallery");
              } else if (title2 === "Add Project") {
                setopen("project");
              }
            }}
            style={{
              background: "rgb(2, 135, 230)",
              color: "white",
              fontSize: "14px",
              borderRadius: "6px",
            }}
          >
            {title2}
          </Button>
        )}
        {open === "section" ? (
          <Box
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                background: "white",
                width: "400px",
                border: "1px solid #00000059",
                borderRadius: "10px",
                boxShadow: "2px 3px 13px 0px #00000029",
                padding: "15px",
              }}
            >
              <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                <Close onClick={() => setopen(false)} style={{ cursor: "pointer" }} />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "11px",
                  paddingBottom: "20px",
                  width: "93%",
                }}
              >
                <label className={styles.labelstyle} htmlFor="section">
                  Section Name
                </label>
                <input
                  onChange={(e) => setsection(e.target.value)}
                  className={styles.inputstyle}
                  style={{ background: "rgb(242, 244, 247)" }}
                  value={section}
                  type="text"
                  name="section"
                  id="section"
                  placeholder="Enter Section Name"
                />
              </Box>

              <Box style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  onClick={createSection}
                  className={styles.sendbtn}
                  style={{
                    background: "#0287E6",
                    color: "white",
                    fontSize: 16,
                    fontFamily: "sans-serif",
                    textTransform: "capitalize",
                    // width: "105%",
                    wordWrap: "break-word",
                  }}
                >
                  {loading ? (
                    <CircularProgress style={{ width: "30px", height: "30px", color: "white" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Box>
            </Box>
          </Box>
        ) : open === "partner" ? (
          <Addpartner setopen={setopen} getPartnerData={getData} />
        ) : open === "gallery" ? (
          <Addgalleryimage setopen={setopen} getGalleryData={getData} />
        ) : open === "project" ? (
          <Addproject setopen={setopen} getProjectData={getData} />
        ) : null}
      </Box>
    </Box>
  );
};

export default Topnav;
