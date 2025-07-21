import React from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Success = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fef5ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <CheckCircleIcon
          sx={{ fontSize: 80, color: theme.palette.success.main, mb: 2 }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#5f2312">
          Order Placed Successfully!
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Thank you for shopping with us. You’ll receive a confirmation email
          soon.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          href="/"
          sx={{
            backgroundColor: "#5f2312",
            borderRadius: 20,
            px: 4,
            py: 1,
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": { backgroundColor: "#4b1c0f" },
          }}
        >
          Continue Shopping
        </Button>
      </Container>
    </Box>
  );
};

export default Success;
