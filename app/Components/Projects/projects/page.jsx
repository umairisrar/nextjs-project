"use client";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./project.module.css";
import CachedIcon from "@mui/icons-material/Cached";
import Projectmap from "./projectmap";

const Project = () => {
  const [projectdata, setprojectdata] = useState([]);
  const [sectiondata, setsectiondata] = useState([]);
  const [selectvalue, setselectvalue] = useState("All");
  const [loading, setloading] = useState(false);
  const [showData, setshowData] = useState(50);

  const getProjectData = async () => {
    setloading(true);
    try {
      const response = await fetch("/api/project/allrecords", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setprojectdata(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const getSectionData = async () => {
    setloading(true);
    try {
      const response = await fetch("/api/section/allrecords", {
        method: "GET",
      });

      if (response.ok) {
        let sections = [];
        const data = await response.json();
        sections = data.map((item) => {
          return item.section;
        });
        sections = ["All", ...sections];

        setsectiondata(sections);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getProjectData();
    getSectionData();
  }, []);

  return (
    <Container>
      {loading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Box
            className={styles.projectbox}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "6px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {sectiondata.map((item, i) => (
              <Box
                onClick={() => {
                  setselectvalue(item);
                }}
                className={styles.projectbox0}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #E4E4E4",
                  borderRadius: "40px",
                  background: item === selectvalue ? "#0287E6" : "white",
                  padding: "12px 16px",
                  cursor: "pointer",
                  // width: "100%",
                }}
              >
                <Typography
                  className={styles.projecttext0}
                  variant="p"
                  style={{
                    color: item === selectvalue ? "white" : "black",
                    fontSize: 14,
                    fontFamily: "__Manrope_36d688",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "37px",
            }}
          >
            {projectdata
              .slice(0, showData)
              .filter((item) => {
                if (selectvalue === "All") {
                  return item;
                } else {
                  return item.section === selectvalue;
                }
              })
              .map((item, i) => (
                <Projectmap name={item.name} date={item.date} id={item._id} />
              ))}
          </Box>
          {projectdata.length >= 50 && (
            <Box
              onClick={() => {
                setshowData(projectdata.length);
              }}
              className={styles.projectbox2}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
                paddingTop: "46px",
                cursor: "pointer",
              }}
            >
              <CachedIcon />
              <Typography
                className={styles.projecttext3}
                style={{
                  color: "black",
                  fontSize: 15,
                  fontFamily: "__Manrope_36d688",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Continue Explore The Projects
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};

export default Project;
