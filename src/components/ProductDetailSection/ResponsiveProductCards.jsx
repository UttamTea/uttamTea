import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import PIYALA_CHAI_WITH_BG from "../../assets/images/PiyalaChaiWithBg.png";

const ResponsiveProductImageCard = () => {
  return (
    <Box width="100%">
      <img
        src={PIYALA_CHAI_WITH_BG}
        alt="piyala chai"
        className="h-auto w-100"
        style={{
          minWidth: "340px",
          height: "424px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </Box>
  );
};

const ResponsiveProductCards = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      showDots
      arrows={false}
      infinite
      autoPlay={true}
      containerClass="carousel-container"
      swipeable={false}
      draggable={false}
      dotListClass="react-multi-carousel-dot-list "
      itemClass="carousel-item-padding-40-px"
    >
      <ResponsiveProductImageCard />
      <ResponsiveProductImageCard />
      <ResponsiveProductImageCard />
      <ResponsiveProductImageCard />
    </Carousel>
  );
};

export default ResponsiveProductCards;
