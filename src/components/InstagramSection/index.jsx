import React, { useRef } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Typography, IconButton } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import INSTAGRAM_IMAGE from "../../assets/mock/Instagram.png";
import R1 from "../../assets/reviews/R1.png";
import R2 from "../../assets/reviews/R2.png";
import R3 from "../../assets/reviews/R3.png";
import { useNavigate } from "react-router-dom";

const Card = ({ image }) => {
  return (
    <Box
      width={{ xs: 204, md: 287 }}
      height={{ xs: 204, md: 287 }}
      borderRadius={"0.75rem"}
    >
      <img src={image} alt="insta" className="h-100 w-100 object_fit_cover" />
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
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5 24L15.67 24"
        stroke="#121212"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconButton>
);

const CustomRightArrow = ({ onClick }) => (
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
        d="M26.4301 17.9302L32.5001 24.0002L26.4301 30.0702"
        stroke="#121212"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 24H32.33"
        stroke="#121212"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconButton>
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 24,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    partialVisibilityGutter: 24,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1.5,
    partialVisibilityGutter: 24,
  },
};


const InstagramSection = () => null;
export default InstagramSection;
