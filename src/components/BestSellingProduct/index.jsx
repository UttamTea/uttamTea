import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Typography } from "@mui/material";
import BEST_SELLING from "../../assets/background/BestSelling.png";
const BestSellingProduct = () => {
  return (
    <ContainerWrapper>
      <Box mt={"140px"} width={"100%"} height={755} position={"relative"}>
        <Box
          position={"absolute"}
          top={0}
          left={0}
          height={"auto"}
          width={"100%"}
        >
          <img src={BEST_SELLING} alt="best selling" />
        </Box>
        <Box position={"absolute"} left={"110px"} top={"72px"}>
          <Typography
            fontSize={"2.5rem"}
            fontFamily={"Literata"}
            lineHeight={"140%"}
            fontWeight={400}
            color="#fff"
          >
            Best-selling Product
          </Typography>
        </Box>
        <Box
          position={"absolute"}
          bottom={"20%"}
          left={"32%"}
          px={"26px"}
          py={"24px"}
          borderRadius={"0.75rem"}
          border={"1px solid rgba(255, 255, 255, 0.40)"}
          sx={{
            background:
              "linear-gradient(136deg, rgba(255, 255, 255, 0.50) 0%, rgba(153, 153, 153, 0.20) 100%)",
          }}
          maxWidth={"369px"}
        >
          <Typography
            color="#fff"
            fontFamily={"Literata"}
            fontWeight={400}
            lineHeight={"120%"}
            fontSize={"1.75rem"}
          >
            Piyala Chai
          </Typography>
          <Typography
            my={"0.75rem"}
            color="#fff"
            fontFamily={"Manrope"}
            fontWeight={400}
            lineHeight={"120%"}
            fontSize={"0.75rem"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"0.625rem"}>
            <Typography
              color="#fff"
              fontWeight={400}
              fontSize={"1.5rem"}
              fontFamily={"Literata"}
            >
              ₹149
            </Typography>
            <Typography
              color="#fff"
              fontWeight={200}
              fontSize={"1.5rem"}
              fontFamily={"Literata"}
              sx={{
                textDecoration: "line-through",
              }}
            >
              ₹199{" "}
            </Typography>
            <Box
              py={"0.5rem"}
              px={"0.625rem"}
              bgcolor={"#fff"}
              borderRadius={"100px"}
            >
              <Typography
                color="#121212"
                fontWeight={400}
                fontSize={"0.75rem"}
                fontFamily={"Manrope"}
                lineHeight={"165%"}
              >
                20% off
              </Typography>
            </Box>
          </Box>
          <Button variant="black" sx={{ mt: "1.125rem" }}>
            Shop Now
          </Button>
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default BestSellingProduct;
