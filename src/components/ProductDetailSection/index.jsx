import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Star from "../common/Star";
import { PRODUCT_DATA } from "../../constant";
import CartIcon from "../../assets/icons/CartIcon";
import ProductTabsSection from "./ProductTabsSection";
import RelatedProducts from "./RelatedProducts";
import PIYALA_TEA_IMG from "../../assets/mock/PiyalaMock.png";
import ComparisonTable from "../ComparisonTable";
import PIYALA_CHAI_WITH_BG from "../../assets/images/PiyalaChaiWithBg.png";
import ResponsiveProductCards from "./ResponsiveProductCards";

const ResponsiveProductImageCard = () => {
  return (
    <Box width={"100%"}>
      <img
        src={PIYALA_CHAI_WITH_BG}
        alt="piyala chai"
        className="h-auto w-100"
        style={{ minWidth: "340px", height: "424px" }}
      />
    </Box>
  );
};

const ProductDetailSection = ({ data = PRODUCT_DATA[0] }) => {
  const theme = useTheme();
  const [currentSelectedCard, setCurrentSelectedCard] = useState(0);
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [productData, setProductData] = useState(null);
  const [itemCount, setItemCount] = useState(1);
  const [selectedPacking, setSelectedPackaging] = useState("p1");
  const [packagingDetails, setPackagingDetails] = useState({
    newPrice: 0,
    oldPrice: 0,
    discount: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);
  useEffect(() => {
    if (data) {
      setProductData(data);
      setPackagingDetails(data.sizes[0]);
    }
  }, [data]);
  const handleClick = (type) => {
    if (type === "add") {
      setItemCount((prev) => prev + 1);
    } else {
      if (itemCount !== 1) {
        setItemCount((prev) => prev - 1);
      }
    }
  };
  return (
    <Box mt={{ xs: "40px", md: "92px" }} px={{ xs: "1rem", md: "110px" }}>
      <Grid container spacing={"2rem"}>
        <Grid item size={{ xs: 12, md: 5.8 }}>
          <Box display={{ xs: "none", md: "flex" }} gap={"1rem"}>
            <Box>
              <Box
                onClick={() => setSelectedCard(0)}
                border={selectedCard !== 0 ? "none" : "1px solid #7F3B2D"}
                borderRadius={"1rem"}
                bgcolor={"#F8F4EC"}
                height={"5rem"}
                width={"5rem"}
              ></Box>
              <Box
                onClick={() => setSelectedCard(1)}
                border={selectedCard !== 1 ? "none" : "1px solid #7F3B2D"}
                borderRadius={"1rem"}
                bgcolor={"#F8F4EC"}
                height={"5rem"}
                width={"5rem"}
                my={"0.75rem"}
              ></Box>
              <Box
                onClick={() => setSelectedCard(2)}
                border={selectedCard !== 2 ? "none" : "1px solid #7F3B2D"}
                borderRadius={"1rem"}
                bgcolor={"#F8F4EC"}
                height={"5rem"}
                width={"5rem"}
              ></Box>
            </Box>
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, #FFEAE6 0%, #FACAC2 100%), #F8F4EC",
              }}
              borderRadius={"1rem"}
              height={528}
              width={496}
            >
              <img
                src={PIYALA_TEA_IMG}
                alt="piyala"
                className="h-100 w-100 object_fit_cover"
                style={{ borderRadius: "1rem" }}
              />
            </Box>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <ResponsiveProductCards />
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              fontSize={{ xs: "28px", md: "2.5rem" }}
              color="#121212"
              fontFamily={"Literata"}
              lineHeight={{ xs: "2rem", md: "120%" }}
              fontWeight={400}
            >
              {productData?.name}
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"0.625rem"}>
              <Box
                mb={"1.25rem"}
                mt={"0.75rem"}
                display={"flex"}
                alignItems={"center"}
                gap={"4px"}
              >
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Box>
              <Typography
                mb={"0.5rem"}
                fontSize={"0.875rem"}
                fontFamily={"Manrope"}
                color={{ xs: "#535353", md: "#121212" }}
                fontWeight={400}
              >
                {productData?.rating}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"0.75rem"}
            >
              {productData?.keywords.map((item, index) => {
                return (
                  <Chip
                    key={index}
                    sx={{ border: "1px solid #EDE5DB", background: "#F8F4EC" }}
                    label={
                      <Typography
                        fontSize={"0.875rem"}
                        fontFamily={"Manrope"}
                        color="#535353"
                        fontWeight={400}
                        lineHeight={"1.25rem"}
                      >
                        {item}
                      </Typography>
                    }
                  />
                );
              })}
            </Box>
            <Typography
              fontSize={"0.875rem"}
              fontFamily={"Manrope"}
              fontWeight={400}
              color="#535353"
              lineHeight={"1.25rem"}
              my={"1.25rem"}
              maxWidth={596}
            >
              {productData?.description}
            </Typography>
            <Typography
              color="#535353"
              fontFamily={"Manrope"}
              fontWeight={400}
              fontSize={"0.75rem"}
              lineHeight={"0.75rem"}
              mb={"0.75rem"}
            >
              Select size
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={{ xs: "0.5rem", md: "0.75rem" }}
            >
              {productData?.sizes.map((item) => {
                return (
                  <Box
                    key={item.id}
                    px={{ xs: "1.25rem", md: "2.5rem" }}
                    py={"0.5rem"}
                    border={
                      item.id === selectedPacking
                        ? "1px solid #EDE5DB"
                        : "1px solid #121212"
                    }
                    borderRadius={"0.5rem"}
                    textAlign={"center"}
                    bgcolor={
                      selectedPacking === item.id ? "#7F3B2D" : "transparent"
                    }
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setPackagingDetails(item);
                      setSelectedPackaging(item.id);
                    }}
                  >
                    <Typography
                      color={selectedPacking === item.id ? "#fff" : "#383838"}
                      fontFamily={"Manrope"}
                      fontWeight={400}
                      fontSize={{ xs: "0.875rem", md: "1rem" }}
                      lineHeight={"1.5rem"}
                    >
                      {" "}
                      {item.packaging}
                    </Typography>
                    <Typography
                      color={selectedPacking === item.id ? "#fff" : "#535353"}
                      fontFamily={"Manrope"}
                      fontWeight={400}
                      fontSize={"0.75rem"}
                      lineHeight={"0.75rem"}
                    >
                      {" "}
                      {item.packagingDetail}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box
              mt={"2.68rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"0.75rem"}
            >
              <Typography
                color="#121212"
                fontSize={"1.5rem"}
                fontWeight={400}
                fontFamily={"Literata"}
                lineHeight={"120%"}
              >
                ₹{packagingDetails.newPrice}
              </Typography>
              <Typography
                color="#121212"
                fontSize={"1.5rem"}
                fontWeight={200}
                fontFamily={"Literata"}
                lineHeight={"120%"}
                sx={{
                  textDecoration: "line-through",
                }}
              >
                ₹ {packagingDetails.oldPrice}
              </Typography>
              <Chip
                sx={{ background: "#F8F4EC", border: "1px solid #EDE5DB" }}
                label={
                  <Typography
                    color="#535353"
                    fontSize={"0.75rem"}
                    fontWeight={400}
                    fontFamily={"Manrope"}
                  >
                    {packagingDetails.discount} off
                  </Typography>
                }
              />
            </Box>
            <Typography
              mt={"0.5rem"}
              color="#535353"
              fontSize={"0.75rem"}
              fontFamily={"Manrope"}
              fontWeight={400}
              lineHeight={"0.75rem"}
            >
              Tax and shipping calculated at checkout.
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"0.75rem"}
              justifyContent={"flex-start"}
              mt={"1.8rem"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                borderRadius={"100px"}
                border={"1px solid #121212"}
                padding={{ xs: "0.5rem", md: "0.75rem" }}
                gap={"2rem"}
              >
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClick("substract")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Typography>{itemCount}</Typography>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClick("add")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 18V6"
                      stroke="#121212"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
              <Button
                variant="black"
                sx={{ width: "100%" }}
                startIcon={isMdUp ? <CartIcon hovered={isHovered} /> : null}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Add to Cart - ₹
                {(itemCount * packagingDetails.newPrice).toLocaleString(
                  "en-IN"
                )}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ProductTabsSection data={productData} />
      <RelatedProducts />
      <ComparisonTable />
    </Box>
  );
};

export default ProductDetailSection;
