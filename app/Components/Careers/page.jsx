"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./career.module.css";
import { SnackbarProvider, useSnackbar } from "notistack";
import CareerForm from "./component/career";

const Career = ({ setcareer }) => {
  return (
    <SnackbarProvider>
      <CareerForm setcareer={setcareer} />
    </SnackbarProvider>
  );
};

export default Career;
