import { Box, Typography, Fade } from "@mui/material";
import React, { useEffect, useState } from "react";
import MAN_IMG from "../../assets/mock/Man.png";
import WOMAN_IMG from "../../assets/mock/Women.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const data = [
  {
    img: MAN_IMG,
    name: "Mr. John Doe",
    heading: "Meet the Man",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    img: WOMAN_IMG,
    name: "How it all Started",
    heading: "The Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    img: MAN_IMG,
    name: "Mr. John Doe",
    heading: "Meet the Man",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
];

const MeetTheManSection = () => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // pause auto-switching on hover

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSelectedIndex((prev) => (prev + 1) % data.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]); // re-run effect when hover state changes

  return (
    <Box
      bgcolor={"#7F3B2D"}
      width={"100%"}
      display={{ xs: "block", md: "flex" }}
      justifyContent={"center"}
      alignItems={"center"}
      px={{ xs: "1rem", md: "111px" }}
      py={{ xs: "70px", md: "108px" }}
    >
      <Box
        borderRadius={"1.5rem"}
        bgcolor={"#fff"}
        p={{ xs: "1rem", md: "1.5rem" }}
        display={{ xs: "block", md: "flex" }}
        justifyContent={"space-between"}
        gap={"44px"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Fade in={fadeIn} timeout={500} key={currentSelectedIndex}>
          <Box display={{ xs: "block", md: "flex" }} gap="44px">
            <Box position={"relative"}>
              <Box
                display={{ xs: "flex", md: "none" }}
                position={"absolute"}
                zIndex={1}
                right={5}
                top={5}
              >
                <ArrowCircleRightIcon
                  onClick={() => {
                    setFadeIn(false);
                    setTimeout(() => {
                      setCurrentSelectedIndex(
                        (prev) => (prev + 1) % data.length
                      );
                      setFadeIn(true);
                    }, 300);
                  }}
                  sx={{ color: "#fff" }}
                />
              </Box>
              <img
                src={data[currentSelectedIndex].img}
                alt="person"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box mt={{ xs: "28px", md: "0" }}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography
                    color="#383838"
                    fontFamily={"Manrope"}
                    fontWeight={400}
                    fontSize={"1rem"}
                  >
                    {data[currentSelectedIndex].heading}
                  </Typography>
                  <ArrowCircleRightOutlinedIcon
                    sx={{
                      cursor: "pointer",
                      display: { xs: "none", md: "flex" },
                    }}
                    onClick={() => {
                      setFadeIn(false);
                      setTimeout(() => {
                        setCurrentSelectedIndex(
                          (prev) => (prev + 1) % data.length
                        );
                        setFadeIn(true);
                      }, 300);
                    }}
                  />
                </Box>
                <Typography
                  fontFamily={"Literata"}
                  fontSize={{ xs: "28px", md: "2.5rem" }}
                  fontWeight={400}
                  color="#121212"
                  my={{ xs: "0.75rem", md: "1.25rem" }}
                >
                  {data[currentSelectedIndex].name}
                </Typography>
                <Typography
                  maxWidth={520}
                  fontSize={"1rem"}
                  color="#535353"
                  fontFamily={"Manrope"}
                  lineHeight={"26px"}
                >
                  {data[currentSelectedIndex].description}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"0.75rem"}
                my={{ xs: "1.25rem", md: "0" }}
              >
                {data.map((_, index) => (
                  <Box
                    key={index}
                    sx={{ cursor: "pointer", transition: "all 0.3s" }}
                    height={"4px"}
                    width={"100%"}
                    bgcolor={
                      currentSelectedIndex === index ? "#C7A098" : "#E8D9D6"
                    }
                    borderRadius={"100px"}
                    onClick={() => {
                      setFadeIn(false);
                      setTimeout(() => {
                        setCurrentSelectedIndex(index);
                        setFadeIn(true);
                      }, 300);
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default MeetTheManSection;
