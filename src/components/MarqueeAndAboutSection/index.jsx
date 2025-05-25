import { Box, Typography } from "@mui/material";
import React from "react";
import TopMarquee from "./TopMarquee";
import BottomMarquee from "./BottomMarquee";

const MarqueeAndAboutSection = () => {
  return (
    <Box mt={0} maxWidth={"100vw"} overflow={"hidden"} bgcolor={"#f2ebdf"}>
      {" "}
      <TopMarquee />
      <BottomMarquee />
      <Box
        width="100%"
        bgcolor="#F7F2E9"
        minHeight={{ xs: 320, md: 405 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ xs: "1rem", md: "0" }}
      >
        <Typography
          maxWidth="895px"
          textAlign="center"
          fontSize={{ xs: "1.5rem", md: "2rem" }}
          color="#000"
          lineHeight={{ xs: "36px", md: "142%" }}
          fontFamily={"Literata"}
          fontWeight={300}
        >
          Where bold Indian chai meets eight decades of family tradition —
          blending pure ingredients, timeless recipes, and the everyday joy of a
          truly authentic cup.
        </Typography>
      </Box>
    </Box>
  );
};

export default MarqueeAndAboutSection;
