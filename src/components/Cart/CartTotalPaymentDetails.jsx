import { Box, Button, Typography, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { handlePayment } from "../../../utils";
// import PersonalDetailsModal from "../PersonalDetailsModal/PersonalDetailsModal";

const CartTotalPaymentDetails = ({ setOpenDetailModal }) => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItemsInStore = useSelector((state) => state.cart.cartItems);
  
    // Delivery charge logic: ₹99 for orders below ₹399, free for orders ≥ ₹399
  const DELIVERY_CHARGE = 1;
    const FREE_DELIVERY_THRESHOLD = 399;
  const deliveryCharge = totalPrice >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
  const finalTotal = totalPrice + deliveryCharge;
  
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
      <Box
        py={"1rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          color="#383838"
          fontFamily={"Literata"}
          fontSize={{ xs: "0.875rem", md: "18px" }}
        >
          Delivery Charge
        </Typography>
        <Typography
          color={deliveryCharge === 0 ? "#2e7d32" : "#691E0F"}
          fontFamily={"Manrope"}
          fontSize={{ xs: "0.875rem", md: "18px" }}
          sx={{ textDecoration: deliveryCharge === 0 ? "line-through" : "none" }}
        >
          {deliveryCharge === 0 ? (
            <span style={{ color: "#2e7d32", fontWeight: 600 }}>FREE</span>
          ) : (
            `₹ ${deliveryCharge.toFixed(2)}`
          )}
        </Typography>
      </Box>
      {totalPrice < FREE_DELIVERY_THRESHOLD && (
        <Typography
          color="#666"
          fontFamily={"Manrope"}
          fontSize={{ xs: "0.75rem", md: "0.875rem" }}
          textAlign="center"
          mb={1}
        >
          Add ₹{(FREE_DELIVERY_THRESHOLD - totalPrice).toFixed(2)} more for FREE delivery!
        </Typography>
      )}
      <Divider sx={{ my: 1 }} />
      <Box
        py={"1rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          color="#121212"
          fontFamily={"Literata"}
          fontSize={{ xs: "1.125rem", md: "22px" }}
          fontWeight={600}
        >
          Total
        </Typography>
        <Typography
          color="#691E0F"
          fontFamily={"Manrope"}
          fontSize={{ xs: "1.125rem", md: "22px" }}
          fontWeight={700}
        >
          ₹ {finalTotal.toFixed(2)}
        </Typography>
      </Box>
      <Button
        sx={{ width: "100%" }}
        variant="black"
        onClick={() => setOpenDetailModal(true)}
      >
        Proceed
      </Button>
    </Box>
  );
};

export default CartTotalPaymentDetails;
