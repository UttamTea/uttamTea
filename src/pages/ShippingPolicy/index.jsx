import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ShippingPolicy = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fef5ee",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "left",
        p: { xs: 2, md: 4 },
        pt: { xs: 4, md: 8 },
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
          Shipping Policy
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
          For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 3-5 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. UTTAM SINGH TEA COMPNAY PRIVATE LIMITED is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 3-5 days rom the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 9313633232 or info@uttamtea.com
        </Typography>
      </Container>
    </Box>
  );
};

export default ShippingPolicy;
