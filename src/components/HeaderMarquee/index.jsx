// import React from "react";
// import { Box, Typography } from "@mui/material";

// const HeaderMarquee = () => {
//   const bullets = new Array(20)
//     .fill(
//       `•\u00A0\u00A0\u00A0\u00A0\u00A0SHOP NOW AND SAVE $150\u00A0\u00A0\u00A0\u00A0\u00A0`
//     )
//     .join(" "); // Repeat with bullets

//   return (
//     <Box className="HeaderMarqueeMainContainer">
//       <Box className="HeaderMarqueeTrack">
//         <Typography
//           className="HeaderMarqueeText"
//           fontFamily={"Manrope"}
//           fontSize={"0.75rem"}
//           color="#000"
//         >
//           {bullets}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HeaderMarquee;

import React from "react";

const HeaderMarquee = () => {
  // Improved content structure with spans for better styling control
  const marqueeItems = [
    { icon: ".", text: "Now Free Delivery over Rs 399/- 📦" },
    { icon: ".", text: "Now Free Delivery over Rs 399/- 📦" },
    { icon: ".", text: "Now Free Delivery over Rs 399/- 📦" },
    { icon: ".", text: "Now Free Delivery over Rs 399/- 📦" },
    { icon: ".", text: "Now Free Delivery over Rs 399/- 📦" },
    { icon: ".", text: "Now Free Delivery over Rs 399/- 📦" },
    { icon: ".", text: "Now Free Delivery over Rs 399/- 📦" },
  ];

  // Create styled content with proper spacing
  const createMarqueeContent = () => {
    return marqueeItems.map((item, index) => (
      <span key={index} className="marquee-item_header">
        <span className="marquee-icon_header">{item.icon}</span>
        <span className="marquee-text_header" style={{ fontSize: "0.975rem" }}>{item.text}</span>
      </span>
    ));
  };

  // Repeat the content multiple times to ensure full screen coverage
  const renderDuplicatedContent = () => {
    // Create 5 sets of the content to ensure coverage
    return Array(5)
      .fill(null)
      .map((_, index) => (
        <React.Fragment key={index}>{createMarqueeContent()}</React.Fragment>
      ));
  };

  return (
    <div className="marquee-container_header">
      <div className="marquee-content_header">{renderDuplicatedContent()}</div>
      {/* Duplicate for seamless infinite scroll */}
      <div className="marquee-content_header" aria-hidden="true">
        {renderDuplicatedContent()}
      </div>
    </div>
  );
};

export default HeaderMarquee;
