import React from "react";
import { Box, Typography } from "@mui/material";

const HeaderMarquee = () => {
  const bullets = new Array(20)
    .fill(
      `•\u00A0\u00A0\u00A0\u00A0\u00A0SHOP NOW AND SAVE $150\u00A0\u00A0\u00A0\u00A0\u00A0`
    )
    .join(" "); // Repeat with bullets

  return (
    <Box className="HeaderMarqueeMainContainer">
      <Box className="HeaderMarqueeTrack">
        <Typography
          className="HeaderMarqueeText"
          fontFamily={"Manrope"}
          fontSize={"0.75rem"}
          color="#000"
        >
          {bullets}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderMarquee;
