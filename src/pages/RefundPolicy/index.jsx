import React from "react";
import { Box, Typography, Container } from "@mui/material";

const RefundPolicy = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fef5ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        p: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color="#5f2312"
          textAlign="center"
        >
          Refund Policy
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We offer a full refund within 7 days of purchase if the product is
          unopened and in its original condition.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          If your order arrives damaged or incorrect, please contact our support
          team within 48 hours of delivery. We’ll arrange a replacement or
          initiate a refund.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Refunds will be processed to the original payment method within 5–7
          business days after approval.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Please note: Shipping costs are non-refundable unless the return is
          due to our error.
        </Typography>
      </Container>
    </Box>
  );
};

export default RefundPolicy;
