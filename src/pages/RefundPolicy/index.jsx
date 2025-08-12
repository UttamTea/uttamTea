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
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textAlign="center"
          gutterBottom
        >
          Last Updated: 12 August 2025
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          At Uttam Chai, customer satisfaction is our priority. However, due to
          the nature of our products, we do not accept returns or provide any
          refunds once an order has been placed and delivered.
        </Typography>

        {/* 1. No Returns / No Refunds */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. No Returns / No Refunds
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          All sales are final.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We do not offer refunds for any reason, including change of mind,
          incorrect purchase, or dissatisfaction with the taste, as taste
          preferences are subjective.
        </Typography>

        {/* 2. Damaged or Wrong Product */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Damaged or Wrong Product
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          If you receive a damaged product or the wrong item, please contact us
          within 48 hours of delivery at <strong>[Your Email]</strong> with
          photographs of the package and product.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We will review the case and, if approved, send a replacement at no
          extra cost.
        </Typography>

        {/* 3. Shipping Issues */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Shipping Issues
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We are not responsible for delays or non-delivery caused by incorrect
          addresses or courier issues beyond our control.
        </Typography>
      </Container>
    </Box>
  );
};

export default RefundPolicy;
