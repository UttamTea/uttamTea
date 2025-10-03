import { Box, Typography, Fade } from "@mui/material";
import React, { useEffect, useState } from "react";
import MR_UTTAM_IMG from "../../assets/Mruttamphoto.svg";
import PEOPLE_PLUCKING_IMG from "../../assets/peoplepluckingtea.svg";
import LADY_PLUCKING_IMG from "../../assets/ladypluckingtea.svg";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const data = [
  {
    img: MR_UTTAM_IMG,
    name: "Mr. Uttam’s Story",
    heading: "Meet the Man",
    description:
      "Uttam Tea began as a humble tea shop with a simple vision to make high-quality tea affordable and accessible to every household. What started as a small endeavor turned into a legacy, as more and more families made Uttam Tea a part of their lives. Over the years, our passion for purity, taste, and customer satisfaction has remained unchanged, guiding us as we expanded our reach across India.",
  },
  {
    img: PEOPLE_PLUCKING_IMG,
    name: "Why Uttam Tea?",
    heading: "The Story",
    description:
      "For over 40 years, Uttam Tea has been more than just a brand, it has been a part of countless morning rituals, cherished conversations, and comforting moments. We believe that a great cup of tea is not just about taste, it is about the experience it creates. Whether it is the first sip that wakes you up or the last one that brings peace after a long day, Uttam Tea is crafted to be your perfect companion.",
  },
  {
    img: LADY_PLUCKING_IMG,
    name: "Why Uttam Tea?",
    heading: "The Story",
    description:
      "What makes us special? Our unwavering commitment to quality. Unlike many, we never compromise on purity, ensuring that every blend delivers the same rich aroma and taste that generations have trusted. Our teas are masterfully blended using the finest leaves from Assam and Darjeeling, striking the perfect balance between strength and smoothness.",
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
      mt={{ xs: "1rem", md: "160px" }}
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
