"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";

import styles from "../../dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { Close } from "@mui/icons-material";

const Addgalleryimage = ({ setopen, getGalleryData }) => {
  const [values, setvalues] = useState({ name: "", image: [] });
  const [loading, setloading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickVariant = (variant, message) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const createGallery = async (e) => {
    if (!values.name || values.image.length === 0) {
      handleClickVariant(
        "error",
        "Kindly complete all the required input fields."
      );
      return;
    }
    for (const image of values.image) {
      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;

          img.onload = () => {
            const width = img.width;
            const height = img.height;

            // if (width <= 200 && height <= 200) {
            // } else {
            //   handleClickVariant(
            //     "error",
            //     `Please choose a valid image as the dimensions of the ${image.filename} exceed 200x200 pixels`
            //   );
            //   return;
            // }
          };
        };
      }
    }

    setloading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    values.image.forEach((imageFile, index) => {
      formData.append(`image${index}`, imageFile);
    });
    try {
      const response = await fetch("/api/gallery/new", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        handleClickVariant("success", "New Gallery created Successfully");
        getGalleryData();
        setopen(false);
        settab("all");
      } else {
        handleClickVariant("error", "Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const handlefilesChange = (e) => {
    const files = e.target.files;
    const imageArray = Array.from(files);

    if (imageArray.length > 0) {
      setvalues({ ...values, image: imageArray });
    }
  };

  const removeimage = (id) => {
    let images = values.image;
    images = images.filter((item, idx) => {
      return id !== idx;
    });
    setvalues({ ...values, image: images });
  };

  return (
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
        zIndex: "10",
        background: "#000000a1",
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
          <Close onClick={() => setopen(null)} style={{ cursor: "pointer" }} />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            paddingBottom: "20px",
            width: "96%",
          }}
        >
          <label className={styles.labelstyle} htmlFor="name">
            Project Name
          </label>
          <input
            onChange={(e) => handleChange(e)}
            className={styles.inputstyle}
            value={values.name}
            style={{ width: "96%" }}
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
          />
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            paddingBottom: "20px",
            width: "99%",
          }}
        >
          <label className={styles.labelstyle} htmlFor="partnerimage">
            Images
          </label>
          <input
            id="partnerimage"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handlefilesChange(e)}
            accept="image/*"
            multiple
          />
          <label
            htmlFor="partnerimage"
            style={{
              fontSize: 16,
              fontFamily: "sans-serif",
              textTransform: "capitalize",
              wordWrap: "break-word",
              border: "1px solid black",
              border: "1px solid #00000073",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              padding: "9px",
              cursor: "pointer",
            }}
          >
            Upload Images
          </label>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              gap: values?.image.length > 8 ? "6px" : "9px",
              maxHeight: values?.image.length > 8 ? "194px" : "200px",
              overflow: values?.image.length > 8 ? "auto" : "hidden",
            }}
          >
            {Array.isArray(values?.image) &&
              values?.image.length > 0 &&
              values?.image.map((item, id) => (
                <Box style={{ position: "relative" }}>
                  <img
                    style={{
                      width: values?.image.length > 8 ? "85px" : "90px",
                      height: values?.image.length > 8 ? "85px" : "90px",
                      borderRadius: "5px",
                      objectFit: "cover",
                      objectPosition: "center",
                      border: "1px solid #00000012",
                    }}
                    src={URL.createObjectURL(item)}
                    alt="icon"
                  />
                  <Box
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-4px",
                      color: "black",
                    }}
                    onClick={() => {
                      removeimage(id);
                    }}
                  >
                    <Tooltip title="Delete">
                      <IconButton>
                        <Close style={{ color: "red", fontSize: "20px" }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>

        <Box>
          <Button
            onClick={createGallery}
            className={styles.sendbtn}
            style={{
              background: "#0287E6",
              color: "white",
              fontSize: 16,
              fontFamily: "sans-serif",
              textTransform: "capitalize",
              // width: "105%",
              wordWrap: "break-word",
              width: "100%",
            }}
          >
            {loading ? (
              <CircularProgress
                style={{ width: "30px", height: "30px", color: "white" }}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Addgalleryimage;
