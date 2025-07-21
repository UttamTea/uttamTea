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
        <Typography variant="body1" color="text.secondary" paragraph>
          This is placeholder text for the privacy policy. It will be updated
          with the final content later.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We are committed to protecting your privacy. This section will explain
          what data we collect and how we use it.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          All updates regarding data usage, cookies, and third-party services
          will be listed here in detail.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
