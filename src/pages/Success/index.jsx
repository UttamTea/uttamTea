import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { clearCart } from "../features/cart/cartSlice";
import axios from "axios";

const Success = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!orderId) {
      navigate("/");
      return;
    }

    const verifyOrder = async () => {
      try {
        const res = await axios.post(
          "http://localhost:1337/api/razorpay/check-order",
          {
            razorpay_order_id: orderId,
          }
        );

        if (res.data.success) {
          setVerified(true);
          //   dispatch(clearCart()); // ✅ empty cart if verification passed
        } else {
          //   navigate("/");
        }
      } catch (err) {
        console.error("Verification failed:", err);
        // navigate("/");
      } finally {
        setLoading(false);
      }
    };

    verifyOrder();
  }, [orderId, dispatch, navigate]);

  if (loading) {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="#f5f5f5"
      px={2}
    >
      {verified ? (
        <>
          <CheckCircleOutlineIcon
            sx={{ fontSize: 80, color: "green", mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            Order Placed Successfully!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={3}
            align="center"
          >
            Thank you for your purchase. Your order has been verified and is
            being processed.
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h5" color="error" mb={2}>
            Payment not verified
          </Typography>
        </>
      )}

      <Button
        variant="contained"
        color="primary"
        startIcon={<HomeIcon />}
        onClick={() => navigate("/")}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default Success;
