import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import PIYALA_CHAI_IMG from "../../assets/mock/piyalaChai.png";
import { useNavigate } from "react-router-dom";

const Card = ({
  background,
  title = "Pyala Tea",
  description = "Lorem ipsum dolor sit amet, consectetur",
  img,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"492px"}
      borderRadius={"1.5rem"}
      width={"100%"}
      className="ChaiTypes_Individual_Card_Container"
      sx={{
        background: background,
      }}
    >
      <Box className="card_internal_box">
        <Box>
          <img
            src={PIYALA_CHAI_IMG}
            alt="Piyala Chai"
            className="h-auto w-100"
          />
          <Typography
            fontSize={"2rem"}
            color="#121212"
            fontFamily={"Literata"}
            fontWeight={400}
            lineHeight={"40px"}
            textAlign={"center"}
          >
            {title}
          </Typography>
          <Typography
            fontSize={"1rem"}
            color="#535353"
            fontFamily={"Manrope"}
            fontWeight={400}
            lineHeight={"150%"}
            textAlign={"center"}
          >
            {description}
          </Typography>
        </Box>
        <Button
          variant="black"
          className="shopNowButton"
          onClick={() => navigate("/product/112")}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};
const CardResp = (
  background,
  title = "Pyala Tea",
  description = "Lorem ipsum dolor sit amet, consectetur",
  img
) => {
  return (
    <Box
      minWidth={304}
      height={"100%"}
      sx={{
        backgroundColor: background,
      }}
      borderRadius={"12px"}
    >
      <img src={PIYALA_CHAI_IMG} alt="Piyala Chai" className="h-auto w-100" />
      <Box textAlign={"center"}>
        <Typography fontSize={"1.5rem"} fontWeight={400} lineHeight={"28px"}>
          {title}
        </Typography>
        <Typography
          fontSize={"0.75rem"}
          color="#535353"
          fontFamily={"Manrope"}
          fontWeight={400}
          lineHeight={"150%"}
          textAlign={"center"}
        >
          {description}
        </Typography>
        <Button
          sx={{ marginTop: "22px", marginBottom: "32px" }}
          variant="black"
          className="shopNowButton"
          onClick={() => navigate("/product/112")}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};
const ChaiTypesSection = () => {
  return (
    <ContainerWrapper>
      <Box
        display={{ xs: "none", md: "block " }}
        px={{ xs: "1rem", md: "110px" }}
        mt={"140px"}
      >
        <Grid container spacing={"1.5rem"}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Card
              background={"linear-gradient(180deg, #FFEAE6 0%, #FACAC2 100%)"}
              title="Pyala Tea"
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Card
              background={"linear-gradient(180deg, #FFF5E6 0%, #FAE3C2 100%)"}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Card
              background={"linear-gradient(180deg, #F3FFE8 0%, #DCF8C4 100%)"}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        display={{ xs: "flex", md: "none" }}
        px={"1rem"}
        sx={{ overflowX: "auto" }}
        gap={"1rem"}
        mt={"56px"}
        className="hide-scrollbar"
      >
        <CardResp
          background={"linear-gradient(180deg, #FFEAE6 0%, #FACAC2 100%)"}
          title="Pyala Tea"
        />
        <CardResp
          background={"linear-gradient(180deg, #FFEAE6 0%, #FACAC2 100%)"}
        />
        <CardResp
          background={"linear-gradient(180deg, #FFEAE6 0%, #FACAC2 100%)"}
        />
        <CardResp
          background={"linear-gradient(180deg, #FFEAE6 0%, #FACAC2 100%)"}
        />
      </Box>
    </ContainerWrapper>
  );
};

export default ChaiTypesSection;
