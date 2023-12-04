"use client";
import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import Close from "@mui/icons-material/Close";
import styles from "../dashboard.module.css";
import { enqueueSnackbar } from "notistack";

const LoginUser = ({ setlogin }) => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const handleClickVariant = (variant, message) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    if (!values.password || !values.email) {
      handleClickVariant(
        "error",
        "Kindly complete all the required input fields."
      );
      return;
    }
    setloading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleClickVariant("success", "Login Successfull");
        localStorage.setItem("albawardy_token", data.token);
        setlogin(true);
      } else {
        handleClickVariant("error", "Invalid Email and Password");
      }
    } catch (error) {
      console.log(error);
      // seterror(true);
      handleClickVariant("error", "Something went wrong");
    } finally {
      setloading(false);
    }
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
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
          paddingBottom: "0px",
        }}
      >
        {/* <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Close
            // onClick={() =>
            //   setopenfeedback({
            //     open: false,
            //   })
            // }
            style={{ cursor: "pointer" }}
          />
        </Box> */}

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingBottom: "20px",
            width: "93%",
          }}
        >
          <label
            style={{ fontSize: "16px" }}
            className={styles.labelstyle}
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => handleChange(e)}
            className={styles.inputstyle}
            style={{ background: "rgb(242, 244, 247)" }}
            value={values.email}
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingBottom: "20px",
            width: "93%",
          }}
        >
          <label
            style={{ fontSize: "16px" }}
            className={styles.labelstyle}
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => handleChange(e)}
            className={styles.inputstyle}
            style={{ background: "rgb(242, 244, 247)" }}
            value={values.password}
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </Box>
        {error && (
          <Box
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Typography variant="subtitle1" style={{ color: "red" }}>
              Invalid Email & Password
            </Typography>
          </Box>
        )}
        <Box>
          <Button
            onClick={loginUser}
            className={styles.sendbtn}
            style={{
              background: "#0287E6",
              color: "white",
              fontSize: 16,
              marginBottom: "16px",
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

export default LoginUser;
