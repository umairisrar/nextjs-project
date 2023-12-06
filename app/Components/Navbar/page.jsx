"use client";
import React, { useState } from "react";
// import logo from "";
import { Box, NoSsr, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./navbar.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import Career from "../Careers/page";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useDetectClickOutside } from "react-detect-click-outside";

const Navbar = ({ title, setswitch }) => {
  const NoSsrBox = NoSsr(Box);
  const router = useRouter();
  const [mobileview, setmobileview] = useState(false);
  const [career, setcareer] = useState(false);
  const [company, setcompany] = useState(false);
  const [projects, setprojects] = useState(false);
  const [wwd, setwwd] = useState(false);

  const closecompany = () => {
    setcompany(false);
  };

  const closeprojects = () => {
    setprojects(false);
  };

  const closewwd = () => {
    setwwd(false);
  };

  const closemobileview = () => {
    setmobileview(false);
  };

  const companyref = useDetectClickOutside({ onTriggered: closecompany });

  const projectsref = useDetectClickOutside({ onTriggered: closeprojects });

  const wwdref = useDetectClickOutside({ onTriggered: closewwd });
  const mobileref = useDetectClickOutside({ onTriggered: closemobileview });

  let companyar = [
    {
      title: "About us",
      link: "aboutus",
    },
    {
      title: "Chairman Message",
      link: "message",
    },
    {
      title: "Vision & Mission Statements",
      link: "vision",
    },
    {
      title: "Policies & Accreditations",
      link: "policies",
    },
  ];
  let projectsar = ["Projects", "Photo Gallery"];
  const wwdar = [
    {
      title: "Civil & Building Works",
      link: "civil",
    },
    {
      title: "Steel Structure Works",
      link: "steelwork",
    },
    {
      title: "MEP Works",
      link: "civil",
    },
    {
      title: "Interior Fitout Services",
      link: "civil",
    },
    {
      title: "Commercial Refrigeration",
      link: "civil",
    },
    {
      title: "Facility Management Services",
      link: "civil",
    },
    {
      title: "ELV Services",
      link: "civil",
    },
    {
      title: "Solar Systems",
      link: "civil",
    },
  ];
  return (
    <Box style={{ zIndex: "20", position: "relative" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          onClick={() => {
            router.push("/");
          }}
          src="/assets/images/logo.png"
          alt="Vercel Logo"
          width={260}
          height={88}
          className={styles.logo0}
        />
        {/* <img src={logo} alt="logo" /> */}
        <Box className={styles.navbox}>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "22px",
              fontFamily: "__Manrope_36d688",
            }}
          >
            <li
              className={styles.navlist}
              style={{ color: title === "Home" ? "#0287E6" : "white" }}
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </li>
            <li
              className={styles.navlist}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onClick={() => {
                  setcompany(!company);
                  setwwd(false);
                  setprojects(false);
                }}
              >
                <Typography
                  style={{
                    color: title === "company" ? "#0287E6" : "white",
                    fontFamily: "__Manrope_36d688",
                    fontSize: "14px",
                  }}
                >
                  Company
                </Typography>{" "}
                <ExpandMoreIcon />
              </Box>
              {/* {company && ( */}
              <Box
                ref={companyref}
                style={{
                  opacity: company ? 1 : 0,
                  background: "white",
                  transition: "1s",
                  height: "auto",
                  width: "245px",
                  position: "absolute",
                  borderRadius: "12px",
                  top: "36px",
                  left: "-3px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                  zIndex: company ? 10000 : -1,
                }}
              >
                <Box
                  style={{
                    background: "white",
                    width: "16px",
                    height: "16px",
                    top: "-7px",
                    left: "20px",
                    position: "absolute",
                    transform: "rotate(45deg)",
                  }}
                ></Box>
                {companyar.map((item) => (
                  <Typography
                    style={{
                      color: "rgba(0, 0, 0, 0.88)",
                      fontFamily: "__Manrope_36d688",
                      padding: "8px 18px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      router.push(item.link);
                    }}
                  >
                    {item.title}
                  </Typography>
                ))}
              </Box>
              {/* )} */}
            </li>{" "}
            <li
              className={styles.navlist}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* <p>What We Do</p> <ExpandMoreIcon /> */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onClick={() => {
                  setwwd(!wwd);
                  setprojects(false);
                  setcompany(false);
                }}
              >
                <Typography
                  style={{
                    color: title === "wwd" ? "#0287E6" : "white",
                    fontFamily: "__Manrope_36d688",
                    fontSize: "14px",
                  }}
                >
                  What We Do
                </Typography>
                <ExpandMoreIcon />
              </Box>
              {/* {company && ( */}
              <Box
                ref={wwdref}
                style={{
                  opacity: wwd ? 1 : 0,
                  background: "white",
                  transition: "1s",
                  height: "auto",
                  width: "267px",
                  position: "absolute",
                  borderRadius: "12px",
                  top: "36px",
                  left: "-3px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                  zIndex: wwd ? 10000 : -1,
                }}
              >
                <Box
                  style={{
                    background: "white",
                    width: "16px",
                    height: "16px",
                    top: "-7px",
                    left: "20px",
                    position: "absolute",
                    transform: "rotate(45deg)",
                  }}
                ></Box>
                {wwdar.map((item) => (
                  <Typography
                    style={{
                      color: "rgba(0, 0, 0, 0.88)",
                      fontFamily: "__Manrope_36d688",
                      padding: "8px 18px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      router.push(
                        `/whatwedo?title=${item.title.replaceAll(" ", "_")}`
                      );

                      if (setswitch) {
                        setswitch(item.title);
                      }
                      setwwd(false);
                    }}
                  >
                    {item.title}
                  </Typography>
                ))}
              </Box>
            </li>
            <li
              className={styles.navlist}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* <p>Projects</p> <ExpandMoreIcon /> */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onClick={() => {
                  setprojects(!projects);
                  setcompany(false);
                  setwwd(false);
                }}
              >
                <Typography
                  style={{
                    color: title === "projects" ? "#0287E6" : "white",
                    fontFamily: "__Manrope_36d688",
                    fontSize: "14px",
                  }}
                >
                  Projects
                </Typography>
                <ExpandMoreIcon />
              </Box>
              {/* {company && ( */}
              <Box
                ref={projectsref}
                style={{
                  opacity: projects ? 1 : 0,
                  background: "white",
                  transition: "1s",
                  height: "auto",
                  width: "245px",
                  position: "absolute",
                  borderRadius: "12px",
                  top: "36px",
                  left: "-3px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                  zIndex: projects ? 10000 : -1,
                }}
              >
                <Box
                  style={{
                    background: "white",
                    width: "16px",
                    height: "16px",
                    top: "-7px",
                    left: "20px",
                    position: "absolute",
                    transform: "rotate(45deg)",
                  }}
                ></Box>
                {projectsar.map((item) => (
                  <Typography
                    style={{
                      color: "rgba(0, 0, 0, 0.88)",
                      fontFamily: "__Manrope_36d688",
                      padding: "8px 18px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      router.push("/projects");
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </li>{" "}
            <li className={styles.navlist}>News Room</li>
            <li
              className={styles.navlist}
              onClick={() => {
                setcareer(true);
              }}
            >
              Careers
            </li>{" "}
            <li
              onClick={() => {
                router.push("/contactus");
              }}
              className={styles.navlist}
              style={{ color: title === "contact" ? "#0287E6" : "white" }}
            >
              Contact us
            </li>
          </ul>
        </Box>

        <Box ref={mobileref} className={styles.icon}>
          <Box
            onClick={() => {
              if (mobileview) {
                setmobileview(false);
              } else {
                setmobileview(true);
              }
            }}
          >
            <DensityMediumIcon />
          </Box>
          {mobileview && (
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                position: "absolute",
                top: "69px",
                left: "0px",
              }}
            >
              <Box
                style={{
                  background: "rgb(255 255 255 / 0%)",
                  width: "95%",
                  zIndex: "1000",
                  borderRadius: "14px",
                  border: "1px solid #1717155c",
                  backdropFilter: "blur(89px)",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    paddingLeft: "17px",
                  }}
                >
                  <li
                    className={styles.mobilenavlist}
                    style={{ color: title === "Home" ? "#0287E6" : "white" }}
                    onClick={() => {
                      router.push("/");
                      setmobileview(false);
                    }}
                  >
                    Home
                  </li>
                  <li
                    className={styles.mobilenavlist}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      justifyContent: "flex-start",
                      alignItems: "baseline",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setcompany(!company);
                        setwwd(false);
                        setprojects(false);
                      }}
                    >
                      <Typography
                        style={{
                          color: title === "company" ? "#0287E6" : "white",
                        }}
                      >
                        Company
                      </Typography>{" "}
                      <ExpandMoreIcon />
                    </Box>
                    {/* {company && ( */}
                    <Box
                      ref={companyref}
                      style={{
                        opacity: company ? 1 : 0,

                        background: "white",
                        transition: "1s",
                        height: "auto",
                        width: "245px",
                        position: "absolute",
                        borderRadius: "12px",
                        top: "36px",
                        left: "-3px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                        zIndex: company ? 10000 : -1,
                        border: "1px solid #00000047",
                      }}
                    >
                      <Box
                        style={{
                          background: "white",
                          width: "20px",
                          height: "20px",
                          top: "-6px",
                          left: "20px",
                          position: "absolute",
                          transform: "rotate(45deg)",
                          border: "1px solid #00000047",
                          zIndex: -1,
                        }}
                      ></Box>
                      {companyar.map((item) => (
                        <Typography
                          style={{
                            color: "#000000e0",
                            fontFamily: "__Manrope_36d688",
                            padding: "8px 5px",
                            backgroundColor: "white",
                            zIndex: 3,
                            marginLeft: "10px",
                            fontSize: "14px",
                            // zIndex: 3,
                          }}
                          onClick={() => {
                            setmobileview(false);

                            router.push(item.link);
                          }}
                        >
                          {item.title}
                        </Typography>
                      ))}
                    </Box>
                    {/* )} */}
                  </li>{" "}
                  <li
                    className={styles.mobilenavlist}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      justifyContent: "flex-start",
                      alignItems: "baseline",
                    }}
                  >
                    {/* <p>What We Do</p> <ExpandMoreIcon /> */}
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setwwd(!wwd);
                        setprojects(false);
                        setcompany(false);
                      }}
                    >
                      <Typography
                        style={{ color: title === "wwd" ? "#0287E6" : "white" }}
                      >
                        What We Do
                      </Typography>
                      <ExpandMoreIcon />
                    </Box>
                    {/* {company && ( */}
                    <Box
                      ref={wwdref}
                      style={{
                        opacity: wwd ? 1 : 0,
                        background: "white",
                        transition: "1s",
                        height: "auto",
                        width: "245px",
                        position: "absolute",
                        borderRadius: "12px",
                        top: "36px",
                        left: "-3px",
                        display: "flex",

                        flexDirection: "column",
                        alignItems: "baseline",
                        zIndex: wwd ? 20 : -1,
                        border: "1px solid #00000047",
                      }}
                    >
                      <Box
                        style={{
                          background: "white",
                          width: "20px",
                          height: "20px",
                          top: "-6px",
                          left: "20px",
                          position: "absolute",
                          transform: "rotate(45deg)",
                          border: "1px solid #00000047",
                          zIndex: -1,
                        }}
                      ></Box>
                      {wwdar.map((item) => (
                        <Typography
                          style={{
                            color: "#000000e0",
                            fontFamily: "__Manrope_36d688",
                            padding: "8px 5px",
                            backgroundColor: "white",
                            zIndex: 3,
                            marginLeft: "10px",
                            fontSize: "14px",
                          }}
                          onClick={() => {
                            setmobileview(false);
                            router.push(`/whatwedo?title=${item.title}`);

                            if (setswitch) {
                              setswitch(item.title);
                            }
                            setwwd(false);
                          }}
                        >
                          {item.title}
                        </Typography>
                      ))}
                    </Box>
                  </li>
                  <li
                    className={styles.mobilenavlist}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      justifyContent: "flex-start",
                      alignItems: "baseline",
                    }}
                  >
                    {/* <p>Projects</p> <ExpandMoreIcon /> */}
                    <Box
                      style={{ display: "flex", flexDirection: "row" }}
                      onClick={() => {
                        setprojects(!projects);
                        setcompany(false);
                        setwwd(false);
                      }}
                    >
                      <Typography
                        style={{
                          color: title === "projects" ? "#0287E6" : "white",
                        }}
                      >
                        Projects
                      </Typography>
                      <ExpandMoreIcon />
                    </Box>
                    {/* {company && ( */}
                    <Box
                      ref={projectsref}
                      style={{
                        opacity: projects ? 1 : 0,
                        background: "white",
                        transition: "1s",
                        height: "auto",
                        width: "245px",
                        position: "absolute",
                        borderRadius: "12px",
                        top: "36px",
                        left: "-3px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                        zIndex: projects ? 20 : -1,

                        border: "1px solid #00000047",
                      }}
                    >
                      <Box
                        style={{
                          background: "white",
                          width: "20px",
                          height: "20px",
                          top: "-6px",
                          left: "20px",
                          position: "absolute",
                          transform: "rotate(45deg)",
                          zIndex: -1,
                          border: "1px solid #00000047",
                        }}
                      ></Box>
                      {projectsar.map((item) => (
                        <Typography
                          style={{
                            color: "#000000e0",
                            fontFamily: "__Manrope_36d688",
                            padding: "8px 5px",
                            backgroundColor: "white",
                            zIndex: 3,
                            marginLeft: "10px",
                            fontSize: "14px",
                          }}
                          onClick={() => {
                            setmobileview(false);
                            router.push("/projects");
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </li>{" "}
                  <li className={styles.mobilenavlist}>News Room</li>
                  <li
                    className={styles.mobilenavlist}
                    onClick={() => {
                      setmobileview(false);

                      setcareer(true);
                    }}
                  >
                    Careers
                  </li>{" "}
                  <li
                    onClick={() => {
                      setmobileview(false);

                      router.push("/contactus");
                    }}
                    className={styles.mobilenavlist}
                    style={{ color: title === "contact" ? "#0287E6" : "white" }}
                  >
                    Contact us
                  </li>
                </ul>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      {career && (
        <Box style={{}}>
          <Career setcareer={setcareer} />
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
