import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Typography } from "@mui/material";
import PREMIUM_TEA_IMG from "../../assets/images/UpdatedPremium.svg";
import { useNavigate } from "react-router-dom";

const RealPremiumTeaSection = () => {
  const navigate = useNavigate();
  return (
    <ContainerWrapper>
      <Box
        px={{ xs: "1rem", md: "106px" }}
        mt={{ xs: "64px", md: "140px" }}
        display={{ xs: "block", md: "flex" }}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography
            fontSize={{ xs: "2.25rem", md: "3.5rem" }}
            color="#691E0F"
            fontWeight={400}
            lineHeight={{ xs: "44px", md: "60px" }}
            fontFamily={"Literata"}
          >
            Real Premium
            <br /> Indian Tea
          </Typography>
          <Typography
            mt={{ xs: "0.75rem", md: "1.5rem" }}
            fontSize={{ xs: "0.875rem", md: "1rem" }}
            fontWeight={400}
            maxWidth={{ xs: "332px", md: "385px" }}
            fontFamily={"Manrope"}
            lineHeight={{ xs: "1.25rem", md: "1.5rem" }}
            color="#535353"
          >
            Authentic Indian kadak chai, brewed with family secrets and timeless
            spice blends. Taste tradition in every sip.
          </Typography>
          <Button
            variant="black"
            sx={{ marginTop: { xs: "1.75rem", md: "2.25rem" } }}
            onClick={() => navigate("/product/112")}
          >
            Shop teas
          </Button>
        </Box>
        <Box mt={{ xs: "44px", md: "0" }}>
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
