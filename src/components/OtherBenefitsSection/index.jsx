import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, InputBase, Typography } from "@mui/material";
import NATURAL_IMG from "../../assets/icons/Natural.svg";
import FAST_PACKAGING_IMG from "../../assets/icons/FastPackaging.svg";
import FRESHLY_IMG from "../../assets/icons/Freshly.svg";
import KADAK_IMG from "../../assets/icons/Kadak.svg";

const Card = ({ img, title, description }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <img src={img} alt={img} />
      <Typography
        color="#121212"
        fontSize={"1.5rem"}
        fontWeight={400}
        fontFamily={"Literata"}
        lineHeight={"28px"}
        my={"0.75rem"}
      >
        {title}
      </Typography>
      <Typography
        maxWidth={"235px"}
        color="#535353"
        fontSize={"0.875rem"}
        fontWeight={400}
        fontFamily={"Manrope"}
        lineHeight={"normal"}
      >
        {description}
      </Typography>
    </Box>
  );
};
const OtherBenefitsSection = () => {
  return (
    <ContainerWrapper>
      <Box mt={"140px"} px={"6.25rem"} mb={"5.2rem"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Card
            img={NATURAL_IMG}
            title={"100% Natural"}
            description={"No additives, just pure tea leaves and whole spices."}
          />
          <Card
            img={FAST_PACKAGING_IMG}
            title={"Free & Fast Shipping"}
            description={
              "Enjoy doorstep delivery with no extra cost, pan-India."
            }
          />
          <Card
            img={FRESHLY_IMG}
            title={"Freshly Packed"}
            description={
              "Sealed for freshness in small batches to retain full flavor."
            }
          />
          <Card
            img={KADAK_IMG}
            title={"Kadak Flavour"}
            description={
              "Strong, bold, and spiced — just like real Indian chai should be."
            }
          />
        </Box>
        <Box mt={"138px"}>
          <Box maxWidth={"598px"} mx={"auto"}>
            <Typography
              fontSize={"2.5rem"}
              color="#121212"
              fontFamily={"Literata"}
              fontWeight={400}
              lineHeight={"3rem"}
              textAlign={"center"}
            >
              Get 20% off your first order
            </Typography>
            <Typography
              mt={"0.75rem"}
              color="#535353"
              fontFamily={"Manrope"}
              fontWeight={400}
              lineHeight={"1.5rem"}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Typography>
            <Box
              display="flex"
              mt={3}
              sx={{
                borderRadius: "999px",
                overflow: "hidden",
                backgroundColor: "#F9F6EE", // match your design background
                width: "100%",
              }}
            >
              <InputBase
                placeholder="youremail@example.com"
                sx={{
                  flex: 1,
                  padding: "12px 20px",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                }}
                inputProps={{ "aria-label": "email address" }}
              />
              <Button
                sx={{
                  backgroundColor: "#121212",
                  color: "#fff",
                  borderRadius: "100px",
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontFamily: "Manrope",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default OtherBenefitsSection;
