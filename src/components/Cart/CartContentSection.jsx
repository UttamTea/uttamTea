import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContentSection = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("md"));
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Box px={isXsScreen ? "1rem" : "2.25rem"}>
      {cartItems.map((item, index) => {
        console.log("xxxx", item);
        return (
          <Box
            display={"flex"}
            // alignItems={"center"}
            gap={"1rem"}
            py={"1.5rem"}
            borderBottom={"1px solid #ECECEC"}
          >
            <Box
              borderRadius={"8px"}
              height={"auto"}
              width={"96px"}
              border={"1px solid"}
            >
              <img
                src={item.image}
                alt={item.image}
                style={{ height: "auto", width: "100%", objectFit: "contain" }}
              />
            </Box>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Typography
                  fontSize={{ xs: "0.75rem", md: "1.25rem" }}
                  color="#383838"
                  fontFamily={"Manrope"}
                >
                  {item.name}
                </Typography>
                <Typography
                  color="#535353"
                  fontFamily={"Manrope"}
                  fontSize={{ xs: "12px", md: "14px" }}
                >
                  ₹ {Math.round(item.price * item.purchasedQuantity).toFixed(2)}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box
                  mt={"8px"}
                  display={"flex"}
                  alignItems={"center"}
                  borderRadius={"100px"}
                  border={"1px solid #121212"}
                  padding={{ xs: "0.5rem", md: "0.25rem" }}
                  gap={"1rem"}
                  width={"fit-content"}
                >
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleClick("substract")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 8H12"
                        stroke="#121212"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography fontSize={"14px"}>
                    {item.purchasedQuantity}
                  </Typography>
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleClick("add")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 8H12"
                        stroke="#121212"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 12V4"
                        stroke="#121212"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
                <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CartContentSection;
