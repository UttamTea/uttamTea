import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import PIYALA_CHAI_IMG from "../../assets/mock/piyalaChai.png";
import { useNavigate } from "react-router-dom";
import { PRODUCT_DATA } from "../../constant";

const Card = ({
  background,
  title = "Pyala Tea",
  img,
  id,
  description = "Lorem ipsum dolor sit amet, consectetur",
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
          <img src={img} alt={title} className="h-auto w-100" loading="lazy" style={{ objectFit: 'contain', maxHeight: '300px' }} />
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
          onClick={() => navigate(`/product/${id}`)}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};
const CardResp = ({
  background,
  title = "Pyala Tea",
  img,
  id,
  description = "Lorem ipsum dolor sit amet, consectetur",
}) => {
  const navigate = useNavigate();
  return (
    <Box
      minWidth={304}
      height={"100%"}
      sx={{
        background: background,
      }}
      borderRadius={"12px"}
    >
      <img src={img} alt={title} className="h-auto w-100" loading="lazy" style={{ objectFit: 'contain', maxHeight: '250px' }} />
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
          onClick={() => navigate(`/product/${id}`)}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

const ChaiTypesSection = ({ data }) => {
  return (
    <ContainerWrapper>
      <Box id="productsSection">
        <Box
          display={{ xs: "none", md: "block " }}
          px={{ xs: "1rem", md: "110px" }}
          mt={"140px"}
        >
          <Grid container spacing={"1.5rem"}>
            {data.map((item) => {
              return (
                <Grid key={item?.documentId} item size={{ xs: 12, md: 4 }}>
                  <Card
                    background={item?.backgroundColor}
                    title={item?.name}
                    img={item?.smallImage?.url}
                    id={item?.documentId}
                    description={item?.smallDescription}
                  />
                </Grid>
              );
            })}
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
        {data.map((item) => {
          return (
            <CardResp
              key={item?.documentId}
              background={item?.backgroundColor}
              title={item?.name}
              img={item?.smallImage?.url}
              id={item?.documentId}
              description={item?.smallDescription}
            />
          );
        })}
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default ChaiTypesSection;
