import React from "react";
import { Box, Typography, Container } from "@mui/material";

const TermsAndCondition = () => {
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
          Terms & Conditions
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
          Welcome to Uttam Chai. By accessing or using our website, you agree to
          comply with and be bound by the following Terms and Conditions. Please
          read them carefully before using our services.
        </Typography>

        {/* 1. General */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. General
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          These Terms apply to all visitors, customers, and users of the Uttam
          Chai website.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          By placing an order with us, you confirm that you are at least 18
          years old or have the consent of a parent or guardian.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We reserve the right to update or modify these Terms at any time
          without prior notice. Continued use of the website after changes
          indicates acceptance of the updated Terms.
        </Typography>

        {/* 2. Products & Orders */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Products & Orders
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          All products are subject to availability.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We strive to ensure product descriptions and images are accurate;
          however, minor variations may occur.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Once an order is placed and payment is processed, it cannot be
          cancelled or modified.
        </Typography>

        {/* 3. Pricing & Payment */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Pricing & Payment
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          All prices are listed in INR (Indian Rupees) and include applicable
          taxes unless stated otherwise.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We accept payment through secure online payment gateways.
        </Typography>

        {/* 4. Shipping */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. Shipping
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We ship products across India.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Delivery timelines may vary depending on location and courier service.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We are not responsible for delays caused by courier companies, natural
          calamities, strikes, or any force majeure events.
        </Typography>

        {/* 5. Intellectual Property */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Intellectual Property
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          All content on the Uttam Chai website, including text, images, logos,
          and designs, is our property or used under license.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          You may not reproduce, distribute, or use our content without prior
          written consent.
        </Typography>

        {/* 6. Limitation of Liability */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          6. Limitation of Liability
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Uttam Chai will not be liable for any direct, indirect, incidental, or
          consequential damages arising from the use or inability to use our
          products or website.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Our maximum liability is limited to the value of the product
          purchased.
        </Typography>

        {/* 7. Governing Law */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          7. Governing Law
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          These Terms are governed by the laws of India. Any disputes will be
          subject to the exclusive jurisdiction of courts in New Delhi, India.
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsAndCondition;
