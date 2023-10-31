"use client";
import { Box, CircularProgress, Container, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Close, Delete } from "@mui/icons-material";

const AllPartner = ({ getPartnerData, partnersData, setpartnersData, loading, setloading }) => {
  const deletePartner = async (id) => {
    // setloading(true);

    try {
      let data = await partnersData?.filter((item, idx) => {
        return item._id !== id;
      });

      setpartnersData(data);
      await fetch(`/api/partners/delete/${id.toString()}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getPartnerData();
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
            gap: "17px",
          }}
        >
          {partnersData.map((item) => (
            <Box>
              {item?.img1 ? (
                <Box
                  //   className={styles.section5box}
                  style={{
                    width: "206px",
                    border: "1px solid #E4E4E4",
                    padding: "31px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    onClick={() => deletePartner(item._id)}
                    style={{
                      position: "absolute",
                      top: "6px",
                      right: "4px",
                      color: "#ff0000b5",
                      cursor: "pointer",
                    }}
                  >
                    <Tooltip title="Delete">
                      <IconButton>
                        <Delete style={{ color: "#0287e6" }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box style={{ display: "flex", gap: "4px" }}>
                    <Image
                      //   className={styles.section5image}
                      src={item.img1}
                      alt="slider1"
                      width={100}
                      height={"100"}
                      style={{ width: "43px", height: "40px" }}
                    />
                    <Image
                      //   className={styles.section5image}
                      src={item.img2}
                      alt="slider1"
                      width={100}
                      height={"100"}
                      style={{ width: "98px", height: "40px" }}
                    />
                  </Box>
                </Box>
              ) : (
                <Box
                  //   className={styles.section5box}
                  style={{
                    width: "206px",
                    border: "1px solid #E4E4E4",
                    padding: "31px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    onClick={() => deletePartner(item._id)}
                    style={{
                      position: "absolute",
                      top: "6px",
                      right: "4px",
                      color: "#ff0000b5",
                      cursor: "pointer",
                    }}
                  >
                    <Tooltip title="Delete">
                      <IconButton>
                        <Delete style={{ color: "#0287e6" }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Image
                    // className={styles.section5image}
                    src={item.image}
                    alt="slider1"
                    width={100}
                    height={"100"}
                    style={{ width: "134px", height: "40px" }}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default AllPartner;
