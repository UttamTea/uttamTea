import React from "react";
import { Box, Typography, Container } from "@mui/material";

const PrivacyPolicy = () => {
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
          Privacy Policy
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
          At Uttam Chai, we value your privacy and are committed to protecting
          your personal information. This policy explains how we collect, use,
          and safeguard your data.
        </Typography>

        {/* 1. Information We Collect */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Personal details such as name, address, phone number, and email when
          you place an order.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Payment information processed securely through our payment partners.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Non-personal data such as IP addresses, browser type, and usage
          patterns for website analytics.
        </Typography>

        {/* 2. How We Use Your Information */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          To process and deliver your orders.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          To communicate order updates, promotions, or offers (if you have opted
          in).
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          To improve our products, services, and website functionality.
        </Typography>

        {/* 3. Data Protection */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Data Protection
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We follow industry-standard security measures to protect your personal
          data.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We do not store your payment information on our servers.
        </Typography>

        {/* 4. Sharing of Information */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. Sharing of Information
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We do not sell, trade, or rent your personal information to third
          parties.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We may share information with trusted service providers (e.g., courier
          companies, payment gateways) solely for fulfilling your orders.
        </Typography>

        {/* 5. Cookies */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Cookies
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Our website uses cookies to enhance your browsing experience. You may
          choose to disable cookies in your browser settings, but this may limit
          site functionality.
        </Typography>

        {/* 6. Legal Compliance */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          6. Legal Compliance
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We may disclose your information if required by law or in response to
          legal requests.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
