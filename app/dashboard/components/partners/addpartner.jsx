"use client";
import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import styles from "../../dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { Close } from "@mui/icons-material";

const Addpartner = ({ setopen, getPartnerData }) => {
  const [values, setvalues] = useState({ name: "", image: "" });
  const [loading, setloading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickVariant = (variant, message) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const createPartner = async (e) => {
    if (!values.name || !values.image) {
      handleClickVariant(
        "error",
        "Kindly complete all the required input fields."
      );
      return;
    }
    if (values.image) {
      const reader = new FileReader();
      reader.readAsDataURL(values.image);

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = async () => {
          const width = img.width;
          const height = img.height;

          if (width <= 134) {
            setloading(true);
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("image", values.image);
            try {
              const response = await fetch("/api/partners/new", {
                method: "POST",
                body: formData,
              });

              if (response.ok) {
                handleClickVariant(
                  "success",
                  "New Partner created Successfully"
                );
                getPartnerData();
                setopen(false);
              }
            } catch (error) {
              console.log(error);
              handleClickVariant("error", "Something went wrong");
            } finally {
              setloading(false);
            }
          } else {
            handleClickVariant(
              "error",
              "Please choose a valid image as the dimensions of the selected image exceed 134 pixels"
            );
            setloading(false);
            return;
          }
        };
      };
    }
  };

  const handlefilesChange = (e) => {
    setvalues({ ...values, image: e.target.files[0] });
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
            Partner Name
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
            Image
          </label>
          <input
            id="partnerimage"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handlefilesChange(e)}
            accept="image/*"
          />
          <label
            htmlFor="partnerimage"
            style={{
              fontSize: 16,
              fontFamily: "__Manrope_36d688",
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
            Upload Image
          </label>
          {values.image && (
            <img
              style={{
                width: "100%",
                height: "114px",
                borderRadius: "5px",
                objectFit: "fill",
                objectPosition: "center",
              }}
              src={URL.createObjectURL(values.image)}
              alt="icon"
            />
          )}
        </Box>

        <Box>
          <Button
            onClick={createPartner}
            className={styles.sendbtn}
            style={{
              background: "#0287E6",
              color: "white",
              fontSize: 16,
              fontFamily: "__Manrope_36d688",
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

export default Addpartner;
