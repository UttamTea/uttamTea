import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import Carousel from "react-multi-carousel";
import REVIEW_IMG from "../../assets/mock/Review.png";
import IG1 from "../../assets/instagram/Ig1.png";
import IG2 from "../../assets/instagram/Ig2.png";
import IG3 from "../../assets/instagram/Ig3.png";
import IG4 from "../../assets/instagram/Ig4.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
    partialVisibilityGutter: 24,
  },
  tablet: {
    breakpoint: { max: 1024, min: 900 },
    items: 2,
    partialVisibilityGutter: 24,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1.5,
    partialVisibilityGutter: 24,
  },
};
const Card = ({ image }) => {
  return (
    <Box
      width={{ xs: "100%", md: 252 }}
      height={{ xs: 360, md: 446 }}
      borderRadius={"0.75rem"}
    >
      <img
        src={image}
        alt="insta"
        className="w-100 h-100 object_fit_cover"
        style={{ borderRadius: "12px" }}
      />
    </Box>
  );
};
const CustomLeftArrow = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ mx: 1 }}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#F4ECEB" />
      <path
        d="M21.5699 30.0698L15.4999 23.9998L21.5699 17.9298"
        stroke="#121212"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.5 24L15.67 24"
        stroke="#121212"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </IconButton>
);

const CustomRightArrow = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ mx: { xs: -1, md: 1 } }}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#F4ECEB" />
      <path
        d="M26.4301 17.9302L32.5001 24.0002L26.4301 30.0702"
        stroke="#121212"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5 24H32.33"
        stroke="#121212"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </IconButton>
);
const ReviewSection = () => {
  const cards = [REVIEW_IMG, IG1, IG2, IG3, IG4];

  return (
    <ContainerWrapper>
      <Box px={{ xs: "1rem", md: "110px" }} mt={{ xs: "70px", md: "140px" }}>
        <Typography
          fontSize={{ xs: "1.75rem", md: "2.5rem" }}
          fontWeight={400}
          fontFamily={"Literata"}
          color="#383838"
          lineHeight={{ xs: "2rem", md: "3rem" }}
          textAlign={"center"}
          ml={{ xs: "-2.5rem", md: "0" }}
        >
          Over
        </Typography>
        <Typography
          mr={{ xs: "0", md: "-5rem" }}
          fontSize={{ xs: "88px", md: "130px" }}
          fontWeight={700}
          fontFamily={"Manrope"}
          color="#691E0F"
          lineHeight={"100%"}
          textAlign={"center"}
        >
          50 M +
        </Typography>
        <Typography
          mt={"1.5rem"}
          fontSize={{ xs: "1.75rem", md: "2.5rem" }}
          lineHeight={{ xs: "2rem", md: "3rem" }}
          fontWeight={400}
          fontFamily={"Literata"}
          color="#691E0F"
          textAlign={"center"}
          maxWidth={{ xs: 325, md: 1084 }}
        >
          Cups of Authentic Indian Tea Served
        </Typography>
        <Typography
          my={{ xs: "1.5rem", md: "2.75rem" }}
          fontSize={{ xs: "0.75rem", md: "1rem" }}
          fontWeight={400}
          fontFamily={"Manrope"}
          color="#383838"
          lineHeight={"1.5rem"}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
        </Typography>
        <Typography
          fontSize={{ xs: "1.75rem", md: "2.5rem" }}
          lineHeight={{ xs: "2rem", md: "2rem" }}
          fontWeight={400}
          fontFamily={"Literata"}
          color="#121212"
          textAlign={"center"}
        >
          Don&apos;t Just Take Our Word For It
        </Typography>
      </Box>
      <Box
        pl={{ xs: "1rem", md: "110px" }}
        mt={{ xs: "2.25rem", md: "4.5rem" }}
      >
        <Carousel
          responsive={responsive}
          arrows={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          renderButtonGroupOutside
          itemClass="carousel-item-padding"
          swipeable={true}
          draggable={true}
          infinite
        >
          {cards.map((image, idx) => (
            <Box key={idx} mr={{ xs: "1rem", md: "1.5rem" }}>
              <Card image={image} />
            </Box>
          ))}
        </Carousel>

        <Box
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          mt={{ xs: 2, md: 4 }}
        >
          <CustomLeftArrow
            onClick={() =>
              document
                .querySelector(".react-multi-carousel-list")
                .scrollBy({ left: -300, behavior: "smooth" })
            }
          />
          <CustomRightArrow
            onClick={() =>
              document
                .querySelector(".react-multi-carousel-list")
                .scrollBy({ left: 300, behavior: "smooth" })
            }
          />
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default ReviewSection;
