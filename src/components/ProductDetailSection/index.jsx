import {
  Box,
  Button,
  Chip,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { PRODUCT_DATA } from "../../constant";
import CartIcon from "../../assets/icons/CartIcon";
import ProductTabsSection from "./ProductTabsSection";
import RelatedProducts from "./RelatedProducts";
import ComparisonTable from "../ComparisonTable";
import ResponsiveProductCards from "./ResponsiveProductCards";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Cart from "../Cart";

const ProductDetailSection = ({ data = PRODUCT_DATA[0], details }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [productData, setProductData] = useState(null);
  const [itemCount, setItemCount] = useState(1);
  const [selectedPacking, setSelectedPackaging] = useState(null);
  const [packagingDetails, setPackagingDetails] = useState({
    price: 0,
    oldPrice: 0,
    dicountPercentage: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data]);
  useEffect(() => {
    setPackagingDetails(details?.variants?.[0]);
    setSelectedPackaging(details?.variants?.[0]?.id);
  }, [details]);
  const handleClick = (type) => {
    if (type === "add") {
      if (itemCount !== packagingDetails?.quantity)
        setItemCount((prev) => prev + 1);
    } else {
      if (itemCount !== 1) {
        setItemCount((prev) => prev - 1);
      }
    }
  };
  const handleAddToCartClick = () => {
    setLoading(true);

    const params = {
      productId: details?.documentId,
      variantId: packagingDetails?.variantId,
      name: details?.name,
      price: packagingDetails?.price,
      purchasedQuantity: itemCount,
      image: details?.smallImage?.url,
      totalAvailableQuantity: packagingDetails?.quantity,
    };

    dispatch(addToCart(params));
    setItemCount(1);
    setOpenCartDrawer(true);
    setLoading(false);
  };
  return (
    <>
      <Cart open={openCartDrawer} setOpen={setOpenCartDrawer} />

      <Box mt={{ xs: "40px", md: "92px" }} px={{ xs: "1rem", md: "110px" }}>
        <Grid container spacing={"2rem"}>
          <Grid item size={{ xs: 12, md: 5.8 }}>
            <Box display={{ xs: "none", md: "flex" }} gap={"1rem"}>
              <Box
                sx={{
                  background: details?.backgroundColor,
                }}
                borderRadius={"1rem"}
                height={528}
                width={"100%"}
              >
                <img
                  src={details?.bigImage?.url}
                  alt="piyala"
                  className="h-100 w-100 object_fit_cover"
                  style={{ borderRadius: "1rem", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Box display={{ xs: "block", md: "none" }}>
              <ResponsiveProductCards details={details} />
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
                {details?.name}
              </Typography>
              <Box display={"flex"} alignItems={"center"} gap={"0.625rem"}>
                <Box
                  mb={"1.25rem"}
                  mt={"0.75rem"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"4px"}
                >
                  <Rating
                    name="half-rating-read"
                    value={details?.rating || 5}
                    precision={0.5}
                    readOnly
                  />
                </Box>
                <Typography
                  mb={"0.5rem"}
                  fontSize={"0.875rem"}
                  fontFamily={"Manrope"}
                  color={{ xs: "#535353", md: "#121212" }}
                  fontWeight={400}
                >
                  {details?.rating}
                  {"/5 (10,000 Reviews)"}
                </Typography>
              </Box>

              <Typography
                fontSize={"0.875rem"}
                fontFamily={"Manrope"}
                fontWeight={400}
                color="#535353"
                lineHeight={"1.25rem"}
                mt={"1.25rem"}
                mb={"3rem"}
                maxWidth={596}
              >
                {details?.detailedDescription}
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
                flexWrap={"wrap"}
              >
                {details?.variants.map((item) => {
                  // Check if this is a value pack (more than 1 pack)
                  const packCount = parseInt(item.variantSmallDescription?.match(/\d+/)?.[0] || "1");
                  const isValuePack = packCount > 1;
                  
                  return (
                    <Box
                      key={item.id}
                      position={"relative"}
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
                      sx={{ 
                        cursor: "pointer",
                        overflow: "visible",
                      }}
                      onClick={() => {
                        setPackagingDetails(item);
                        setSelectedPackaging(item.id);
                      }}
                    >
                      {isValuePack && (
                        <Box
                          position={"absolute"}
                          top={"-14px"}
                          left={"50%"}
                          px={"10px"}
                          py={"5px"}
                          borderRadius={"8px"}
                          bgcolor={"#027F3D"}
                          boxShadow={"0 2px 8px rgba(255, 215, 0, 0.25)"}
                          sx={{
                            transform: 'translateX(-50%)',
                            '@keyframes gentleGlow': {
                              '0%, 100%': { 
                                boxShadow: '0 2px 8px rgba(255, 215, 0, 0.25)',
                              },
                              '50%': { 
                                boxShadow: '0 2px 12px rgba(255, 215, 0, 0.4)',
                              },
                            },
                            animation: 'gentleGlow 2s ease-in-out infinite',
                            zIndex: 10,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Box display="flex" alignItems="center" gap="4px">
                            <Typography
                              component="span"
                              sx={{
                                fontSize: "14px",
                                lineHeight: "14px",
                              }}
                            >
                              ⭐
                            </Typography>
                            <Typography
                              color={"#fff"}
                              fontFamily={"Manrope"}
                              fontWeight={700}
                              fontSize={"11px"}
                              lineHeight={"14px"}
                              letterSpacing={"0.5px"}
                              textTransform={"uppercase"}
                            >
                              Value Pack
                            </Typography>
                            <Typography
                              component="span"
                              sx={{
                                fontSize: "14px",
                                lineHeight: "14px",
                              }}
                            >
                              ⭐
                            </Typography>
                          </Box>
                        </Box>
                      )}
                      <Typography
                        color={selectedPacking === item.id ? "#fff" : "#383838"}
                        fontFamily={"Manrope"}
                        fontWeight={400}
                        fontSize={{ xs: "0.875rem", md: "1rem" }}
                        lineHeight={"1.5rem"}
                      >
                        {" "}
                        {item.size}
                      </Typography>
                      <Typography
                        color={selectedPacking === item.id ? "#fff" : "#535353"}
                        fontFamily={"Manrope"}
                        fontWeight={400}
                        fontSize={"0.75rem"}
                        lineHeight={"0.75rem"}
                      >
                        {" "}
                        {item.variantSmallDescription} pack
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
                  ₹{packagingDetails?.price}
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
                  ₹ {packagingDetails?.oldPrice}
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
                      {packagingDetails?.dicountPercentage}% off
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
                  onClick={handleAddToCartClick}
                  variant="black"
                  sx={{ width: "100%" }}
                  startIcon={isMdUp ? <CartIcon hovered={isHovered} /> : null}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  loading={loading}
                >
                  Add to Cart - ₹
                  {(itemCount * packagingDetails?.price).toLocaleString(
                    "en-IN"
                  )}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <ProductTabsSection data={details} />
        <RelatedProducts />
        <ComparisonTable />
      </Box>
    </>
  );
};

export default ProductDetailSection;
