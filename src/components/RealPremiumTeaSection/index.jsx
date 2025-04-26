import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Typography } from "@mui/material";
import PREMIUM_TEA_IMG from "../../assets/images/PremiumTea.svg";
import { useNavigate } from "react-router-dom";

const RealPremiumTeaSection = () => {
  const navigate = useNavigate();
  return (
    <ContainerWrapper>
      <Box
        px={"106px"}
        mt={"140px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography
            fontSize={"3.5rem"}
            color="#691E0F"
            fontWeight={400}
            lineHeight={"60px"}
            fontFamily={"Literata"}
          >
            Real Premium
            <br /> Indian Tea
          </Typography>
          <Typography
            mt={"1.5rem"}
            fontSize={"1rem"}
            fontWeight={400}
            maxWidth={"385px"}
            fontFamily={"Manrope"}
            lineHeight={"1.5rem"}
            color="#535353"
          >
            Authentic Indian kadak chai, brewed with family secrets and timeless
            spice blends. Taste tradition in every sip.
          </Typography>
          <Button
            variant="black"
            sx={{ marginTop: "2.25rem" }}
            onClick={() => navigate("/product/112")}
          >
            Shop Now
          </Button>
        </Box>
        <Box>
          <img
            src={PREMIUM_TEA_IMG}
            alt="premium tea"
            className="h-auto w-100"
          />
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default RealPremiumTeaSection;
