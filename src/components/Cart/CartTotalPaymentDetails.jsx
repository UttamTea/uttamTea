import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { handlePayment } from "../../../utils";

const CartTotalPaymentDetails = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItemsInStore = useSelector((state) => state.cart.cartItems);
  console.log("cartItemsInStore", cartItemsInStore);
  if (cartItemsInStore.length === 0) return;
  return (
    <Box mt={"3rem"} px={{ xs: "1rem", md: "2.25rem" }}>
      <Box
        py={"1.5rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          color="#383838"
          fontFamily={"Literata"}
          fontSize={{ xs: "1rem", md: "20px" }}
        >
          Sub Total
        </Typography>
        <Typography
          color="#691E0F"
          fontFamily={"Manrope"}
          fontSize={{ xs: "1rem", md: "20px" }}
        >
          ₹ {totalPrice.toFixed(2)}
        </Typography>
      </Box>
      <Button
        sx={{ width: "100%" }}
        variant="black"
        onClick={() => handlePayment(totalPrice, cartItemsInStore)}
      >
        Proceed to pay
      </Button>
    </Box>
  );
};

export default CartTotalPaymentDetails;
