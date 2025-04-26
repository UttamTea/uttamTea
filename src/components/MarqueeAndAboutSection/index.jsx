import { Box, Typography } from "@mui/material";
import React from "react";
import TopMarquee from "./TopMarquee";
import BottomMarquee from "./BottomMarquee";

const MarqueeAndAboutSection = () => {
  // return (
  //   <Box
  //     width="100%"
  //     bgcolor="#F7F2E9"
  //     minHeight={405}
  //     display="flex"
  //     alignItems="center"
  //     justifyContent="center"
  //   >
  //     <Typography
  //       maxWidth="895px"
  //       textAlign="center"
  //       fontSize="2rem"
  //       color="#000"
  //       lineHeight="142%"
  //       fontFamily={"Literata"}
  //       fontWeight={300}
  //     >
  //       Where bold Indian chai meets eight decades of family tradition —
  //       blending pure ingredients, timeless recipes, and the everyday joy of a
  //       truly authentic cup.
  //     </Typography>
  //   </Box>
  // );
  return (
    <Box mt={"104px"} maxWidth={"100vw"} overflow={"hidden"}>
      {" "}
      <TopMarquee />
      <BottomMarquee />
      <Box
        width="100%"
        bgcolor="#F7F2E9"
        minHeight={405}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          maxWidth="895px"
          textAlign="center"
          fontSize="2rem"
          color="#000"
          lineHeight="142%"
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
