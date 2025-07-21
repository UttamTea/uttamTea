import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContentSection = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("md"));
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleClick = (type) => {
    // Implement add/subtract functionality here
  };

  if (cartItems.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="60vh"
        px={isXsScreen ? "1rem" : "2.25rem"}
        textAlign="center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          style={{
            width: isXsScreen ? "120px" : "160px",
            marginBottom: "1rem",
          }}
        />
        <Typography
          fontFamily="Manrope"
          fontSize={isXsScreen ? "1.25rem" : "1.5rem"}
          color="#535353"
        >
          Your cart is empty!
        </Typography>
        <Typography
          fontFamily="Manrope"
          fontSize={isXsScreen ? "0.875rem" : "1rem"}
          color="#999"
          mt={0.5}
        >
          Looks like you haven’t added anything yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box px={isXsScreen ? "1rem" : "2.25rem"}>
      {cartItems.map((item, index) => (
        <Box
          display={"flex"}
          key={index}
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
              alt={item.name}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12V4"
                      stroke="#121212"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
              <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartContentSection;
