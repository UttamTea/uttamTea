import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Grid, Typography } from "@mui/material";
import PIYALA_CHAI from "../../assets/images/PiyalaChai.png";
import { useNavigate } from "react-router-dom";
const Card = ({ bgColor, title, img, description }) => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      height={645}
      sx={{ background: bgColor }}
      overflow={"hidden"}
    >
      <Box
        className="AssamTeaSectionCardContainer"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <img src={img} />
        <Box textAlign={"center"}>
          <Typography
            fontSize={"1.5rem"}
            fontWeight={400}
            fontFamily={"Literata"}
            lineHeight={"26px"}
            color="#121212"
          >
            {title}
          </Typography>
          <Typography
            color="#535353"
            fontSize={"1rem"}
            fontWeight={400}
            fontFamily={"Manrope"}
            lineHeight={"23px"}
          >
            {description}
          </Typography>
          <Button
            variant="black"
            sx={{ mt: "3rem" }}
            onClick={() => navigate("/product/112")}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const AssamTeaSection = ({ marginTop = "140px" }) => {
  return (
    <ContainerWrapper>
      <Box mt={marginTop} mb={"5.2rem"}>
        <Grid container>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Card
              title={"Assam Tea"}
              description={"Lorem ipsum dolor sit amet, consectetur"}
              img={PIYALA_CHAI}
              bgColor={"linear-gradient(180deg, #FFF5E6 0%, #FAE3C2 100%)"}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Card
              title={"Assam Tea"}
              description={"Lorem ipsum dolor sit amet, consectetur"}
              img={PIYALA_CHAI}
              bgColor={"linear-gradient(180deg, #F3FFE8 0%, #DCF8C4 100%)"}
            />
          </Grid>
        </Grid>
      </Box>
    </ContainerWrapper>
  );
};

export default AssamTeaSection;
