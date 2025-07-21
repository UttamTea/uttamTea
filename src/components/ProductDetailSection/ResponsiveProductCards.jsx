import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const ResponsiveProductImageCard = ({ img }) => {
  return (
    <Box width="100%">
      <img
        src={img}
        alt="piyala chai"
        className="h-auto w-100"
        style={{
          minWidth: "340px",
          height: "424px",
          objectFit: "cover",
          borderRadius: "12px",
          border: "1px solid #D3D3D3",
        }}
      />
    </Box>
  );
};

const ResponsiveProductCards = ({ details }) => {
  console.log("details", details);

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
    // <Carousel
    //   responsive={responsive}
    //   showDots
    //   arrows={false}s
    //   infinite
    //   autoPlay={true}
    //   containerClass="carousel-container"
    //   swipeable={false}
    //   draggable={false}
    //   dotListClass="react-multi-carousel-dot-list"
    //   itemClass="carousel-item-padding-40-px"
    // >
    <ResponsiveProductImageCard img={details?.bigImage?.url} />

    // </Carousel>
  );
};

export default ResponsiveProductCards;
