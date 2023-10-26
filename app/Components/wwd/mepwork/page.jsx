import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "../wwd.module.css";

const MEP = () => {
  const far = [
    "Electrical Works",
    "HVAC Works",
    "Plumbing & Drainage Works",
    " Fire Alarm & Fire Fighting Works",
  ];
  const electricalwork = [
    "HV Switchgear and Transformer",
    "Internal/External Lighting System",
    "Medium Voltage Panels MDB, SMBS & DBs",
    " Small Power Outlets (sockets, isolators, etc.)",
    "Lightning Protection",
    "Earthing System",
    "Diesel Generators",
    "BMS Systems",
  ];

  const hvacwork = [
    "Chiller Units",
    "Pumps (CHWP, Booster, Condenser, etc.)",
    "AC Package Units",
    "Cooling Towers",
    "Air Handling Unit (AHU), Fan Coil Unit (FCU)",
    "Mechanical Ventilation Fan (Pressurization, Smoke, Fresh, etc.)",
    "Dx Type AC system",
  ];

  const Plumbing = [
    "Water Pumps",
    "Domestic Water Tank",
    "Hot Water System",
    "Drainage System",
    "Plumbing and Sanitary System",
    "Kitchens",
    "Toilets",
  ];

  const fire = [
    "Fire Alarm Systems",
    "Sprinkler Systems",
    "Smoke Ventilation",
    "Special Suppression Systems",
    "Diesel Fire Pumps",
    "Hose Reel System",
    "Clean Agent Fire Suppression System",
  ];
  return (
    <Container>
      <Typography
        className={styles.steeltext0}
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "sans-serif",
          fontWeight: "500",
          width: "93%",
          textAlign: "justify",
          wordWrap: "break-word",
        }}
      >
        The success of a superbly designed and constructed building deeply depends on the quality of
        its Mechanical, Electrical and plumbing works. At Albwardy Engineering, we believe to be an
        experienced leader in the market of MEP works for all types of projects including
        commercial, residential, and industrial buildings. Our success and longevity in the industry
        suffice for the quality that we provide.
      </Typography>

      <Typography
        style={{
          color: "black",
          fontSize: 15,
          fontFamily: "sans-serif",
          fontWeight: "700",
          wordWrap: "break-word",
          paddingTop: "14px",
        }}
      >
        The MEP services we provide, but not limited to:
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
          padding: "17px 0px",
          flexWrap: "wrap",
        }}
      >
        {far.map((item) => (
          <Box
            className={styles.meptext2}
            style={{
              border: "1px solid #E4E4E4",
              padding: "26px 0px",
              textAlign: "center",
              borderRadius: "8px",
              width: "270px",
            }}
          >
            <Typography
              className={styles.facilitytext11}
              style={{
                color: "black",
                fontSize: 16,
                fontFamily: "sans-serif",
                fontWeight: "500",

                wordWrap: "break-word",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box style={{ marginTop: "20px" }}>
        <Typography
          className={styles.meptext0}
          style={{
            color: "black",
            fontSize: 24,
            fontFamily: "sans-serif",
            fontWeight: "700",

            wordWrap: "break-word",
          }}
        >
          Electrical Works:
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            padding: "17px 0px",
            flexWrap: "wrap",
          }}
        >
          {electricalwork.map((item) => (
            <Box
              className={styles.meptext2}
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 0px",
                textAlign: "center",
                borderRadius: "8px",
                width: "220px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                className={styles.facilitytext11}
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  width: "213px",
                  wordWrap: "break-word",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box style={{ marginTop: "20px" }}>
        <Typography
          className={styles.meptext0}
          style={{
            color: "black",
            fontSize: 25,
            fontFamily: "sans-serif",
            fontWeight: "700",

            wordWrap: "break-word",
          }}
        >
          HVAC Works:
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            padding: "17px 0px",
            flexWrap: "wrap",
          }}
        >
          {hvacwork.map((item) => (
            <Box
              className={styles.meptext2}
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 0px",
                textAlign: "center",
                borderRadius: "8px",
                width: "220px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                className={styles.facilitytext11}
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  width: "213px",
                  wordWrap: "break-word",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box style={{ marginTop: "20px" }}>
        <Typography
          className={styles.meptext0}
          style={{
            color: "black",
            fontSize: 25,
            fontFamily: "sans-serif",
            fontWeight: "700",

            wordWrap: "break-word",
          }}
        >
          Plumbing & Drainage Works:
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            padding: "17px 0px",
            flexWrap: "wrap",
          }}
        >
          {Plumbing.map((item) => (
            <Box
              className={styles.meptext2}
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 0px",
                textAlign: "center",
                borderRadius: "8px",
                width: "220px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                className={styles.facilitytext11}
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  width: "213px",
                  wordWrap: "break-word",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box style={{ marginTop: "20px" }}>
        <Typography
          className={styles.meptext0}
          style={{
            color: "black",
            fontSize: 25,
            fontFamily: "sans-serif",
            fontWeight: "700",

            wordWrap: "break-word",
          }}
        >
          Fire Alarm & Fire Fighting Works:
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            padding: "17px 0px",
            flexWrap: "wrap",
          }}
        >
          {fire.map((item) => (
            <Box
              className={styles.meptext2}
              style={{
                border: "1px solid #E4E4E4",
                padding: "26px 0px",
                textAlign: "center",
                borderRadius: "8px",
                width: "220px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                className={styles.facilitytext11}
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  width: "213px",
                  wordWrap: "break-word",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default MEP;
