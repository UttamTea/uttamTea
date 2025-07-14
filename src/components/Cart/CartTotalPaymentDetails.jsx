import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { handlePayment } from "../../../utils";

const CartTotalPaymentDetails = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = [{ id: 1, name: "Green Tea", qty: 2, price: 100 }];

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
        onClick={() => handlePayment(totalPrice, cartItems)}
      >
        Proceed to pay
      </Button>
    </Box>
  );
};

export default CartTotalPaymentDetails;
