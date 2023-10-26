"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Navbar from "./Components/Navbar/page";
import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Section2 from "./Components/Home/Components/section2";
import Homesection3 from "./Components/Home/Components/section3";
import Homesection4 from "./Components/Home/Components/section4";
import Homesection5 from "./Components/Home/Components/section5";
import Homesection6 from "./Components/Home/Components/section6";
import Footer from "./Components/Footer";
import Svgimage from "./Components/Home/Components/svgimage";

export default function Home() {
  const router = useRouter();

  return (
    <Box>
      <Box
        className={styles.bannerimage}
        style={{
          backgroundImage: "url('/assets/images/bgimage.png')",

          height: "100vh",
        }}
      >
        <Navbar title="Home" />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            height: "85%",
            justifyContent: "center",
          }}
        >
          <Typography
            className={styles.text0}
            style={{
              color: "white",
              fontWeight: "700",
              // lineHeight: 64,
              wordWrap: "break-word",
              fontFamily: "sans-serif",
              lineHeight: "45px",
            }}
          >
            Engineering resilience through complex planning, diligent ingenious execution and
            sustainable development.
          </Typography>
          <Box
            className={styles.animationbox}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
              marginTop: "25px",
            }}
          >
            {" "}
            <ArrowRightAltIcon className={styles.animatedicon0} style={{ color: "#0287E6" }} />
            <Typography
              className={styles.animatedtext0}
              style={{
                color: "#0287E6",
                fontSize: 16,

                fontWeight: "700",
                fontFamily: "sans-serif",

                wordWrap: "break-word",
              }}
            >
              What We Do
            </Typography>{" "}
          </Box>
        </Box>
        <Svgimage />
      </Box>

      <Section2 />
      <Homesection3 />
      <Homesection4 />
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </Box>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code
    //         className={styles.code}
    //         style={{ cursor: "pointer" }}
    //         onClick={() => {
    //           // router.push(`/test-data`);
    //           // router.push(`/test-data/test-data1`);
    //           router.push(`/test-data/12345?name=danish`);
    //         }}
    //       >
    //         app/page.js
    //       </code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
    //     </a>
    //   </div>
    // </main>
  );
}
