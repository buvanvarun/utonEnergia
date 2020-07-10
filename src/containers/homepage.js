import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";
import vehicle from "../assets/vehicle.png";

import Navbar from "../components/navbar";
import Verticalbar from "../components/verticalbar";

const Homepage = () => {
  const [state, setState] = useState(false);
  useEffect(() => {}, []);
  const [hover, setHover] = useState(false);
  const hoverEvent = () => {
    setHover(true);
  };
  const outEvent = () => {
    setHover(false);
  };
  const pageVariants = {
    initial: {
      opacity: 1,
    },
    in: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
    out: {
      opacity: 0,
      transition: {
        delay: 0.8,
        when: "afterChildren",
      },
    },
  };
  const barTransition = {
    initial: {
      opacity: 1,
    },
    in: {
      opacity: 1,
      width: "7%",
      height: "73%",
      left: "29.5%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
      transitionEnd: {
        display: "none",
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div
      className="before_body"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <motion.div
        initial="initial"
        animate={state ? "out" : "in"}
        exit="out"
        variants={barTransition}
        className="home-bar1"
      ></motion.div>

      <div className="home-wrapper">
        <Navbar hover={hover} />
        <Verticalbar className="blue" />
        <Verticalbar className="yellow" shade={"yellow"} />
        {/* <div className="links"> */}
        <div className="home-customize-link">
          <Link
            onClick={() => setState(!state)}
            className="home-custom-link"
            to="/customize"
          >
            customiz<span className="home-white">e</span>
          </Link>
        </div>
        <div className="home-specs-link">
          <Link
            onClick={() => setState(!state)}
            className="home-spec-link"
            to="/specs"
          >
            <span className="home-white">s</span>pecs
          </Link>
        </div>

        <div className="home-buyz">
          <Link
            onMouseEnter={hoverEvent}
            onMouseLeave={outEvent}
            className="home-buy-links"
            to="/customize"
          >
            buy
          </Link>
        </div>

        <div className="home-four-five-container">
          <svg
            className="home-four"
            viewBox="0 0 88 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.58 84.12V68.72L49.36 3.2H72.18V67.04H84.5V84.12H72.18V104H52.58V84.12H3.58ZM53.84 24.2L25.14 67.04H53.84V24.2Z"
              fill="white"
            />
            <path
              d="M3.58 84.12H0.58V87.12H3.58V84.12ZM3.58 68.72L1.12082 67.0017L0.58 67.7758V68.72H3.58ZM49.36 3.2V0.199996H47.7964L46.9008 1.48173L49.36 3.2ZM72.18 3.2H75.18V0.199996H72.18V3.2ZM72.18 67.04H69.18V70.04H72.18V67.04ZM84.5 67.04H87.5V64.04H84.5V67.04ZM84.5 84.12V87.12H87.5V84.12H84.5ZM72.18 84.12V81.12H69.18V84.12H72.18ZM72.18 104V107H75.18V104H72.18ZM52.58 104H49.58V107H52.58V104ZM52.58 84.12H55.58V81.12H52.58V84.12ZM53.84 24.2H56.84V14.3319L51.3476 22.5303L53.84 24.2ZM25.14 67.04L22.6476 65.3703L19.5192 70.04H25.14V67.04ZM53.84 67.04V70.04H56.84V67.04H53.84ZM6.58 84.12V68.72H0.58V84.12H6.58ZM6.03918 70.4383L51.8192 4.91827L46.9008 1.48173L1.12082 67.0017L6.03918 70.4383ZM49.36 6.2H72.18V0.199996H49.36V6.2ZM69.18 3.2V67.04H75.18V3.2H69.18ZM72.18 70.04H84.5V64.04H72.18V70.04ZM81.5 67.04V84.12H87.5V67.04H81.5ZM84.5 81.12H72.18V87.12H84.5V81.12ZM69.18 84.12V104H75.18V84.12H69.18ZM72.18 101H52.58V107H72.18V101ZM55.58 104V84.12H49.58V104H55.58ZM52.58 81.12H3.58V87.12H52.58V81.12ZM51.3476 22.5303L22.6476 65.3703L27.6324 68.7097L56.3324 25.8697L51.3476 22.5303ZM25.14 70.04H53.84V64.04H25.14V70.04ZM56.84 67.04V24.2H50.84V67.04H56.84Z"
              fill="#FCA311"
            />
          </svg>
          <br />
          <svg
            className="home-five"
            viewBox="0 0 79 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.02 20.88H23.66V44.82C25.62 42.3933 28.42 40.4333 32.06 38.94C35.7 37.3533 39.5733 36.56 43.68 36.56C51.1467 36.56 57.26 38.1933 62.02 41.46C66.78 44.7267 70.2333 48.9267 72.38 54.06C74.5267 59.1 75.6 64.5133 75.6 70.3C75.6 81.0333 72.52 89.6667 66.36 96.2C60.2933 102.733 51.6133 106 40.32 106C29.68 106 21.1867 103.34 14.84 98.02C8.49333 92.7 4.9 85.7467 4.06 77.16H23.1C23.94 80.8933 25.8067 83.88 28.7 86.12C31.6867 88.36 35.4667 89.48 40.04 89.48C45.5467 89.48 49.7 87.7533 52.5 84.3C55.3 80.8467 56.7 76.2733 56.7 70.58C56.7 64.7933 55.2533 60.4067 52.36 57.42C49.56 54.34 45.4067 52.8 39.9 52.8C35.98 52.8 32.7133 53.78 30.1 55.74C27.4867 57.7 25.62 60.3133 24.5 63.58H5.74V3.66H69.02V20.88Z"
              fill="white"
            />
            <path
              d="M69.02 20.88V23.88H72.02V20.88H69.02ZM23.66 20.88V17.88H20.66V20.88H23.66ZM23.66 44.82H20.66V53.3088L25.9938 46.705L23.66 44.82ZM32.06 38.94L33.1987 41.7155L33.2289 41.7031L33.2588 41.6901L32.06 38.94ZM62.02 41.46L60.3225 43.9335L62.02 41.46ZM72.38 54.06L69.6123 55.2174L69.6161 55.2265L69.6199 55.2356L72.38 54.06ZM66.36 96.2L64.1772 94.142L64.1694 94.1503L64.1616 94.1586L66.36 96.2ZM14.84 98.02L12.9128 100.319L12.9128 100.319L14.84 98.02ZM4.06 77.16V74.16H0.752201L1.07425 77.4521L4.06 77.16ZM23.1 77.16L26.0268 76.5015L25.5 74.16H23.1V77.16ZM28.7 86.12L26.8635 88.4922L26.8816 88.5062L26.9 88.52L28.7 86.12ZM52.5 84.3L54.8303 86.1894L54.8303 86.1894L52.5 84.3ZM52.36 57.42L50.1402 59.438L50.1722 59.4732L50.2053 59.5074L52.36 57.42ZM30.1 55.74L28.3 53.34L30.1 55.74ZM24.5 63.58V66.58H26.6429L27.3378 64.553L24.5 63.58ZM5.74 63.58H2.74V66.58H5.74V63.58ZM5.74 3.66V0.659999H2.74V3.66H5.74ZM69.02 3.66H72.02V0.659999H69.02V3.66ZM69.02 17.88H23.66V23.88H69.02V17.88ZM20.66 20.88V44.82H26.66V20.88H20.66ZM25.9938 46.705C27.5643 44.7606 29.9059 43.0664 33.1987 41.7155L30.9213 36.1645C26.9341 37.8003 23.6757 40.026 21.3262 42.935L25.9938 46.705ZM33.2588 41.6901C36.5076 40.2739 39.9714 39.56 43.68 39.56V33.56C39.1753 33.56 34.8924 34.4327 30.8612 36.1899L33.2588 41.6901ZM43.68 39.56C50.7173 39.56 56.1903 41.0977 60.3225 43.9335L63.7175 38.9865C58.3297 35.2889 51.5761 33.56 43.68 33.56V39.56ZM60.3225 43.9335C64.6254 46.8865 67.697 50.6373 69.6123 55.2174L75.1477 52.9026C72.7697 47.216 68.9346 42.5668 63.7175 38.9865L60.3225 43.9335ZM69.6199 55.2356C71.5995 59.8832 72.6 64.8942 72.6 70.3H78.6C78.6 64.1324 77.4539 58.3168 75.1401 52.8844L69.6199 55.2356ZM72.6 70.3C72.6 80.4269 69.7127 88.271 64.1772 94.142L68.5428 98.258C75.3273 91.0624 78.6 81.6397 78.6 70.3H72.6ZM64.1616 94.1586C58.8058 99.9265 51.0159 103 40.32 103V109C52.2108 109 61.7809 105.54 68.5584 98.2414L64.1616 94.1586ZM40.32 103C30.18 103 22.4352 100.472 16.7672 95.7209L12.9128 100.319C19.9381 106.208 29.18 109 40.32 109V103ZM16.7672 95.7209C11.0499 90.9285 7.81282 84.7091 7.04575 76.8679L1.07425 77.4521C1.98718 86.7842 5.93672 94.4715 12.9128 100.319L16.7672 95.7209ZM4.06 80.16H23.1V74.16H4.06V80.16ZM20.1732 77.8185C21.1587 82.1987 23.3918 85.8044 26.8635 88.4922L30.5365 83.7478C28.2216 81.9556 26.7213 79.588 26.0268 76.5015L20.1732 77.8185ZM26.9 88.52C30.5138 91.2304 34.9668 92.48 40.04 92.48V86.48C35.9666 86.48 32.8595 85.4896 30.5 83.72L26.9 88.52ZM40.04 92.48C46.2143 92.48 51.3266 90.5106 54.8303 86.1894L50.1697 82.4106C48.0734 84.9961 44.879 86.48 40.04 86.48V92.48ZM54.8303 86.1894C58.1728 82.0669 59.7 76.765 59.7 70.58H53.7C53.7 75.7816 52.4272 79.6264 50.1697 82.4106L54.8303 86.1894ZM59.7 70.58C59.7 64.323 58.1326 59.0672 54.5147 55.3326L50.2053 59.5074C52.3741 61.7461 53.7 65.2636 53.7 70.58H59.7ZM54.5798 55.402C51.0432 51.5117 45.9648 49.8 39.9 49.8V55.8C44.8485 55.8 48.0768 57.1683 50.1402 59.438L54.5798 55.402ZM39.9 49.8C35.4644 49.8 31.5301 50.9174 28.3 53.34L31.9 58.14C33.8965 56.6426 36.4956 55.8 39.9 55.8V49.8ZM28.3 53.34C25.1773 55.682 22.9655 58.8057 21.6622 62.607L27.3378 64.553C28.2745 61.821 29.7961 59.718 31.9 58.14L28.3 53.34ZM24.5 60.58H5.74V66.58H24.5V60.58ZM8.74 63.58V3.66H2.74V63.58H8.74ZM5.74 6.66H69.02V0.659999H5.74V6.66ZM66.02 3.66V20.88H72.02V3.66H66.02Z"
              fill="#FCA311"
            />
          </svg>
        </div>
        <div className="home-vehicle-container">
          <img className="home-vehicle-prop" src={vehicle} alt="vehicle" />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;