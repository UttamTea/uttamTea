import React from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Grid, Typography } from "@mui/material";
import PIYALA_CHAI from "../../assets/images/PiyalaChai.png";
import { useNavigate } from "react-router-dom";

export const TeaCard = ({ title, description, img, bgColor, id }) => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      height={{ xs: "100%", md: "720px" }}
      className="teaCard_main_container"
      sx={{ background: bgColor }}
      borderRadius={"1.5rem"}
      pt={{ xs: "2rem", md: "0" }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <img src={img} alt="img" className="assam_tea_images w-100 h-auto" />
          <Box textAlign={"center"} mt={{ xs: "0", md: "-2rem" }}>
            <Typography
              color="#121212"
              fontFamily={"Literata"}
              fontWeight={400}
              fontSize={"2rem"}
              mt={{ xs: "1.25rem", md: "0" }}
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
              sx={{
                marginTop: { xs: "20px", md: "28px" },
                marginBottom: { xs: "32px", md: "0" },
              }}
              onClick={() => navigate(`/product/${id}`)}
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
const AssamTeaSection = ({
  marginTop = "140px",
  productDetail = false,
  data,
}) => {
  console.log("dataaa", data);
  return (
    <ContainerWrapper>
      <Box
        mt={{
          xs: productDetail ? "28px" : "64px",
          md: productDetail ? "1.5rem" : "140px",
        }}
        mb={"5.2rem"}
      >
        <Grid container>
          {data?.map((item) => {
            return (
              <Grid
                item
                size={{ xs: 12, md: 6 }}
                px={{ xs: productDetail ? 0 : "1rem", md: "0" }}
              >
                <TeaCard
                  title={item?.shortName}
                  description={item?.shortDescription}
                  img={PIYALA_CHAI}
                  bgColor={item?.backgroundColor}
                  id={item.id}
                />
              </Grid>
            );
          })}

          {/* <Grid
            item
            size={{ xs: 12, md: 6 }}
            px={{ xs: productDetail ? 0 : "1rem", md: "0" }}
            mt={{ xs: "1.25rem", md: "0" }}
          >
            <TeaCard
              title={"Assam Tea"}
              description={"Lorem ipsum dolor sit amet, consectetur"}
              img={PIYALA_CHAI}
              bgColor={"linear-gradient(180deg, #F3FFE8 0%, #DCF8C4 100%)"}
            />
          </Grid> */}
        </Grid>
      </Box>
    </ContainerWrapper>
  );
};

export default AssamTeaSection;
