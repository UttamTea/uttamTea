import React from "react";
import { Box } from "@mui/material";

const TopMarquee = () => {
  const marqueeContent =
    "Over $100 Free Delivery Over $100 Free Delivery Over $100 Free Delivery";

  // Calculate how many times to duplicate content to fill the screen
  // We'll duplicate it several times to ensure coverage across all screen sizes
  const duplicatedContent = Array(10).fill(marqueeContent).join(" ");

  return (
    <Box className="marquee-container">
      <Box className="marquee-content">{duplicatedContent}</Box>
      {/* Duplicate the content to create the infinite scroll effect */}
      <Box className="marquee-content" aria-hidden="true">
        {duplicatedContent}
      </Box>
    </Box>
  );
};

export default TopMarquee;
