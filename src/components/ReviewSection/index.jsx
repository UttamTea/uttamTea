import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import Carousel from "react-multi-carousel";
import REVIEW_IMG from "../../assets/mock/Review.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
    partialVisibilityGutter: 24,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    partialVisibilityGutter: 24,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 24,
  },
};
const Card = () => {
  return (
    <Box width={252} height={446} borderRadius={"0.75rem"}>
      <img src={REVIEW_IMG} alt="insta" className="object_fit_cover" />
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
  const cards = Array.from({ length: 10 });
  return (
    <ContainerWrapper>
      <Box px={"110px"} mt={"140px"}>
        <Typography
          fontSize={"2.5rem"}
          fontWeight={400}
          fontFamily={"Literata"}
          color="#383838"
          lineHeight={"3rem"}
          textAlign={"center"}
        >
          Over
        </Typography>
        <Typography
          fontSize={"130px"}
          fontWeight={700}
          fontFamily={"Literata"}
          color="#691E0F"
          lineHeight={"100%"}
          textAlign={"center"}
        >
          10 M +
        </Typography>
        <Typography
          mt={"1.5rem"}
          fontSize={"2.5rem"}
          fontWeight={400}
          fontFamily={"Literata"}
          color="#691E0F"
          lineHeight={"3rem"}
          textAlign={"center"}
        >
          Cups of Authentic Indian Tea Served
        </Typography>
        <Typography
          my={"2.75rem"}
          fontSize={"1rem"}
          fontWeight={400}
          fontFamily={"Manrope"}
          color="#383838"
          lineHeight={"1.5rem"}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
        </Typography>
        <Typography
          fontSize={"2.5rem"}
          fontWeight={400}
          fontFamily={"Literata"}
          color="#121212"
          lineHeight={"2rem"}
          textAlign={"center"}
        >
          Don&apos;t Just Take Our Word For It
        </Typography>
      </Box>
      <Box pl={"110px"} mt={"4.5rem"}>
        <Carousel
          responsive={responsive}
          infinite
          arrows={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          renderButtonGroupOutside
          itemClass="carousel-item-padding"
        >
          {cards.map((_, idx) => (
            <Box key={idx} mr={"1.5rem"}>
              <Card />
            </Box>
          ))}
        </Carousel>

        {/* Custom Arrow Controls Below */}
        <Box display="flex" justifyContent="center" mt={4}>
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
