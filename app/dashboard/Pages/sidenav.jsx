"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StorageIcon from "@mui/icons-material/Storage";
import CollectionsIcon from "@mui/icons-material/Collections";
import styles from "../dashboard.module.css";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useRouter } from "next/navigation";
import MessageIcon from "@mui/icons-material/Message";

const Sidenav = ({ setswitchvalue, switchvalue }) => {
  const sidearray = [
    // {
    //   title: "PORTFOLIO",
    //   icon: <PermIdentityIcon />,
    // },
    {
      title: "PROJECTS",
      icon: <StorageIcon />,
    },
    {
      title: "SECTIONS",
      icon: <DashboardIcon />,
    },
    {
      title: "PROJECT GALLERY",
      icon: <CollectionsIcon />,
    },
    {
      title: "PARTNERS",
      icon: <HandshakeIcon />,
    },
    // {
    //   title: "NEWS",
    //   icon: <NewspaperIcon />,
    // },
    {
      title: "CAREERS",
      icon: <NewspaperIcon />,
    },
    {
      title: "FEEDBACKS",
      icon: <MessageIcon />,
    },
  ];
  const router = useRouter();

  return (
    <Box
      style={{
        background: "#323544",
        height: "100vh",
        width: "250px",
        position: "fixed",
      }}
    >
      <Image
        onClick={() => {
          router.push("/");
        }}
        src="/assets/images/logo.png"
        alt="Logo"
        width={203}
        height={64}
        style={{ padding: "20px 10px", cursor: "pointer" }}
      />
      <Box style={{ display: "flex", flexDirection: "column" }}>
        {sidearray.map((item, i) => (
          <Box
            onClick={() => {
              setswitchvalue(item.title);
            }}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              background: switchvalue === item.title ? "#0287e6" : "none",
              color: switchvalue === item.title ? "white" : "white",
              alignItems: "center",
              gap: "12px",
              paddingLeft: "25px",
              height: "60px",
            }}
            className={styles.sidetabs}
          >
            {item.icon}
            <Typography
              style={{ fontFamily: "__Manrope_36d688", fontSize: "16px" }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidenav;
