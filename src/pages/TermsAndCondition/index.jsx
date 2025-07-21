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
        <Typography variant="body1" color="text.secondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at laoreet vestibulum, sapien purus tincidunt lorem, et cursus
          nunc neque in augue.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Aenean sit amet justo ac lacus gravida iaculis. Proin facilisis, lacus
          in euismod commodo, metus libero rutrum orci, at viverra elit augue in
          nunc.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Integer ut diam vel lorem posuere gravida. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae.
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsAndCondition;
