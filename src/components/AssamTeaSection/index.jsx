import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Grid, Typography } from "@mui/material";
import PIYALA_CHAI from "../../assets/images/PiyalaChai.png";
import { useNavigate } from "react-router-dom";

export const TeaCard = ({ title, description, img, bgColor }) => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      height={"720px"}
      className="teaCard_main_container"
      sx={{ background: bgColor }}
      borderRadius={"1.5rem"}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box>
          <img src={img} alt="img" />
          <Box textAlign={"center"} mt={"-2rem"}>
            <Typography
              color="#121212"
              fontFamily={"Literata"}
              fontWeight={400}
              fontSize={"2rem"}
            >
              {title}
            </Typography>
            <Typography
              color="#535353"
              fontFamily={"Manrope"}
              fontWeight={400}
              fontSize={"1rem"}
            >
              {description}
            </Typography>
            <Button
              variant="black"
              sx={{ marginTop: "28px" }}
              onClick={() => navigate("/product/112")}
            >
              {" "}
              Shop Now
            </Button>
          </Box>
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
            {/* <Card
              title={"Assam Tea"}
              description={"Lorem ipsum dolor sit amet, consectetur"}
              img={PIYALA_CHAI}
              bgColor={"linear-gradient(180deg, #FFF5E6 0%, #FAE3C2 100%)"}
            /> */}
            <TeaCard
              title={"Assam Tea"}
              description={"Lorem ipsum dolor sit amet, consectetur"}
              img={PIYALA_CHAI}
              bgColor={"linear-gradient(180deg, #FFF5E6 0%, #FAE3C2 100%)"}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            {/* <Card
              title={"Assam Tea"}
              description={"Lorem ipsum dolor sit amet, consectetur"}
              img={PIYALA_CHAI}
              bgColor={"linear-gradient(180deg, #F3FFE8 0%, #DCF8C4 100%)"}
            /> */}
            <TeaCard
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
