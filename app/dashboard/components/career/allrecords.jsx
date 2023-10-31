"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../dashboard.module.css";
import Careermap from "./careermap";

const AllCareer = () => {
  const [careerdata, setcareerdata] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteCareer = async (id) => {
    // setloading(true);

    try {
      let data = await careerdata?.filter((item, idx) => {
        return item._id !== id;
      });

      setcareerdata(data);
      await fetch(`/api/career/delete/${id.toString()}`, {
        method: "DELETE",
      });
      console.log("Project deleted");
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  const getCareerData = async () => {
    setloading(true);
    try {
      const response = await fetch("/api/career/getrecords", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setcareerdata(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getCareerData();
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
            gap: "30px",
          }}
        >
          {careerdata.map((item, i) => (
            <Careermap {...item} deleteCareer={deleteCareer} />
          ))}
        </Box>
      )}
    </>
  );
};

export default AllCareer;
