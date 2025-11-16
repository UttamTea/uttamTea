import React, {useState, useEffect} from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Typography } from "@mui/material";
import BEST_SELLING from "../../assets/background/BestSelling.png";
import BEST_SELLING_RESP from "../../assets/background/BestSellingResp.png";
import { payloadBaseURL } from "../../axios/url";

import { useNavigate } from "react-router-dom";
const BestSellingProduct = ({ data }) => {
  const navigate = useNavigate();
  // Get the first product (Piyala Tea) documentId
  const piyalaTeaId = data?.[0]?.documentId || "brjod7y7iaipxrnaw01ytsc0";

  const [backgroundImageData, setBackgroundImageData] = useState();
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBestSellingProductSection = async () => {
      try {
        const res = await fetch(`${payloadBaseURL}/api/globals/best-selling-product`);
        if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
        const data = await res.json();             
        const SectionData = data?.docs?.[0] ?? data;
        setBackgroundImageData(SectionData);
        // console.log("Best Selling Product Section Data", SectionData);
      } catch (err) {
        console.error("Error fetching hero section", err);
        setError(err);
      }
    };

    fetchBestSellingProductSection();
  }, []); 

  const DesktopBgImage = backgroundImageData?.backgroundImageDesktop?.url
      ? `${payloadBaseURL}${backgroundImageData?.backgroundImageDesktop?.url}` 
      : BEST_SELLING;
  
    const PhoneBgImage = backgroundImageData?.backgroundImageMobile?.url
      ? `${payloadBaseURL}${backgroundImageData?.backgroundImageMobile?.url}` 
      : BEST_SELLING_RESP;

  return (
    <ContainerWrapper>
      <Box
        mt={{ xs: "64px", md: "140px" }}
        width={"100%"}
        sx={{ overflowX: "hidden", maxWidth: "100vw" }}
        height={{ xs: "100%", md: 755 }}
        position={"relative"}
        px={{ xs: "1rem", md: "0" }}
      >
        <Typography
          display={{ xs: "block", md: "none" }}
          fontSize={"1.75rem"}
          lineHeight={"2rem"}
          fontFamily={"Literata"}
          color="#691E0F"
          fontWeight={400}
          mb={"1.75rem"}
        >
          Best Selling Product
        </Typography>
        <Box
          position={{ xs: "relative", md: "absolute" }}
          top={0}
          left={0}
          height={"auto"}
          width={"100%"}
          display={{ xs: "none", md: "block" }}
        >
          <img src={DesktopBgImage} alt="best selling" />
        </Box>
        <Box
          position={{ xs: "relative", md: "absolute" }}
          top={0}
          left={0}
          height={"auto"}
          width={"100%"}
          display={{ xs: "block", md: "none" }}
        >
          <img
            src={PhoneBgImage}
            alt="best selling"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          display={{ xs: "none", md: "block" }}
          position={"absolute"}
          left={"110px"}
          top={"72px"}
        >
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
          display={{ xs: "none", md: "block" }}
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
            backdropFilter: "blur(10px)",
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
            Authentic Indian chai that&apos;s big on taste and gentle on your
            pocket.
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
          <Button
            variant="black"
            sx={{ mt: "1.125rem" }}
            onClick={() => navigate(`/product/brjod7y7iaipxrnaw01ytsc0`)}
          >
            Shop Now 
          </Button>
        </Box>
        <Box mt={"1.25rem"} display={{ xs: "block", md: "none" }}>
          <Typography
            color="Piyala Chai"
            fontSize={"1.25rem"}
            lineHeight={"28px"}
            fontFamily={"Literata"}
          >
            Piyala Chai
          </Typography>
          <Typography
            maxWidth={317}
            fontSize={"0.75rem"}
            fontFamily={"Manrope"}
            lineHeight={"150%"}
            mt={"0.75rem"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"0.625rem"}
            mt={"1.25rem"}
          >
            <Typography
              color="#121212"
              fontWeight={400}
              fontSize={"1.5rem"}
              fontFamily={"Literata"}
            >
              ₹149
            </Typography>
            <Typography
              color="#121212"
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
              bgcolor={"#F8F4EC"}
              borderRadius={"100px"}
              border={"1px solid #EDE5DB"}
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
          <Button
            variant="black"
            sx={{ mt: "1.125rem" }}
            onClick={() => navigate(`/product/brjod7y7iaipxrnaw01ytsc0`)}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default BestSellingProduct;
